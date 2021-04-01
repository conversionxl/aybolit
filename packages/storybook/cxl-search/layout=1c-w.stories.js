import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-ui/cxl-marketing-nav.stories';
import { CXLFooterNav } from '../cxl-ui/footer-nav.stories';
import { displaySearchFilters } from './displaySearchFilters';
import searchResults from './data/search-results.data.json';
import searchPaginationData from './data/search-pagination.data.json';

export default {
  title: 'CXL Search',
};

export const CXLSearch = () => html`
  <style>
    .card {
      padding: var(--lumo-space-m);
      margin-top: var(--lumo-space-m);
      margin-bottom: var(--lumo-space-m);
      overflow: hidden;
      background-color: var(--lumo-tint);
      border: 1px solid var(--lumo-shade-10pct);
      border-radius: var(--lumo-border-radius-s);
      box-shadow: var(--lumo-box-shadow-xs);
      break-inside: avoid;
      transform: translateZ(0);
    }
    .filters {
      display: flex;
    }
    #sort-combo {
      margin-left: auto;
    }
    #topic-combo {
      margin-left: var(--lumo-space-l);
    }
    .result-entry {
      margin-top: var(--lumo-space-xl);
    }
    .result-entry h4 {
      margin-bottom: var(--lumo-space-xs);
    }
    .results-info {
        color: var(--lumo-tertiary-text-color);
    }
    .result-info {
      font-size: var(--lumo-font-size-s);
      margin-bottom: var(--lumo-space-xs);
    }
    .result-info span {
      color: var(--lumo-primary-text-color);
    }

    .results-pagination {
      display:flex;
      justify-content: center;
      margin-top: var(--lumo-space-xl);
    }
    .results-pagination div {
      padding: var(--lumo-space-s);
    }
    .results-pagination a {
      color: var(--lumo-primary-color);
      font-weight: 600;
    }

    .pagination-arrow-right div {
      padding:0;
    }
    .pagination-arrow-right a {
      font-size: var(--lumo-icon-size-xs);
      font-weight: normal;
      font-family: 'lumo-icons';
      border-radius: 50%;
      align-self: center;
      display: block;
      width: 1em;
      height: 1em;
      margin-left: calc(var(--lumo-space-xs) * -1);
      margin-right: var(--lumo-space-xs);
      line-height: 1;
      padding: var(--lumo-space-xs);
      color: var(--lumo-primary-color);
      background-color: var(--lumo-primary-color-10pct);
    }
    .pagination-arrow-right a:hover {
      text-decoration: none;
    }
    .pagination-arrow-right a::after{
      content: var(--lumo-icons-angle-right);

    }


  </style>
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
