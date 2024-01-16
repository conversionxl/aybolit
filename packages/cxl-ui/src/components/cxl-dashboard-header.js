/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import './cxl-dashboard-notification';

import cxlDashboardHeaderStyles from '../styles/cxl-dashboard-header-css.js';

@customElement('cxl-dashboard-header')
export class CXLDashboardHeaderElement extends LitElement {
  static get styles() {
    return [cxlDashboardHeaderStyles];
  }

  @property({ type: Number, attribute: 'notification-count' }) notificationCount = 0;

  @property({ type: String, attribute: 'notification-title' }) notificationTitle =
    "What's new in CXL";

  @property({ type: Object }) notificationData = null;

  @property({ type: String }) subtitle = 'My dashboard';

  @property({ type: String }) title = 'Hello';

  @property({ type: String }) name = '';

  @property({ type: Boolean, attribute: 'show-completed-stats' }) showCompletedStats = false;

  @property({ type: Boolean, attribute: 'show-continue-slider' }) showContinueSlider = false;

  @property({ type: Boolean, attribute: 'show-roadmap' }) showRoadmap = false;

  @property({ type: Boolean, attribute: 'show-roadmap-stats' }) showRoadmapStats = false;

  @property({ type: Boolean, attribute: 'show-roadmap-slider' }) showRoadmapSlider = false;

  @property({ type: String, attribute: 'edit-roadmap-link-url' }) editRoadmapLinkUrl = '';

  @property({ type: String, attribute: 'create-roadmap-link-url' }) createRoadmapLinkUrl = '';

  @property({ type: Boolean, attribute: 'show-minidegrees' }) showMinidegrees = false;

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
          <div class="user-header">
            <h1 class="title">${this.title}, <span class="username">${this.name}.</span></h1>
            ${this._renderNotifications()}
          </div>
          ${this.showCompletedStats
            ? html` <slot name="completed-stats" class="completed-stats"></slot> `
            : nothing}
        </header>
        ${this.showContinueSlider
          ? html`
              <div class="slider">
                <span class="slider-title">Continue where you left off</span>
                <slot name="continue-slider" class="slider-slider"></slot>
              </div>
            `
          : nothing}
      </section>
    `;
  }

  _renderRoadmapSection() {
    if (this.showRoadmap) {
      return html`
        <section class="content">
          <header>
            <div class="header-flex">
              <h2 class="title">Training Roadmap</h2>
              ${this.showRoadmapStats
                ? html`
                    <vaadin-button
                      class="edit-roadmap"
                      onclick="window.location.href='${this.editRoadmapLinkUrl}'"
                    >
                      <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>
                      Edit <span class="edit-roadmap-text-affix">roadmap</span>
                    </vaadin-button>
                  `
                : nothing}
            </div>
            ${this.showRoadmapStats
              ? html`<slot name="roadmap-stats" class="roadmap-stats"></slot>`
              : nothing}
          </header>
          ${!this.showRoadmapStats && !this.showRoadmapSlider
            ? html`
                <vaadin-button
                  class="roadmap"
                  onclick="window.location.href='${this.createRoadmapLinkUrl}'"
                >
                  Create your personal learning roadmap
                  <vaadin-icon icon="lumo:arrow-right"></vaadin-icon>
                </vaadin-button>
              `
            : nothing}
          ${this.showRoadmapSlider
            ? html`
                <div class="slider">
                  <span class="slider-title">Next up</span>
                  <slot name="next-slider" class="slider-slider"></slot>
                </div>
              `
            : nothing}
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
          <div class="slider">
            <slot name="minidegree-slider"></slot>
          </div>
        </section>
      `;
    }

    return nothing;
  }

  render() {
    return html`
      <div class="container">
        ${this._renderUserSection()} ${this._renderRoadmapSection()}
        ${this._renderMinidegreesSection()}
      </div>
    `;
  }
}
