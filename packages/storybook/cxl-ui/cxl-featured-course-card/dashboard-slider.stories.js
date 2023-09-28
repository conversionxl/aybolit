import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';
import '@conversionxl/cxl-lumo-styles';
import { CXLFeatureadCourseCard } from './default.stories.js';

export default {
  title: 'CXL UI/cxl-featured-course-card',
};

const args2 = {
  ...CXLFeatureadCourseCard.args,
  id: 'cxl-featured-course-2',
  name: 'Advanced Facebook Ads',
  time: '2h 04min',
  instructor: 'Curt Maly',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/01/curt-maly-bw-transparent-bg-v2-min.png',
};

const args3 = {
  ...CXLFeatureadCourseCard.args,
  id: 'cxl-featured-course-3',
  name: 'Google Ads Experiments',
  time: '1h 30min',
  instructor: 'Susan Wenograd',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2022/05/susan-wenograd-headshot-bw-bg.png',
};

const Template = () => html`
  <cxl-tabs-slider theme="minimal cxl-featured-course-slider">
    <vaadin-tab disabled theme="cxl-featured-course-slider">
      ${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}
    </vaadin-tab>
    <vaadin-tab disabled theme="cxl-featured-course-slider">
      ${CXLFeatureadCourseCard(args2)}
    </vaadin-tab>
    <vaadin-tab disabled theme="cxl-featured-course-slider">
      ${CXLFeatureadCourseCard(args3)}
    </vaadin-tab>
  </cxl-tabs-slider>
`;

export const DashboardSlider = Template.bind({});
