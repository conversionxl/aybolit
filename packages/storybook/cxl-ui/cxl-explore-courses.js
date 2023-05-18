import '@conversionxl/cxl-ui/src/components/cxl-explore-courses';
import { html } from 'lit';
import { CXLExploreCoursesCard } from './cxl-card/[theme=cxl-explore-courses-card].stories';

export default {
  title: 'CXL UI/cxl-explore-courses',
};

export const CXLExploreCourses = () => html`
  <cxl-explore-courses>
    ${CXLExploreCoursesCard}
    ${CXLExploreCoursesCard}
    ${CXLExploreCoursesCard}
    ${CXLExploreCoursesCard}
    ${CXLExploreCoursesCard}
  </cxl-explore-courses>
`;
