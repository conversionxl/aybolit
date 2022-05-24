import { property } from 'lit/decorators.js';

export function BaseMixin(BaseClass) {
  class Mixin extends BaseClass {
    __boundOnTimeListener;
    __jwPlayer;
    __position;

    @property() mediaId;
    @property() playerId;
    @property() playlistId;

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

    async __getMedia() {
      return await (await fetch(`https://cdn.jwplayer.com/v2/media/${this.mediaId}`)).json();
    }

    async __getPlaylist() {
      return (
        this.playlistId &&
        (await (await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlistId}`)).json())
      );
    }

    async __loadScript() {
      return new Promise((resolve) => {
        const el = document.createElement('script');
        el.src = this.__scriptUrl;
        el.onload = () => {
          resolve(self['jwplayer']);
        };
        document.head.appendChild(el);
      });
    }

    async __onFirstFrame() {
      console.log("1");
    }

    /**
     * Each mixin has the ability to hook onto this method.
     */
    async __onTimeListener(e) {}

    __registerListeners() {
      this.__boundOnFirstFrame = this.__onFirstFrame.bind(this);
      this.__jwPlayer.on('firstFrame', this.__boundOnFirstFrame);
      this.__boundOnTimeListener = this.__onTimeListener.bind(this);
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

      this.__registerListeners();
    }
  }

  return Mixin;
}
