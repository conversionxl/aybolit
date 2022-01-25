import '@conversionxl/cxl-lumo-styles';

import { IronStarRating } from '@cwmr/iron-star-rating';

/**
 * With ability to persist star rating.
 *
 * Notice: If you don't provide `id` attribute for the component,
 * it won't store the state in the `localStorage`
 */
export class CXLStarRatingElement extends IronStarRating {
  constructor() {
    super();
    this.icon = 'vaadin:star';
  }

  static get is() {
    return 'cxl-star-rating';
  }

  _getUniqueId() {
    return `cxl-star-rating_${this.id}`;
  }

  _saveState(value) {
    if (value && Number.parseFloat(value) > 0) {
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

  _shouldSaveStateToLocalStorage() {
    return this.id !== undefined && this.id !== null && String(this.id).length > 0;
  }

  _valueChanged(newValue, oldValue) {
    super._valueChanged(newValue, oldValue);

    if (newValue !== 0 && !newValue) {
      return;
    }

    if (!this._shouldSaveStateToLocalStorage() && newValue > 0) {
      this.setAttribute('readonly', 'true');
      return;
    }

    this._saveState(newValue);
    this._updateReadonlyAndValue();
  }
}

window.customElements.define(CXLStarRatingElement.is, CXLStarRatingElement);
