import '@conversionxl/cxl-lumo-styles';
import '@vaadin/details';
import { Details } from '@vaadin/details/src/vaadin-details';
import { customElement } from 'lit/decorators.js';

@customElement('cxl-checkout-details')
export class CXLCheckoutDetailsElement extends Details {
  get _checkoutFieldsSummaryElement() {
    return this.querySelector('[theme="cxl-checkout-fields-summary"]');
  }

  ready() {
    super.ready();

    // First render.
    this._onSummaryClosed();

    // Panel toggles.
    this.addEventListener('opened-changed', (e) => {
      let isOpened = e.detail.value;

      // Fire only when closing.
      if (! isOpened) {
        this._onSummaryClosed();
      }

      this._checkoutFieldsSummaryElement.hidden = isOpened;
    });
  }

  _getCheckoutFieldsSummary() {
    const fieldsAttr = this.getAttribute('fields');

    // Sanity check.
    if (! fieldsAttr) {
      return '';
    }

    // Engage.
    const fields = fieldsAttr.split(' ');
    const values = [];

    fields.forEach((field) => {
      const isRequired = ( field.indexOf('*') !== -1 );

      field = field.replace('*', '');

      const el = this.querySelector(`#${field}`) || this.querySelector(`[name=${field}]`);

      if (el && el.value) {
        values.push(el.value);
      } else {
        // Avoid alerts for non-required fields.
        if (isRequired) {
          values.push('<vaadin-icon icon="lumo:cross"></vaadin-icon>')
        }
      }
    });

    return values.join(' &mdash; ');
  }

  _onSummaryClosed() {
    const checkoutFieldsSummary = this._getCheckoutFieldsSummary();

    if (checkoutFieldsSummary && this._checkoutFieldsSummaryElement ) {
      this._checkoutFieldsSummaryElement.innerHTML = checkoutFieldsSummary;
    }
  }

  static get is() {
    return 'cxl-checkout-details';
  }
}
