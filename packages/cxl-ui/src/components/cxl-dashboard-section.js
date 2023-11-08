/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlDashboardSectionGlobalStyles from '../styles/global/cxl-dashboard-section-css.js';
import cxlDashboardSectionStyles from '../styles/cxl-dashboard-section-css.js';

@customElement('cxl-dashboard-section')
export class CxlDashboardSectionElement extends LitElement {
  static get styles() {
    return [cxlDashboardSectionStyles];
  }

  @property({ type: String }) image = '';

  render() {
    return html` <slot></slot> `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlDashboardSectionGlobalStyles, {
      moduleId: 'cxl-dashboard-section',
    });
  }
}
