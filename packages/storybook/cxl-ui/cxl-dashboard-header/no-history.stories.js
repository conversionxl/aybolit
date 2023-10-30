import { DashboardHeaderTemplate, ArgTypes } from './template';

export default {
  title: 'CXL UI/cxl-dashboard-header',
};

export const CXLDashboardHeaderNoHistory = DashboardHeaderTemplate.bind({});

CXLDashboardHeaderNoHistory.argTypes = {
  ...ArgTypes,
};
CXLDashboardHeaderNoHistory.args = {
  name: 'Mathias Z',
  notificationCount: 6,
  showCompletedStats: false,
  showContinueSlider: false,
  showRoadmap: true,
  showRoadmapStats: false,
  showRoadmapSlider: false,
  createRoadmapLinkUrl: 'https://cxl.com',
  createRoadmapLinkText: 'Create your personal learning roadmap',
  showMinidegrees: false
};
