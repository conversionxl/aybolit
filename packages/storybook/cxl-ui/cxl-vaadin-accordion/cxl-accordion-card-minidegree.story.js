import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import archiveData from './theme=cxl-archive.data.json';

export const CXLVaadinAccordionThemeMinidegree = () => html`
  <cxl-vaadin-accordion theme="cxl-accordion-card cxl-minidegree-card">
    ${archiveData.map(
      (el) => html`
        <cxl-accordion-card class="entry" theme="dark">
          <header class="entry-header" slot="summary">
            <label class="entry-type">Minidegree</label>
            <h3 class="entry-title" itemprop="headline">
              <a href=${el.conversionxl_certificate_sales_page} rel="bookmark" itemprop="url"
                >${el.title.raw}</a
              >
            </h3>
            <div class="entry-byline">
              <a href=${el.conversionxl_certificate_sales_page}>View training</a>
            </div>
            <div class="entry-byline">
              Program duration: ${el.conversionxl_live_course_duration}
              <hr />
            </div>
          </header>
          <div class="entry-summary" itemprop="description">
            ${unsafeHTML(String(el.content.cxl_get_extended_main))}
          </div>
        </cxl-accordion-card>
      `
    )}
  </cxl-vaadin-accordion>
`;
