import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-header.js';
import statsData from '../cxl-stats/theme=cxl-dashboard-header.data.json';
import '../../../cxl-ui/src/components/cxl-stats';

export default {
  title: 'CXL UI/cxl-dashboard-header',
};

const Template = (header) => html`
  <cxl-dashboard-header
    theme="cxl-dashboard-header"
    name=${header.name}
    notification-count=${header.notificationCount}
    last-course-title=${header.lastCourseTitle}
    last-course-link=${header.lastCourseLink}
    progress=${header.progress}
    lessons-completed=${header.lessonsCompleted}
    lessons-total=${header.lessonsTotal}
    .cta1=${header.cta1}
    .cta2=${header.cta2}
    .cta3=${header.cta3}
    .cta1Link=${header.cta1Link}
    .cta2Link=${header.cta2Link}
    .cta3Link=${header.cta3Link}
    ?hasRoadmap=${header.hasRoadmap}
  >
    <div slot="stats-mobile" class="stats-mobile">
      <vaadin-details theme="cxl-dashboard-header reverse">
        <div slot="summary">Your roadmap</div>
        <cxl-stats theme="cxl-stats-dashboard-header">
          ${statsData.map(
            (el) => html`
              <div>
                <h4 class="stat-title">${unsafeHTML(el.title)}</h4>
                <p class="stat-count">
                  ${unsafeHTML(el.count)} ${el.link ? html`<a href="#">${el.link}</a>` : nothing}
                </p>
              </div>
            `
          )}
          <vaadin-button class="edit-roadmap" onclick="window.location.href='https://cxl.com'">
            <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>
            Edit roadmap
          </vaadin-button>
        </cxl-stats>
      </vaadin-details>
    </div>
    <div slot="stats-desktop" class="stats-desktop">
      <cxl-stats theme="cxl-stats-dashboard-header">
        ${statsData.map(
          (el) => html`
            <div>
              <h4 class="stat-title">${unsafeHTML(el.title)}</h4>
              <p class="stat-count">
                ${unsafeHTML(el.count)} ${el.link ? html`<a href="#">${el.link}</a>` : nothing}
              </p>
            </div>
          `
        )}
        <vaadin-button class="edit-roadmap" onclick="window.location.href='https://cxl.com'">
          <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>
          Edit roadmap
        </vaadin-button>
      </cxl-stats>
    </div>
  </cxl-dashboard-header>
`;

export const CXLDashboardHeader = Template.bind({});

CXLDashboardHeader.argTypes = {
  name: { control: 'text' },
  lastCourseTitle: { control: 'text' },
  lastCourseLink: { control: 'text' },
  hasRoadmap: { control: 'boolean' },
  notificationCount: { control: 'text' },
  progress: { control: 'number' },
  lessonsCompleted: { control: 'number' },
  lessonsTotal: { control: 'number' },
  cta1: { control: 'text' },
  cta2: { control: 'text' },
  cta3: { control: 'text' },
  cta1Link: { control: 'text' },
  cta2Link: { control: 'text' },
  cta3Link: { control: 'text' },
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
