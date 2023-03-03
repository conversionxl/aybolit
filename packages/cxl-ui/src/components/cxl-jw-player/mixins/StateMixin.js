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
      const playbackRate = localStorage.getItem(`jw-player-playback-rate`);

      if (playbackRate) {
        this._jwPlayer.setPlaybackRate(Number(playbackRate));
      }

      this._jwPlayer.on('playbackRateChanged', ({ playbackRate }) => {
        localStorage.setItem(`jw-player-playback-rate`, playbackRate);
      });
    }

    _position() {
      const mediaId = this.mediaId || this._jwPlayer.getPlaylistItem().mediaId;

      const position = localStorage.getItem(`jw-player-${mediaId}-position`);

      if (position) {
        if (this.mediaId) {
          this._setPosition(position);
        } else {
          this._jwPlayer.on('playlistItem', () => {
            this._setPosition(position);
          });

          this._jwPlayer.playlistItem(this._jwPlayer.getPlaylistIndex());
        }
      }

      this._jwPlayer.on('seek time', ({ position }) => {
        localStorage.setItem(`jw-player-${mediaId}-position`, position);
      });
    }

    _setPosition(position) {
      this._jwPlayer.seek(Number(position));
      this._jwPlayer.pause();
    }
  }

  return Mixin;
}
