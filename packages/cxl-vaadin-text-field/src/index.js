import '@vaadin/vaadin-text-field';
import { IntegerFieldElement } from '@vaadin/vaadin-text-field/vaadin-integer-field';

const HOST_PROPS = {
  default: [
    'list',
    'autofocus',
    'pattern',
    'autocapitalize',
    'autocorrect',
    'maxlength',
    'minlength',
    'placeholder',
    'autocomplete',
    'title',
    'disabled',
    'readonly',
    'required'
  ],
  accessible: ['invalid']
};

const PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};

class CXLIntegerFieldElement extends IntegerFieldElement {
  /** @private */
  _propagateHostAttributes(attributesValues, type) {
    const input = this.inputElement;
    const attributeNames = HOST_PROPS[type];

    if (type === PROP_TYPE.ACCESSIBLE) {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
        this._setOrToggleAttribute(`aria-${attr}`, attributesValues[index] ? 'true' : false, input);
      });
    } else {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
      });
    }
  }

  ready() {
    super.ready();

    // Remove broswer arrows
    const style = document.createElement('style');
    style.innerHTML = `
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }
    `;
    this.appendChild(style);

    // Sync ID and name, then remove name from the host
    const input = this.querySelector('input');
    input.setAttribute('id', this.getAttribute('id'));
    input.setAttribute('name', this.getAttribute('name'));
    this.removeAttribute('name');
  }
}

window.customElements.define('cxl-vaadin-integer-field', CXLIntegerFieldElement);
