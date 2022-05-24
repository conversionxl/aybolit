import { render } from 'lit';
import { cxlJWPlayerStyles } from '../styles/cxl-jwplayer-styles';

export function StyleMixin(BaseClass) {
  class Mixin extends BaseClass {
    async __setup() {
      await super.__setup();

      this.__setStyles();
    }

    __setStyles() {
      console.log('2');
      const style = document.createElement('style');
      render(cxlJWPlayerStyles, style);

      this.appendChild(style);
    }
  }

  return Mixin;
}
