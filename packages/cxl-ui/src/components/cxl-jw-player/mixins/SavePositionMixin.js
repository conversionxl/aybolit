export function SavePositionMixin(BaseClass) {
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

      this._loadPosition();
    }

    async _loadPosition() {
      this._jwPlayer.seek(Number(localStorage.getItem(`jw-player-${this.mediaId}-position`)));
      this._jwPlayer.pause();
    }

    /**
     * The listener is registered in the base class (../index.js).
     */
    _onTimeListener(event) {
      super._onTimeListener(event);

      this._savePosition(event);
    }

    _savePosition({ position }) {
      localStorage.setItem(`jw-player-${this.mediaId}-position`, position);
    }
  }

  return Mixin;
}
