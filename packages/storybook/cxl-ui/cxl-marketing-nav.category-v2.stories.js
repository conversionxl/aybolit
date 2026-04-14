import { html } from 'lit';
import { useEffect } from '@storybook/client-api';
import { Headroom } from '@conversionxl/cxl-ui';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import contextMenuItems from './cxl-marketing-nav.category-v2.data.json';

export default {
  title: 'CXL UI/cxl-marketing-nav/Category Proposal v2',
};

window.Headroom = Headroom;

/**
 * Category v2 proposal — 9 categories, 24 tracks, 88 courses.
 *
 * Replaces the old Deep Skills / Broad Skills groupings with a flat list
 * of 9 top-level categories. Each category's submenu uses track names as
 * section headers (sectionheader: true) with course links below.
 *
 * Categories:
 *   C1 AI & Automation   C2 B2B Marketing      C3 Growth Marketing
 *   C4 Conversion Opt.   C5 Marketing Analytics C6 PPC
 *   C7 SEO               C8 Brand Management   C9 Product Marketing
 */
export const CategoryV2 = () => {
  useEffect(() => {
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');
    cxlMarketingNavElement.contextMenuItems = contextMenuItems;
  }, []);

  return html`
    <cxl-marketing-nav class="menu" role="navigation" slot="header">
      <template id="cxl-marketing-nav-search-form-template">
        <form
          id="search-form"
          role="search"
          method="get"
          class="search-form"
          action="https://cxl.com/institute/?s="
        >
          <label for="search-input">
            Search <em style="color: var(--lumo-primary-color);">C</em>XL:
          </label>
          <input id="search-input" type="search" class="search-field" value="" name="s" />
          <vaadin-button
            type="submit"
            class="search-submit"
            aria-label="Search"
            theme="icon"
            onclick="document.getElementById('search-form').submit();"
          >
            <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
          </vaadin-button>
        </form>
      </template>
    </cxl-marketing-nav>
  `;
};

CategoryV2.storyName = 'Category Proposal v2 (flat, no skill groupings)';
