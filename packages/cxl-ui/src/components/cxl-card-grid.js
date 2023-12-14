/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@conversionxl/cxl-lumo-styles';
import cxlCardGridStyles from '../styles/cxl-card-grid-css.js';

@customElement('cxl-card-grid')
export class CxlCardGridElement extends LitElement {
  static get styles() {
    return [cxlCardGridStyles];
  }

  render() {
    return html`<slot></slot>`;
  }

}
