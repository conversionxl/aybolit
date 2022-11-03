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

    @property({ attribute: 'player-id', type: String }) playerId;

    @property({ attribute: 'player-source', type: String }) playerSource;

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

      if (this.playerId) {
        scriptUrl = `https://content.jwplatform.com/libraries/${this.playerId}.js`;
      } else if (this.playerSource) {
        scriptUrl = this.playerSource;
      } else {
        return false;
      }

      return scriptUrl;
    }

    async __getChapters() {
      const playlistItem = this.__jwPlayer.getPlaylistItem();
      const { file } = playlistItem.tracks.filter((track) => track.kind === 'chapters')[0];
      const response = await (await fetch(file)).text();

      return parseSync(response);
    }

    async __getMedia() {
      let response;

      if (this.mediaId) {
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
