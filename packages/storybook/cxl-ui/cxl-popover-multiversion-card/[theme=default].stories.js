import { CXLPopoverMultiversionCardElement } from '@conversionxl/cxl-ui';
import { html } from 'lit-html';

export default {
  title: 'CXL UI/cxl-popover-multiversion-card',
  component: CXLPopoverMultiversionCardElement,
};

const Template = ({ apiUrl, text, href, userId, selected }) => html`
  <p>This is some paragraph</p>
  <p>This is some paragraph</p>
  <p>
    If you are providing a hyper-niche solution, a
    <cxl-popover-multiversion-card
      apiUrl=${apiUrl}
      userId=${userId}
      ?selected=${selected}
      text=${text}
      href=${href}
    >
    </cxl-popover-multiversion-card>
    sales-led approach will work best.
  </p>
`;

export const CXLSaveFavoriteThemeDefault = Template.bind({});

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLSaveFavoriteThemeDefault.args = {
  apiUrl:
    'https://my-json-server.typicode.com/dominik-stypula-polcode/cxl-playbooks-database/playbooks/442534',
  text: 'battle tested',
  href: 'https://cxl.com',
  userId: 555,
  selected: false,
};
