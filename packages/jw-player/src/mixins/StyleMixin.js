import { render } from 'lit';
import { cxlJWPlayerStyles } from "../lib/cxl-jwplayer-styles"

export function StyleMixin(BaseClass) {
  class Mixin extends BaseClass {
    async __setup() {
      await super.__setup();

      this.__setStyles();
    }

    __setStyles() {
      const style = document.createElement('style');
      render(cxlJWPlayerStyles, style);

      // this.appendChild(style);
      this.insertBefore(style, this.firstChild);
    }
  }

  return Mixin;
}
