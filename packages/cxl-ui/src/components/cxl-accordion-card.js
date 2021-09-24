import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import { AccordionPanelElement } from '@vaadin/vaadin-accordion/src/vaadin-accordion-panel';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles';
import cxlAccordionCardCSS from '../styles/global/cxl-accordion-card-css';
import cxlAccordionCardLocalCSS from '../styles/cxl-accordion-card-css';

// doesn't work in constructor() nor in ready()
registerStyles('cxl-accordion-card', cxlAccordionCardLocalCSS);

@customElement('cxl-accordion-card')
export class CXLAccordionCardElement extends AccordionPanelElement {
  ready() {
    super.ready();

    registerGlobalStyles(cxlAccordionCardCSS, {
      moduleId: 'cxl-accordion-card',
    });

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
