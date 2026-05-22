import '@conversionxl/cxl-ui/src/components/cxl-button.js';
import { html } from 'lit';

export default {
  title: 'CXL UI/cxl-button',
  parameters: {
    layout: 'centered',
  },
};

export const CXLButton = ({ href, target }) => html`
  <cxl-button href=${href} target=${target}>Button</cxl-button>
`;

CXLButton.storyName = 'cxl-button';
CXLButton.args = {
  href: 'https://cxl.com',
  target: '_blank',
};
