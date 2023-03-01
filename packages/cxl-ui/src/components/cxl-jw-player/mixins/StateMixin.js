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
      const position = localStorage.getItem(`jw-player-${this.mediaId}-position`);

      if (position) {
        this._jwPlayer.seek(Number(position));
        this._jwPlayer.pause();
      }

      this._jwPlayer.on('time', ({ position }) => {
        localStorage.setItem(`jw-player-${this.mediaId}-position`, position);
      });
    }
  }

  return Mixin;
}
