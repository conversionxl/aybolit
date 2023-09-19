import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@vaadin/progress-bar';
import categoryData from './theme=cxl-dashboard-category.data.json';
import { CXLLightCardSlider } from '../cxl-light-card/light-card-slider.stories';

export const CXLVaadinAccordionThemeCategory = () => html`
  <cxl-vaadin-accordion
    id="cxl-vaadin-accordion-26107"
    class="archive archive-category plural"
    theme="cxl-dashboard-category"
  >
    ${categoryData.map(
      (el) => html`
        <vaadin-accordion-panel theme="cxl-dashboard-category reverse" data-step-id="${el.id}">
          <header class="entry-header header" slot="summary">
            <h4 class="entry-title no-anchor" itemprop="headline">${el.title}</h4>
            <span>${el.completion}</span>
          </header>
          <div class="entry-summary summary" itemprop="description">
            ${el.sections.map(
              (section) => html`
                <div class="section-2">
                  <div class="header-2">
                    <h5 class="title-2">${section.title}</h5>
                    <vaadin-progress-bar value="${section.progress}"></vaadin-progress-bar>
                    <a href="${section.action}">View all</a>
                  </div>
                  ${section.sections.map(
                    (item) => html`
                      <div class="section-3">
                        <h6 class="title-3">${item.title}</h6>
                        ${item.sections.map(
                          (section) => html`
                          <div class="section-4">
                            <h6 class="title-4">${section.title}</h6>
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
        </vaadin-accordion-panel>
      `
    )}
  </cxl-vaadin-accordion>
`;


Object.assign(CXLLightCardSlider, {
  args: {
    numberOfCards: 8,
    theme: 'cxl-category-accordion'
  },
});
