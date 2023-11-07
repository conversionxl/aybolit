/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-section.js';
import '@vaadin/progress-bar';
import { CXLLightCardSlider } from '../cxl-light-card/light-card-slider.stories';

export default {
  title: 'CXL UI/cxl-dashboard',
  component: 'cxl-dashboard-section',
  parameters: {
    layout: 'centered',
  },
};

const Template = (section) => html`
  <cxl-dashboard-section image=${section.image}>
    <header class="entry-header header">
      <h2 class="entry-title no-anchor" itemprop="headline">${section.title}</h2>
      <span>${section.completion}</span>
      <div class="entry-summary summary" itemprop="description">${section.description}</div>
      ${section.ctaLabel && section.ctaUrl
        ? html`
            <a href=${section.ctaUrl} class="${section.ctaButton ? 'button' : 'view-all'}">
              ${section.ctaButton
                ? html`
                    <vaadin-button theme="primary">
                      ${section.ctaLabel}
                      <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon>
                    </vaadin-button>
                  `
                : section.ctaLabel}
            </a>
          `
        : ''}
    </header>
    <div class="entry-summary summary" itemprop="description">
      <div class="section-2">
        <div class="header-2">
          <h4 class="title-2">
            <a href="">
              <span class="title">Growth</span>
              <span class="view-all"> View All </span>
            </a>
          </h4>
          <span class="progress-label">Progress: </span>
          <vaadin-progress-bar value="0.5"></vaadin-progress-bar>
        </div>
        <div class="section-3">
          <div class="section-4">
            <div class="entry-title">
              <h6 class="title-3">Demand Creation</h6>
              /
              <h6 class="title-4">Organic Content</h6>
            </div>
            ${CXLLightCardSlider(CXLLightCardSlider.args)}
          </div>
        </div>
      </div>
    </div>
  </cxl-dashboard-section>
`;
export const CXLDashboardSection = Template.bind({});

CXLDashboardSection.args = {
  image: '',
  title: 'Growth',
  completion: '80% complete',
  description: 'Master these skills and become and expert in Growth, CRO and Analytics.',
  ctaLabel: 'Growth Marketing exam',
  ctaUrl: '#',
  ctaButton: false,
};
