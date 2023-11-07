import { html } from 'lit';
import { CXLDashboardTeamHeader } from './cxl-dashboard-team-header.stories';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLFooterNav } from '../footer-nav.stories';
import { CXLDashboardTeamStats } from './cxl-dashboard-team-stats.stories';

export default {
  title: 'CXL UI/cxl-team-dashboard',
};

export const CXLDashboard = (args) => html`
  <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">
    ${CXLMarketingNav()}
    <article>
      ${CXLDashboardTeamHeader({
        teamName: args.header_name,
        teamId: args.header_team_id,
        multiple: args.header_multiple,
      })}
      ${CXLDashboardTeamStats({ progress: 0.65 })}
    </article>
    ${CXLFooterNav()}
  </cxl-app-layout>
`;

CXLDashboard.args = {
  header_name: 'NOPE Creative',
  header_team_id: 6351659,
  header_multiple: false,
};
