import { LitElement, html, customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlVaadinAccordionGlobalStyles from '../styles/global/cxl-vaadin-accordion-css';

@customElement('cxl-inline-comment-context-menu')
export class CxlInlineCommentContextMenu extends LitElement {
  static get styles() {
    return [];
  }

  constructor() {
    super();
    this._uniqueId = `context_menu_${new Date().getMilliseconds()}`;
  }

  ready() {
    super.ready();
    this.appendContextMenuScript();
    registerGlobalStyles(cxlVaadinAccordionGlobalStyles, {
      moduleId: 'cxl-inline-comment-context-menu'
    });
  }

  render() {
    return html`
      <vaadin-context-menu id="${this._uniqueId}" @save-inline-comment=${evt => console.log(evt)}>
        <slot></slot>
      </vaadin-context-menu>
    `;
  }

  updated(changedProps) {
    super.updated(changedProps);
  }

  // eslint-disable-next-line class-methods-use-this
  appendContextMenuScript() {
    // eslint-disable-next-line func-names
    const doc = window.document;
    // eslint-disable-next-line func-names
    customElements.whenDefined('vaadin-context-menu').then(() => {
      const selector = `vaadin-context-menu#${this._uniqueId}`;
      const contextMenu = doc.querySelector(selector);
      console.log(contextMenu);
      contextMenu.closeOn = 'blur';
      contextMenu.renderer = root => {
        let listBox = root.firstElementChild;
        // Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
        if (listBox) {
          listBox.innerHTML = '';
        } else {
          listBox = doc.createElement('vaadin-list-box');
          root.appendChild(listBox);
        }
        const txt = doc.createElement('textarea');
        txt.placeholder = 'Put your comment here';
        listBox.appendChild(txt);
        const but = doc.createElement('button');
        but.textContent = 'Save comment';
        but.onclick = () => {
          but.disabled = true;
          but.textContent = 'Saving...';
          setTimeout(() => {
            const evt = new CustomEvent('save-inline-comment', {
              bubbles: true,
              composed: true,
              detail: {
                comment: txt.value,
                context: contextMenu.innerHTML
              }
            });
            contextMenu.dispatchEvent(evt);
            doc.body.click();
          }, 2000);
        };
        listBox.appendChild(but);
      };
    });
  }
}
