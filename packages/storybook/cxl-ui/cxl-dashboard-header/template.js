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
    .showRoadmap=${header.showRoadmap}
    .showRoadmapStats=${header.showRoadmapStats}
    .showRoadmapSlider=${header.showRoadmapSlider}
    .editRoadmapLinkUrl=${header.editRoadmapLinkUrl}
    .editRoadmapLinkText=${header.editRoadmapLinkText}
    .createRoadmapLinkUrl=${header.createRoadmapLinkUrl}
    .createRoadmapLinkText=${header.createRoadmapLinkText}
    .showMinidegrees=${header.showMinidegrees}
  >
    <div slot="completed-stats">
      ${CXLStats({ theme: 'cxl-stats-dashboard-header completed', statsCount: 3 })}
    </div>
    <div slot="roadmap-stats">
      ${CXLStats({ theme: 'cxl-stats-dashboard-header roadmap', statsCount: 4 })}
    </div>
    <div slot="continue-slider">
      ${CXLLightCardSlider({ theme: 'cxl-slider-dashboard-header', length: 8 })}
    </div>
    <div slot="next-slider">
      ${CXLLightCardSlider({ theme: 'cxl-slider-dashboard-header portrait', length: 16, args: { theme: 'portrait' } })}
    </div>
    <div slot="minidegree-slider">
      ${CXLLightCardSlider({ theme: 'cxl-slider-dashboard-header', length: 8, args: { theme: 'minidegree', progress: null, avatar: '' } })}
    </div>
  </cxl-dashboard-header>
`;

export const ArgTypes = {
  name: { control: 'text' },
  notificationCount: { control: 'number' }
};
