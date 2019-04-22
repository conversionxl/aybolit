import { MarketingLayoutElement } from '@conversionxl/cxl-core'; // eslint-disable-line import/no-extraneous-dependencies
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlMarketingLayoutStyles from '../styles/cxl-marketing-layout-css.js';

export class CXLMarketingLayout extends MarketingLayoutElement {
  static get styles() {
    return [super.styles, cxlThemeStyles, cxlMarketingLayoutStyles];
  }
}

customElements.define('cxl-marketing-layout', CXLMarketingLayout);
