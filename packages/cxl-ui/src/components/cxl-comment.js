/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import cxlCommentStyles from '../styles/cxl-comment-css.js';
import '@vaadin/details';
import '@vaadin/avatar';

@customElement('cxl-comment')
export class CxlComment extends LitElement {
  static get styles() {
    return [cxlCommentStyles];
  }

  @property({ type: String }) author = '';

  @property({ type: String }) username = '';

  @property({ type: String }) avatar = '';

  @property({ type: String }) comment = '';

  @property({ type: String }) time = '';

  render() {
    return html`
      <div class="comment-body">
        <div class="comment-author vcard">
          <vaadin-avatar .img=${this.avatar} .name=${this.author} theme="large"></vaadin-avatar>
        </div>
        <div>
          <header>
            <div class="author">
              <span class="username">${this.username}</span>
              <span class="name">${this.author}</span>
            </div>
            <cxl-time time=${this.time}></cxl-time>
          </header>
          <div class="comment-content">${this.comment}</div>
        </div>
      </div>
    `;
  }
}
