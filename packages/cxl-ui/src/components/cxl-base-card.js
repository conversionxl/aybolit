/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@vaadin/details';
import '@vaadin/button';
import './cxl-time.js';
import cxlBaseCardStyles from '../styles/cxl-base-card-css.js';

export class CXLBaseCardElement extends LitElement {
  static get styles() {
    return [cxlBaseCardStyles];
  }

  separator = html`<span> | </span>`;

  @state() _tagsHasChildren = false;

  @property({ type: String }) id = '';

  @property({ type: String }) theme = '';

  @property({ type: String }) name = '';

  @property({ type: String }) time = '';

  @property({ type: String }) instructor = '';

  @property({ type: String }) avatar = '';

  @property({ type: Boolean }) showTags = true;

  @property({ type: Boolean, reflect: true }) new = false;

  _slotHasChildren(e) {
    const slot = e.target;
    const { name } = slot;
    const children = slot.assignedNodes();
    this[`_${name}HasChildren`] = !!children.length;
  }

  _renderHeaderTags() {
    return html`
      <div class="tags">
        ${this.theme ? html`<span class="tag">${this.theme}</span>` : ''}
        ${this.theme && this._tagsHasChildren ? this.separator : ''}
        <slot name="tags" @slotchange=${this._slotHasChildren}></slot>
        ${this.new ? html`${this.theme ? this.separator : ''}<span class="tag new">NEW</span>` : ''}
      </div>
    `;
  }

  _renderHeaderName() {
    return html` <div class="name">${this.name}</div> `;
  }

  _renderHeaderAttributes() {
    return html`
      <div class="attributes">
        <cxl-time
          time=${this.time}
          ?show-icon=${!!(this.theme.toLowerCase() === 'course')}
        ></cxl-time>
        <div class="instructor">By: ${this.instructor}</div>
      </div>
    `;
  }

  _renderAvatar() {
    return html` <img src=${this.avatar} alt="${this.instructor}" /> `;
  }

  /**
   * Renders the header of the component. Note that _renderHeaderAttributes is
   * called in two places, inside and after header, to accomodate to
   * responsiveness of the component on very narrow containers, handled in CSS
   * @return {string} The rendered header HTML.
   */
  _renderHeader() {
    return html`
      <header>
        <div class="info">
          ${this.showTags ? this._renderHeaderTags() : ''} ${this._renderHeaderName()}
          ${this._renderHeaderAttributes()}
        </div>
        <div class="instructor-image">${this._renderAvatar()}</div>
      </header>
      ${this._renderHeaderAttributes()}
    `;
  }
}
