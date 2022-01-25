import '@conversionxl/cxl-lumo-styles';

import { customElement, html, LitElement, property, query } from 'lit-element';

import cxlSaveFavoriteStyles from '../styles/cxl-save-favorite-css';

@customElement('cxl-save-favorite')
export class CXLSaveFavoriteElement extends LitElement {
  @query('a')
  anchor;

  @query('a > iron-icon')
  ironIcon;

  /**
   * Is post currently in the "saved" state
   */
  @property({ type: Boolean, reflect: true })
  selected;

  /**
   * if true card version of the component (displayed in top-right corner of the card)
   */
  @property({ type: Boolean })
  isCardVersion;

  @property({ type: Number })
  postId;

  @property({ type: Number })
  userId;

  @property({ type: String })
  postType;

  /**
   * API Url to which we make a POST request
   *
   * @type {string}
   */
  @property({ type: String })
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  static get styles() {
    return [cxlSaveFavoriteStyles];
  }

  // eslint-disable-next-line class-methods-use-this
  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });

    return response.status;
  }

  async sendToApi() {
    return this.postData(this.apiUrl, {
      post_id: this.postId,
      user_id: this.userId,
      save: this.selected,
      post_type: this.postType,
    });
  }

  async _anchorClicked(event) {
    event.stopPropagation();

    this.ironIcon.classList.toggle('selected');
    this.selected = !this.selected;

    await this.sendToApi();
  }

  render() {
    const text = `${this.selected ? 'Unsave' : 'Save'} ${this.postType}`;

    const afterStar = this.isCardVersion ? '' : html`<div class="after-star">${text}</div>`;

    return html`
      <div>
        <a @click=${this._anchorClicked} title="${text}">
          <iron-icon icon="vaadin:star"></iron-icon>
          ${afterStar}
        </a>
      </div>
    `;
  }
}
