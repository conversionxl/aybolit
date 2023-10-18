/* eslint-disable import/no-extraneous-dependencies */
import { html, LitElement, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property, state } from 'lit/decorators.js';

import '@vaadin/progress-bar';

import cxlLightCardStyles from '../styles/cxl-light-card-css.js';

@customElement('cxl-light-card')
export class CXLLightCardElement extends LitElement {
  static get styles() {
    return [cxlLightCardStyles];
  }

  separator = html`<span> | </span>`;

  @state() _tagsHasChildren = false;

  @property({ type: String }) id = '';

  @property({ type: String }) theme = '';

  @property({ type: String }) name = '';

  @property({ type: String }) avatar = '';

  @property({ type: String }) time = '';

  @property({ type: String }) instructor = '';

  @property({ type: Number }) progress = 0;

  @property({ type: Number }) lessons = 0;

  @property({ type: Boolean, reflect: true }) new = false;

  @property({ type: Boolean, reflect: true }) portrait = false;

  @property({ type: Boolean, reflect: true }) completed = false;

  constructor() {
    super();
    this.showTimeIcon = true;
    this.showTags = false;
  }

  @property({ type: Boolean })
  get showTags() {
    return this.theme === 'minidegree';
  }

  set showTags(v) {
    this._showTags = !!v;
    this.requestUpdate('showTags', this._showTags);
  }

  _slotHasChildren(e) {
    const slot = e.target;
    const { name } = slot;
    const children = slot.assignedNodes();
    this[`_${name}HasChildren`] = !!children.length;
  }

  _renderNew() {
    return this.new ? html`<span class="badge-new">NEW</span>` : nothing;
  }

  _renderTags() {
    if (this.showTags) {
      return html`
        <div class="tags">
          ${this.theme ? html`<span class="tag">${this.theme}</span>` : ''}
          ${this.theme && this._tagsHasChildren ? this.separator : ''}
          <slot name="tags" @slotchange=${this._slotHasChildren}></slot>
        </div>
      `;
    }

    return nothing;
  }

  _renderName() {
    return html`
      <div class="name" title=${this.name}>
        ${unsafeHTML(this.name)}
        ${this.completed ? html`<vaadin-icon icon="lumo:checkmark"></vaadin-icon>` : nothing}
      </div>
    `;
  }

  _renderTime() {
    if ( this.time ) {
      return html`
        <cxl-time time=${this.time} ?show-icon=${this.showTimeIcon}></cxl-time>
      `;
    }

    return nothing;
  }

  _renderInfo() {
    return html`
      <div class="info">
        ${this._renderTags()}
        ${this._renderName()}
        ${this._renderTime()}
      </div>
    `;
  }

  _renderProgress() {
    if ( this.progress && this.lessons ) {
      return html`
        <div class="progress">
          <span class="progress-title">
            Completed ${this.progress} of ${this.lessons}
          </span>
          <vaadin-progress-bar value="${this.progress / this.lessons}">
            Completed ${this.progress} of ${this.lessons}
          </vaadin-progress-bar>
        </div>
      `;
    }

    return nothing;
  }

  _renderInstructor() {
    if ( this.instructor ) {
      return html`
          <div class="instructor">By: ${this.instructor}</div>
      `;
    }

    return nothing;
  }

  /**
   * Renders the header of the component.
   * @return {string} The rendered header HTML.
   */
  _renderHeader() {
    return html`
      <header>
        ${this._renderInfo()}
        ${this._renderProgress()}
        ${this._renderInstructor()}
      </header>
    `;
  }

  _renderAvatar() {
    return this.avatar ? html`<img class="avatar" src=${this.avatar} alt="${this.instructor}" />` : nothing;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderBadges() {
    return html`<slot name="badges"></slot>`;
  }

  render() {
    return html`
      ${this._renderNew()}
      ${this._renderHeader()}
      ${this._renderBadges()}
      ${this._renderAvatar()}
    `;
  }
}
