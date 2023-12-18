import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLDashboardHeader } from '../cxl-dashboard-header/dashboard-header.stories';
import { DashboardSlider } from '../cxl-featured-course-card/dashboard-slider.stories';
import { CXLFooterNav } from '../footer-nav.stories';
import { CXLDashboardSections } from './cxl-dashboard-sections.stories';

export default {
  title: 'CXL UI/cxl-dashboard',
};

export const CXLDashboard = () => {
  CXLDashboardHeader.args = {
    name: 'Mathias Z',
    notificationCount: 6,
    showCompletedStats: true,
    showContinueSlider: true,
    showRoadmap: true,
    showRoadmapStats: true,
    showRoadmapSlider: true,
    editRoadmapLinkUrl: 'https://cxl.com',
    showMinidegrees: true,
  };

  return html`
    <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">
      ${CXLMarketingNav()}
      <div>
        ${CXLDashboardHeader(CXLDashboardHeader.args)}
        <h1 class="cxl-separator">Explore all courses</h1>
        ${DashboardSlider()}
        ${CXLDashboardSections()}
      </div>
      ${CXLFooterNav()}
    </cxl-app-layout>
  `;
};

// CXLDashboard.storyName = 'cxl-dashboard';
