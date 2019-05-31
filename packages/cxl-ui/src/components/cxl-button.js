import { ButtonElement } from '@aybolit/core';

export class CXLButton extends ButtonElement {
  static get styles() {
    return [super.styles];
  }
}

customElements.define('cxl-button', CXLButton);