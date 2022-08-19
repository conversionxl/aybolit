import { html } from '@polymer/polymer/polymer-element.js';
import { Dialog } from '@vaadin/dialog';
import './cxl-dialog-overlay.js';

export class CXLDialog extends Dialog {
  static get template() {
    /* eslint-disable lit/no-legacy-template-syntax */
    return html`
      <style>
        :host(:not[opened]) {
          display: none !important;
        }
      </style>
      <cxl-dialog-overlay
        id="overlay"
        container="[[container]]"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></cxl-dialog-overlay>
    `;
    /* eslint-enable lit/no-legacy-template-syntax */
  }

  static get is() {
    return 'cxl-dialog';
  }

  static get properties() {
    return {
      contained: Boolean,
      container: Object,
    };
  }

  constructor() {
    super();

    if (this.hasAttribute('contained')) {
      this.container = this.parentNode;
    }
  }

  ready() {
    super.ready();

    if (this.contained) {
      this.addEventListener('click', this.onClick.bind(this));
      this.addEventListener('keydown', this.onKeyDown.bind(this));
    }
  }

  onClick(event) {
    const { overlay } = this.$;
    const overlayPart = overlay.shadowRoot.querySelector('[part="overlay"]');
    const composedPath = event.composedPath();

    if (!composedPath.includes(overlayPart)) {
      this.opened = false;
    }
  }

  onKeyDown(e) {
    if (e.key === 'Escape') {
      this.opened = false;
    }
  }
}

customElements.define(CXLDialog.is, CXLDialog);
