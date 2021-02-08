import { customElement, html, LitElement, property } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import '@cwmr/iron-star-rating';

@customElement('cxl-adeft-star-rating')
export class CXLAdeftStarRating extends LitElement {
  @property({ reflect: true, type: Number })
  value;

  @property({ reflect: true, type: Boolean })
  readonly;

  @property({ type: String })
  get uniqueId() {
    return `cxl-adeft-star-rating_${this.id}`;
  }

  _saveState(value) {
    if (value !== false && !Number.isNaN(value)) {
      localStorage.setItem(this.uniqueId, value);
    }
  }

  _updateReadonlyAndValue() {
    const value = localStorage.getItem(this.uniqueId);

    if (value && Number.parseFloat(value) > 0) {
      this.readonly = true;
      this.value = value;
    }
  }

  _valueChangedCallback(event) {
    this._saveState(event.detail.value);
    this._updateReadonlyAndValue();
  }

  firstUpdated(_changedProperties) {
    this._updateReadonlyAndValue();
    super.firstUpdated(_changedProperties);
  }

  render() {
    return html`
      <iron-star-rating
        ?readonly=${this.readonly}
        @value-changed=${this._valueChangedCallback}
        value=${this.value}
      ></iron-star-rating>
    `;
  }
}
