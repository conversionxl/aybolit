import { CXLAppLayout1c } from './cxl-app-layout/layout=1c.story';
import { CXLAppLayout1cc } from './cxl-app-layout/layout=1c-c.story';
import { CXLAppLayout1cw } from './cxl-app-layout/layout=1c-w.story';
import { CXLAppLayout2cl } from './cxl-app-layout/layout=2c-l.story';
import { CXLAppLayout2cr } from './cxl-app-layout/layout=2c-r.story';

export default {
  title: 'CXL UI/cxl-app-layout',
};

Object.assign(CXLAppLayout1c, {
  args: {
    backgroundColor: 'var(--lumo-shade-5pct)',
    hasWave: true,
  },
  storyName: '[layout=1c] (default)',
});

CXLAppLayout1cc.storyName = '[layout=1c-c]';
CXLAppLayout1cw.storyName = '[layout=1c-w]';

Object.assign(CXLAppLayout2cl, {
  args: {
    postId: 1234,
    userId: 5678,
    playbookSaved: false,
    hasWidgetBackground: false,
  },
  storyName: '[layout=2c-l]',
});

Object.assign(CXLAppLayout2cr, {
  args: {
    hasWidgetBackground: false,
  },
  storyName: '[layout=2c-r]',
});

export { CXLAppLayout1c, CXLAppLayout1cc, CXLAppLayout1cw, CXLAppLayout2cl, CXLAppLayout2cr };
