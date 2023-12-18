import { DashboardHeaderTemplate, ArgTypes } from './template';

export default {
  title: 'CXL UI/cxl-dashboard-header',
};

export const CXLDashboardHeader = DashboardHeaderTemplate.bind({});

CXLDashboardHeader.argTypes = {
  ...ArgTypes,
};

CXLDashboardHeader.args = {
  name: 'Username Here',
  notificationCount: 6,
  showCompletedStats: true,
  showContinueSlider: true,
  showRoadmap: true,
  showRoadmapStats: true,
  showRoadmapSlider: true,
  editRoadmapLinkUrl: 'https://cxl.com',
  showMinidegrees: true
};
