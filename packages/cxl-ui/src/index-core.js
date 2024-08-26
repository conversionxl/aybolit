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
export { CXLCourseCardElement } from './components/cxl-course-card.js';
export { CXLFeaturedImage } from './components/cxl-featured-image';
export { CXLLightCardElement } from './components/cxl-light-card.js';
export { CXLNotification } from './components/cxl-notification.js';
export { CXLSectionElement } from './components/cxl-section.js';
export { CXLStarRatingElement } from './components/cxl-star-rating.js';
export { CXLTabsSliderElement } from './components/cxl-tabs-slider.js';
export { CXLMarketingNavElement } from './components/cxl-marketing-nav.js';

// Order matters.
export { CXLVaadinAccordionElement } from './components/cxl-vaadin-accordion.js';
export { CXLAccordionCardElement } from './components/cxl-accordion-card.js';

// @todo maybe https://github.com/tc39/proposal-export-default-from
export { Headroom };
