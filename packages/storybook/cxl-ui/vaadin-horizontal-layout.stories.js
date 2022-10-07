import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/index-core.js';
import { html, render } from 'lit';

export default {
  title: 'Vaadin/Horizontal Layout',
};

const renderer = (root) => {
  render(
    html`
      <vaadin-horizontal-layout theme="padding spacing">
        <vaadin-button>Button One</vaadin-button>
        <vaadin-button>Button Two</vaadin-button>
        <vaadin-button>Button Three</vaadin-button>
      </vaadin-horizontal-layout>
    `,
    root
  );
};

// eslint-disable-next-line no-empty-pattern
const Template = ({}) => html`
  <vaadin-notification
    duration="0"
    position="middle"
    opened
    .renderer=${renderer}
  ></vaadin-notification>
`;

export const Notification = Template.bind({});
