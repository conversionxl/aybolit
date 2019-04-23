// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlMarketingLayoutStyles from '../styles/cxl-marketing-layout-css.js';

class CXLMarketingLayoutElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlMarketingLayoutStyles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('cxl-layout-marketing', CXLMarketingLayoutElement);
