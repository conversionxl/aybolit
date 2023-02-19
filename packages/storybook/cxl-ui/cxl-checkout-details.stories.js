import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-checkout-details.js';
import { html } from 'lit';
import { CXLVaadinAccordionThemeVaadin} from "./cxl-vaadin-accordion/vaadin-accordion-panel[theme=vaadin].story";

export default {
  title: 'CXL UI/cxl-checkout-details',
};

// eslint-disable-next-line no-empty-pattern
const Template = () => html`
  <vaadin-details theme="cxl-checkout-details reverse" opened>
    <div slot="summary">
      <h3 id="coupons_heading">Coupons</h3>
    </div>
    <p class="form-row form-row-first form-row-last">
      <input type="text" name="coupon_code" class="input-text" placeholder="Enter your coupon code here" id="coupon_code" value="">
      <button type="submit" class="button wp-element-button" name="apply_coupon" theme="primary" value="Apply">Apply</button>
    </p>
  </vaadin-details>
  <cxl-checkout-details
    fields="billing_email* billing_first_name* billing_last_name* billing_company"
    opened
    theme="reverse"
  >
    <div slot="summary">
      <h3 id="billing_details_heading">Billing details</h3>
      <vaadin-horizontal-layout theme="cxl-checkout-fields-summary"></vaadin-horizontal-layout>
    </div>
    <div>
      <p class="form-row form-row-first">
        <label>
          Your e-mail address
          <input id="billing_email" type="text" placeholder="Email" value="john@wick.com" />
        </label>
      </p>
      <p class="form-row">
        <label>
          First name
          <input id="billing_first_name" type="text" placeholder="First Name" value="John" />
        </label>
      </p>
      <p class="form-row">
        <label>
          Last name
          <input id="billing_last_name" type="text" placeholder="Last Name" value="" />
        </label>
      </p>
      <p class="form-row form-row-last">
        <label>
          Company (optional)
          <input id="billing_company" type="text" placeholder="Company" value="" />
        </label>
      </p>
    </div>
  </cxl-checkout-details>
  <cxl-checkout-details
    fields="billing_country* billing_address_1* billing_address_2 billing_city* billing_state* billing_postcode*"
    theme="reverse"
  >
    <div slot="summary">
      <h3 id="billing_address_heading">Billing address</h3>
      <vaadin-horizontal-layout theme="cxl-checkout-fields-summary"></vaadin-horizontal-layout>
    </div>
    <div>
      <p class="form-row form-row-first">
        <label>
          Country / Region
          <select id="billing_country">
            <option value="US">United States</option>
            <option value="EU">Europe</option>
          </select>
        </label>
      </p>
      <p class="form-row">
        <label>
          Street address
          <input id="billing_address_1" type="text" placeholder="Address 1" value="901 S Mopac Expy" />
          <input id="billing_address_2" type="text" placeholder="Address 2" value="Suite 150" />
        </label>
      </p>
      <p class="form-row">
        <label>
          Town / City
          <input id="billing_city" type="text" placeholder="City" value="Austin" />
        </label>
      </p>
      <p class="form-row">
        <label>
          State
          <input id="billing_state" type="text" placeholder="State" value="TX" />
        </label>
      </p>
      <p class="form-row form-row-last">
        <label>
          ZIP Code
          <input id="billing_postcode" type="text" placeholder="Postcode" value="78746" />
        </label>
      </p>
    </div>
  </cxl-checkout-details>
  ${CXLVaadinAccordionThemeVaadin(true)}
`;

export const Checkout = Template.bind({});
