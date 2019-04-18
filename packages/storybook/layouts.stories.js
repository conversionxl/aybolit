import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-theme';

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs';

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('miminal-test', () => {
    return html`
      <vaadin-button>My button</vaadin-button>
      <br /><br />
      <vaadin-tabs>
        <vaadin-tab>Tab one</vaadin-tab>
        <vaadin-tab>Tab two</vaadin-tab>
        <vaadin-tab>Tab three</vaadin-tab>
      </vaadin-tabs>
    `;
  });
