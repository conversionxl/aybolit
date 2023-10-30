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

  @property({ type: Boolean }) showRoadmap = false;

  @property({ type: Boolean }) showRoadmapStats = false;

  @property({ type: Boolean }) showRoadmapSlider = false;

  @property({ type: String }) editRoadmapLinkUrl = '';

  @property({ type: String }) editRoadmapLinkText = 'Edit roadmap';

  @property({ type: String }) createRoadmapLinkUrl = '';

  @property({ type: String }) createRoadmapLinkText = 'Create your personal learning roadmap';

  @property({ type: Boolean }) showMinidegrees = false;

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

  _renderUserSection() {
    return html`
      <section class="content">
        <header>
          <div class="titles">
            <span class="subtitle">${this.subtitle}</span>
            <h1 class="title">${this.title}, ${this.name}.</h1>
          </div>
          ${this.showCompletedStats ? html`
            <slot name="completed-stats" class="completed-stats"></slot>
          ` : nothing}
        </header>
        ${this.showContinueSlider ? html`
          <div class="slider">
            <span class="slider-title">Continue where you left off</span>
            <slot name="continue-slider" class="slider-slider"></slot>
          </div>
        ` : nothing}
      </section>
    `;
  }

  _renderRoadmapSection() {
    if (this.showRoadmap) {
      return html`
        <section class="content">
          <header>
            <h2 class="title">Training Roadmap</h2>
            ${this.showRoadmapStats ? html`
              <vaadin-button class="edit-roadmap" onclick="window.location.href='${this.editRoadmapLinkUrl}'">
                <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>
                ${this.editRoadmapLinkText}
              </vaadin-button>
              <slot name="roadmap-stats" class="roadmap-stats"></slot>
            ` : nothing}
          </header>
          ${!this.showRoadmapStats && !this.showRoadmapSlider ? html`
            <vaadin-button
              class="roadmap"
              onclick="window.location.href='${this.createRoadmapLinkUrl}'"
            >
              ${this.createRoadmapLinkText}
              <vaadin-icon icon="lumo:arrow-right"></vaadin-icon>
            </vaadin-button>
          ` : nothing}
          ${this.showRoadmapSlider ? html`
            <div class="slider">
                <span class="slider-title">Next up</span>
                <slot name="next-slider" class="slider-slider"></slot>
            </div>
          ` : nothing}
        </section>
      `;
    }

    return nothing;
  }

  _renderMinidegreesSection() {
    if (this.showMinidegrees) {
      return html`
        <section class="content">
          <header>
            <h2 class="title">Minidegrees</h2>
          </header>
          <slot name="minidegree-slider"></slot>
        </section>
      `;
    }

    return nothing;
  }

  render() {
    return html`
      <div class="container">
        ${this._renderNotifications()}
        ${this._renderUserSection()}
        ${this._renderRoadmapSection()}
        ${this._renderMinidegreesSection()}
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
