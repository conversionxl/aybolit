/* eslint-disable import/no-extraneous-dependencies */
// Theme style modules must be imported before elements.
import '@conversionxl/cxl-lumo-styles';
import 'qrcode';

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
export { CXLBaseCardElement } from './components/cxl-base-card.js';
export { CXLCardElement } from './components/cxl-card.js';
export { CXLCredentialElement } from './components/cxl-credential.js';
export { CXLCourseCardElement } from './components/cxl-course-card.js';
export { CXLCourseDialogElement } from './components/cxl-course-dialog.js';
export { CXLCheckoutDetailsElement } from './components/cxl-checkout-details.js';
export { CXLDashboardHeaderElement } from './components/cxl-dashboard-header.js';
export { CxlDashboardSectionElement } from './components/cxl-dashboard-section.js';
export { CXLDashboardNotificationElement } from './components/cxl-dashboard-notification.js';
export { CxlDashboardTeamHeaderElement } from './components/cxl-dashboard-team-header.js';
export { CxlDashboardTeamStatsElement } from './components/cxl-dashboard-team-stats.js';
export { CXLFeaturedCourseCardElement } from './components/cxl-featured-course-card.js';
export { CXLLightCardElement } from './components/cxl-light-card.js';
export { CXLMarketingNavElement } from './components/cxl-marketing-nav.js';
export { CXLNotification } from './components/cxl-notification.js';
export { CXLNotificationCardElement } from './components/cxl-notification-card.js';
export { CXLSectionElement } from './components/cxl-section.js';
export { CXLStatsElement } from './components/cxl-stats.js';
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
