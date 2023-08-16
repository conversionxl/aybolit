/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/progress-bar';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlDashboardHeaderGlobalStyles from '../styles/global/cxl-dashboard-header-css.js';
import cxlDashboardHeaderStyles from '../styles/cxl-dashboard-header-css.js';
import { CXLDashboardNotification } from '../../../storybook/cxl-ui/cxl-dashboard-notification/default.stories.js';
import notificationData from '../../../storybook/cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json';

@customElement('cxl-dashboard-header')
export class CXLDashboardHeaderElement extends LitElement {
  static get styles() {
    return [cxlDashboardHeaderStyles];
  }

  @property({ type: String }) title = 'Hello';

  @property({ type: String }) subtitle = 'My dashboard';

  @property({ type: String }) name = '';

  @property({ type: Number, attribute: 'notification-count' }) notificationCount = 0;

  @property({ type: String }) notificationTitle = "What's new in CXL";

  @property({ type: Object }) notificationData = null;

  @property({ type: String, attribute: 'last-course-title' }) lastCourseTitle = '';

  @property({ type: String, attribute: 'last-course-link' }) lastCourseLink = '';

  @property({ type: String }) lastCourseSubtitle = 'Continue where you left off';

  @property({ type: Number, attribute: 'progress' }) progress = 0;

  @property({ type: Number, attribute: 'lessons-completed' }) lessonsCompleted = 0;

  @property({ type: Number, attribute: 'lessons-total' }) lessonsTotal = 0;

  @property({ type: String }) cta1 = '';

  @property({ type: String }) cta1Link = '';

  @property({ type: String }) cta2 = '';

  @property({ type: String }) cta2Link = '';

  @property({ type: String }) cta3 = '';

  @property({ type: String }) cta3Link = '';

  @property({ type: Boolean }) hasRoadmap = false;

  renderLastCourse() {
    return this.hasRoadmap
      ? html` <div class="last-course">
          <a href="${this.lastCourseLink}">
            <div>
              <span class="subtitle">${this.lastCourseSubtitle}</span>
              <span class="title">${this.lastCourseTitle}</span>
            </div>
            <vaadin-icon icon="lumo:arrow-right"></vaadin-icon>
          </a>
          <div class="progress">
            <span class="progress-title"
              >Completed ${this.lessonsCompleted} of ${this.lessonsTotal} lessons</span
            >
            <vaadin-progress-bar value="${this.progress}"
              >Completed ${this.lessonsCompleted} of ${this.lessonsTotal}
              lessons</vaadin-progress-bar
            >
          </div>
        </div>`
      : nothing;
  }

  renderStats() {
    return this.hasRoadmap
      ? html` <div class="stats">
          <slot name="stats-desktop"></slot>
          <slot name="stats-mobile"></slot>
        </div>`
      : nothing;
  }

  render() {
    return html`
      <div class="container">
        <header>
          ${this.notificationCount > 0
            ? html`<div class="updates">
                ${CXLDashboardNotification(CXLDashboardNotification.args = {
                  count: this.notificationCount,
                  tabs: this.notificationData || notificationData
                })}
              </div>`
            : ''}
          <div>
            <span class="subtitle">${this.subtitle}</span>
            <h1 class="title">${this.title} ${this.name}!</h1>
          </div>
        </header>
        <section class="content">
          <div>
            ${this.renderLastCourse()}
            <div class="courses">
              <vaadin-button onclick="window.location.href='${this.cta1Link}'">
                ${this.cta1}
                <vaadin-icon icon="lumo:arrow-right"></vaadin-icon>
              </vaadin-button>
              <vaadin-button onclick="window.location.href='${this.cta2Link}'">
                ${this.cta2}
                <vaadin-icon icon="lumo:arrow-right"></vaadin-icon>
              </vaadin-button>
              ${!this.hasRoadmap
                ? html`
                  <vaadin-button class="roadmap" onclick="window.location.href='${this.cta3Link}'">
                    ${this.cta3}
                    <vaadin-icon icon="lumo:arrow-right"></vaadin-icon>
                  </vaadin-button>`
                : nothing}
            </div>
          </div>
          ${this.renderStats()}
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
