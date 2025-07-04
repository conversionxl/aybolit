import { html } from 'lit';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/button';
import '@vaadin/notification';
import cxlLoadingStyles from '@conversionxl/cxl-lumo-styles/src/styles/loading-css';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Elements',
};

/**
 * VaadinButton.
 *
 * @param Label
 * @returns {TemplateResult}
 * @constructor
 */
export const VaadinButton = ({ Label }) => {
  document.body.removeAttribute('unresolved');

  return html`
    <style>
      ${cxlLoadingStyles}
    </style>
    <h6>Basic</h6>
    <vaadin-button>${Label}</vaadin-button>
    <h6>Disabled</h6>
    <vaadin-button disabled>${Label}</vaadin-button>
    <h6>Primary</h6>
    <vaadin-button theme="primary">${Label}</vaadin-button>
    <h6>Primary Contrast</h6>
    <vaadin-button theme="primary contrast">${Label}</vaadin-button>
    <h6>Primary Pending</h6>
    <vaadin-button pending theme="primary">${Label}</vaadin-button>
    <h6>Secondary</h6>
    <vaadin-button theme="secondary">${Label}</vaadin-button>
    <h6>Secondary Contrast</h6>
    <vaadin-button theme="secondary contrast">${Label}</vaadin-button>
    <h6>Secondary Pending</h6>
    <vaadin-button pending theme="secondary">${Label}</vaadin-button>
    <h6>Tertiary</h6>
    <vaadin-button theme="tertiary">${Label}</vaadin-button>
    <h6>Tertiary Contrast</h6>
    <vaadin-button theme="tertiary contrast">${Label}</vaadin-button>
    <h6>Linkedin</h6>
    <vaadin-button theme="linkedin"
      >${Label} <vaadin-icon icon="cxl:linkedin" slot="prefix"></vaadin-icon
    ></vaadin-button>

    <h6>Upstream</h6>
    <p>
      Also see
      <a href="https://vaadin.com/components/vaadin-button/html-examples"
        >https://vaadin.com/components/vaadin-button/html-examples</a
      >
    </p>
  `;
};

Object.assign(VaadinButton, {
  args: {
    Label: 'Button',
  },
  storyName: 'vaadin-button',
});

/**
 * VaadinHorizontalLayout.
 *
 * @returns {TemplateResult}
 * @constructor
 */
export const VaadinHorizontalLayout = () => html`
  <vaadin-horizontal-layout theme="padding spacing" style="justify-content: center;">
    <vaadin-button>Button One</vaadin-button>
    <vaadin-button>Button Two</vaadin-button>
    <vaadin-button>Button Three</vaadin-button>
  </vaadin-horizontal-layout>
`;

Object.assign(VaadinHorizontalLayout, {
  storyName: 'vaadin-horizontal-layout',
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
  storyName: 'vaadin-notification',
});

/**
 * VaadinTooltip.
 *
 * @param Text
 * @returns {TemplateResult}
 * @constructor
 */
export const VaadinTooltip = ({ Text }) => {
  const manualTrigger = boolean('Manual trigger', false);

  return html`
    <h1 id="h1-entry-title" class="entry-title" style="margin-top: 0.75em;">
      <vaadin-tooltip
        for="h1-entry-title"
        ?opened=${manualTrigger}
        ?manual=${manualTrigger}
        position="top-start"
        text="${Text}"
      ></vaadin-tooltip>
      Grow faster.
    </h1>
  `;
};

Object.assign(VaadinTooltip, {
  args: {
    Text: 'Status: publish',
  },
  storyName: 'vaadin-tooltip',
});

export const VaadinBadge = () => html`
  <span theme="badge">Badge</span>
  <span theme="badge success">Success</span>
  <span theme="badge error">Error</span>
  <span theme="badge contrast">Contrast</span>
`;

Object.assign(VaadinBadge, {
  args: {
    Label: 'Badge',
  },
  storyName: 'Badge',
});
