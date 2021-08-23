import {customElement} from 'lit/decorators';
import '@conversionxl/cxl-lumo-styles';
import {CXLPopoverCardElement} from "./cxl-popover-card";
import CXLSingleMultiversionCardDisplay from "./partials/cxl-single-multiversion-card-display";

@customElement('cxl-popover-multiversion-card')
export class CXLPopoverMultiversionCardElement extends CXLPopoverCardElement {

  // eslint-disable-next-line class-methods-use-this
  async _prepareContent(el) {
    // should we use https://lit.dev/docs/composition/mixins/ for refactoring out card content, or just extend if need?
    return CXLSingleMultiversionCardDisplay(el);
  }

}
