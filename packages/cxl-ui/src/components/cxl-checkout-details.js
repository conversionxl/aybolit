import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import { Details } from '@vaadin/details/src/vaadin-details';
import { customElement } from 'lit/decorators.js';
import cxlCheckoutDetailsGlobalStyles from '../styles/global/cxl-checkout-details-css.js';

@customElement('cxl-checkout-details')
export class CXLCheckoutDetailsElement extends Details {
  __fieldValues = {};

  ready() {
    super.ready();

    registerGlobalStyles(cxlCheckoutDetailsGlobalStyles, {
      moduleId: 'cxl-checkout-details-global',
    });

    this.addEventListener('opened-changed', (e) => {
      // Fire only when closing.
      if (!e.detail.value) {
        this.__onOpenedChanged(e);
      }
    });
  }

  __getFieldValues() {
    const values = {};
    const fields = this.getAttribute('fields').split(' ');
    let hasValues = false;

    // Get the values from the fields
    fields.forEach((field) => {
      const el = this.querySelector(`#${field}`) || this.querySelector(`[name=${field}]`);

      if (el && el.value) {
        values[field] = el.value;
        hasValues = true;
      } else {
        values[field] = '';
      }
    });

    // Check if the values object is populated
    if (!hasValues) {
      values = false;
    }

    return values;
  }

  __onOpenedChanged(e) {
    const values = this.__getFieldValues();

    if (!values) {
      this.querySelector('.summary-field').hidden = true;
      return;
    }

    let summaryFieldValue;

    switch (this.getAttribute('step')) {
      case 'billing-details': {
        summaryFieldValue = `${values['billing_first_name']} ${values['billing_last_name']}, ${values['billing_email']}`;
        break;
      }

      case 'billing-information': {
        summaryFieldValue = `${values['billing_address_1']}, ${values['billing_address_2']}, ${values['billing_city']}, ${values['billing_state']}, ${values['billing_postcode']}`;
        break;
      }

      case 'payment': {
        summaryFieldValue = `Card ending in ${values['cardnumber'].slice(-4)}`;
        break;
      }
    }

    this.querySelector('.summary-field-value').innerText = summaryFieldValue;
    this.querySelector('.summary-field').hidden = false;
  }
}
