import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-accordion';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlAdeftAccordionGlobalStyles from '../styles/global/cxl-adeft-accordion-css.js';
import { CXLVaadinAccordion } from './cxl-vaadin-accordion';

/**
 * Allows opening multiple panels simultaneously.
 * Saves panel state, restores on page load.
 */
@customElement('cxl-adeft-accordion')
export class CXLAdeftAccordion extends CXLVaadinAccordion {
  /**
   * Global styles.
   */
  ready() {
    super.ready();

    registerGlobalStyles(cxlAdeftAccordionGlobalStyles, {
      moduleId: 'cxl-adeft-accordion-global'
    });
  }
}
