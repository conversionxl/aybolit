/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/details';
import '@vaadin/button';
import '@vaadin/tabs';
import '@conversionxl/cxl-ui/src/components/cxl-notification-card.js';
import cxlDashboardNotificationStyles from '../styles/cxl-dashboard-notification-css.js';

@customElement('cxl-dashboard-notification', { shadow: 'open' })
export class CXLDashboardNotificationElement extends LitElement {
  static get styles() {
    return [cxlDashboardNotificationStyles];
  }

  firstUpdated() {
    const vaadinButton = this.shadowRoot.querySelector('.notification');
    const tabsWrapper = this.shadowRoot.querySelector('.tabs-wrapper');

    const buttonHeight = vaadinButton.offsetHeight;
    const { top } = vaadinButton.getBoundingClientRect();

    const tabsWrapperHeight = `calc(100vh - ${buttonHeight}px - ${top}px - (2 * var(--lumo-space-xl)))`;
    tabsWrapper.style.maxHeight = tabsWrapperHeight;
  }

  @property({ type: Number }) count = '';

  @property({ type: String }) notificationTitle = "What's new in CXL";

  @property({ type: Boolean, reflect: true }) new = false;

  @property({ type: String, attribute: 'cta-url' }) ctaUrl = '';

  @property({ type: String }) noUpdates = 'No updates to show';

  @property({ type: Array }) tabs = '';

  _onTabSelected(e) {
    const selectedTabIndex = e.detail.value;
    const selectedTabId = `tab-${selectedTabIndex + 1}`;
    this.shadowRoot.querySelectorAll('[data-tab]').forEach((tabContent) => {
      tabContent.hidden = tabContent.getAttribute('data-tab') !== selectedTabId;
    });
  }

  render() {
    return html`
      <vaadin-details theme="cxl-dashboard-notification">
        <vaadin-button slot="summary" class="notification">
          ${this.count > 0
            ? html` <vaadin-icon
                class="icon-bell"
                count="${this.count}"
                icon="lumo:bell"
              ></vaadin-icon>`
            : nothing}
          ${this.notificationTitle}
          <vaadin-icon icon="lumo:angle-right" class="icon-arrow"></vaadin-icon>
        </vaadin-button>
        <div class="tabs-wrapper">
          <vaadin-tabs
            slot="tabs"
            theme="cxl-dashboard-notification"
            @selected-changed="${this._onTabSelected}"
          >
            ${this.tabs?.map(
              (tab) => html`
                <vaadin-tab id="${tab.id}" theme="cxl-dashboard-notification">
                  ${tab.title}
                </vaadin-tab>
              `
            )}
          </vaadin-tabs>
          ${this.tabs?.map(
            (tab) => html`
              <div data-tab="${tab.id}" hidden>
                ${tab.groups
                  ? tab.groups.map(
                      (group) => html`
                        <div class="tab-title">
                          ${group.title} ${group.count ? `(${group.count})` : ''}
                        </div>
                        <div class="tab-items">
                          ${group.cards.map(
                            (card) => html`
                              <cxl-notification-card
                                id="${card.id}"
                                theme="${card.theme}"
                                title="${card.title}"
                                time="${card.time}"
                                avatar="${card.avatar}"
                                link="${card.link}"
                                .new="${card.new}"
                                .edited="${card.edited}"
                              >
                              </cxl-notification-card>
                            `
                          )}
                        </div>
                      `
                    )
                  : html`<div class="no-updates">${this.noUpdates}</div>`}
              </div>
            `
          )}
        </div>
      </vaadin-details>
    `;
  }
}
