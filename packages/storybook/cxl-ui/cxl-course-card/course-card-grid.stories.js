import { html } from 'lit';
import { CourseCardTemplate } from './template.js';

import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-card-grid.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-course-card-grid',
};

const CXLCourseCard = CourseCardTemplate.bind({});
CXLCourseCard.args = {
  id: 'cxl-course-1',
  name: 'Account based marketing',
  time: '3h 00min',
  instructor: 'Tom Wesseling',
  description:
    'Master the strategies, tactics, metrics, and wisdom you need to become an ABM leader and accelerate the growth of your company and of your career.',
  theme: 'course',
  tags: 'Marketing, Analytics, Growth, Demand Capture',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
  new: false,
  showTimeIcon: true,
};

export const CXLCourseCardGrid = ({ length, args }) => html`
  <cxl-card-grid theme="courses">
    ${Array.from({ length }, () => html`
      ${CXLCourseCard({ ...CXLCourseCard.args, ...args })}
    `)}
  </cxl-card-grid>
`;

CXLCourseCardGrid.args = {
  length: 12,
};
