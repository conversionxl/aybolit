/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@vaadin/checkbox';
import cxlSearchFiltersItemStyles from '../styles/cxl-search-filters-item-css.js';

@customElement('cxl-search-filters-item')
export class CXLSearchFiltersItemElement extends LitElement {
  static get styles() {
    return [cxlSearchFiltersItemStyles];
  }

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  @property({ type: Number }) count = 0;

  @property({ type: Boolean, reflect: true }) checked = false;

  get checked () {
    return this.checkbox?.checked
  }

  set checked (value) {
    if (this.checkbox) {
      this.checkbox.checked = !!value
    }
  }

  @query('#checkbox') checkbox = null

  render () {
    return html`
      <vaadin-checkbox id="checkbox" .value=${this.value} label="${this.label}"></vaadin-checkbox>
      <span class="count">(${this.count})</span>
    `
  }
}
