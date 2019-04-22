import { NavbarElement } from '@conversionxl/cxl-core'; // eslint-disable-line import/no-extraneous-dependencies
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlNavbarStyles from '../styles/cxl-navbar-css.js';

export class CXLNavbar extends NavbarElement {
  static get styles() {
    return [super.styles, cxlThemeStyles, cxlNavbarStyles];
  }
}

customElements.define('cxl-navbar', CXLNavbar);
