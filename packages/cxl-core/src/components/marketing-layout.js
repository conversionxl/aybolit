// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import marketingLayoutStyles from '../styles/marketing-layout-base-css.js';

export class MarketingLayoutElement extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return marketingLayoutStyles;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
