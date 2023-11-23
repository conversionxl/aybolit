/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import cxlSectionStyles from '../styles/cxl-section-css';

@customElement('cxl-section')
export class CXLSectionElement extends LitElement {
  static get styles() {
    return [cxlSectionStyles];
  }

  render() {
    return html`
      <section class="wrap">
        <slot></slot>
      </section>
    `;
  }
}
