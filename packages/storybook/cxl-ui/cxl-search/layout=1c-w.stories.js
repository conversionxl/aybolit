import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import cxlSearchStyles from '@conversionxl/cxl-ui/src/styles/cxl-search/cxl-search-css.js';
import cxlSearchFiltersStyles from '@conversionxl/cxl-ui/src/styles/cxl-search/cxl-search-filters-css.js';
import { registerGlobalStyles } from "@conversionxl/cxl-lumo-styles/src/utils";
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLFooterNav } from '../footer-nav.stories';
import { displaySearchFilters } from './displaySearchFilters';
import searchResults from './data/search-results.data.json';
import searchPaginationData from './data/search-pagination.data.json';

export default {
  title: 'CXL Search',
};

// CXL Search global
registerGlobalStyles(cxlSearchStyles, {
  moduleId: 'cxl-search-global',
});
// CXL Search filter dropdowns
registerGlobalStyles(cxlSearchFiltersStyles, {
  moduleId: 'cxl-search-global',
});

export const CXLSearch = () => html`
  <cxl-app-layout id="container" layout="1c-w">
    ${CXLMarketingNav()}
    <article class="entry">
      <header class="entry-header">
        <label>Search results</label>
        <h1 class="entry-title">Join the top 1% of digital marketing.</h1>
      </header>
      <div class="entry-content">
        <div class="card filters">${displaySearchFilters()}</div>
      </div>
      <div class="results-info">
        Showing results 1 - 15 of 277
      </div>
      <div class="results-entries">
        ${searchResults.map((el) => html`
          <div class="result-entry">
            <h4>${el.title}</h4>
            <div class="result-info"><span>${el.category}</span>,  Author: ${el.author}, ${el.date}</div>
            <div class="result-description">${el.description}</div>
          </div>`
        )}
      </div>
      <div class="results-pagination">
        ${searchPaginationData.pages.map( (el) =>
          html`
            ${el.url ? html`<div><a href="${el.url}">${el.page}</a></div>` : html`<div>${el.page}</div>`}
          `)
         }
          <div>...</div>
          <div><a href="${searchPaginationData.lastPage.url}">${searchPaginationData.lastPage.page}</a></div>
          <div class="pagination-arrow-right">
            <a href="${searchPaginationData.nextPage.url}"></a>
          </div>
      </div>
    </article>
    ${CXLFooterNav()}
  </cxl-app-layout>
`;

CXLSearch.storyName = '[layout=1c-w]';
