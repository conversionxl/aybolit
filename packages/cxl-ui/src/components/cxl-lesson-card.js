// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardLessonStyles from '../styles/cxl-lesson-card-css.js';

// Extend the LitElement base class
class CXLLessonCard extends LitElement {
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
    return cardLessonStyles;
  }

  render() {
    return html`
      <figure>
        <slot name="lesson-image"></slot>
      </figure>
      <header class="entry__header">
        <slot name="lesson-highlighted-title"></slot>
        <slot name="lesson-title"></slot>
        <div class="entry__byline">
          <slot name="type"></slot>
          <slot name="lesson-length"></slot>
          <slot name="lesson-instructor"></slot>
        </div>
      </header>
      <div class="entry__content">
        <slot name="lesson-description"></slot>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

// Register the new element with the browser.
customElements.define('cxl-lesson-card', CXLLessonCard);
