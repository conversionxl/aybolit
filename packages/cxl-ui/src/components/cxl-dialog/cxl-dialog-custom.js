import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cxl-dialog-custom')
export class CXLDialog extends LitElement {
  @property({ reflect: true, type: Boolean }) opened;

  static get styles() {
    return css`
      :host {
        padding: 1rem;
        position: absolute;
        inset: 0;
      }

      :host(:not([opened])) {
        display: none;
      }

      [part='backdrop'] {
        background: rgba(0, 0, 0, 0.5);
        background-color: var(--lumo-shade-20pct);
        animation: 0.2s lumo-overlay-backdrop-enter both;
        will-change: opacity;
        position: absolute;
        inset: 0;
      }

      [part='overlay'] {
        border-radius: var(--lumo-border-radius-l);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        border-radius: var(--lumo-border-radius-m);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        color: var(--lumo-body-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-m);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        overflow: visible;
        max-height: 100%;
        display: flex;
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;
        max-width: 100%;
        box-sizing: border-box;
        -webkit-tap-highlight-color: initial;
      }
    `;
  }

  render() {
    console.log(this.opened);
    return html`
      <div part="backdrop"></div>
      <div part="overlay"><slot>${this.opened}</slot></div>
    `;
  }

  firstUpdated() {
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(e) {
    if (e.key === 'Escape') {
      this.opened = false;
    }
  }
}
