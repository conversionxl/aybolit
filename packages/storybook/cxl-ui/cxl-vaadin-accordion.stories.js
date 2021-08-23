import { CXLVaadinAccordionThemeArchive } from './cxl-vaadin-accordion/cxl-accordion-card.story';
import { CXLPlaybookAccordion } from './cxl-vaadin-accordion/cxl-playbook-accordion.story';
import { CXLVaadinAccordionThemeFaq } from './cxl-vaadin-accordion/theme=cxl-faq.story';
import { CXLVaadinAccordionThemeMinidegreeTrack } from './cxl-vaadin-accordion/theme=cxl-minidegree-track.story';
import { CXLPlaybookMultiversionCard } from './cxl-vaadin-accordion/cxl-playbook-multiversion-card.story';
import { CXLPlaybookCard } from './cxl-vaadin-accordion/cxl-playbook-card.story';
import { CXLPlaybookHubCard } from './cxl-vaadin-accordion/cxl-playbook-hub-card.story';

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
CXLPlaybookCard.storyName = 'cxl-playbook-card';
CXLPlaybookMultiversionCard.storyName = 'cxl-playbook-multiversion-card';
CXLPlaybookHubCard.storyName = 'cxl-playbook-hub-card'
CXLVaadinAccordionThemeFaq.storyName = '[theme=cxl-faq]';
CXLVaadinAccordionThemeMinidegreeTrack.storyName = '[theme=cxl-minidegree-track]';

export {
  CXLPlaybookAccordion,
  CXLPlaybookCard,
  CXLPlaybookMultiversionCard,
  CXLPlaybookHubCard,
  CXLVaadinAccordionThemeArchive,
  CXLVaadinAccordionThemeFaq,
  CXLVaadinAccordionThemeMinidegreeTrack,
};
