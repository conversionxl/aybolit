import { LitElement, html } from 'lit-element';
import lumoStyles from '@conversionxl/cxl-lumo-styles';
import catalogStyles from '../styles/cxl-catalog-css.js';

export class CXLCatalog extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return [catalogStyles];
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.setAttribute('role', 'article');
  }
}

customElements.define('cxl-catalog', CXLCatalog);