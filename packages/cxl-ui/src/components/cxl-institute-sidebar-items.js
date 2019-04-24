// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteSidebarItemsStyles from '../styles/cxl-institute-sidebar-items-css.js';

class CXLInstituteSidebarItemsElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteSidebarItemsStyles];
  }

  render() {
    return html`
      <ul part="items">
        <slot></slot>
      </ul>
    `;
  }
}

customElements.define('cxl-institute-sidebar-items', CXLInstituteSidebarItemsElement);
