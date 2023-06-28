/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import cxlFeaturedCourseCardStyles from '../styles/cxl-featured-course-card-css.js';

@customElement('cxl-featured-course-card')
export class CXLCourseCardElement extends LitElement {
  static get styles() {
    return [cxlFeaturedCourseCardStyles];
  }

  separator = html`<span> | </span>`;

  @property({ type: String }) id = '';

  @property({ type: String }) theme = 'Featured course';

  @property({ type: String }) title = '';

  @property({ type: String }) time = '';

  @property({ type: String }) instructor = '';

  @property({ type: String }) avatar = '';

  @property({ type: Boolean, reflect: true }) new = false;

  @property({ type: String, attribute: 'cta-label' }) ctaLabel = 'View course';

  @property({ type: String, attribute: 'cta-url' }) ctaUrl = '';

  _slotHasChildren(e) {
    const slot = e.target;
    const { name } = slot;
    const children = slot.assignedNodes();
    this[`_${name}HasChildren`] = !!children.length;
  }

  render() {
    return html`
      <div class="container">
        <img class="instructor-img" src=${this.avatar} alt="${this.instructor}" />
        <div class="info">
          <svg class="swoosh" viewBox="0 0 360 199" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="var(--cxl-color-light-gray)"
              d="M1199.64 104.027C1113.56 105.678 1029.17 107.177 943.442 114.375C832.023 123.729 722.816 117.784 614.335 95.3047C457.633 62.838 336.264 14.1676 141.043 11.5174C-1.67221 9.57723 -248.398 6.15004 -458 0V199H1608C1555.37 176.893 1506.06 147.493 1450.34 130.627C1371.01 106.653 1284.33 102.401 1199.64 104.027Z"
            />
          </svg>
          <div class="tags">
            <span>${this.theme}</span>
            ${this.separator}
            <slot name="tags" @slotchange=${this._slotHasChildren}></slot>
          </div>
          <h4 class="title">${unsafeHTML(this.title)}</h4>
          <div class="attributes">
            <span class="time"><vaadin-icon icon="lumo:clock"></vaadin-icon>${this.time}</span>
            <span class="instructor">By: ${this.instructor}</span>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
          <a class="cta" href="${this.ctaUrl}"
            >${this.ctaLabel}<vaadin-icon icon="lumo:angle-right"></vaadin-icon
          ></a>
        </div>
      </div>
    `;
  }
}
