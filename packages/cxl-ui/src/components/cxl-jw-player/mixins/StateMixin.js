export function StateMixin(BaseClass) {
  class Mixin extends BaseClass {
    _endpoint;

    _nonce;

    _userId;

    async _index() {
      if (this._playlistId) {
        const index =
          localStorage.getItem(`cxl-jw-player-${this._playlistId}-index`) ||
          this._jwPlayer.getPlaylistIndex();

        this._jwPlayer.playlistItem(index);

        this._jwPlayer.on('playlistItem', async ({ index }) => {
          localStorage.setItem(`cxl-jw-player-${this._playlistId}-index`, index);
        });
      }
    }

    async _onReadyListener() {
      await this._index();
      this._position();
      this._playbackRate();
    }

    async _setup() {
      await super._setup();

      this._endpoint = `${window.ajaxurl}?action=jwplayer_save_position`;

      if (typeof window.cxl_pum_vars !== 'undefined') {
        this._nonce = window.cxl_pum_vars.nonce;
      }
    }

    _playbackRate() {
      const playbackRate = localStorage.getItem(`cxl-jw-player-playback-rate`);

      if (playbackRate) {
        this._jwPlayer.setPlaybackRate(Number(playbackRate));
      }

      this._jwPlayer.on('playbackRateChanged', ({ playbackRate }) => {
        localStorage.setItem(`cxl-jw-player-playback-rate`, playbackRate);
      });
    }

    _position() {
      if (this._mediaId) {
        this._setPosition();
      }

      if (this._playlistId) {
        this._jwPlayer.on('playlistItem', async ({ index }) => {
          await this._jwPlayer.getPlaylistItemPromise(index);
          this._setPosition();
        });
      }

      this._jwPlayer.on('seek time', ({ position }) => {
        const mediaId = this._mediaId || this._jwPlayer.getPlaylistItem().mediaid;
        localStorage.setItem(`cxl-jw-player-${mediaId}-position`, position);
      });
    }

    _setPosition() {
      const mediaId = this._mediaId || this._jwPlayer.getPlaylistItem().mediaid;
      const position = localStorage.getItem(`cxl-jw-player-${mediaId}-position`);

      this._jwPlayer.on('firstFrame', () => {
        this._jwPlayer.seek(Number(position));
      });
    }
  }

  return Mixin;
}
