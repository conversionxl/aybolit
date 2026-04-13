import { CourseCardTemplate, args, argTypes } from './template.js';
import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-course-card',
  parameters: {
    layout: 'centered',
  },
};

export const CXLCourseCard = CourseCardTemplate.bind({});

CXLCourseCard.args = args;
CXLCourseCard.argTypes = {
  ...argTypes,
};
