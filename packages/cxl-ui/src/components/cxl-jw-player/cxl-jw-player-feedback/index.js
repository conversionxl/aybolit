import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '../../../styles/cxl-jw-player/cxl-jw-player-feedback-css';
import shadowStyle from '../../../styles/cxl-jw-player/cxl-jw-player-feedback-shadow-css';

@customElement('cxl-jw-player-feedback')
export class CXLJWPlayerFeedbackElement extends LitElement {
  @property({ reflect: true, type: Boolean }) hidden = true;

  static get styles() {
    return [shadowStyle];
  }

  render() {
    return html`<slot></slot>`;
  }

  async __setup() {
    await super.__setup();

    this.__addStyle(style);
  }
}
