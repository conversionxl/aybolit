/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/progress-bar';
import '@vaadin/button';
import CXLDashboardTeamStatsStyles from '../styles/cxl-dashboard-team-stats-css.js';

@customElement('cxl-dashboard-team-stats')
export class CxlDashboardTeamStatsElement extends LitElement {
  static get styles() {
    return [CXLDashboardTeamStatsStyles];
  }

  @property({ type: Number }) progress = 0;

  @property({ type: String, attribute: 'manage-roadmaps-url' }) manageRoadmapsURL = '';

  @property({ type: Boolean, attribute: 'hide-progress' }) hideProgress = false;

  @property({ type: Boolean, attribute: 'hide-stats' }) hideStats = false;

  render() {
    return html`
      <div class="container">
        <header>
          <h1 class="title">Team progress & stats</h1>
          <div class="actions">
            ${this.manageRoadmapsURL ? html`
              <a href=${this.manageRoadmapsURL}>
                <vaadin-button class="team-settings" theme="primary">
                  <vaadin-icon icon="lumo:edit"></vaadin-icon>
                  Manage team roadmaps
                </vaadin-button>
              </a>
            ` : nothing}
          </div>
        </header>
        ${!this.hideProgress || !this.hideStats ? html`
          <section class="content">
            ${!this.hideProgress ? html`
              <div class="progress">
                <span class="progress-title">Team roadmap progress</span>
                <vaadin-progress-bar value="${this.progress}"></vaadin-progress-bar>
                <h2 class="progress-subtitle">${(100 * this.progress).toFixed(0)}% complete</h2>
              </div>
            ` : nothing}
            ${!this.hideStats ? html`
              <div class="stats">
                <slot name="stats"></slot>
              </div>
            ` : nothing}
          </section>
        ` : nothing}
      </div>
    `;
  }
}
