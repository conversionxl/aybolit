// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardBannerStyles from '../styles/cxl-banner-card-css.js';

// Extend the LitElement base class
class CXLBannerCard extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();

    // If clicked adds/removes "selected" attribute
    this.addEventListener('click', () => {
      if (this.selected === !this.selected) this.setAttribute('selected', 'selected');
      else this.removeAttribute('selected');
    });
  }

  static get styles() {
    return cardBannerStyles;
  }

  render() {
    return html`
      <header class="entry__header">
        <slot name="banner-image"></slot>
        <slot name="banner-title"></slot>
      </header>
      <div class="entry__content">
        <slot name="banner-description"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="banner-link"></slot>
      </footer>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

// Register the new element with the browser.
customElements.define('cxl-banner-card', CXLBannerCard);
