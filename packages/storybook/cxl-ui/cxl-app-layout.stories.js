import { html, nothing } from 'lit';
import { CXLAppLayout1cContent } from './cxl-app-layout/layout=1c.story';
import { CXLAppLayout1cwContent } from './cxl-app-layout/layout=1c-w.story';
import { CXLAppLayout2clContent } from './cxl-app-layout/layout=2c-l.story';
import { CXLAppLayout2crContent } from './cxl-app-layout/layout=2c-r.story';
import { CXLMarketingNav } from './cxl-marketing-nav.stories';
import { CXLFooterNav } from './footer-nav.stories';

export default {
  title: 'CXL UI/cxl-app-layout',
};

const CXLAppLayout = {
  render: ({ layout, scroll, content }) => html`
    <style>
      .entry-content ul {
        font-family: var(--cxl-lumo-font-secondary), serif;
      }
    </style>

    <cxl-app-layout id="container" layout="${layout}" scroll="${scroll || nothing}">
      ${CXLMarketingNav()} ${content} ${scroll === 'panels' ? nothing : CXLFooterNav()}
    </cxl-app-layout>
  `,
};

// @see https://storybook.js.org/docs/7.0/web-components/writing-stories/stories-for-multiple-components
export const CXLAppLayout1c = {
  ...CXLAppLayout,
  args: {
    content: CXLAppLayout1cContent,
    layout: '1c',
  },
  name: '[layout=1c] (default)',
};

export const CXLAppLayout1cc = {
  ...CXLAppLayout,
  args: {
    ...CXLAppLayout1c.args,
    layout: '1c-c',
  },
  name: '[layout=1c-c]',
};

export const CXLAppLayout1cw = {
  ...CXLAppLayout,
  args: {
    content: CXLAppLayout1cwContent,
    layout: '1c-w',
  },
  name: '[layout=1c-w]',
};

export const CXLAppLayout2cl = {
  ...CXLAppLayout,
  args: {
    content: CXLAppLayout2clContent({
      postId: 1234,
      userId: 5678,
      playbookSaved: false,
      hasWidgetBackground: false,
    }),
    layout: '2c-l',
    scroll: 'panels',
  },
  name: '[layout=2c-l]',
};

export const CXLAppLayout2cr = {
  ...CXLAppLayout,
  args: {
    content: CXLAppLayout2crContent({
      hasWidgetBackground: false,
    }),
    layout: '2c-r',
    scroll: 'panels',
  },
  name: '[layout=2c-r]',
};
