// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlInstituteLayoutStyles from '../styles/cxl-institute-layout-css.js';

class CXLInstituteLayoutElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [cxlThemeStyles, cxlInstituteLayoutStyles];
  }

  render() {
    return html`
      <!-- Visible on mobile -->
      <div id="header" part="header">
        <a href="/" class="logo">
          <span class="cxl">C<span>XL</span></span>
        </a>
        <h3>Something something</h3>
      </div>

      <!-- Visible on mobile -->
      <vaadin-tabs id="tabs" part="tabs" theme="equal-width-tabs" selected="1">
        <vaadin-tab @click="${() => this.changeTab('sidebar')}">Menu</vaadin-tab>
        <vaadin-tab @click="${() => this.changeTab('content')}">Something here</vaadin-tab>
      </vaadin-tabs>

      <div id="sidebar" part="sidebar">
        <div class="sidebar-header">
          <slot name="sidebar-header"></slot>
        </div>

        <slot name="sidebar-content"></slot>
      </div>

      <div id="content" part="content" page-visible>
        <slot name="content"></slot>
      </div>
    `;
  }

  firstUpdated() {
    this.changeTab('content');
  }

  changeTab(tab) {
    this.shadowRoot.querySelector('[page-visible]').removeAttribute('page-visible');
    this.shadowRoot.getElementById(tab).setAttribute('page-visible', '');
  }
}

customElements.define('cxl-layout-institute', CXLInstituteLayoutElement);
