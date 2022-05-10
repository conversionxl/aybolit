export function SavePositionMixin(Base) {
  class Mixin extends Base {
    async __setup() {
      await super.__setup();

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
    }
  }

  return Mixin;
}
