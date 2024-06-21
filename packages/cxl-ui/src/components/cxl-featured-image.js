/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import cxlFeaturedImageStyles from '../styles/cxl-featured-image-css.js';

@customElement('cxl-featured-image')
export class CXLFeaturedImage extends LitElement {
  @property({ type: String }) src = '';

  static get styles() {
    return [cxlFeaturedImageStyles];
  }

  render() {
    return html`
      <div id="container"></div>
      <div id="image" style="background-image: url(${this.src})"></div>
    `;
  }
}
