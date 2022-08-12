import { html } from '@polymer/polymer/polymer-element.js';
import { Dialog } from '@vaadin/dialog';
import './cxl-dialog-overlay.js';

export class CXLDialog extends Dialog {
  static get template() {
    return html`
      <style>
        :host {
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
  }

  static get is() {
    return 'cxl-dialog';
  }

  static get properties() {
    return {
      container: Object,
    };
  }
}

customElements.define(CXLDialog.is, CXLDialog);
