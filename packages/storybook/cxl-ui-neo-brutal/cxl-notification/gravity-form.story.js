import '@vaadin/button';
import '@vaadin/horizontal-layout';
import { html } from 'lit';
import '../../../cxl-ui/src/components/cxl-notification';

// eslint-disable-next-line no-empty-pattern
export const GravityFormStory = ({}) => html`
  <div class="vaadin-notification__dialog-wrap">
    <cxl-notification
      id="gform_83_vaadin_notification_1"
      _opened
      duration="3000"
      position="top-center"
      theme="error"
    >
      <vaadin-horizontal-layout theme="spacing" class="vaadin-notification__dialog-content">
        <h2 class="gform_submission_error hide_summary">
          <span class="gform-icon gform-icon--close"></span>There was a problem with your
          submission. Please review the fields below.
        </h2>
        <vaadin-button
          aria-label="Toggle Notification"
          theme="primary icon"
          onclick="document.getElementById('gform_83_vaadin_notification_1').close()"
        >
          <vaadin-icon icon="lumo:cross"></vaadin-icon>
        </vaadin-button>
      </vaadin-horizontal-layout>
    </cxl-notification>
  </div>
  <div class="vaadin-notification__dialog-wrap">
    <cxl-notification
      id="gform_20_vaadin_notification_1"
      _opened
      duration="3000"
      position="top-center"
      theme="success"
    >
      <vaadin-horizontal-layout theme="spacing" class="vaadin-notification__dialog-content">
        <div
          id="gform_confirmation_wrapper_20"
          class="gform_confirmation_wrapper da-md-ga-beginner-lead-form"
        >
          <div
            id="gform_confirmation_message_20"
            class="gform_confirmation_message_20 gform_confirmation_message"
          >
            <div class="free-course--email-confirmation">
              <h3>Got it! We're sending a link to the course introduction video to your email.</h3>
              <h4>Please allow up to 2 hours for the email to send.</h4>
            </div>
          </div>
        </div>
        <vaadin-button
          aria-label="Toggle Notification"
          theme="primary icon"
          onclick="document.getElementById('gform_20_vaadin_notification_1').close()"
        >
          <vaadin-icon icon="lumo:cross"></vaadin-icon>
        </vaadin-button>
      </vaadin-horizontal-layout>
    </cxl-notification>
  </div>
  <button id="open-validation">Open Validation Notification</button>
  <button id="open-confirmation">Open Confirmation Notification</button>
  <button id="close" class="close">Close</button>
  <script>
    document.querySelector('#open-validation').addEventListener('click', () => {
      const validationNotification = document.querySelector(
        'cxl-notification#gform_83_vaadin_notification_1'
      );
      validationNotification.open();
      validationNotification.setAttribute('duration', '0');
    });

    document.querySelector('#open-confirmation').addEventListener('click', () => {
      const confirmationNotification = document.querySelector(
        'cxl-notification#gform_20_vaadin_notification_1'
      );
      confirmationNotification.open();
      confirmationNotification.setAttribute('duration', '0');
    });

    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('cxl-notification').close();
    });
  </script>
`;
