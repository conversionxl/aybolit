import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import playbooksData from '../data/cxl-hubpage.playbooks.data.json';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

const RenderPlaybooks = () =>
  playbooksData.map(
    (el) => html`<cxl-accordion-card
      id="${el.cxl_hybrid_attr_post['@attributes'].id}"
      class="${el.cxl_hybrid_attr_post['@attributes'].class}"
      theme="light"
    >
      <header class="entry-header" slot="summary">
        <h3 class="entry-title no-anchor" itemprop="headline">
          <div class="entry-tag">Playbook</div>
          <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url"
            >${el.title.raw}</a
          >
        </h3>

        <!-- DISABLE SHOWING IMAGES as per design request -->
        <!-- <a href="{el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url">
            <img
              class="landscape cw-greater thumbnail shop_catalog lazyloaded"
              alt="{el.title.raw}"
              itemprop="image"
              src="{el.cxl_featured_media.shop_catalog}"
              data-src="{el.cxl_featured_media.shop_catalog}"
              loading="lazy"
              width="150"
              height="150"
            />
          </a> -->

        <div class="entry-byline">
          ${el.cxl_steps_count} Steps
          <hr />
          ${el.cxl_author ? html`Author: ${el.cxl_author}` : ''}
        </div>
      </header>

      <div class="entry-summary" itemprop="description">
        ${unsafeHTML(el.content.cxl_get_extended_main)}
        <ul class="entry-breadcrumbs-list">
          ${el.cxl_breadcrumbs
            .slice(0, 3)
            .map(
              (breadcrumb) =>
                html`<li class="entry-breacdrumbs-list-element"><a href="#">${breadcrumb}</a></li>`
            )}
        </ul>
      </div>

      <div class="entry-footer" style="text-align: right;">
        <a href="${el.conversionxl_certificate_sales_page}"
          >Open<iron-icon icon="lumo:angle-right"></iron-icon
        ></a>
      </div>
    </cxl-accordion-card>`
  );

export default RenderPlaybooks;
