import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-multiversion-card.js';
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
    div[hidden] {
      display: none;
    }
    .version-authors div:hover {
      cursor: pointer;
    }
    vaadin-details .version-authors {
      padding-left: calc(var(--lumo-space-l) * 0.9);
    }
    .version-authors div[selected]{
      font-weight: 700;
    }
    .version-authors div{
      color: var(--lumo-primary-color);
    }
    .version-authors > div:not([selected]):hover {
      color: var(--lumo-primary-color-50pct);
    }
    .entry-byline .author:not(:last-child)::after {
      content: ', ';
    }
  </style>
  <cxl-vaadin-accordion
    id="cxl-vaadin-accordion-26107"
    class="archive archive-certificate plural"
    theme="cxl-accordion-card"
  >
    ${jsonData.map(
      (el) => html`
        <cxl-accordion-multiversion-card
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
              <div>
                Author: ${el.versions.map((v) => html`<span class="author">${v.author}</span>`)}
              </div>
            </div>
          </header>

          <div class="entry-content" itemprop="text">
            <div class="version-authors">
              ${el.versions
                .slice(0, 1)
                .map((v) => html`<div data-version-id="${v.version}">by ${v.author}</div> `)}
            </div>

            <vaadin-details>
              <div slot="summary">See more versions</div>
              <div class="version-authors">
                ${el.versions
                  .slice(1)
                  .map((v) => html`<div data-version-id="${v.version}">by ${v.author}</div> `)}
              </div>
            </vaadin-details>

            ${el.versions.map(
              (v) => html`
                <div class="version" data-version-id="${v.version}">
                  <p><strong>Use case</strong></p>
                  <div class="ttr_start"></div>
                  <p>${unsafeHTML(v.content.cxl_get_extended_main)}</p>
                  <div class="ttr_end"></div>
                  <ol>
                    ${v.playbook_steps.map((step) => html` <li>${step.title}</li> `)}
                  </ol>
                </div>
              `
            )}
          </div>
        </cxl-accordion-multiversion-card>
      `
    )}
  </cxl-vaadin-accordion>
`;
