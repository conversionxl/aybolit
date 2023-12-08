/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import QRCode from 'qrcode';
import '@conversionxl/cxl-lumo-styles';
import cxlCredentialStyles from '../styles/cxl-credential-css.js';

@customElement('cxl-credential')
export class CXLCredentialElement extends LitElement {
  static get styles() {
    return [cxlCredentialStyles];
  }

  _certWidth = 1464;

  _certHeight = 1120;

  @state({ type: Number }) correctionFactor;

  @property({ type: Number, attribute: 'credential-id' }) credentialId = 0;

  @property({ type: String, attribute: 'full-name' }) fullName = '';

  @property({ type: String }) theme = '';

  @property({ type: String }) title = '';

 /**
   * @type {String}
   * - 'course'
   * - 'minidegree'
   */
  @property({ type: String }) type = '';

  @property({ type: String }) date = '';

  @property({ type: String, attribute: 'credential-url' }) credentialUrl = '';

  @property({ type: Number }) scale = 0.5;

  @property({ type: Number, attribute: 'max-width' }) maxWidth;

  @property({ type: Number, attribute: 'parent-padding' }) parentPadding = 0;

  @property({ type: Number, attribute: 'code-scale' }) codeScale = 8;

  @query('#qr-code') qrCodeCanvas = null;

  defaultUrl ='https://cxl.com/institute/credential'

  get url() {
    return `${this.credentialUrl || this.defaultUrl}/${this.credentialId}`;
  }

  get formattedDate() {
    const date = new Date(this.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   *
   * @param {number} stroke
   * @param {number} size
   * @returns {TemplateResult}
   */
  static _circle(stroke, size) {
    return html`
      <svg
        width=${size}
        height=${size}
        viewBox="0 0 ${size + stroke} ${size + stroke}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="${(size + stroke) / 2}"
          cy="${(size + stroke) / 2}"
          r="${size / 2}"
          fill="none"
          stroke-width="${stroke}"
          stroke="rgba(255,255,255,0.15)"
        />
      </svg>
    `;
  }

  /**
   * Generate background concentric circles decoration
   * @param {number} numberOfCircles
   * @returns {TemplateResult}
   */
  static _circleBackground(numberOfCircles) {
    // Initialize array of n circle diameters,
    const defaultStroke = 5.5;
    const radiusIncrease = 50;
    const arr = Array(numberOfCircles).fill(defaultStroke);
    return html` ${arr.map((stroke, i) => CXLCredentialElement._circle(stroke, stroke + i * radiusIncrease))} `;
  }

  /**
   * This function is called when this.scale is defined or changed. In order to
   * prevent bad rendering on mobile devices, and because of how we use
   * `transform: scale` to handle resizing, it calculates and applies a
   * correction multiplier in case the viewport is smaller than the intended
   * size of the certificate rendering.
   *
   * It works well, but is not meant to react to resizing a window or changing
   * device orientation. But it will adjust, if the page is reloaded after.
   */
  _handleScaling() {
    const width = this.maxWidth || window.innerWidth - this.parentPadding;
    const finalW = this._certWidth * this.scale;
    this.correctionFactor = width < finalW || this.maxWidth ? width / finalW : 1;
    this.style.height = `${this._certHeight * this.scale * this.correctionFactor}px`;
    this.style.width = `${this._certWidth * this.scale * this.correctionFactor}px`;
  }

  /**
   * Render the QR code target the correct html element in the template
   */
  _renderQrCode() {
    QRCode.toCanvas(this.qrCodeCanvas, this.url, {
      margin: 0,
      scale: this.codeScale || 8,
      color: {
        dark: '#ffffffff',
        light: '#ffffff00',
      },
    });
  }

  updated(changes) {
    if (changes.has('credentialId') || changes.has('credentialUrl')) {
      this._renderQrCode();
    }

    if (changes.has('type')) {
      this.theme += ` ${this.type === 'minidegree' ? 'dark' : 'light'}`;
    }

    if (changes.has('scale') || changes.has('correctionFactor') || changes.has('codeScale')) {
      requestAnimationFrame(() => this._handleScaling());
    }

    if (this.theme) {
      this.setAttribute('theme', this.theme);
    }
  }

  renderCredential() {
    return html`
      <div class="container" ?invisible=${!this.correctionFactor}>
        <div id="circles">${CXLCredentialElement._circleBackground(28)}</div>
        <section id="header">
          <div class="description">Certificate of achievement</div>
          <h1 class="title">${this.title} ${this.type}</h1>
        </section>
        <section id="body">
          <p>
            <span class="nowrap">This is to certify that</span>
            <span class="highlight nowrap">${this.fullName}</span>
            <span class="nowrap">has successfully passed the</span>
            ${this.title} ${this.type}
            <span class="nowrap">on <span class="highlight date">${this.formattedDate}</span></span>
          </p>
        </section>
        <section id="footer">

          <div class="left">
            <div class="signature">
              <img src="https://cxl.com/institute/wp-content/uploads/2023/07/cxl-accredible-certificates-CXL-Standard-footer.png" />
            </div>
            <div class="logo">
              <vaadin-icon id="cxl-logo" icon="cxl:logo"></vaadin-icon>
              <div id="certification" class="thin">certification</div>
            </div>
          </div>
          <div class="code">
            <canvas id="qr-code"></canvas>
            <div id="qr-code-text" class="thin">certificate : ${this.credentialId}</div>
          </div>
        </section>
      </div>
    `;
  }

  render() {
    return html` <div
      class="wrapper"
      style="transform: scale(${this.scale * this.correctionFactor}); transform-origin: 0 0;"
    >
      ${this.renderCredential()}
    </div>`;
  }
}

