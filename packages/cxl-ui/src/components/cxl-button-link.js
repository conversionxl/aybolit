import { Button } from '@vaadin/button';

export class CXLButtonLink extends Button {
  static get is() {
    return 'cxl-button-link';
  }
}

customElements.define(CXLButtonLink.is, CXLButtonLink);
