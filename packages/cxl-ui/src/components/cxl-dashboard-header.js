/* eslint-disable import/no-extraneous-dependencies */
import {LitElement, html, nothing} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import './cxl-dashboard-notification';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';

import cxlDashboardHeaderStyles from '../styles/cxl-dashboard-header-css.js';
import cxlDashboardHeaderGlobalStyles from '../styles/global/cxl-dashboard-header-css.js';

@customElement('cxl-dashboard-header')
export class CXLDashboardHeaderElement extends LitElement {
  static get styles() {
    return [cxlDashboardHeaderStyles];
  }

  @property({ type: Number, attribute: 'notification-count' }) notificationCount = 0;

  @property({ type: String }) notificationTitle = "What's new in CXL";

  @property({ type: Object }) notificationData = null;

  @property({ type: String }) subtitle = 'My dashboard';

  @property({ type: String }) title = 'Hello';

  @property({ type: String }) name = '';

  @property({ type: Boolean }) showCompletedStats = false;

  @property({ type: Boolean }) showContinueSlider = false;

  _renderNotifications() {
    if (this.notificationCount > 0) {
      return html`
        <div class="updates">
          <cxl-dashboard-notification
            count="${this.notificationCount}"
            .tabs=${this.notificationData}
          ></cxl-dashboard-notification>
        </div>
      `;
    }

    return nothing;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderStats() {
    if (this.showCompletedStats) {
      return html`
        <div class="stats">
          <slot name="stats"></slot>
        </div>
      `;
    }

    return nothing;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderContinue() {
    if (this.showContinueSlider) {
      return html`
        <div class="slider">
          <span class="slider-title">Continue where you left off</span>
          <slot name="slider"></slot>
        </div>
      `;
    }

    return nothing;
  }

  render() {
    return html`
      <div class="container">
        <header>
          ${this._renderNotifications()}
          <div class="titles">
            <span class="subtitle">${this.subtitle}</span>
            <h1 class="title">${this.title}, ${this.name}.</h1>
          </div>
          ${this._renderStats()}
        </header>
        <section class="content">
          ${this._renderContinue()}
        </section>
      </div>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlDashboardHeaderGlobalStyles, {
      moduleId: 'cxl-dashboard-header-global',
    });
  }
}
