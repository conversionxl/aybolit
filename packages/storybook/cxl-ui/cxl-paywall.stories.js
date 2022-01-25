import '../../cxl-ui/src/components/cxl-paywall';

import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { loremIpsum } from 'lorem-ipsum';

const content = loremIpsum({ count: 10, format: 'html', units: 'paragraphs' });

export default {
  title: 'CXL UI/Paywall',
  component: 'cxl-paywall',
};

const Template = ({ _count, _limit, delay, message, opacity, subscribed }) => html`
  <cxl-paywall
    ._count=${_count}
    ._limit=${_limit}
    delay=${delay}
    opacity=${opacity}
    ?subscribed=${subscribed}
  >
    <div slot="message">
      <span>${message}</span>
    </div>
    ${unsafeHTML(content)}
  </cxl-paywall>
`;

export const Default = (args) => Template(args);

Default.args = {
  _count: 0,
  _limit: 10,
  delay: 1000,
  message: "You have reached you're limit of free playbooks.",
  opacity: 0.2,
  subscribed: false,
};

Default.argTypes = {
  _count: {
    name: 'Count',
    control: { type: 'range', min: 0, max: 100 },
  },
  _limit: {
    name: 'Limit',
  },
  delay: {
    name: 'Delay',
  },
  message: {
    name: 'Message',
  },
  opacity: {
    name: 'Opacity',
    control: { type: 'range', min: 0, max: 1, step: 0.1 },
  },
  subscribed: {
    name: 'Subscribed',
  },
};
