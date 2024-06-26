/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import '@conversionxl/cxl-lumo-styles';
import cxlDashboardTeamHeaderStyles from '../styles/cxl-dashboard-team-header-css.js';
import cxlDashboardTeamHeaderGlobalStyles from '../styles/global/cxl-dashboard-team-header-css.js';
import '@vaadin/icon';
import '@vaadin/button';

@customElement('cxl-dashboard-team-header')
export class CxlDashboardTeamHeaderElement extends LitElement {
  static get styles() {
    return [cxlDashboardTeamHeaderStyles];
  }

  @property({ type: String, attribute: 'team-name' }) teamName = '';

  @property({ type: String, attribute: 'invite-url' }) inviteURL = '';

  @property({ type: String, attribute: 'settings-url' }) settingsURL = '';

  @property({ type: Boolean }) multiple = false;

  render() {
    return html`
      <div class="container">
        <header>
          <div class="titles">
            <span class="subtitle">${this.multiple ? 'Choose team' : 'My team'}</span>
            ${this.multiple
              ? html`<slot name="choose-team"></slot>`
              : html`<h1 class="title">${this.teamName}</h1>`}
          </div>
        </header>
        <div class="actions">
          ${this.inviteURL ? html`
            <a href="${this.inviteURL}">
              <vaadin-button class="invite-manage" theme="secondary">
                Invite & manage team
              </vaadin-button>
            </a>
          ` : nothing}
          ${this.settingsURL ? html`
            <a href="${this.settingsURL}">
              <vaadin-button class="team-settings" theme="primary">
                <vaadin-icon icon="lumo:edit"></vaadin-icon>
                Team settings
              </vaadin-button>
            </a>
          ` : nothing}
        </div>
      </div>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlDashboardTeamHeaderGlobalStyles, {
      moduleId: 'cxl-dashboard-team-header-global',
    });
  }
}
