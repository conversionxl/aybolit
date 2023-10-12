import { html } from 'lit';
import { text } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLDashboardHeader } from '../cxl-dashboard-header/dashboard-header.stories';
import { CXLFeatureadCourseCard } from '../cxl-featured-course-card/default.stories';
import { DashboardSlider } from '../cxl-featured-course-card/dashboard-slider.stories';
import { CXLStats } from '../cxl-stats/default.stories';
import { CXLVaadinAccordionThemeCategory } from '../cxl-vaadin-accordion.stories';
import { CXLFooterNav } from '../footer-nav.stories';

export default {
  title: 'CXL UI/cxl-dashboard',
};

export const CXLDashboard = () => {
  const boxShadow = text('Box-shadow', 'var(--lumo-box-shadow-l)');
  const statsCount = 4;

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

  CXLFeatureadCourseCard.args = {
    id: 'cxl-featured-course-1',
    theme: 'Featured',
    name: 'Get ahead with <strong>Google Analytics 4</strong>',
    time: '5h 04min',
    instructor: 'Fred Pike',
    description:
      "<p>GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.</p><p>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong></p>",
    tags: ['Marketing', 'Analytics'],
    ctaUrl: 'https://cxl.com',
    avatar:
      'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',
  };

  return html`
    <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">
      ${CXLMarketingNav()}
      <div style="${boxShadow ? `box-shadow: ${boxShadow}` : ''}">
        ${CXLDashboardHeader(CXLDashboardHeader.args)} ${DashboardSlider()} ${CXLStats(statsCount)}
        ${CXLVaadinAccordionThemeCategory()}
      </div>
      ${CXLFooterNav()}
    </cxl-app-layout>
  `;
};

// CXLDashboard.storyName = 'cxl-dashboard';
