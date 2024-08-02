/* eslint-disable import/no-extraneous-dependencies */
import '@conversionxl/cxl-lumo-styles';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import cxlInlineNotificationStyles from '../styles/cxl-inline-notification-css.js';

@customElement('cxl-inline-notification')
export class CXLInlineNotification extends LitElement {
  static get styles() {
    return [cxlInlineNotificationStyles];
  }

  hide() {
    this.hidden = true;
  }

  render() {
    return html`
      <div class="wrap">
        <div id="content">
          <slot></slot>
        </div>
        <vaadin-button @click=${this.hide} theme="icon" aria-label="Close">
          <vaadin-icon icon="lumo:cross"></vaadin-icon>
        </vaadin-button>
      </div>
    `;
  }
}
