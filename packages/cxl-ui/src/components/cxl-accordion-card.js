import { customElement } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import { AccordionPanel } from '@vaadin/accordion/src/vaadin-accordion-panel';

@customElement('cxl-accordion-card')
export class CXLAccordionCardElement extends AccordionPanel {
  static get is() {
    return 'cxl-accordion-card';
  }
}
