import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import hubsData from '../data/cxl-hubpage.hubs.data.json';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

const RenderHubs = () =>
  hubsData.map(
    (el) => html`<cxl-accordion-card
      id="${el.cxl_hybrid_attr_post['@attributes'].id}"
      class="${el.cxl_hybrid_attr_post['@attributes'].class}"
      theme="dark"
    >
      <header class="entry-header" slot="summary">
        <h3 class="entry-title no-anchor" itemprop="headline">
          <div class="super-title">Playbook Hub</div>
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
          ${el.cxl_subhubs_count} Hubs, ${el.cxl_playbooks_count} Playbooks
          <hr />
          ${el.cxl_section_owner ? html`Section owner: ${el.cxl_section_owner}` : ''}
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

export default RenderHubs;
