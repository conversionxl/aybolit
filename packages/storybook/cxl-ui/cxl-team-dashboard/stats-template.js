import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-team-stats.js';
import { CXLStats } from '../cxl-stats/default.stories';

export const TeamDashboardStatsTemplate = (args) => html`
  <cxl-dashboard-team-stats progress=${args.progress}>
    ${CXLStats({ statsCount: 3 })}
  </cxl-dashboard-team-stats>
`;

export const ArgTypes = {
  progress: { type: Number },
};
