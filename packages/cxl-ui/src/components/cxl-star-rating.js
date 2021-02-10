import '@conversionxl/cxl-lumo-styles';
import { IronStarRating } from '@cwmr/iron-star-rating';

export class CXLStarRating extends IronStarRating {
  static get is() {
    return 'cxl-star-rating';
  }

  _getUniqueId() {
    return `cxl-star-rating_${this.id}`;
  }

  _saveState(value) {
    if (value !== false && !Number.isNaN(value)) {
      localStorage.setItem(this._getUniqueId(), value);
    }
  }

  _updateReadonlyAndValue() {
    const value = localStorage.getItem(this._getUniqueId());

    if (value && Number.parseFloat(value) > 0) {
      this.setAttribute('value', value);
      this.setAttribute('readonly', 'true');
    }
  }

  _valueChanged(newValue, oldValue) {
    super._valueChanged(newValue, oldValue);
    if (newValue !== 0 && !newValue) {
      return;
    }
    if (newValue > 0) {
      this._saveState(newValue);
    }
    this._updateReadonlyAndValue();
  }
}

window.customElements.define(CXLStarRating.is, CXLStarRating);
