import '@conversionxl/cxl-lumo-styles';
import { IronStarRating } from '@cwmr/iron-star-rating';

export class CxlStarRating extends IronStarRating {
  static get is() {
    return 'cxl-star-rating';
  }

  static get properties() {
    return {
      value: {
        type: Number,
        value: 0,
        notify: true,
        observer: '_valueChanged',
      },
      icon: {
        type: String,
        value: 'icons:star',
      },
      disableAutoUpdate: {
        type: Boolean,
        value: false,
      },
      readonly: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
    };
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

window.customElements.define(CxlStarRating.is, CxlStarRating);
