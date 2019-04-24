// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteSidebarItemStyles from '../styles/cxl-institute-sidebar-item-css.js';

class CXLInstituteSidebarItemElement extends LitElement {
  static get properties() {
    return {
      trackValue: {
        type: String,
        attribute: 'track-value'
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteSidebarItemStyles];
  }

  render() {
    return html`
      <li part="item">
        <slot></slot>
        <span part="track-time">${this.trackValue}</span>
      </li>
    `;
  }
}

customElements.define('cxl-institute-sidebar-item', CXLInstituteSidebarItemElement);
