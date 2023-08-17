/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import cxlTimeStyles from '../styles/cxl-time-css.js';

@customElement('cxl-time')
export class CxlTime extends LitElement {
  static get styles() {
    return [cxlTimeStyles];
  }

  @property({ type: String }) time = '';

  @property({ type: Boolean, attribute: 'show-icon' }) showIcon = false;

  render() {
    return html`
      ${this.showIcon ? html`<vaadin-icon icon="lumo:clock"></vaadin-icon>` : ''} ${this.time}
    `;
  }
}
