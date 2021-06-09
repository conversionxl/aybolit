import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-card.js';

const renderBreadcrumbs = (el) => html` <ul class="entry-breadcrumbs-list">
  ${el.cxl_breadcrumbs
    .slice(0, 3)
    .map(
      (breadcrumb) =>
        html`<li class="entry-breacdrumbs-list-element"><a href="#">${breadcrumb}</a></li>`
    )}
</ul>`;

const DashboardRenderItems = (itemsData) =>
  itemsData.map((el) => {
    let theme;
    let entryTag;
    let byline;
    let hasAvatar;
    let belowEntrySummary = '';

    switch (el.cxl_item_type) {
      case 'playbook':
        theme = 'light';
        entryTag = 'Playbook';
        byline = html` ${el.cxl_steps_count ? html`${el.cxl_steps_count} Steps` : ''}
          <hr />
          ${el.cxl_author ? html`Author: ${el.cxl_author}` : ''}`;
        belowEntrySummary = renderBreadcrumbs(el);
        hasAvatar = false;
        break;

      case 'playbook-hub':
        theme = 'dark';
        entryTag = 'Playbook Hub';
        byline = html` ${el.cxl_hubs_count ? html`${el.cxl_hubs_count} Hubs, ` : ''}
          ${el.cxl_playbooks_count ? html`${el.cxl_playbooks_count} Playbooks` : ''}
          <hr />
          ${el.cxl_author ? html`Section owner: ${el.cxl_author}` : ''}`;
        belowEntrySummary = renderBreadcrumbs(el);
        hasAvatar = false;
        break;

      case 'course':
        theme = 'light';
        entryTag = 'Course';
        byline = html` ${html`<div class="show-time">
            <iron-icon icon="lumo:clock"></iron-icon>${el.conversionxl_live_course_duration}
          </div>`}
          <hr />
          ${el.cxl_author ? html`Instructor(s): ${el.cxl_author}` : ''}`;
        hasAvatar = true;
        break;

      case 'minidegree':
        theme = 'dark';
        entryTag = 'Minidegree';
        byline = html` ${html`<div class="show-time">
            <iron-icon icon="lumo:clock"></iron-icon>${el.conversionxl_live_course_duration}
          </div>`}
          <hr />
          ${el.cxl_author ? html`Instructor(s): ${el.cxl_author}` : ''}`;
        hasAvatar = true;
        break;

      default:
        theme = 'light';
        entryTag = '[ITEM]';
        byline = html` ${el.cxl_steps_count ? html`${el.cxl_steps_count} Steps` : ''}
          <hr />
          ${el.cxl_author ? html`Author: ${el.cxl_author}` : ''}`;
        hasAvatar = true;
        break;
    }

    return html`<cxl-accordion-card
      id="${el.cxl_hybrid_attr_post['@attributes'].id}"
      class="${el.cxl_hybrid_attr_post['@attributes'].class}"
      theme="${theme}"
      card-type="${el.cxl_item_type}"
    >
      <header class="entry-header" style="${hasAvatar ? `` : `display:block`}" slot="summary">
        <h3 class="entry-title no-anchor" itemprop="headline">
          <div class="entry-tag">${entryTag}</div>
          <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url"
            >${el.title.raw}</a
          >
        </h3>

        ${hasAvatar
          ? html`
              <a
                href="${el.conversionxl_certificate_sales_page}"
                rel="bookmark"
                itemprop="url"
                class="is-avatar-url"
              >
                <img
                  class="landscape cw-greater thumbnail shop_catalog lazyloaded"
                  alt="${el.title.raw}"
                  itemprop="image"
                  src="${el.cxl_featured_media.shop_catalog}"
                  data-src="${el.cxl_featured_media.shop_catalog}"
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </a>
            `
          : ``}

        <div class="entry-byline">${byline}</div>
      </header>

      <div class="entry-summary" itemprop="description">
        ${unsafeHTML(el.content.cxl_get_extended_main)} ${belowEntrySummary}
      </div>

      <div class="entry-footer" style="text-align: right;">
        <a href="${el.conversionxl_certificate_sales_page}"
          >Open<iron-icon icon="lumo:angle-right"></iron-icon
        ></a>
      </div>
    </cxl-accordion-card>`;
  });

export default DashboardRenderItems;
