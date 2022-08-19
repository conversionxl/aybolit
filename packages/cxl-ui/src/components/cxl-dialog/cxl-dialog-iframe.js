import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@vaadin/dialog';

@customElement('cxl-dialog-iframe')
export class CXLDialogIFrame extends LitElement {
  @query('iframe') iframe;

  render() {
    return html`<iframe src="about:blank"></iframe>`;
  }

  firstUpdated() {
    this.iframe.srcdoc = `
      <vaadin-dialog opened></vaadin-dialog>
      <script>
        const parentWindow = window.parent;
        document.querySelectorAll(":not(:defined)").forEach(el => 
          customElements.define(
            el.localName,
            parentWindow.customElements.get(el.localName)
          )
        )
      </script>
    `;
  }
}


