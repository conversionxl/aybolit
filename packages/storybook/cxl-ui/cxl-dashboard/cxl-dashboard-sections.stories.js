/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-section.js';
import '@vaadin/progress-bar';
import categoryData from '../cxl-vaadin-accordion/theme=cxl-dashboard-category.data.json';
import { CXLLightCardSlider } from '../cxl-light-card/light-card-slider.stories';

export default {
  title: 'CXL UI/cxl-dashboard',
};

export const CXLDashboardSections = () => html`
  <div style="margin-top: var(--lumo-space-xl); padding: 0 var(--lumo-space-l);">
    <div>
      <h2>Explore all Categories</h2>
    </div>
    ${categoryData.map(
      (cat) => html`
        <cxl-dashboard-section image=${cat.image}>
          <header class="entry-header header">
            <h2 class="entry-title no-anchor" itemprop="headline">${cat.title}</h2>
            <span>${cat.completion}</span>
            <div class="entry-summary summary" itemprop="description">${cat.description}</div>
          </header>
          <div class="entry-summary summary" itemprop="description">
            ${cat.sections.map(
              (section) => html`
                <div class="section-2">
                  <div class="header-2">
                    <h4 class="title-2">
                      <a href=${section.action}>
                        <span class="title">${section.title}</span>
                        <span class="view-all"> View All </span>
                      </a>
                    </h4>
                    <span class="progress-label">Progress: </span>
                    <vaadin-progress-bar value="${section.progress}"></vaadin-progress-bar>
                  </div>
                  ${section.sections.map(
                    (item) => html`
                      <div class="section-3">
                        ${item.sections.map(
                          (itemSection) => html`
                            <div class="section-4">
                              <div class="entry-title">
                                <h6 class="title-3">${item.title}</h6>
                                /
                                <h6 class="title-4">${itemSection.title}</h6>
                              </div>
                              ${CXLLightCardSlider(CXLLightCardSlider.args)}
                            </div>
                          `
                        )}
                      </div>
                    `
                  )}
                </div>
              `
            )}
          </div>
        </cxl-dashboard-section>
      `
    )}
  </div>
`;

Object.assign(CXLLightCardSlider, {
  args: {
    length: 8,
    theme: 'cxl-category-accordion',
  },
});
