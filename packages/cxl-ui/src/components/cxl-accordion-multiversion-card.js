import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { CXLAccordionCardElement } from './cxl-accordion-card';

@customElement('cxl-accordion-multiversion-card')
export class CXLAccordionMultiversionCardElement extends CXLAccordionCardElement {
  _hideContents() {
    this.querySelectorAll('.version').forEach((el) => el.setAttribute('hidden', ''));
  }

  _unselectAll() {
    this.querySelectorAll('.version-authors > div').forEach((el) => el.removeAttribute('selected'));

    this._hideContents();
  }

  _selectClicked(event) {
    this._unselectAll();

    const clickedEl = event.target;

    clickedEl.toggleAttribute('selected');

    this.querySelector(
      `.version[data-version-id="${clickedEl.dataset.versionId}"]`
    ).removeAttribute('hidden');
  }

  _attachListeners() {
    this.querySelectorAll('.version-authors > div').forEach((el) => {
      // eslint-disable-next-line no-param-reassign
      el.onclick = (event) => this._selectClicked(event);
    });
  }

  _clickFirst() {
    this.querySelectorAll('.version-authors > div')[0].click();
  }

  ready() {
    super.ready();
    this._attachListeners();
    this._clickFirst();
  }

  static get is() {
    return 'cxl-accordion-multiversion-card';
  }
}
