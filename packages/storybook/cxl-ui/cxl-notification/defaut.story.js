import '@vaadin/button';
import '@vaadin/horizontal-layout';
import { html } from 'lit';
import '../../../cxl-ui/src/components/cxl-notification';

// eslint-disable-next-line no-empty-pattern
export const DefaultStory = ({}) => html`
  <cxl-notification duration="0" position="middle" theme="error">
    <vaadin-horizontal-layout theme="padding spacing" style="align-items: center;">
      <div>Failed to submit form.</div>
      <vaadin-button theme="tertiary-inline" aria-label="Close" class="close">
        <vaadin-icon icon="lumo:cross"></vaadin-icon>
      </vaadin-button>
    </vaadin-horizontal-layout>
  </cxl-notification>
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
