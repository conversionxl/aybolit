import { property } from 'lit/decorators.js';
import { throttle } from 'lodash-es';
import { parseSync } from 'subtitle';
import jwt from 'jsonwebtoken';

export function BaseMixin(BaseClass) {
  class Mixin extends BaseClass {
    __boundOnTimeListener;

    __chapters;

    __jwPlayer;

    __jwPlayerContainer;

    __position;

    @property({ attribute: 'api-secret', type: String }) apiSecret = 'test';

    @property({ attribute: 'media-id', type: String }) mediaId;

    @property({ attribute: 'player-id', type: String }) playerId;

    @property({ attribute: 'playlist-id', type: String }) playlistId;

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
      return `https://content.jwplatform.com/libraries/${this.playerId}.js`;
    }

    __generateURL(path) {
      const token = jwt.sign(
        {
          exp: Math.ceil((new Date().getTime() + 3600) / 300) * 300,
          resource: path,
        },
        this.apiSecret
      );

      return `https://cdn.jwplayer.com${path}?token=${token}`;
    }

    async __getChapters() {
      const playlistItem = this.__jwPlayer.getPlaylistItem();
      const { file } = playlistItem.tracks.filter((track) => track.kind === 'chapters')[0];
      const response = await (await fetch(file)).text();

      return parseSync(response);
    }

    async __getMedia() {
      if (!this.mediaId) return false;

      const response = await fetch(this.__generateURL(`/v2/media/${this.mediaId}`));
      const result = await response.json();

      return result;
    }

    async __getPlaylist() {
      if (!this.playlistId) return false;

      const response = await fetch(this.__generateURL(`/v2/playlists/${this.playlistId}`));
      const result = await response.json();

      return result;
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
