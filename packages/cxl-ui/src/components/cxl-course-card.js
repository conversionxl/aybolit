/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@vaadin/details';
import '@vaadin/button';
import cxlCourseCardStyles from '../styles/cxl-course-card-css.js';
import { CXLBaseCardElement } from './cxl-base-card.js';

@customElement('cxl-course-card')
export class CXLCourseCardElement extends CXLBaseCardElement {
  static get styles() {
    return [...super.styles, cxlCourseCardStyles];
  }

  @state() _moreHasChildren = false;

  @property({ type: String, attribute: 'cta-label' }) ctaLabel = 'View';

  @property({ type: String, attribute: 'cta-url' }) ctaUrl = '';

  _slotHasChildren(e) {
    const slot = e.target;
    const { name } = slot;
    const children = slot.assignedNodes();
    this[`_${name}HasChildren`] = !!children.length;
  }

  _renderCta() {
    return html`
      <a href=${this.ctaUrl}>
        <vaadin-button class="cta" theme="tertiary">
          ${this.ctaLabel} ${this.theme}
          <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
        </vaadin-button>
      </a>
    `;
  }

  render() {
    return html`
      <div class="container">
        ${this._renderHeader()}
        <section class="content-wrapper">
          <div class="content">
            <slot name="content"></slot>
          </div>
        </section>
        <footer>
          <vaadin-details theme="reverse" ?empty=${!this._moreHasChildren}>
            <div slot="summary">Read more</div>
            <slot name="more" @slotchange=${this._slotHasChildren}></slot>
          </vaadin-details>
          ${this._renderCta()}
        </footer>
        <vaadin-icon class="badge-new" icon="cxl:new"></vaadin-icon>
      </div>
    `;
  }
}
