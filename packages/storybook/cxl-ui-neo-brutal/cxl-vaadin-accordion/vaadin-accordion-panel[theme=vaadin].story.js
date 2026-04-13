import { html, nothing } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-checkout-details.js';

export const CXLVaadinAccordionThemeVaadin = ({ opened }) => html`
  <style>
    h3 {
      font-size: var(--lumo-font-size-xl);
      font-weight: 900;
      margin: unset;
    }

    label {
      display: block;
      font-weight: bold;
      text-transform: uppercase;
    }
  </style>
  <cxl-checkout-details
    fields="payment_method_stripe payment_method_bacs"
    opened="${opened || nothing}"
    theme="reverse"
  >
    <div slot="summary">
      <h3 id="payment_heading">PAYMENT</h3>
      <vaadin-horizontal-layout theme="cxl-checkout-fields-summary"></vaadin-horizontal-layout>
    </div>
    <vaadin-accordion class="wc_payment_methods">
      <vaadin-accordion-panel
        class="wc_payment_method payment_method_stripe"
        theme="reverse vaadin"
      >
        <div slot="summary">
          <label for="payment_method_stripe">
            <input
              id="payment_method_stripe"
              class="input-radio"
              type="radio"
              name="payment_method"
              value="stripe"
              checked="checked"
              onchange="if (this.checked) this.closest('vaadin-accordion-panel').setAttribute('opened', '')"
            />
            Pay by Credit Card
          </label>
        </div>
        <div class="payment_box payment_method_stripe">
          <p>
            TEST MODE ENABLED. In test mode, you can use the card number 4242424242424242 with any
            CVC and a valid expiration date or check the
            <a href="https://stripe.com/docs/testing" target="_blank"
              >Testing Stripe documentation</a
            >
            for more card numbers.
          </p>
        </div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel class="wc_payment_method payment_method_bacs" theme="reverse vaadin">
        <div slot="summary">
          <label for="payment_method_bacs">
            <input
              id="payment_method_bacs"
              class="input-radio"
              type="radio"
              name="payment_method"
              value="bacs"
              onchange="if (this.checked) this.closest('vaadin-accordion-panel').setAttribute('opened', '')"
            />
            Pay by Invoice / Bank Wire Transfer
          </label>
        </div>
        <div class="payment_box payment_method_bacs">
          <p>
            Make your payment directly into our bank account. You will receive an order confirmation
            with payment info in your e-mail.
          </p>
          <p>Please use your Order ID as the payment reference.</p>
          <p>
            Your subscription(s) and/or membership(s) will be activated when the funds have cleared.
          </p>
        </div>
      </vaadin-accordion-panel>
    </vaadin-accordion>
  </cxl-checkout-details>
`;
