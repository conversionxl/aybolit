import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { ContextMenuElement } from '@vaadin/vaadin-context-menu/src/vaadin-context-menu.js';

@customElement('cxl-inline-comment-context-menu')
export class CxlInlineCommentContextMenu extends ContextMenuElement {
  // @property({ type: String, reflect:true })
  // textareaPlaceholder = 'Put your comment here';

  ready() {
    super.ready();
    this.appendContextMenuScript();
  }

  static get is() {
    return 'cxl-inline-comment-context-menu';
  }

  static get properties() {
    return {
      ...super.properties,
      textareaPlaceholder: {
        type: String,
        value: 'Put your comment here',
        notify: true,
        reflectToAttribute: true
      },
      buttonText: {
        type: String,
        value: 'Save comment',
        notify: true,
        reflectToAttribute: true
      },
      buttonTextSavingComment: {
        type: String,
        value: 'Saving...',
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  // eslint-disable-next-line class-methods-use-this
  appendContextMenuScript() {
    // eslint-disable-next-line func-names
    const doc = window.document;
    const contextMenu = this;
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
      txt.placeholder = this.textareaPlaceholder;
      listBox.appendChild(txt);
      const but = doc.createElement('button');
      but.textContent = this.buttonText;
      but.onclick = () => {
        but.disabled = true;
        but.textContent = this.buttonTextSavingComment;
        const evt = new CustomEvent('cxl-save-inline-comment', {
          bubbles: true,
          composed: true,
          detail: {
            comment: txt.value,
            context: contextMenu.innerHTML,
            elementId: this.id
          }
        });
        contextMenu.dispatchEvent(evt);
      };
      listBox.appendChild(but);
    };
  }
}
