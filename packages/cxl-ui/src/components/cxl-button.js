import { Button } from '@vaadin/button';
import { customElement } from 'lit/decorators.js';

@customElement('cxl-button')
export class CXLButton extends Button {
  static get properties() {
    return {
      ...super.properties,
      href: {
        type: String,
      },
      target: {
        type: String,
      },
    };
  }

  ready() {
    super.ready();

    // Adds the ability to use the button as a link
    if (this.href) {
      this.addEventListener('click', () => {
        const el = document.createElement('a');
        el.setAttribute('href', this.href);

        if (this.target) el.setAttribute('target', this.target);

        el.innerHTML = this.innerHTML;
        el.click();
      });
    }
  }

  static get is() {
    return 'cxl-button';
  }
}
