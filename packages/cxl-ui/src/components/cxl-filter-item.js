/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@vaadin/checkbox';
import cxlDashboardFilterItemStyles from '../styles/cxl-filter-item-css.js';

@customElement('cxl-filter-item')
export class CXLFilterItemElement extends LitElement {
  static get styles() {
    return [cxlDashboardFilterItemStyles];
  }

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  @property({ type: Number }) count = 0;

  render () {
    return html`
      <vaadin-checkbox value=${this.value} label="${this.label}"></vaadin-checkbox>
      <span class="count">(${this.count})</span>
    `
  }
}
