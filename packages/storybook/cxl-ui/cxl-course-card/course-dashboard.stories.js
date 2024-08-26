import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-lumo-styles';
import { CXLCourseCard } from './[theme=course-lesson].stories.js';
import { CXLCourseCardVideo } from './[theme=video].stories.js';
import { CXLCourseCardPlaybook } from './[theme=playbook].stories.js';
import { CXLCourseCardTraining } from './[theme=training].stories.js';
import { sectionStyles } from './template.js';

export default {
  title: 'CXL UI/cxl-course-card',
};

const Template = () => html`
  ${sectionStyles}

  <section>
    ${CXLCourseCard(CXLCourseCard.args)} ${CXLCourseCardPlaybook(CXLCourseCardPlaybook.args)}
    ${CXLCourseCardTraining(CXLCourseCardTraining.args)}
    ${CXLCourseCardVideo(CXLCourseCardVideo.args)}
  </section>
`;

export const CoursesDashboard = Template.bind({});
