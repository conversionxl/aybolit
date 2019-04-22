import { MarketingLayoutElement } from '@conversionxl/cxl-core/src/index.js'; // eslint-disable-line import/no-extraneous-dependencies
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlMarketingLayoutStyles from '../styles/cxl-layout-marketing-css.js';

export class CXLMarketingLayout extends MarketingLayoutElement {
  static get styles() {
    return [super.styles, cxlThemeStyles, cxlMarketingLayoutStyles];
  }
}

customElements.define('cxl-layout-marketing', CXLMarketingLayout);
