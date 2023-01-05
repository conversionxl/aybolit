import { typography } from '@vaadin/vaadin-lumo-styles';
import { registerGlobalStyles } from './utils.js';
import typographyStyles from './styles/typography-css.js';

registerGlobalStyles(typography, { moduleId: 'vaadin-lumo-styles-typography' });
registerGlobalStyles(typographyStyles, { moduleId: 'cxl-lumo-styles-typography' });
