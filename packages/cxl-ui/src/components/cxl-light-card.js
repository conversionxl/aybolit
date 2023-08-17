/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import cxlLightCardStyles from '../styles/cxl-light-card-css.js';
import { CXLBaseCardElement } from './cxl-base-card.js';

@customElement('cxl-light-card')
export class CXLLightCardElement extends CXLBaseCardElement {
  static get styles() {
    return [...super.styles, cxlLightCardStyles];
  }

  @state() showTags = false;

  @state() showTimeIcon = true;

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
