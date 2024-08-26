import { CXLVaadinAccordionThemeArchive } from './cxl-vaadin-accordion/cxl-accordion-card.story';
import { CXLVaadinAccordionThemeCourses } from './cxl-vaadin-accordion/cxl-accordion-card-course.story';
import { CXLPlaybookAccordion } from './cxl-vaadin-accordion/cxl-playbook-accordion.story';
import { CXLVaadinAccordionThemeVaadin } from './cxl-vaadin-accordion/vaadin-accordion-panel[theme=vaadin].story';
import { CXLVaadinAccordionThemeFaq } from './cxl-vaadin-accordion/theme=cxl-faq.story';
import { CXLVaadinAccordionThemeMinidegreeTrack } from './cxl-vaadin-accordion/theme=cxl-minidegree-track.story';
import { CXLVaadinAccordionThemeCategory } from './cxl-vaadin-accordion/theme=cxl-dashboard-category.story';
import { CXLHubsAndPlaybooks } from './cxl-vaadin-accordion/cxl-hubs-and-playbooks.story';

export default {
  title: 'CXL UI/cxl-vaadin-accordion',
};

// @todo localStorage data panel?
Object.assign(CXLPlaybookAccordion, {
  args: {
    FeedbackButtonLabel: 'Leave feedback',
    PlaybookId: '1234',
  },
  storyName: 'cxl-playbook-accordion',
});

CXLVaadinAccordionThemeArchive.storyName = 'cxl-accordion-card';
CXLVaadinAccordionThemeCourses.storyName = 'cxl-accordion-course-card';
CXLVaadinAccordionThemeFaq.storyName = '[theme=cxl-faq]';
CXLVaadinAccordionThemeMinidegreeTrack.storyName = '[theme=cxl-minidegree-track]';
CXLVaadinAccordionThemeVaadin.storyName = 'vaadin-accordion-panel[theme=vaadin]';
CXLVaadinAccordionThemeCategory.storyName = '[theme=cxl-dashboard-category]';
CXLHubsAndPlaybooks.storyName = 'cxl-hubs-and-playbooks';

export {
  CXLPlaybookAccordion,
  CXLVaadinAccordionThemeArchive,
  CXLVaadinAccordionThemeCourses,
  CXLVaadinAccordionThemeFaq,
  CXLVaadinAccordionThemeMinidegreeTrack,
  CXLVaadinAccordionThemeVaadin,
  CXLVaadinAccordionThemeCategory,
  CXLHubsAndPlaybooks,
};
