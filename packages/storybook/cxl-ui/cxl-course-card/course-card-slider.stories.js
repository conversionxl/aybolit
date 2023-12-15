import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';
import '@conversionxl/cxl-lumo-styles';
import { CXLCourseCard } from './[theme=course-lesson].stories.js';

export default {
  title: 'CXL UI/cxl-course-card',
};

export const CXLCourseCardSlider = ({ numberOfCards, theme }) => html`
  <style>
    cxl-course-card {
      max-width: 400px !important;
    }
  </style>
  <cxl-tabs-slider theme="cxl-course-slider minimal ${theme}">
    ${Array.from(
      { length: numberOfCards },
      () => html`
        <vaadin-tab theme="cxl-course-slider"
          >${CXLCourseCard({
            ...CXLCourseCard.args,
          })}</vaadin-tab
        >
      `
    )}
  </cxl-tabs-slider>
`;

CXLCourseCardSlider.args = {
  numberOfCards: 3,
};
