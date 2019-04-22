import { InstituteLayoutElement } from '@conversionxl/cxl-core/src/index.js'; // eslint-disable-line import/no-extraneous-dependencies
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteLayoutStyles from '../styles/cxl-layout-institute-css.js';

export class CXLInstituteLayout extends InstituteLayoutElement {
  static get styles() {
    return [super.styles, cxlThemeStyles, cxlInstituteLayoutStyles];
  }
}

customElements.define('cxl-layout-institute', CXLInstituteLayout);
