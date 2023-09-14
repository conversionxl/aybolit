import { DashboardHeaderTemplate, ArgTypes } from './template';

export default {
  title: 'CXL UI/cxl-dashboard-header',
};

export const CXLDashboardHeaderInitial = DashboardHeaderTemplate.bind({});

CXLDashboardHeaderInitial.argTypes = {
  ...ArgTypes,
};
CXLDashboardHeaderInitial.args = {
  name: 'Mathias Z',
  lastCourseTitle: '',
  lastCourseLink: '',
  hasRoadmap: false,
  notificationCount: '6',
  progress: '0',
  lessonsCompleted: '0',
  lessonsTotal: '0',
  cta1: 'Browse all courses',
  cta2: 'Browse fast skills',
  cta3: 'Create your personal learning roadmap',
  cta1Link: 'https://cxl.com',
  cta2Link: 'https://cxl.com',
  cta3Link: 'https://cxl.com',
};
