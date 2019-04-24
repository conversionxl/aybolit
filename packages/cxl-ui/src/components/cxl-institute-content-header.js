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
      <div class="header-wrapper">
        <div class="content-toggle">
          <a @click="${this._toggleContent}"
            ><svg
              class="interface-icon o__standard"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12h11a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0-5h9a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0-5h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2z"
              ></path></svg
          ></a>
        </div>

        <div class="header-title">
          <h3><slot></slot></h3>
        </div>

        <div class="header-button"><slot name="header-button"></slot></div>
      </div>
      <div class="vertical-line"></div>
    `;
  }

  _toggleContent() {
    // Eventer.DISPATCH.TOGGLE_SIDEBAR({});
  }
}

customElements.define('cxl-institute-content-header', CXLInstituteContentHeaderElement);
