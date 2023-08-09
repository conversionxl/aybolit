/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import cxlNotificationCardStyles from '../styles/cxl-notification-card-css.js';

@customElement('cxl-notification-card')
export class CXLNotificationCardElement extends LitElement {
  static get styles() {
    return [cxlNotificationCardStyles];
  }

  @property({ type: String }) id = '';

  @property({ type: String }) theme = 'course';

  @property({ type: String }) title = '';

  @property({ type: String }) description = '';

  @property({ type: String }) avatar = '';

  @property({ type: Number }) time = 0;

  @property({ type: Boolean, reflect: true }) new = false;

  @property({ type: Boolean, reflect: true }) edited = false;

  @property({ type: String }) link = '';

  render() {
    return html`
      <header>
        <img
          class="instructor-image"
          src=${this.avatar}
          alt="${this.title}"
        />
        <div class="info">
          <div class="tag">
            ${this.new && !this.edited ? html`new`: ''}
            ${this.theme}
            ${this.edited ? html`update`: ''}
          </div>
          <div class="title">
            ${this.title}
          </div>
          ${this.description ? html` <div class="description">${this.description}</div>`: ''}
        </div>
        ${this.time > 0 ? html`
          <div class="time">
            ${this.edited ? html`Updated` : html`Added`} ${this.time} ${this.time === 1 ? html`day` : 'days'} ago
          </div>
        `: ''}
      </header>
    `;
  }
}
