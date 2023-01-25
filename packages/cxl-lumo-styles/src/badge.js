import { badge } from '@vaadin/vaadin-lumo-styles';
import { registerGlobalStyles } from './utils.js';
import badgeStyles from './styles/badge-css.js';

registerGlobalStyles(badge, { moduleId: 'vaadin-lumo-styles-badge' });
registerGlobalStyles(badgeStyles, { moduleId: 'cxl-lumo-styles-badge' });
