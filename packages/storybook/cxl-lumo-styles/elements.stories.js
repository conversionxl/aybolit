import '@conversionxl/cxl-lumo-styles';
import '@vaadin/button';
import '@vaadin/notification';
import { html } from 'lit-html';
import cxlLoadingStyles from '@conversionxl/cxl-lumo-styles/src/styles/loading-css.js';
import { CXLAppLayout } from '../cxl-ui/cxl-app-layout/layout=1c.stories';

export default {
  title: 'CXL Lumo Styles/Elements',
};

/**
 * CXLLoadingSpinner.
 *
 * @param Loading
 * @returns {TemplateResult}
 * @constructor
 */
export const CXLLoadingSpinner = ({ Loading }) => {
  setTimeout(() => {
    if (Loading) {
      document.body.setAttribute('unresolved', '');
    } else {
      document.body.removeAttribute('unresolved');
    }
  }, 1000);

  return html`
    <style>
      ${cxlLoadingStyles}
    </style>
    ${CXLAppLayout()}
  `;
};

Object.assign(CXLLoadingSpinner, {
  args: {
    Loading: true,
  },
  storyName: 'body[unresolved] loading',
});

/**
 * VaadinButton.
 *
 * @param Label
 * @returns {TemplateResult}
 * @constructor
 */
export const VaadinButton = ({ Label }) => html`
  <h6>Basic</h6>
  <vaadin-button>${Label}</vaadin-button>
  <h6>Disabled</h6>
  <vaadin-button disabled>${Label}</vaadin-button>
  <h6>Primary</h6>
  <vaadin-button theme="primary">${Label}</vaadin-button>
  <h6>Primary Contrast</h6>
  <vaadin-button theme="primary contrast">${Label}</vaadin-button>
  <h6>Secondary</h6>
  <vaadin-button>${Label}</vaadin-button>
  <h6>Tertiary</h6>
  <vaadin-button theme="tertiary">${Label}</vaadin-button>
  <h6>Tertiary inline</h6>
  <vaadin-button theme="tertiary-inline">${Label}</vaadin-button>
  <h6>Upstream</h6>
  <p>
    Also see
    <a href="https://vaadin.com/components/vaadin-button/html-examples"
      >https://vaadin.com/components/vaadin-button/html-examples</a
    >
  </p>
`;

Object.assign(VaadinButton, {
  args: {
    Label: 'Button',
  },
  storyName: '<vaadin-button>',
});

/**
 * VaadinNotification.
 *
 * @param Duration
 * @param Position
 * @param Theme
 * @returns {TemplateResult}
 * @constructor
 */
export const VaadinNotification = ({ Duration, Position, Theme }) => html`
  <vaadin-notification position="${Position}" duration="${Duration}" theme="${Theme}">
    <template>
      <!-- Must be static, or story will crash when editing Message control. -->
      <div>Eat, sleep and pray well.</div>
    </template>
  </vaadin-notification>
  <vaadin-button theme="primary" onclick="document.querySelector('vaadin-notification').open()"
    >Trigger notification</vaadin-button
  >
  <p>
    We have optimized upstream flexbox CSS specifically for
    <strong>"(bottom|top)-center"</strong> and <strong>"middle"</strong> positions.
  </p>
  <p>This causes display glitches for other positions.</p>
  <p>
    Also see
    <a href="https://vaadin.com/components/vaadin-notification/html-examples"
      >https://vaadin.com/components/vaadin-notification/html-examples</a
    >
  </p>
`;

Object.assign(VaadinNotification, {
  args: {
    Duration: 3000,
    Position: 'top-center',
    Theme: 'default',
  },
  argTypes: {
    Position: {
      control: {
        options: [
          'top-stretch',
          'top-start',
          'top-center',
          'top-end',
          'middle',
          'bottom-start',
          'bottom-center',
          'bottom-end',
          'bottom-stretch',
        ],
        type: 'inline-radio',
      },
    },
    Theme: {
      control: {
        options: ['default', 'primary', 'contrast', 'success', 'error'],
        type: 'inline-radio',
      },
    },
  },
  storyName: '<vaadin-notification>',
});
