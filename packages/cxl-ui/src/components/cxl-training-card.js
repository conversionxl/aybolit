import { html } from 'lit-element';
import { render } from 'lit-html';
import '@vaadin/vaadin-dialog';
import { CXLBaseCard } from '@conversionxl/cxl-core';
import trainingCardStyles from '../styles/cxl-training-card-css.js';


export class CXLTrainingCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, trainingCardStyles];
  }

  static get properties() {
    return {
      opened: {
        type: Boolean
      },
      video: {
        type: String
      }
    };
  }

  constructor() {
    super();

    this.addEventListener('click', () => {
      this.open();
    });

    this._boundDialogRenderer = this.dialogRenderer.bind(this);
  }

  render() {
    return html`
      <header class="entry__header">
        <slot name="entry__header-thumbnail">
          <span class="font-icon play"></span>
        </slot>
        <h2 class="entry__title">
          <slot name="entry__title"></slot>
        </h2>
      </header>
      <div class="entry__content">
        <slot name="entry__content"></slot>
      </div>
      <footer class="entry__footer">
        <slot name="entry__footer"></slot>
      </footer>
      
      <vaadin-dialog
        id="video"
        theme="video"
        ?opened="${this.opened}"
        @opened-changed="${this._onOpenedChanged}"
        .renderer="${this._boundDialogRenderer}"
      >
      </vaadin-dialog>
    `;
  }

  _onOpenedChanged(e) {
    this.opened = e.detail.value;
  }

  open() {
    this.opened = true;
  }

  dialogRenderer(root) {
    render(
      html`
        <iframe
          src="${this.video}"
          width="800"
          height="440"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      `,
      root
    );
  }
}

customElements.define('cxl-training-card', CXLTrainingCard);
