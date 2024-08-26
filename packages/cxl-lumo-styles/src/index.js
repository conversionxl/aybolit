import './badge.js';
import './color.js';
import './typography.js';
import './themes.js';
import './icons.js';
import { registerGlobalStyles } from './utils.js';
import globalStyles from './styles/global-css.js';

registerGlobalStyles(globalStyles, {
  moduleId: 'cxl-lumo-styles-global',
});
