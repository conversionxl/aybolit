import { Notification } from '@vaadin/notification';

export class CXLNotification extends Notification {
  static get is() {
    return 'cxl-notification';
  }

  /**
   * Since `template` elements are no longer supported by Vaadin, provide a default renderer which appends all child nodes to the notification root element.
   *
   * @see https://cxlworld.slack.com/archives/C01JABH8AHX/p1662121897793169
   * @see https://lit.dev/docs/components/shadow-dom/#slots
   *
   * @param {HTMLElement} root
   * @returns
   */
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
