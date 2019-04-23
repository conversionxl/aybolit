// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import cardCourseStyles from '../styles/cxl-course-card-css.js';

// Extend the LitElement base class
class CXLCourseCard extends LitElement {
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
    return cardCourseStyles;
  }

  render() {
    return html`
      <figure>
        <slot name="course-image"></slot>
      </figure>
      <header class="entry__header">
        <slot name="course-title"></slot>
        <slot name="course-instructor"></slot>
      </header>
      <div class="entry__content">
        <slot name="course-description"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="course-duration"></slot>
        <slot name="course-type"></slot>
        <slot name="course-category"></slot>
      </footer>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

// Register the new element with the browser.
customElements.define('cxl-course-card', CXLCourseCard);
