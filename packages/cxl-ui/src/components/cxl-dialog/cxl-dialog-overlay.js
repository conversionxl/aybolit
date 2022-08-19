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
    if(!this.container) return super._attachOverlay();

    this._placeholder = document.createComment('vaadin-overlay-placeholder');
    this.parentNode.insertBefore(this._placeholder, this);
    this.container.appendChild(this);
    this.bringToFront();
  }

  /** @protected */
  _enterModalState() {
    if(!this.container) return super._enterModalState();

    if (document.body.style.pointerEvents !== 'none') {
      // Set body pointer-events to 'none' to disable mouse interactions with
      // other document nodes.
      this._previousDocumentPointerEvents = document.body.style.pointerEvents;

      // Don't set pointer-events
      // document.body.style.pointerEvents = 'none';
    }

    // Disable pointer events in other attached overlays
    CXLDialogOverlay.__attachedInstances.forEach((el) => {
      if (el !== this) {
        el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
      }
    });
  }
}

customElements.define(CXLDialogOverlay.is, CXLDialogOverlay);
