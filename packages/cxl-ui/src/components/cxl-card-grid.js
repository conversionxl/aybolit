/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';

import '@conversionxl/cxl-lumo-styles';
import cxlCardGridStyles from '../styles/cxl-card-grid-css.js';
import cxlCardGridGlobalStyles from '../styles/global/cxl-card-grid-css.js';

@customElement('cxl-card-grid')
export class CxlCardGridElement extends LitElement {
  static get styles() {
    return [cxlCardGridStyles];
  }

  render() {
    return html`<slot></slot>`;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlCardGridGlobalStyles, {
      moduleId: 'cxl-card-grid-global',
    });
  }

}
