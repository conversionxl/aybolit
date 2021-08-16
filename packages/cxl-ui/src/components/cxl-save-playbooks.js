import '@conversionxl/cxl-lumo-styles';
import { customElement, html, LitElement, property, query } from 'lit-element';
import cxlSavePlaybooksStyles from '../styles/cxl-save-playbooks-css';

@customElement('cxl-save-playbooks')
export class CXLSavePlaybooksElement extends LitElement {
  @query('a')
  anchor;

  @query('a > iron-icon')
  ironIcon;

  @property({ type: Boolean, reflect: true })
  selected;

  @property({ type: Number, reflect: true })
  playbookId;

  @property({ type: Number, reflect: true })
  userId;

  @property({ type: String, reflect: true })
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  static get styles() {
    return [cxlSavePlaybooksStyles];
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
      playbookId: this.playbookId,
      userId: this.userId,
      save: this.selected,
    });
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    this.anchor.addEventListener('click', async (e) => {
      e.stopPropagation();

      this.ironIcon.classList.toggle('selected');
      this.selected = !this.selected;

      await this.sendToApi();
    });
  }

  render() {
    return html`
      <div>
        <a
          ><iron-icon icon="vaadin:star" class="${this.selected ? 'selected' : ''}"></iron-icon>
          ${this.selected ? 'Unsave' : 'Save'} Playbook</a
        >
      </div>
    `;
  }
}
