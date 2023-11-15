import { TeamDashboardStatsTemplate, ArgTypes } from './stats-template';

export default {
  title: 'CXL UI/cxl-team-dashboard',
};

export const CXLDashboardTeamStats = TeamDashboardStatsTemplate.bind({});

CXLDashboardTeamStats.argTypes = {
  ...ArgTypes,
};

CXLDashboardTeamStats.args = {
  progress: 0.65,
};
