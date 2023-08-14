/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './cxl-vaadin-accordion';
import '@vaadin/button';
import cxlSearchFiltersStyles from '../styles/cxl-search-filters-css.js';

@customElement('cxl-search-filters')
export class CXLSearchFiltersElement extends LitElement {
  static get styles() {
    return [cxlSearchFiltersStyles];
  }

  @property({ type: String }) label = 'FILTER CONTENTS';

  @property({ type: Number }) count = 0;

  _resetFWP () {
    if (window.FWP) window.FWP.reset()
    this.dispatchEvent(new CustomEvent('reset', { bubbles: true, composed: true }))
  }

  render () {
    return html`
        <header>
          <span class="label">${this.label}</span>
          <span class="count">(${this.count})</span>
        </header>
        <cxl-vaadin-accordion>
          <slot></slot>
        </cxl-vaadin-accordion>
        <vaadin-button theme="tertiary small" @click=${this._resetFWP}>
          <vaadin-icon icon="lumo:cross" slot="prefix"></vaadin-icon>
          <span>Reset filters</span>
        </vaadin-button>
    `
  }
}
