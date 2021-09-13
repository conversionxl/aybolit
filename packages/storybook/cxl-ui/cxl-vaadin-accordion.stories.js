import { CXLVaadinAccordionThemeArchive } from './cxl-vaadin-accordion/cxl-accordion-card.story';
import { CXLPlaybookAccordion } from './cxl-vaadin-accordion/cxl-playbook-accordion.story';
import { CXLVaadinAccordionThemeFaq } from './cxl-vaadin-accordion/theme=cxl-faq.story';
import { CXLVaadinAccordionThemeMinidegreeTrack } from './cxl-vaadin-accordion/theme=cxl-minidegree-track.story';
import { CXLPlaybookMultiversionCard } from './cxl-vaadin-accordion/cxl-playbook-multiversion-card.story';
import { CXLMixedCards } from './cxl-vaadin-accordion/cxl-mixed-cards.story';

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
CXLMixedCards.storyName = 'cxl-playbook-card';
CXLPlaybookMultiversionCard.storyName = 'cxl-playbook-multiversion-card';
CXLVaadinAccordionThemeFaq.storyName = '[theme=cxl-faq]';
CXLVaadinAccordionThemeMinidegreeTrack.storyName = '[theme=cxl-minidegree-track]';

export {
  CXLPlaybookAccordion,
  CXLMixedCards,
  CXLPlaybookMultiversionCard,
  CXLVaadinAccordionThemeArchive,
  CXLVaadinAccordionThemeFaq,
  CXLVaadinAccordionThemeMinidegreeTrack,
};
