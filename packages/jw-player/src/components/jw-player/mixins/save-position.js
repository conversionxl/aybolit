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

    __onTimeListener({ position }) {
      super.__onTimeListener({ position });

      this.__savePosition(position);
    }

    __savePosition(position) {
      localStorage.setItem(`jw-player-${this.mediaId}-position`, position);
    }
  }

  return Mixin;
}
