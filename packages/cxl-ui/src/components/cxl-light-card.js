/* eslint-disable import/no-extraneous-dependencies */
import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/progress-bar';
import cxlLightCardStyles from '../styles/cxl-light-card-css.js';

import { CXLBaseCardElement } from './cxl-base-card.js';

@customElement('cxl-light-card')
export class CXLLightCardElement extends CXLBaseCardElement {
  static get styles() {
    return [...super.styles, cxlLightCardStyles];
  }

  @property({ type: Boolean }) showProgress = false;

  @property({ type: Number, attribute: 'progress-completed' }) progressCompleted = 0;

  @property({ type: Number, attribute: 'progress-total' }) progressTotal = 0;

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

  _renderNewBadge() {
    return this.new ? html`<span class="badge-new">NEW</span>` : nothing;
  }

  _renderHeaderName() {
    return html`
      <h3 class="name" title=${this.name}>
          ${unsafeHTML(this.name)}${
      this.completed ? html`<vaadin-icon icon="lumo:checkmark"></vaadin-icon>` : nothing
    }
      </h3>
    `;
  }

  _renderProgress() {
    if ( this.showProgress || ( this.progressCompleted && this.progressTotal ) ) {
      return html`
        <div class="progress">
          <span class="progress-title">
            Completed ${this.progressCompleted} of ${this.progressTotal}
          </span>
          <vaadin-progress-bar
            value="${this.progressCompleted / this.progressTotal}"
          >
            Completed ${this.progressCompleted} of ${this.progressTotal}
          </vaadin-progress-bar>
        </div>
      `;
    }

    return nothing;
  }

  render() {
    return html`
      <div class="container">
        ${this._renderHeader()}
        ${this._renderProgress()}
        <slot name="footer"></slot>
        ${this._renderNewBadge()}
      </div>
    `;
  }
}
