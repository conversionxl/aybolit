import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-team-stats.js';
import { CXLStats } from '../cxl-stats/default.stories';

export const TeamDashboardStatsTemplate = (args) => html`
  <cxl-dashboard-team-stats progress=${args.progress}>
    <div slot="stats">${CXLStats({ statsCount: 3 })}</div>
  </cxl-dashboard-team-stats>
`;

export const ArgTypes = {
  progress: { type: Number },
};
