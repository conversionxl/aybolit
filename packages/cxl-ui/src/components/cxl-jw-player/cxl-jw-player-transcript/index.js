import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from '../../../styles/global/cxl-jw-player/cxl-jw-player-transcript-css';
import shadowStyle from '../../../styles/cxl-jw-player/cxl-jw-player-transcript-shadow-css';

@customElement('cxl-jw-player-transcript')
export class CXLJWPlayerTranscriptElement extends LitElement {
  static get styles() {
    return [shadowStyle];
  }

  render() {
    return html`<slot></slot>`;
  }

  async _setup() {
    await super._setup();

    this._addStyle(style);
  }
}
