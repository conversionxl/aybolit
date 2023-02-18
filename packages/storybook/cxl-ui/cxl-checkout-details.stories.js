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
  parameters: {
    layout: 'centered',
  },
  title: 'CXL UI/cxl-checkout-details',
};

// eslint-disable-next-line no-empty-pattern
const Template = ({ theme }) => html`
  <cxl-checkout-details
    fields="billing_email billing_first_name billing_last_name"
    step="billing-details"
    theme=${theme}
  >
    <div slot="summary">
      Billing Details<span class="summary-field" hidden>
        - <span class="summary-field-value"></span
      ></span>
    </div>
    <div>
      <input id="billing_email" type="text" placeholder="Email" />
      <input id="billing_first_name" type="text" placeholder="First Name" />
      <input id="billing_last_name" type="text" placeholder="Last Name" />
    </div>
  </cxl-checkout-details>
  <cxl-checkout-details
    fields="billing_address_1 billing_address_2 billing_city billing_state billing_postcode"
    step="billing-information"
    theme=${theme}
  >
    <div slot="summary">
      Billing Address<span class="summary-field" hidden>
        - <span class="summary-field-value"></span
      ></span>
    </div>
    <div>
      <input id="billing_address_1" type="text" placeholder="Address 1" />
      <input id="billing_address_2" type="text" placeholder="Address 2" />
      <input id="billing_city" type="text" placeholder="City" />
      <input id="billing_state" type="text" placeholder="State" />
      <input id="billing_postcode" type="text" placeholder="Postcode" />
    </div>
  </cxl-checkout-details>
  <cxl-checkout-details fields="cardnumber" step="payment" theme=${theme}>
    <div slot="summary">
      Payment<span class="summary-field" hidden> - <span class="summary-field-value"></span></span>
    </div>
    <div>
      <input name="cardnumber" type="text" placeholder="Card Number" />
    </div>
  </cxl-checkout-details>
`;

export const Checkout = Template.bind({});
