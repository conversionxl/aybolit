import { TeamDashboardHeaderTemplate, ArgTypes } from './header-template';

export default {
  title: 'CXL UI/cxl-team-dashboard',
};

export const CXLDashboardTeamHeader = TeamDashboardHeaderTemplate.bind({});

CXLDashboardTeamHeader.argTypes = {
  ...ArgTypes,
};

CXLDashboardTeamHeader.args = {
  teamName: 'NOPE Creative',
  teamId: 6351659,
  multiple: false,
  inviteURL: 'https://cxl.com',
  settingsURL: 'https://cxl.com',
};
