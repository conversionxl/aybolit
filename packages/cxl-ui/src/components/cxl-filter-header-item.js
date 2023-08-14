/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/button';
import cxlFilterHeaderItemStyles from '../styles/cxl-filter-header-item-css.js';

@customElement('cxl-filter-header-item')
export class CXLFilterHeaderItemElement extends LitElement {
  static get styles() {
    return [cxlFilterHeaderItemStyles];
  }

  @property({ type: String }) label = '';

  @property({ type: String }) value = '';

  @property({ type: Number }) count = 0;

  @property({ type: Boolean, reflect: true }) checked = false;

  render () {
    return html`
    <vaadin-button>
      <span class="label">${this.label}</span>
      <span class="count">(${this.count})</span>
    </vaadin-button>
    `
  }
}
