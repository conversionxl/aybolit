import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-team-stats.js';
import { CXLStats } from '../cxl-stats/default.stories';

export const TeamDashboardStatsTemplate = (args) => html`
  <cxl-dashboard-team-stats
    progress=${args.progress}
    manage-roadmaps-url=${args.manageRoadmapsURL}
    ?hide-progress=${args.hideProgress}
    ?hide-stats=${args.hideStats}
  >
    <div slot="stats">${CXLStats({ statsCount: 3 })}</div>
  </cxl-dashboard-team-stats>
`;

export const ArgTypes = {
  progress: { type: Number, control: 'number' },
  manageRoadmapsURL: { type: String, control: 'text' },
};
