/* eslint-disable import/no-extraneous-dependencies */
import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property, state } from 'lit/decorators.js';
import '@vaadin/details';
import '@vaadin/button';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlCourseCardGlobalStyles from '../styles/global/cxl-course-card-css.js';
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

  _renderHeaderName() {
    return html`<h3 class="name" part="name" title=${this.name}>
      <a href=${this.ctaUrl}>${unsafeHTML(this.name)}</a>
      ${this.completed ? html`<vaadin-icon icon="lumo:checkmark"></vaadin-icon>` : nothing}
    </h3>`;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlCourseCardGlobalStyles, {
      moduleId: 'cxl-course-card-global',
    });
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
          <vaadin-button
            class="cta"
            theme="tertiary"
            @click=${(e) => {
              e.stopImmediatePropagation();
              this._goToLink(this.ctaUrl);
            }}
          >
            ${this.ctaLabel} ${this.theme}
            <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
          </vaadin-button>
        </footer>
      </div>
    `;
  }
}
