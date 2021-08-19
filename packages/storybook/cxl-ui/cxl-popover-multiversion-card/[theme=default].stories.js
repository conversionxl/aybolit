import { CXLPopoverMultiversionCardElement } from '@conversionxl/cxl-ui';
import { html } from 'lit-html';
import { rest } from 'msw';
import playbookCardData from '../cxl-vaadin-accordion/playbook-card.data.json';


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

export const CXLPopoverMultiversionCardThemeDefault = Template.bind({});

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLPopoverMultiversionCardThemeDefault.args = {
  apiUrl:
    'https://cxl.fake/playbooks/1',
  text: 'battle tested',
  href: 'https://cxl.com',
  userId: 555,
  selected: false,
};

// mocking REST endpoints
// more here: https://storybook.js.org/addons/msw-storybook-addon
CXLPopoverMultiversionCardThemeDefault.parameters = {
  msw: [
    rest.get('https://cxl.fake/playbooks/1', (_req, res, ctx) => {
      return res(ctx.json(playbookCardData[0]));
    }),
    rest.get('https://cxl.fake/minidegrees/1', (_req, res, ctx) => {
      return res(ctx.json(playbookCardData[2]));
    }),
  ],
};
