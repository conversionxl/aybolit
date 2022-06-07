import { customElement } from 'lit/decorators';
import '@conversionxl/cxl-lumo-styles';
import { AccordionPanelElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion-panel';

@customElement('cxl-accordion-card')
export class CXLAccordionCardElement extends AccordionPanelElement {
  ready() {
    super.ready();

    // Stop card open on title click.
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
