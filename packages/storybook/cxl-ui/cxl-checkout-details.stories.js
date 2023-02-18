import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-checkout-details.js';
import { html } from 'lit';

export default {
  args: {
    theme: 'reverse',
  },
  argTypes: {
    theme: {
      options: ['filled', 'small', 'reverse'],
      control: { type: 'select' },
    },
  },
  title: 'CXL UI/cxl-checkout-details',
};

// eslint-disable-next-line no-empty-pattern
const Template = ({ theme }) => html`
  <style>
    h3 {
      font-size: var(--lumo-font-size-xl);
      margin: unset;
      text-transform: uppercase;
    }
  </style>

  <cxl-checkout-details
    fields="billing_email billing_first_name billing_last_name"
    theme=${theme}
  >
    <div slot="summary">
      <h3 id="billing_details_heading">Billing details</h3>
      <vaadin-horizontal-layout theme="cxl-checkout-fields-summary"></vaadin-horizontal-layout>
    </div>
    <div>
      <input id="billing_email" type="text" placeholder="Email" value="john@wick.com" />
      <input id="billing_first_name" type="text" placeholder="First Name" value="John" />
      <input id="billing_last_name" type="text" placeholder="Last Name" value="" />
    </div>
  </cxl-checkout-details>
  <cxl-checkout-details
    fields="billing_address_1 billing_address_2 billing_city billing_state billing_postcode"
    theme=${theme}
  >
    <div slot="summary">
      <h3 id="billing_address_heading">Billing address</h3>
      <vaadin-horizontal-layout theme="cxl-checkout-fields-summary"></vaadin-horizontal-layout>
    </div>
    <div>
      <input id="billing_address_1" type="text" placeholder="Address 1" value="901 S Mopac Expy" />
      <input id="billing_address_2" type="text" placeholder="Address 2" value="Suite 150" />
      <input id="billing_city" type="text" placeholder="City" value="Austin" />
      <input id="billing_state" type="text" placeholder="State" value="TX" />
      <input id="billing_postcode" type="text" placeholder="Postcode" value="78746" />
    </div>
  </cxl-checkout-details>
  <cxl-checkout-details fields="cardnumber" theme=${theme}>
    <div slot="summary">
      <h3 id="payment_heading">Payment</h3>
      <vaadin-horizontal-layout theme="cxl-checkout-fields-summary"></vaadin-horizontal-layout>
    </div>
    <div>
      <input name="cardnumber" type="text" placeholder="Card Number" />
    </div>
  </cxl-checkout-details>
`;

export const Checkout = Template.bind({});
