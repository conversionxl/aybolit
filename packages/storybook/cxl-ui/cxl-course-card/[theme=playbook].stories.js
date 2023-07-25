import { CourseCardTemplate, args } from './template.js'
import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-course-card',
  parameters: {
    layout: 'centered'
  }
};


export const CXLCourseCardPlaybook = CourseCardTemplate.bind({});

CXLCourseCardPlaybook.args = {
  ...args,
  theme: 'playbook',
  name: 'The Why’s and How’s of Marketing Attribution',
  time: '12 days ago',
  description: 'Master the strategies, tactics, metrics, and wisdom you need to become an ABM leader and accelerate the growth of your company and of your career.',
  contentTags: [],
  tags: ['Growth Marketing']
};
