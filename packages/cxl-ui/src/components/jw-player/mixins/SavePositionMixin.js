export function SavePositionMixin(BaseClass) {
  class Mixin extends BaseClass {
    __endpoint;

    __nonce;

    __userId;

    async __setup() {
      await super.__setup();

      this.__endpoint = `${window.ajaxurl}?action=jwplayer_save_position`;
      this.__nonce = window.cxl_pum_vars.nonce;

      this.__loadPosition();
    }

    async __loadPosition() {
      this.__jwPlayer.seek(Number(localStorage.getItem(`jw-player-${this.mediaId}-position`)));
      this.__jwPlayer.pause();
    }

    /**
     * The listener is registered in the base class (../index.js).
     */
    __onTimeListener(event) {
      super.__onTimeListener(event);

      this.__savePosition(event);
    }

    __savePosition({ position }) {
      localStorage.setItem(`jw-player-${this.mediaId}-position`, position);

      fetch(this.__endpoint, {
        _ajax_nonce: this.__nonce,
        body: JSON.stringify({ mediaId: this.mediaId, position }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    }
  }

  return Mixin;
}
