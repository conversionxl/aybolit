import { html } from 'lit-html';

const Template = ({ apiUrl, text, href, userId, postType, selected }) => html`
  <p>This is some paragraph</p>
  <p>This is some paragraph</p>
  <p>
    If you are providing a hyper-niche solution, a
    <cxl-popover-card
      apiUrl=${apiUrl}
      postType=${postType}
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
// arg types: https://storybook.js.org/docs/web-components/essentials/controls#annotation
CXLPopoverCardThemeDefault.argTypes = {
  postType: {
    options: ['playbook', 'minidegree'],
    control: { type: 'select' },
    name: 'Post type',
    defaultValue: 'playbook',
  },
  apiUrl: {
    name: 'API URL',
    control: { type: 'text' },
    defaultValue: 'https://cxl.fake/playbooks/1',
  },
  href: {
    name: 'Anchor URL',
    control: { type: 'text' },
    defaultValue: 'https://cxl.com',
  },
  text: {
    name: 'Anchor text',
    control: { type: 'text' },
    defaultValue: 'battle tested',
  },
  userId: {
    name: 'User id',
    control: { type: 'number' },
    defaultValue: 123,
  },
  selected: {
    name: 'Is selected',
    control: { type: 'boolean' },
    defaultValue: false,
  },
};
