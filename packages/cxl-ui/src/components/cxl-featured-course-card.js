/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import cxlFeaturedCourseCardStyles from '../styles/cxl-featured-course-card-css.js';
import { CXLCourseCardElement } from './cxl-course-card.js';

@customElement('cxl-featured-course-card')
export class CXLFeaturedCourseCardElement extends CXLCourseCardElement {
  static get styles() {
    return [...super.styles, cxlFeaturedCourseCardStyles];
  }

  @state() showTimeIcon = true;

  @property({ type: String, attribute: 'cta-label' }) ctaLabel = 'View course';

  @property({ type: String, attribute: 'cta-url' }) ctaUrl = '';

  _renderAvatar() {
    return html`
      <img class="avatar" src=${this.avatar} alt="${this.instructor}" />
      <svg class="swoosh" viewBox="0 0 360 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="var(--cxl-color-light-gray)"
          d="M1199.64 104.027C1113.56 105.678 1029.17 107.177 943.442 114.375C832.023 123.729 722.816 117.784 614.335 95.3047C457.633 62.838 336.264 14.1676 141.043 11.5174C-1.67221 9.57723 -248.398 6.15004 -458 0V199H1608C1555.37 176.893 1506.06 147.493 1450.34 130.627C1371.01 106.653 1284.33 102.401 1199.64 104.027Z"
        />
      </svg>
    `;
  }

  _renderCta() {
    return html`
      <a href=${this.ctaUrl}>
        <vaadin-button class="cta" theme="tertiary">
          ${this.ctaLabel}
          <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
        </vaadin-button>
      </a>
    `;
  }
}
