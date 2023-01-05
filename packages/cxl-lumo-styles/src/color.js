import { color } from '@vaadin/vaadin-lumo-styles';
import { registerGlobalStyles } from './utils.js';
import colorStyles from './styles/color-css.js';

registerGlobalStyles(color, { moduleId: 'vaadin-lumo-styles-color' });
registerGlobalStyles(colorStyles, { moduleId: 'cxl-lumo-styles-color' });
