// Theme style modules must be imported before elements.
import '@conversionxl/cxl-lumo-styles';

// Vaadin.
import '@vaadin/details';
import '@vaadin/horizontal-layout';
import '@vaadin/notification';
import '@vaadin/progress-bar';
import '@vaadin/tooltip';

// Utilities.
import * as Headroom from 'headroom.js';

// CXL.
export { CXLAppLayoutElement } from './components/cxl-app-layout.js';
export { CXLCardElement } from './components/cxl-card.js';
export { CXLCheckoutDetailsElement } from './components/cxl-checkout-details.js';
export { CXLMarketingNavElement } from './components/cxl-marketing-nav.js';
export { CXLSectionElement } from './components/cxl-section.js';
export { CXLStatsElement } from './components/cxl-stats.js';
export { CXLTabsSliderElement } from './components/cxl-tabs-slider.js';
export { CXLNotification } from './components/cxl-notification.js';

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
