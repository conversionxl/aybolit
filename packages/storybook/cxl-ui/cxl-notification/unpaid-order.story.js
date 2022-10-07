import '@vaadin/button';
import '@vaadin/horizontal-layout';
import { html } from 'lit';
import '../../../cxl-ui/src/components/cxl-notification';

// eslint-disable-next-line no-empty-pattern
export const UnPaidOrderStory = ({}) => html`
  <div class="vaadin-notification__dialog-wrap">
    <cxl-notification
      _opened
      id="6351798_vaadin_notification_1"
      duration="0"
      position="bottom-stretch"
      theme="default max-w-full justify-center"
    >
      <vaadin-horizontal-layout theme="spacing" class="vaadin-notification__dialog-content">
        <p>
          You already have existing un-paid order, please click <a href="https:/#">Pay now</a> to
          proceed.
        </p>
        <vaadin-button
          aria-label="Toggle Notification"
          theme="primary icon"
          onclick="document.getElementById('6351798_vaadin_notification_1').close()"
        >
          <iron-icon icon="lumo:cross"></iron-icon>
        </vaadin-button>
      </vaadin-horizontal-layout>
    </cxl-notification>
  </div>
  <button id="open">Open</button>
  <button id="close" class="close">Close</button>
  <script>
    document.querySelector('#open').addEventListener('click', () => {
      document.querySelector('cxl-notification').open();
    });

    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('cxl-notification').close();
    });
  </script>
`;
