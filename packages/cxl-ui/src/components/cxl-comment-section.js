/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './cxl-section';
import '@vaadin/details';
import cxlCommentSectionStyles from '../styles/cxl-comment-section-css.js';

@customElement('cxl-comment-section')
export class CXLCommentSection extends LitElement {
  static get styles() {
    return [cxlCommentSectionStyles];
  }

  @property({ type: Number }) replies = 0;

  render() {
    return html`
      <cxl-section>
        <h1>Community discussion</h1>
        <vaadin-details theme="reverse" ?empty=${!this._moreHasChildren}>
          <div slot="summary">${this.replies} ${this.replies === 1 ? 'reply' : 'replies'}</div>
          <div class="comment-list">
            <slot></slot>
          </div>
        </vaadin-details>
      </cxl-section>
    `;
  }
}
