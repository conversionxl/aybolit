import { rest } from 'msw';
import { CXLPopoverCardThemeDefault } from './cxl-popover-card/[theme=default].story';
import playbookCardData from './cxl-vaadin-accordion/playbook-card.data.json';
import hubsData from './cxl-vaadin-accordion/hub-card.data.json';

const parameters = {
  msw: [
    rest.get('https://cxl.fake/playbooks/1', (_req, res, ctx) => {
      return res(ctx.json(playbookCardData[0]));
    }),
    rest.get('https://cxl.fake/minidegrees/1', (_req, res, ctx) => {
      return res(ctx.json(playbookCardData[2]));
    }),
    rest.get('https://cxl.fake/hubs/1', (_req, res, ctx) => {
      return res(ctx.json(hubsData[0]));
    }),
  ],
};

// mocking REST endpoints
// more here: https://storybook.js.org/addons/msw-storybook-addon
CXLPopoverCardThemeDefault.parameters = parameters;

CXLPopoverCardThemeDefault.storyName = '[theme=default].cxl-popover-card';

export default {
  title: 'CXL UI/cxl-popover-card',
};

export {
  CXLPopoverCardThemeDefault,
};
