import '@vaadin/notification';
import '@vaadin/progress-bar';
import * as Headroom from 'headroom.js';

export { CXLAppLayoutElement } from './components/cxl-app-layout.js';
export { CXLCardElement } from './components/cxl-card.js';
export { CXLMarketingNavElement } from './components/cxl-marketing-nav.js';
export { CXLSectionElement } from './components/cxl-section.js';
export { CXLTabsSliderElement } from './components/cxl-tabs-slider.js';

/**
 * Order matters.
 *
 * Note:
 * `CXLPlaybookProgressBarElement` belong's to `index-playbooks`,
 * but it doesn't work there, so placed instead, because these elements are related and order matters too.
 */
export { CXLVaadinAccordionElement } from './components/cxl-vaadin-accordion.js';
export { CXLPlaybookProgressBarElement } from './components/cxl-playbook-progress-bar.js';
export { CXLPlaybookAccordionElement } from './components/cxl-playbook-accordion.js';
export { CXLAccordionCardElement } from './components/cxl-accordion-card.js';

// @todo maybe https://github.com/tc39/proposal-export-default-from
export { Headroom };
