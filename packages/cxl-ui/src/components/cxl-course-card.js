/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@vaadin/details';
import '@vaadin/button';
import cxlCourseCardStyles from '../styles/cxl-course-card-css.js';

@customElement('cxl-course-card')
export class CXLCourseCardElement extends LitElement {
  static get styles() {
    return [cxlCourseCardStyles];
  }

  separator = html`<span> | </span>`;

  @state() _tagsHasChildren = false;

  @state() _moreHasChildren = false;

  @property({ type: String }) id = '';

  @property({ type: String }) theme = 'course';

  @property({ type: String }) name = '';

  @property({ type: String }) time = '';

  @property({ type: String }) instructor = '';

  @property({ type: String }) avatar = '';

  @property({ type: Boolean, reflect: true }) new = false;

  @property({ type: String, attribute: 'cta-label' }) ctaLabel = 'View';

  @property({ type: String, attribute: 'cta-url' }) ctaUrl = '';

  _slotHasChildren (e) {
    const slot = e.target
    const { name } = slot
    const children = slot.assignedNodes()
    this[`_${name}HasChildren`] = !!children.length
  }

  render() {
    return html`
      <div class="container">
        <header>
          <div class="info">
            <div class="tags">
              ${this.theme ? html`<span class="tag">${this.theme}</span>`: ''}
              ${this.theme && this._tagsHasChildren ? this.separator : ''}
              <slot name="tags" @slotchange=${this._slotHasChildren}></slot>
              ${this.new ? html`${this.theme ? this.separator : ''}<span class="tag new">NEW</span>` : '' }
            </div>
            <div class="name">
              ${this.name}
            </div>
            <div class="attributes">
              <div class="time">
                ${this.theme.toLowerCase() === 'course' ? html`<vaadin-icon icon="lumo:clock"></vaadin-icon>` : ''}
                ${this.time}
              </div>
              <div class="instructor">
                By: ${this.instructor}
              </div>
            </div>
          </div>
          <div class="instructor-image">
            <img
              src=${this.avatar}
              alt="${this.instructor}"
            />
          </div>
        </header>
        <div class="attributes">
          <div class="time">
            ${this.theme.toLowerCase() === 'course' ? html`<vaadin-icon icon="lumo:clock"></vaadin-icon>` : ''}
            ${this.time}
          </div>
          <div class="instructor">
            By: ${this.instructor}
          </div>
        </div>
        <section class="content-wrapper">
          <div class="content">
            <slot name="content"></slot>
          </div>
          <div class="tags" >
            <slot name="content-tags"></slot>
          </div>
        </section>
        <footer>
          <vaadin-details theme="reverse" ?empty=${!this._moreHasChildren}>
            <div slot="summary">Read more</div>
            <slot name="more" @slotchange=${this._slotHasChildren}></slot>
          </vaadin-details>
          <a href=${this.ctaUrl}>
            <vaadin-button class="cta" theme="tertiary" @click=${this.callToAction}>
              ${this.ctaLabel} ${this.theme}
              <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
            </vaadin-button>
          </a>
        </footer>
        <vaadin-icon class="badge-new" icon="cxl:new"></vaadin-icon>
      </div>
    `;
  }
}
