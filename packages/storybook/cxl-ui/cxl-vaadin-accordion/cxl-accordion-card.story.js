import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-save-favorite.js';
import archiveData from './theme=cxl-archive.data.json';

export const CXLVaadinAccordionThemeArchive = () => {
  let lastEntryTitle1stLetter = 'Z';

  const firstLetterHeading = (el) => {
    const firstLetter = el.title.raw.charAt(0);
    let heading = html``;

    if (firstLetter !== lastEntryTitle1stLetter) {
      heading = html`<h3 id="letter-${firstLetter}">${firstLetter}</h3>`;
      lastEntryTitle1stLetter = firstLetter;
    }

    return heading;
  };

  return html`
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
      .entry-header {
        position: relative;
      }
      cxl-save-favorite {
        position: absolute;
        top: 0;
        right: 0;
      }
    </style>
    <cxl-vaadin-accordion
      id="cxl-vaadin-accordion-26107"
      class="archive archive-certificate plural"
      theme="cxl-accordion-card"
    >
      ${archiveData.map(
        (el) => html`
          ${firstLetterHeading(el)}
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
              <label class="entry-type"> Course </label>

              <cxl-save-favorite
                postType="playbook"
                postId="123"
                userId="456"
                isCardVersion
              ></cxl-save-favorite>

              <h3 class="entry-title no-anchor" itemprop="headline">
                <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url"
                  >${el.title.raw}</a
                >
              </h3>
              <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url">
                <img
                  class="landscape cw-greater thumbnail shop_catalog lazyloaded"
                  alt="${el.title.raw}"
                  itemprop="image"
                  src="${el.cxl_featured_media.shop_catalog}"
                  data-src="${el.cxl_featured_media.shop_catalog}"
                  loading="lazy"
                  width="150"
                  height="150"
                />
              </a>
              <div class="entry-byline">
                <vaadin-icon icon="lumo:clock"></vaadin-icon>${el.conversionxl_live_course_duration}
                <hr />
                Instructors: ${el.conversionxl_certificate_instructor}
              </div>
            </header>
            <div class="entry-summary" itemprop="description">
              ${unsafeHTML(String(el.content.cxl_get_extended_main))}
            </div>
            <div class="entry-footer" style="text-align: right;">
              <a href="${el.conversionxl_certificate_sales_page}"
                >View training<vaadin-icon icon="lumo:angle-right"></vaadin-icon
              ></a>
            </div>
          </cxl-accordion-card>
        `
      )}
    </cxl-vaadin-accordion>
  `;
};
