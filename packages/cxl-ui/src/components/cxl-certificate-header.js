/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';

import cxlCertificateHeaderStyles from '../styles/cxl-certificate-header-css.js';
import cxlCertificateHeaderGlobalStyles from '../styles/global/cxl-certificate-header-css.js';

@customElement('cxl-certificate-header')
export class CXLCertificateHeaderElement extends LitElement {
  static get styles() {
    return [cxlCertificateHeaderStyles];
  }

  @property({ type: String }) theme = '';

  @property({ type: String }) title = '';

  @property({ type: String }) description = '';

  @property({ type: Boolean, attribute: 'hide-actions' }) hideActions = false;

  @property({ type: Boolean, attribute: 'hide-stats' }) hideStats = false;

  @property({ type: Boolean, attribute: 'hide-credential' }) hideCredential = false;

  // eslint-disable-next-line class-methods-use-this
  _renderCompletedEmblem() {
    if (!this.theme.includes('completed')) {
      return nothing;
    }

    return html`<h2 class="completed">
      <span class="completed-icon"><vaadin-icon icon="lumo:checkmark"></vaadin-icon></span>
      Course completed
    </h2>`;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderActions() {
    if (this.hideActions) {
      return nothing;
    }

    return html`<div class="actions"><slot name="actions"></slot></div>`;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderStats() {
    if (this.hideStats) {
      return nothing;
    }

    return html`<div class="stats"><slot name="stats"></slot></div>`;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderCredential() {
    if (this.hideCredential) {
      return nothing;
    }

    return html`<div class="credential"><slot name="credential"></slot>`;
  }

  render() {
    return html`
      <cxl-section class="alignfull" theme="cxl-certificate-header">
        <div class="container">
          <div class="content">
            <h1 class="title">${this.title}</h1>
            ${this._renderCompletedEmblem()}
            <div class="description">${unsafeHTML(this.description)}</div>
            ${this._renderStats()}
            ${this._renderActions()}
          </div>
          ${this._renderCredential()}
        </div>
      </cxl-section>
    `;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlCertificateHeaderGlobalStyles, {
      moduleId: 'cxl-certificate-header-global',
    });
  }
}
