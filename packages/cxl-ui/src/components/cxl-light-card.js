/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import cxlLightCardStyles from '../styles/cxl-light-card-css.js';

@customElement('cxl-light-card')
export class CXLLightCardElement extends LitElement {
  static get styles() {
    return [cxlLightCardStyles];
  }

  @property({ type: String }) id = '';

  @property({ type: String }) theme = 'light-card';

  @property({ type: String }) title = '';

  @property({ type: String }) time = '';

  @property({ type: String }) instructorPrefix = 'By:';

  @property({ type: String }) instructor = '';

  @property({ type: String }) avatar = '';

  @property({ type: Boolean, reflect: true }) new = false;

  @property({ type: Boolean, reflect: true }) completed = false;

  render() {
    return html`
      <header class="entry-header">
        ${this.new ? html`<vaadin-icon icon="cxl:new"></vaadin-icon>` : nothing}
        <div>
          <div class="entry-title">
            ${this.title}
            ${this.completed ? html`<vaadin-icon icon="lumo:checkmark"></vaadin-icon>` : nothing}
          </div>
          <div class="entry-byline">
            <div><vaadin-icon icon="lumo:clock"></vaadin-icon>${this.time}</div>
            <div>${this.instructorPrefix}&nbsp;${this.instructor}</div>
          </div>
        </div>
        <img class="thumbnail" src="${this.avatar}" alt="${this.instructor}" />
      </header>
      <slot name="footer"></slot>
    `;
  }
}
