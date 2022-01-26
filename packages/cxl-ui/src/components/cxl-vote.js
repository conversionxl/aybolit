import { customElement, LitElement, html, property, query, queryAll } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlVoteStyles from '../styles/cxl-vote-css.js';

@customElement('cxl-vote')
export class CXLVoteElement extends LitElement {
  @property({ type: Number })
  upVotes = 0;

  @property({ type: Number })
  value = 0;

  @property({ type: Number })
  postId;

  @property({ type: Number })
  userId;

  @property({ type: String })
  postType;

  @property({ type: Boolean })
  buttonsDisabled = false;

  @query('[counter]')
  counter;

  @query('.vote[up]')
  voteUp;

  @query('.vote[down]')
  voteDown;

  @queryAll('.vote')
  voteAll;

  /**
   * API Url to which we make a POST request
   *
   * @type {string}
   */
  @property({ type: String })
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  static get styles() {
    return [cxlVoteStyles];
  }

  async _upVote(event) {
    if (this.buttonsDisabled) {
      return;
    }

    this.value = this.value === 1 ? 0 : 1;

    await this._vote(event.currentTarget);
  }

  async _downVote(event) {
    if (this.buttonsDisabled) {
      return;
    }

    this.value = this.value === -1 ? 0 : -1;

    await this._vote(event.currentTarget);
  }

  async _vote(target) {
    const previousVal = this._getPreviousValue();

    this._disableButtons();

    await this._sendToApi();
    await this._saveState();
    await this._clearChecked();
    await this._checkItem(target);

    this._enableButtons();

    if (previousVal === -1 && this.value !== -1) {
      this.upVotes += 1;
    }
    if (previousVal === 1 && this.value !== 1) {
      this.upVotes -= 1;
    }

    this.upVotes += this.value;
  }

  _disableButtons() {
    this.buttonsDisabled = true;
    this.voteAll.forEach((el) => el.classList.add('disabled'));
  }

  _enableButtons() {
    this.buttonsDisabled = false;
    this.voteAll.forEach((el) => el.classList.remove('disabled'));
  }

  _getUniqueId() {
    return `cxl-vote-${this.userId}-${this.postType}-${this.postId}`;
  }

  async _saveState() {
    localStorage.setItem(this._getUniqueId(), String(this.value));
  }

  async _sendToApi() {
    return this._postData(this.apiUrl, {
      post_id: this.postId,
      user_id: this.userId,
      value: this.value,
      post_type: this.postType,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async _postData(url = '', data = {}) {
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

  async _clearChecked() {
    this.voteAll.forEach((el) => el.classList.remove('checked'));
    this.counter.classList.remove('checked');
  }

  // eslint-disable-next-line class-methods-use-this
  async _checkItem(target) {
    if (this.value !== 0) {
      target.classList.add('checked');
      this.counter.classList.add('checked');
    }
  }

  _getPreviousValue() {
    return Number(localStorage.getItem(this._getUniqueId()));
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    const previousVal = this._getPreviousValue();

    if (previousVal) {
      this.value = previousVal;

      if (this.value === 1) {
        this.voteUp.classList.add('checked');
        this.counter.classList.add('checked');
      } else if (this.value === -1) {
        this.voteDown.classList.add('checked');
        this.counter.classList.add('checked');
      }
    }
  }

  render() {
    const d1 = this.value === 1 ? 'd' : '';
    const d2 = this.value === -1 ? 'd' : '';
    const plural = this.upVotes !== 1 ? 's' : '';

    return html`<div>
      <div counter>${this.upVotes} Vote${plural}</div>
      <div class="vote" @click="${this._upVote}" up>
        <iron-icon icon="vaadin:thumbs-up-o"></iron-icon><span>Upvote${d1}</span>
      </div>
      <div class="vote" @click="${this._downVote}" down>
        <iron-icon icon="vaadin:thumbs-down-o"></iron-icon><span>Downvote${d2}</span>
      </div>
    </div>`;
  }
}
