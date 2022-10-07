import { Notification } from '@vaadin/notification';

export class CXLNotification extends Notification {
  static get is() {
    return 'cxl-notification';
  }

  renderer(root) {
    if (root.firstElementChild) {
      return;
    }

    [...this.childNodes].forEach((node) => {
      root.appendChild(node);
    });
  }
}

customElements.define(CXLNotification.is, CXLNotification);
