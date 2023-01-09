import { customElement } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import { AccordionPanel } from '@vaadin/accordion/src/vaadin-accordion-panel';

@customElement('cxl-accordion-card')
export class CXLAccordionCardElement extends AccordionPanel {
  ready() {
    super.ready();

    // Stop card open on title click.
    this.querySelectorAll(':any-link').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  }

  static get is() {
    return 'cxl-accordion-card';
  }
}
