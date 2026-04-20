import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cxl-carousel')
export class CXLCarouselElement extends LitElement {
  @property({ type: Number }) duration = 5;

  _images = [];

  _index = 0;

  _interval;

  static get styles() {
    return css`
      ::slotted(img) {
        display: none;
      }

      ::slotted(img:first-child) {
        display: block;
      }
    `;
  }

  firstUpdated() {
    this._images = [...this.querySelectorAll('img')];

    this._interval = setInterval(() => {
      this._next();
    }, this.duration);
  }

  _next() {
    if (this._index === this._images.length - 1) {
      this._index = 0;
    } else {
      this._index = this._index + 1;
    }

    this._images.forEach((image, index) => {
      if (index === this._index) {
        // eslint-disable-next-line no-param-reassign
        image.style.display = 'block';
      } else {
        // eslint-disable-next-line no-param-reassign
        image.style.display = 'none';
      }
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}
