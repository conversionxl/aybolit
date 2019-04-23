// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardTestimonialStyles from '../styles/cxl-testimonial-card-css.js';

// Extend the LitElement base class
class CXLTestimonialCard extends LitElement {
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
    return cardTestimonialStyles;
  }

  render() {
    return html`
      <header class="entry__header">
        <slot name="testimonial-customer-image"></slot>
        <slot name="testimonial-company-image"></slot>
      </header>
      <div class="entry__content">
        <slot name="testimonial-content"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="testimonial-customer-name"></slot>
        <slot name="testimonial-customer-company"></slot>
      </footer>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

// Register the new element with the browser.
customElements.define('cxl-testimonial-card', CXLTestimonialCard);
