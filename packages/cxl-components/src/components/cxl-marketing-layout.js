// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import marketingLayoutStyles from '../styles/cxl-marketing-layout-css.js';

// Import CXL Theme
import '@conversionxl/cxl-theme';

// Import vaadin and other 3rd party components
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-ordered-layout';

// Import CXL custom components
import './cxl-navbar';
import './cxl-banner-card';

// Extend the LitElement base class
class CXLMarketingLayout extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();

    const $template = document.createElement('template');

    $template.innerHTML = `
      <style>
        ${marketingLayoutStyles}
      </style>
    `;

    document.head.appendChild($template.content);
  }

  static get styles() {
    return css`
      // ...
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}

// Register the new element with the browser.
customElements.define('cxl-marketing-layout', CXLMarketingLayout);
