/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/progress-bar';
import '@vaadin/button';
import '@conversionxl/cxl-lumo-styles';
import CXLDashboardTeamStatsStyles from '../styles/cxl-dashboard-team-stats-css.js';

@customElement('cxl-dashboard-team-stats')
export class CxlDashboardTeamStatsElement extends LitElement {
  static get styles() {
    return [CXLDashboardTeamStatsStyles];
  }

  @property({ type: Number }) progress = 0;

  @property({ type: String, attribute: 'manage-roadmaps-url' }) manageRoadmapsURL = '';

  render() {
    return html`
      <div class="container">
        <header>
          <h1 class="title">Team progress & stats</h1>
          <div class="actions">
            <a href=${this.manageRoadmapsURL}>
              <vaadin-button class="team-settings" theme="primary">
                <vaadin-icon icon="lumo:edit"></vaadin-icon>
                Manage team roadmaps
              </vaadin-button>
            </a>
          </div>
        </header>
        <section class="content">
          <div class="progress">
            <span class="progress-title">Team roadmap progress</span>
            <vaadin-progress-bar value="${this.progress}"></vaadin-progress-bar>
            <h2 class="progress-subtitle">${(100 * this.progress).toFixed(0)}% complete</h2>
          </div>
          <div class="stats">
            <slot name="stats"></slot>
          </div>
        </section>
      </div>
    `;
  }
}
