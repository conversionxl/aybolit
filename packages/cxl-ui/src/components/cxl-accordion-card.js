import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { AccordionPanel } from '@vaadin/accordion/src/vaadin-accordion-panel';

@customElement('cxl-accordion-card')
export class CXLAccordionCardElement extends AccordionPanel {
  ready() {
    super.ready();

    this.querySelectorAll('a[href]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  }

  static get is() {
    return 'cxl-accordion-card';
  }
}
