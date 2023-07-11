// eslint-disable-next-line import/no-extraneous-dependencies
import { LitElement, html } from 'lit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { customElement } from 'lit/decorators.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import '@conversionxl/cxl-lumo-styles';
import cxlStatsStyles from '../styles/cxl-stats-css.js';
import cxlStatsGlobalStyles from '../styles/global/cxl-stats-css.js';

@customElement('cxl-stats')
export class CXLStatsElement extends LitElement {
  static get styles() {
    return [cxlStatsStyles];
  }

  render() {
    return html`<slot></slot>`;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlStatsGlobalStyles, {
      moduleId: 'cxl-stats',
    });
  }
}
