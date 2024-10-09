import * as jose from 'jose';
import { render } from 'lit';
import { property } from 'lit/decorators.js';
import { throttle } from 'lodash-es';
import { parseSync } from 'subtitle';
import { MD5 } from 'crypto-js';
import { MediaQueryController } from '@vaadin/component-base/src/media-query-controller.js';

export function BaseMixin(BaseClass) {
  class Mixin extends BaseClass {
    _baseUrl = 'https://cdn.jwplayer.com/';

    _boundOnTimeListener;

    _chapters;

    _jwPlayer;

    _jwPlayerContainer;

    _mediaId

    _playlistId;

    // Device Detector media query.
    _wideMediaQuery = '(min-width: 750px)';

    @property({ attribute: 'api-secret', type: String }) apiSecret = '';

    @property({ attribute: 'error', reflect: true, type: Boolean }) error;

    @property({ attribute: 'is-public', type: Boolean }) isPublic;

    @property({ attribute: 'library-id', type: String }) libraryId;

    @property({ attribute: 'library-source', type: String }) librarySource;

    @property({ attribute: 'media-id', type: String }) mediaId;

    @property({ attribute: 'media-source', type: String }) mediaSource;

    @property({ attribute: 'playlist-id', type: String }) playlistId;

    @property({ attribute: 'playlist-source', type: String }) playlistSource;

    @property({ type: Boolean }) ready;

    // MediaQueryController.
    @property({ type: Boolean, reflect: true })
    wide;

    constructor() {
      super();

      this.addController(
        new MediaQueryController(this._wideMediaQuery, (matches) => {
          this.wide = matches;
        })
      );
    }

    async firstUpdated(_changedProperties) {
      await super.firstUpdated(_changedProperties);

      await this._beforeSetup();
      this._setup();
    }

    updated(_changedProperties) {
      super.updated(_changedProperties);
      if (_changedProperties.has('captions') || _changedProperties.has('mediaId')) {
        // this._setup();
      }
    }

    get _scriptUrl() {
      if (!this.libraryId && !this.librarySource) return false;

      let scriptUrl;

      if (this.libraryId) {
        if (this.isPublic) {
          scriptUrl = `${this._baseUrl}libraries/${this.libraryId}.js`;
        } else {
          scriptUrl = this.__signedURL(`libraries/${this.libraryId}.js`);
        }
      }

      if (this.librarySource) {
        scriptUrl = this.librarySource;
      }

      return scriptUrl;
    }

    _addStyle(style) {
      const el = document.createElement('style');
      render(style, el);
      this.appendChild(el);
    }

    // eslint-disable-next-line class-methods-use-this, no-empty-function
    _beforeSetup() {
      if(this.mediaId) {
        this._mediaId = this.mediaId;
      }

      if(this.mediaSource) {
        const url = new URL(this.mediaSource);
        this._mediaId = url.pathname.split('/').pop();
      }

      if(this.playlistId) {
        this._playlistId = this.playlistId;
      }

      if(this.playlistSource) {
        const url = new URL(this.playlistSource);
        this._playlistId = url.pathname.split('/').pop();
      }
    }

    async _getChapters() {
      const playlistItem = this._jwPlayer.getPlaylistItem();
      const chapters = playlistItem.tracks.filter((track) => track.kind === 'chapters');

      if (chapters.length === 0) {
        return [];
      }

      const { file } = chapters.length > 0 ? chapters[0] : '';
      const response = await (await fetch(file)).text();

      let result = [];

      try {
        result = parseSync(response);
      } catch (e) {
        console.error(e);
      }

      return result;
    }

    async _getMedia() {
      if (!this.mediaId && !this.mediaSource) return false;

      let response;

      if (this.mediaId) {
        if (this.isPublic) {
          response = await fetch(`${this._baseUrl}v2/media/${this.mediaId}`);
        } else {
          response = await fetch(await this._signedJWTURL(`v2/media/${this.mediaId}`));
        }
      }

      if (this.mediaSource) {
        response = await fetch(this.mediaSource);
      }

      return response.json();
    }

    async _getPlaylist() {
      if (!this.playlistId && !this.playlistSource) return false;

      let response;

      if (this.playlistId) {
        if (this.isPublic) {
          response = await fetch(`${this._baseUrl}v2/playlists/${this.playlistId}`);
        } else {
          response = await fetch(await this._signedJWTURL(`v2/playlists/${this.playlistId}`));
        }
      }

      if (this.playlistSource) {
        response = await fetch(this.playlistSource);
      }

      return response.json();
    }

    async _loadScript() {
      return new Promise(async (resolve) => {
        const el = document.createElement('script');
        el.src = this._scriptUrl;
        el.onload = () => {
          resolve(self.jwplayer);
        };
        document.head.appendChild(el);
      });
    }

    /**
     * Each mixin has the ability to hook onto this method.
     */

    // eslint-disable-next-line class-methods-use-this, no-unused-vars, no-empty-function
    async _onReadyListener() {
      this.ready = true;
    }

    // eslint-disable-next-line class-methods-use-this, no-unused-vars, no-empty-function
    async _onTimeListener(event) {}

    _registerListeners() {
      this._boundOnTimeListener = throttle(this._onTimeListener.bind(this), 1000);
      this._jwPlayer.on('time', this._boundOnTimeListener);
    }

    /**
     * Each mixin has the ability to hook onto this method.
     */
    async _setup() {
      // Merge configs from `cxlJWPlayerData`.
      if (typeof window.cxlJWPlayerData !== 'undefined') {
        // eslint-disable-next-line camelcase
        const { media_config } = window.cxlJWPlayerData[this.mediaId];
        // eslint-disable-next-line camelcase
        this.config = { ...this.config, ...media_config };
      }

      const jwPlayer = await this._loadScript();

      const el = document.createElement('div');
      this.appendChild(el);

      this._jwPlayer = jwPlayer(el).setup({
        ...this.config,
        ...(await this._getMedia()),
        ...(await this._getPlaylist()),
      });

      this._jwPlayer.on('setupError', () => {
        this.error = true;
      });

      await new Promise((resolve) => {
        this._jwPlayer.on('ready', async () => {
          await this._onReadyListener();

          resolve();
        });
      });

      this._jwPlayerContainer = this._jwPlayer.getContainer();

      this._registerListeners();

      this._chapters = await this._getChapters();
    }

    async _signedJWTURL(path) {
      const secret = new TextEncoder().encode(this.apiSecret);
      const alg = 'HS256';
      const typ = 'JWT';

      const token = await new jose.SignJWT({ resource: path })
        .setProtectedHeader({ alg, typ })
        .setExpirationTime('2h')
        .sign(secret);

      return `${this._baseUrl}${path}?token=${token}`;
    }

    __signedURL(path) {
      const expires = Math.ceil((new Date().getTime() + 3600) / 300) * 300;
      const signature = MD5(`${path}:${expires}:${this.apiSecret}`);

      return `${this._baseUrl}${path}?exp=${expires}&sig=${signature}`;
    }
  }

  return Mixin;
}
