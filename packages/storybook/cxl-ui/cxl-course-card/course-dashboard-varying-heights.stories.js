import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-lumo-styles';
import { CXLCourseCard } from './[theme=course].stories.js';
import { CXLCourseCardVideo } from './[theme=video].stories.js';
import { CXLCourseCardPlaybook } from './[theme=playbook].stories.js';
import { CXLCourseCardTraining } from './[theme=training].stories.js';
import { sectionStyles } from './template.js';

export default {
  title: 'CXL UI/cxl-course-card',
};

const ExtraCardVideoArgs = {
  ...CXLCourseCardVideo.args,
  contentTags: [...CXLCourseCardVideo.args.contentTags, 'Another tag', 'Much longer content tag' ],
  description: `${CXLCourseCardVideo.args.description} One more line to test the layout behavior on longer descriptions, with at least four line of text.`
}

const ExtraCardTrainingArgs = {
  ...CXLCourseCardTraining.args,
  description: 'Short description',
  more: 'More',
}

const Template = () => html`
    ${sectionStyles}

  <section>
    ${CXLCourseCard(CXLCourseCard.args)}
    ${CXLCourseCardPlaybook(CXLCourseCardPlaybook.args)}
    ${CXLCourseCardTraining(ExtraCardTrainingArgs)}
    ${CXLCourseCardVideo(ExtraCardVideoArgs)}
    ${CXLCourseCardVideo(CXLCourseCardVideo.args)}
    ${CXLCourseCardTraining(CXLCourseCardTraining.args)}
  </section>
`;

export const CoursesDashboardDifferentHeights = Template.bind({});
