import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import faqData from '../cxl-vaadin-accordion/theme=cxl-faq.data.json';

export default {
  title: 'CXL UI/cxl-playbook-accordion',
};

export const CXLPlaybookAccordion = () => html`
  <style>
    .plural .entry-title {
      font-size: var(--lumo-font-size-m);
      font-weight: initial;
      margin: 0;
    }
  </style>

  <cxl-playbook-accordion id="cxl-vaadin-accordion-26107" theme="reverse" class="plural">
    ${faqData.map(
      (el) => html`
        <vaadin-accordion-panel
          id="${el.cxl_hybrid_attr_post['@attributes'].id}"
          class="${el.cxl_hybrid_attr_post['@attributes'].class}"
          theme="cxl-playbook-accordion reverse"
        >
          <header class="entry-header" slot="summary">
            <h3 class="entry-title no-anchor" itemprop="headline">
              <vaadin-checkbox value="${el.id}"></vaadin-checkbox>
              ${unsafeHTML(el.title.rendered)}
            </h3>
          </header>

          <div class="entry-summary" itemprop="description">${unsafeHTML(el.content.rendered)}</div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-playbook-accordion>
`;

CXLPlaybookAccordion.storyName = 'cxl-playbook-accordion';
