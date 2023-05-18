import '@conversionxl/cxl-lumo-styles';
import { customElement } from 'lit/decorators.js';
import { LitElement } from 'lit';

@customElement('cxl-explore-courses')
export class CXLExploreCoursesElement extends LitElement {
  _updateOverflow() {
    super._updateOverflow();
  }


  static get is() {
    return 'cxl-explore-element';
  }
}
