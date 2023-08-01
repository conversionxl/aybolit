/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './cxl-vaadin-accordion';
import '@vaadin/accordion/vaadin-accordion-panel'
import cxlSearchFilterPanelStyles from '../styles/cxl-search-filters-panel-css.js';

@customElement('cxl-search-filters-panel')
export class CXLSearchFilterPanelElement extends LitElement {
  static get styles() {
    return [cxlSearchFilterPanelStyles];
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
