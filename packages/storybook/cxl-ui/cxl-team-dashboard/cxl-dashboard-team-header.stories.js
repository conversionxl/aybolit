import { TeamDashboardHeaderTemplate, ArgTypes } from './header-template';

export default {
  title: 'CXL UI/cxl-team-dashboard',
};

export const CXLDashboardTeamHeader = TeamDashboardHeaderTemplate.bind({});

CXLDashboardTeamHeader.argTypes = {
  ...ArgTypes,
};

CXLDashboardTeamHeader.args = {
  name: 'NOPE Creative',
  multiple: false,
};
