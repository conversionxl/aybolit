import { DialogOverlay } from '@vaadin/dialog';
import { css, registerStyles } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'cxl-dialog-overlay',
  css`
    :host {
      position: absolute;
    }

    [part='backdrop'] {
      position: absolute;
    }
  `,
  { moduleId: 'cxl-dialog-overlay-styles' }
);

export class CXLDialogOverlay extends DialogOverlay {
  static get is() {
    return 'cxl-dialog-overlay';
  }

  static get properties() {
    return {
      container: Object,
    };
  }

  /** @protected */
  _attachOverlay() {
    this._placeholder = document.createComment('vaadin-overlay-placeholder');
    this.parentNode.insertBefore(this._placeholder, this);
    this.container.appendChild(this);
    this.bringToFront();
  }

  /** @protected */
  _detachOverlay() {
    this._placeholder.parentNode.insertBefore(this, this._placeholder);
    this._placeholder.parentNode.removeChild(this._placeholder);
  }
}

customElements.define(CXLDialogOverlay.is, CXLDialogOverlay);
