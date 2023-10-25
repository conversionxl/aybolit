import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-header.js';
import '@conversionxl/cxl-ui/src/components/cxl-stats';

import { CXLStats } from "../cxl-stats/default.stories";
import { CXLLightCardSlider } from '../cxl-light-card/light-card-slider.stories';

import notificationData from '../cxl-dashboard-notification/cxl-dashboard-notification.data.json';

export const DashboardHeaderTemplate = (header) => html`
  <cxl-dashboard-header
    theme="cxl-dashboard-header"
    name=${header.name}
    notification-count=${header.notificationCount}
    .notificationData=${notificationData}
    .showCompletedStats=${header.showCompletedStats}
    .showContinueSlider=${header.showContinueSlider}
  >
    <div slot="stats">
      ${CXLStats({ statsCount: 3, theme: 'cxl-stats-dashboard-header' })}
    </div>
    <div slot="slider">
      ${CXLLightCardSlider({ numberOfCards: 8, theme: 'cxl-slider-dashboard-header' })}
    </div>
  </cxl-dashboard-header>
`;

export const ArgTypes = {
  name: { control: 'text' },
  notificationCount: { control: 'number' }
};
