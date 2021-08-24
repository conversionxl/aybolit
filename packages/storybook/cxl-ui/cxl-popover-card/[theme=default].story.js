import { html } from 'lit-html';

const Template = ({ apiUrl, text, href, userId, selected }) => html`
  <p>This is some paragraph</p>
  <p>This is some paragraph</p>
  <p>
    If you are providing a hyper-niche solution, a
    <cxl-popover-card
      apiUrl=${apiUrl}
      userId=${userId}
      ?selected=${selected}
      text=${text}
      href=${href}
    >
    </cxl-popover-card>
    sales-led approach will work best.
  </p>
`;

export const CXLPopoverCardThemeDefault = Template.bind({});

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLPopoverCardThemeDefault.args = {
  apiUrl:
    'https://cxl.fake/playbooks/1',
  text: 'battle tested',
  href: 'https://cxl.com',
  userId: 555,
  selected: false,
};
