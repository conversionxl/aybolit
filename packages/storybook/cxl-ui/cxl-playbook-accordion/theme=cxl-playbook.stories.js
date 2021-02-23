import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import faqData from '../cxl-vaadin-accordion/theme=cxl-faq.data.json';
import '@vaadin/vaadin-ordered-layout';

export default {
  title: 'CXL UI/cxl-playbook-accordion',
};

export const CXLPlaybookAccordionTheme = () => html`
  <style>
    .plural .entry-title {
      margin: 0;
    }
  </style>

  <cxl-playbook-accordion
    id="cxl-vaadin-accordion-26107"
    theme="reverse"
    class="cxl-playbook-accordion-class"
  >
    ${faqData.map(
      (el) => html`
        <vaadin-accordion-panel
          id="${el.cxl_hybrid_attr_post['@attributes'].id}"
          class="${el.cxl_hybrid_attr_post['@attributes'].class}"
          theme="reverse"
        >
          <vaadin-horizontal-layout theme="padding" slot="summary">
            <div class="left">
              <vaadin-checkbox value="Option" theme="custom"></vaadin-checkbox>
            </div>
            <div class="right">
              <div class="summary-top">${unsafeHTML(el.title.rendered)}</div>
            </div>
          </vaadin-horizontal-layout>

          <vaadin-vertical-layout>
            <div class="item-content">
              <div>${unsafeHTML(el.content.rendered)}</div>
            </div>
          </vaadin-vertical-layout>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-playbook-accordion>
`;

CXLPlaybookAccordionTheme.storyName = '[layout=2c-l] (default)';
