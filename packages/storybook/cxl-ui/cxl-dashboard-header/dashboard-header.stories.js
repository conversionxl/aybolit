import { DashboardHeaderTemplate, ArgTypes } from './template';

export default {
  title: 'CXL UI/cxl-dashboard-header',
};

export const CXLDashboardHeader = DashboardHeaderTemplate.bind({});

CXLDashboardHeader.argTypes = {
  ...ArgTypes,
};

CXLDashboardHeader.args = {
  name: 'Mathias Z',
  lastCourseTitle: 'Advanced experimentation analysis',
  lastCourseLink: 'https://cxl.com',
  hasRoadmap: true,
  notificationCount: '6',
  progress: '0.34',
  lessonsCompleted: '2',
  lessonsTotal: '6',
  cta1: 'Browse all courses',
  cta2: 'Browse fast skills',
  cta3: 'Create your personal learning roadmap',
  cta1Link: 'https://cxl.com',
  cta2Link: 'https://cxl.com',
  cta3Link: 'https://cxl.com',
};
