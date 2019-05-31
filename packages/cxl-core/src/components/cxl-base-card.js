import { LitElement, html } from 'lit-element';
import lumoStyles from '@conversionxl/cxl-lumo-styles';
import baseCardStyles from '../styles/cxl-base-card-css.js';

export class CXLBaseCard extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [baseCardStyles];
  }

  render() {
    return html`
      <header class="entry__header">
        <slot name="entry__header"></slot>
      </header>
      <div class="entry__content">
        <slot name="entry__content"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="entry__footer"></slot>
      </footer>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}