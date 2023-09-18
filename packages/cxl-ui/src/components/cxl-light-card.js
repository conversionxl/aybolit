/* eslint-disable import/no-extraneous-dependencies */
import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import cxlLightCardStyles from '../styles/cxl-light-card-css.js';
import { CXLBaseCardElement } from './cxl-base-card.js';

@customElement('cxl-light-card')
export class CXLLightCardElement extends CXLBaseCardElement {
  static get styles() {
    return [...super.styles, cxlLightCardStyles];
  }

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

  _renderHeaderName() {
    return html`
      <div class="name" title=${this.name}>
          ${unsafeHTML(this.name)}${
      this.completed ? html`<vaadin-icon icon="lumo:checkmark"></vaadin-icon>` : nothing
    }
      </div>
    `;
  }

  render() {
    return html`
      <div class="container">
        ${this._renderHeader()}
        <slot name="footer"></slot>
        <vaadin-icon class="badge-new" icon="cxl:new"></vaadin-icon>
      </div>
    `;
  }
}
