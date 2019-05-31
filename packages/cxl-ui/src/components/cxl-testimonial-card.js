import { CXLBaseCard } from '@conversionxl/cxl-core';
import testimonialCardStyles from '../styles/cxl-testimonial-card-css.js';

export class CXLTestimonialCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, testimonialCardStyles];
  }
}

customElements.define('cxl-testimonial-card', CXLTestimonialCard);
