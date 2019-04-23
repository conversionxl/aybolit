// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteContentStyles from '../styles/cxl-institute-content-css.js';

class CXLInstituteContentElement extends LitElement {
  static get properties() {
    return {
      hideSidebar: {
        type: Boolean,
        value: false,
        reflect: true
      },
      sidebarSize: {
        type: String,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.hideSidebar = false;
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteContentStyles];
  }

  render() {
    return html`
      <slot name="content-header"></slot>
      <!-- <cxl-scrollit> -->
      <div id="content" part="content" media-size="large">
        <slot></slot>
      </div>
      <!-- </cxl-scrollit> -->
    `;
  }

  firstUpdated() {
    const appLayoutSelector = document.querySelector('cxl-app-layout');
    if (appLayoutSelector.hasAttribute('sidebarsize')) {
      this.sidebarSize = appLayoutSelector.getAttribute('sidebarsize');
    }
  }
}

customElements.define('cxl-institute-content', CXLInstituteContentElement);
