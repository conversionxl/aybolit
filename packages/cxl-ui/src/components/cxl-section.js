/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import '@conversionxl/cxl-lumo-styles';
import cxlSectionStyles from '../styles/cxl-section-css';
import cxlSectionGlobalStyles from '../styles/global/cxl-section-css';

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

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    /**
     * Global styles.
     */
    registerGlobalStyles(cxlSectionGlobalStyles, {
      moduleId: 'cxl-section',
    });
  }
}
