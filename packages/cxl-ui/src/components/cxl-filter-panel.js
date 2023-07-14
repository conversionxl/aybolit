/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './cxl-vaadin-accordion';
import '@vaadin/accordion/vaadin-accordion-panel'
import cxlDashboardFilterPanelStyles from '../styles/cxl-filter-panel-css.js';

@customElement('cxl-filter-panel')
export class CXLFilterPanelElement extends LitElement {
  static get styles() {
    return [cxlDashboardFilterPanelStyles];
  }

  @property({ type: Boolean }) opened = '';

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  render () {
    return html`
      <vaadin-accordion-panel theme="reverse">
        <div slot="summary">${this.label}</div>
        <div class="content">
          <slot></slot>
        </div>
      </vaadin-accordion-panel>
    `
  }
}
