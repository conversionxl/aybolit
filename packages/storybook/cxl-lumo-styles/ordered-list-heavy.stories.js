import '@conversionxl/cxl-lumo-styles';
import { html } from 'lit';

export default {
  parameters: {
    layout: 'centered',
  },
  title: 'CXL Lumo Styles',
};

export const OrderedListHeavy = () =>
  html`
    <style>
      .container {
        max-width: 512px;
      }
    </style>
    <div class="container">
      <ol class="ordered-list-heavy">
        <li>
          <div class="content">
            <span class="title">Learn from experts</span>
            <p>Full access to 90+ courses and 11 minidegrees</p>
          </div>
        </li>
        <li>
          <div class="content">
            <span class="title">Get certified</span>
            <p>Get certified and noticed by future employers</p>
          </div>
        </li>
        <li>
          <div class="content">
            <span class="title">Apply playbooks</span>
            <p>Step-by-step playbooks to easily apply tactics in real life situations</p>
          </div>
        </li>
        <li>
          <div class="content">
            <span class="title">Expert support</span>
            <p>Get expert and peer support in our community</p>
          </div>
        </li>
      </ol>
    </div>
  `;
