// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteContentHeaderStyles from '../styles/cxl-institute-content-header-css.js';

class CXLInstituteContentHeaderElement extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.hideSidebar = false;
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteContentHeaderStyles];
  }

  render() {
    return html`
      <div class="content-toggle">
        <a @click="${this._toggleContent}">
          <iron-icon class="size-m" icon="lumo:menu"></iron-icon>
        </a>
      </div>

      <div class="header-title">
        <h3><slot></slot></h3>
      </div>

      <div class="header-button">
        <slot name="header-button"></slot>
      </div>
    `;
  }

  _toggleContent() {
    this.hideSidebar = !this.hideSidebar;
    document.querySelector('cxl-institute-content').setAttribute('hidesidebar', this.hideSidebar);
  }
}

customElements.define('cxl-institute-content-header', CXLInstituteContentHeaderElement);
