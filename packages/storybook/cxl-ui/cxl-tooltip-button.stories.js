import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-tooltip-button.js';

export default {
  title: 'CXL UI/cxl-tooltip-button',
};

// eslint-disable-next-line no-empty-pattern
const Template = ({}) => html`<cxl-tooltip-button></cxl-tooltip-button>`;

export const Default = Template.bind({});

Object.assign(Default, {
  args: {},
});
