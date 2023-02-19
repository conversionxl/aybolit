import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import '@vaadin/details';
import { Details } from '@vaadin/details/src/vaadin-details';
import { customElement } from 'lit/decorators.js';
import cxlCheckoutDetailsGlobalStyles from '../styles/global/cxl-checkout-details-css.js';

@customElement('cxl-checkout-details')
export class CXLCheckoutDetailsElement extends Details {
  get _checkoutFieldsSummaryElement() {
    return this.querySelector('[theme="cxl-checkout-fields-summary"]');
  }

  ready() {
    super.ready();

    registerGlobalStyles(cxlCheckoutDetailsGlobalStyles, {
      moduleId: 'cxl-checkout-details-global',
    });

    // Sanity check.
    if (!this._checkoutFieldsSummaryElement) {
      /* eslint-disable-next-line no-console */
      console.warn('Checkout fields summary element not found.');
      return;
    }

    // First render.
    if (!this.opened) {
      this._onSummaryClosed();
    }

    // Panel toggles.
    this.addEventListener('opened-changed', () => {
      // Fire only when closing.
      if (!this.opened) {
        this._onSummaryClosed();
      }

      this._checkoutFieldsSummaryElement.hidden = this.opened;
    });
  }

  _getCheckoutFieldsSummary() {
    const fieldsAttr = this.getAttribute('fields');

    // Sanity check.
    if (!fieldsAttr) {
      return '';
    }

    // Engage.
    const fields = fieldsAttr.split(' ').map((field) => ({
      name: field.replace('*', ''),
      required: field.indexOf('*') !== -1,
    }));
    const values = [];

    fields.forEach((field) => {
      const el = this.querySelector(`#${field.name}`) || this.querySelector(`[name=${field.name}]`);

      if (el && el.value) {
        let value;

        // @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels
        if (el.localName === 'input' && el.type === 'radio') {
          // Skip to next field?
          if (!el.checked) {
            return;
          }

          // Summarize label.
          /* eslint-disable-next-line no-restricted-syntax */
          for (const label of el.labels) {
            value = label.textContent;
          }
        }

        // @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement#get_information_about_the_selected_option
        if (el.localName === 'select') {
          value = el.options[el.selectedIndex].label;
        }

        values.push(value || el.value);
      } else {
        // Avoid alerts for non-required fields.
        /* eslint-disable-next-line no-lonely-if */
        if (field.required) {
          values.push('<vaadin-icon icon="lumo:cross"></vaadin-icon>');
        }
      }
    });

    return values.join(' &mdash; ');
  }

  _onSummaryClosed() {
    const checkoutFieldsSummary = this._getCheckoutFieldsSummary();

    if (checkoutFieldsSummary) {
      this._checkoutFieldsSummaryElement.innerHTML = checkoutFieldsSummary;
    }
  }

  static get is() {
    return 'cxl-checkout-details';
  }
}
