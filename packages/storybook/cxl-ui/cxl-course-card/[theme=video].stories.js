import { CourseCardTemplate, args } from './template.js';
import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-course-card',
  parameters: {
    layout: 'centered',
  },
};

export const CXLCourseCardVideo = CourseCardTemplate.bind({});

CXLCourseCardVideo.args = {
  ...args,
  theme: 'video',
  name: 'A/B testing mastery',
  description:
    'Understand testing approaches that work (and pitfalls that don’t) to get more wins and insights from optimization efforts.',
  contentTags: 'running experiments | customer base studies | prioritization',
  tags: 'CRO',
  time: '4 days ago',
  new: true,
  showTimeIcon: false,
};
