import { html } from 'lit-element';
import { CXLBaseCard } from '@conversionxl/cxl-core';
import courseCardStyles from '../styles/cxl-course-card-css.js';

export class CXLCourseCard extends CXLBaseCard {
  static get styles() {
    return [super.styles, courseCardStyles];
  }
}

customElements.define('cxl-course-card', CXLCourseCard);