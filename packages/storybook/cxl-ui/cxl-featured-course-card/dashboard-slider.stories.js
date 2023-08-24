import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';
import '@conversionxl/cxl-lumo-styles';
import { CXLFeatureadCourseCard } from './default.stories.js';

export default {
  title: 'CXL UI/cxl-featured-course-card',
};

const Template = () => html`
  <cxl-tabs-slider theme="minimal cxl-featured-course-slider">
    <vaadin-tab theme="cxl-featured-course-slider"
      >${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}</vaadin-tab
    >
    <vaadin-tab theme="cxl-featured-course-slider"
      >${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}</vaadin-tab
    >
    <vaadin-tab theme="cxl-featured-course-slider"
      >${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}</vaadin-tab
    >
  </cxl-tabs-slider>
`;

export const DashboardSlider = Template.bind({});
