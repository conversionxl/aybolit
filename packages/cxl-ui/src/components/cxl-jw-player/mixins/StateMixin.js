export function StateMixin(BaseClass) {
  class Mixin extends BaseClass {
    _endpoint;

    _nonce;

    _userId;

    async _setup() {
      await super._setup();

      this._endpoint = `${window.ajaxurl}?action=jwplayer_save_position`;

      if (typeof window.cxl_pum_vars !== 'undefined') {
        this._nonce = window.cxl_pum_vars.nonce;
      }

      this._playbackRate();
      this._position();
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
      const mediaId = this.mediaId || this._jwPlayer.getPlaylistItem().mediaId;

      const position = localStorage.getItem(`cxl-jw-player-${mediaId}-position`);

      if (position) {
        if (this.mediaId) {
          this._setPosition(position);
        } else {
          this._jwPlayer.on('playlistItem', ({ index }) => {
            localStorage.setItem(`cxl-jw-player-${this.playlistId}-index`, index);

            // Wait for the player to load the new playlist item
            setTimeout(() => {
              this._setPosition(position);
            }, 1000);
          });

          const index =
            localStorage.getItem(`cxl-jw-player-${this.playlistId}-index`) ||
            this._jwPlayer.getPlaylistIndex();

          this._jwPlayer.playlistItem(index);
        }
      }

      this._jwPlayer.on('seek time', ({ position }) => {
        localStorage.setItem(`cxl-jw-player-${mediaId}-position`, position);
      });
    }

    _setPosition(position) {
      this._jwPlayer.seek(Number(position));
      this._jwPlayer.pause();
    }
  }

  return Mixin;
}
