import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLDashboardHeader } from '../cxl-dashboard-header/dashboard-header.stories';
import { DashboardSlider } from '../cxl-featured-course-card/dashboard-slider.stories';
import { CXLFooterNav } from '../footer-nav.stories';

export default {
  title: 'CXL UI/cxl-dashboard',
};

export const CXLDashboardNoContent = () => {
  CXLDashboardHeader.args = {
    name: 'Mathias Z',
    notificationCount: 6,
    showCompletedStats: true,
    showContinueSlider: true,
  };

  return html`
    <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">
      ${CXLMarketingNav()}
      <article>
        ${DashboardSlider()}
        ${CXLDashboardHeader(CXLDashboardHeader.args)}
      </article>
      ${CXLFooterNav()}
    </cxl-app-layout>
  `;
};
