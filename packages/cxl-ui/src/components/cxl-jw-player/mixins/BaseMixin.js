import { render } from 'lit';
import { property } from 'lit/decorators.js';
import { throttle } from 'lodash-es';
import { parseSync } from 'subtitle';

export function BaseMixin(BaseClass) {
  class Mixin extends BaseClass {
    __boundOnTimeListener;

    __chapters;

    __jwPlayer;

    __jwPlayerContainer;

    __position;

    @property({ attribute: 'media-id', type: String }) mediaId;

    @property({ attribute: 'media-source', type: String }) mediaSource;

    @property({ attribute: 'is-public', type: String }) isPublic;

    @property({ attribute: 'library-id', type: String }) libraryId;

    @property({ attribute: 'library-source', type: String }) librarySource;

    @property({ attribute: 'playlist-id', type: String }) playlistId;

    @property({ attribute: 'playlist-source', type: String }) playlistSource;

    firstUpdated(_changedProperties) {
      super.firstUpdated(_changedProperties);

      this.__setup();
    }

    updated(_changedProperties) {
      super.updated(_changedProperties);
      if (_changedProperties.has('captions') || _changedProperties.has('mediaId')) {
        // this.__setup();
      }
    }

    get __scriptUrl() {
      let scriptUrl;

      if (this.libraryId && this.isPublic) {
        scriptUrl = `https://content.jwplatform.com/libraries/${this.libraryId}.js`;
      } else if (this.librarySource) {
        scriptUrl = this.librarySource;
      } else {
        return false;
      }

      return scriptUrl;
    }

    __addStyle(style) {
      const el = document.createElement('style');
      render(style, el);
      this.appendChild(el);
    }

    async __getChapters() {
      const playlistItem = this.__jwPlayer.getPlaylistItem();
      const chapters = playlistItem.tracks.filter((track) => track.kind === 'chapters');
      const { file } = chapters.length > 0 ? chapters[0] : '';
      const response = await (await fetch(file)).text();

      return parseSync(response);
    }

    async __getMedia() {
      let response;

      if (this.mediaId && this.isPublic) {
        response = await fetch(`https://cdn.jwplayer.com/v2/media/${this.mediaId}`);
      } else if (this.mediaSource) {
        response = await fetch(this.mediaSource);
      } else {
        return false;
      }

      return response.json();
    }

    async __getPlaylist() {
      let response;

      if (this.playlistId) {
        response = await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlistId}`);
      } else if (this.playlistSource) {
        response = await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlistId}`);
      } else {
        return false;
      }

      return response.json();
    }

    async __loadScript() {
      return new Promise((resolve) => {
        const el = document.createElement('script');
        el.src = this.__scriptUrl;
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
    async __onTimeListener(event) {}

    __registerListeners() {
      this.__boundOnTimeListener = throttle(this.__onTimeListener.bind(this), 1000);
      this.__jwPlayer.on('time', this.__boundOnTimeListener);
    }

    /**
     * Each mixin has the ability to hook onto this method.
     */
    async __setup() {

      // Merge configs from `cxlJWPlayerData`.
      if (typeof window.cxlJWPlayerData !== 'undefined') {
        // eslint-disable-next-line camelcase
        const { media_config } = window.cxlJWPlayerData[this.mediaId];
        // eslint-disable-next-line camelcase
        this.config = { ...this.config, ...media_config };
      }

      const jwPlayer = await this.__loadScript();

      const el = document.createElement('div');
      this.appendChild(el);

      this.__jwPlayer = jwPlayer(el).setup({
        ...this.config,
        ...(await this.__getMedia()),
        ...(await this.__getPlaylist()),
      });

      await new Promise((resolve) => {
        this.__jwPlayer.on('ready', resolve);
      });

      this.__jwPlayerContainer = this.__jwPlayer.getContainer();

      this.__registerListeners();

      this.__chapters = await this.__getChapters();
    }
  }

  return Mixin;
}
