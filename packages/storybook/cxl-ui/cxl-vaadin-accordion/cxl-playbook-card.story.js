import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import jsonData from './playbook-card.data.json';

export const CXLPlaybookCard = () => html`
  <style>
    body {
      background-color: var(--lumo-shade-5pct);
    }
    .plural .entry-title {
      margin: 0;
    }
    .entry-title a {
      color: inherit;
    }
    .entry-title {
      flex: 1;
      height: calc(var(--lumo-line-height-xs) * 3em) !important;
      font-size: var(--lumo-font-size-xl);
      word-break: break-word;
      margin-top: 0;
      overflow: visible;
    }
    .entry-summary {
      width: 100%;
      padding: var(--lumo-space-s) 0;
      word-wrap: normal;
      color: var(--lumo-contrast-50pct);
    }
    .entry-byline {
      display: flex;
      flex-direction: column;
    }
  </style>
  <cxl-vaadin-accordion
    id="cxl-vaadin-accordion-26107"
    class="archive archive-certificate plural"
    theme="cxl-accordion-card"
  >
    ${jsonData.map(
      (el) => html`
        <cxl-accordion-card
          id="${el.cxl_hybrid_attr_post['@attributes'].id}"
          class="${el.cxl_hybrid_attr_post['@attributes'].class}"
          theme="${el.cxl_hybrid_attr_post['@attributes'].class.includes(
            'category-minidegree-programs'
          )
            ? 'dark'
            : ''}"
        >
          <header class="entry-header" slot="summary">
            <label
              style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
              title="Playbook"
              class="entry-type"
              >Playbook</label
            >

            <div class="entry-summary" itemprop="description">${el.breadcrumbs.join('/')}</div>

            <h2 class="entry-title no-anchor" itemprop="headline">
              <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url"
                >${el.title.raw}</a
              >
            </h2>

            <div class="entry-byline">
              <div>400 votes</div>
              <div>Author: ${el.conversionxl_certificate_instructor}</div>
            </div>
          </header>

          <div class="entry-content" itemprop="text">
            <p><strong>Use case</strong></p>
            <div class="ttr_start"></div>
            <p>${unsafeHTML(el.content.cxl_get_extended_main)}</p>
            <div class="ttr_end"></div>
            <ol>
              ${el.playbook_steps.map((step) => html` <li>${step.title}</li> `)}
            </ol>
          </div>
        </cxl-accordion-card>
      `
    )}
  </cxl-vaadin-accordion>
`;
