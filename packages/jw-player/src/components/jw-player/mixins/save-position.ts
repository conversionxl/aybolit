import { JWPlayerElement } from '../index';

type Constructor<T = {}> = new (...args: any[]) => T;
type Mixable = Constructor<JWPlayerElement>;

export function SavePositionMixin<TBase extends Mixable>(Base: TBase) {
  class Mixin extends Base {
    public firstUpdated(_changedProperties: Map<string | number | symbol, unknown>): void {
      super.firstUpdated(_changedProperties);

      this.__setupSavePosition();
    }

    async __setupSavePosition() {
      await this.__ready;

      this.__loadPosition();
    }

    __onTimeListener({ position }: { position: any }): void {
      super.__onTimeListener({ position });
      
      this.__savePosition(position);
    }

    private async __loadPosition() {
      const position = Number(localStorage.getItem(`jw-player-${this.mediaId}-position`));

      this.__jwPlayer.seek(position);
    }

    private __savePosition(position) {
      console.log('Saving position', position);
      localStorage.setItem(`jw-player-${this.mediaId}-position`, position);
    }
  }

  return Mixin;
}
