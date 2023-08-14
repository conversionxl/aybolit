/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-filter-header.js';
import '@conversionxl/cxl-ui/src/components/cxl-filter-header-item.js';

export default {
  title: 'CXL UI/cxl-search-filters',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CXL Search Filter Header',
      },
    },
  },
}

const mockMarkAsChecked = (e) => {
  const el = e.currentTarget
  const parent = el.parentElement
  const children = [...parent.children]

  children.forEach(child => {
    if (child.nodeName === 'CXL-FILTER-HEADER-ITEM') {
      child.classList.remove('checked')
    }
  });
  el.classList.add('checked')
}

export const CXLFilterHeader = ({ filters }) => html`
  <style>
    #search {
      width: 100%;
    }

    #sort {
      width: 100%;
    }

    cxl-filter-header {
      display: flex;
      max-width: calc(100vw - 32px);
    }
  </style>

  <cxl-filter-header>
    ${filters.map((filter, i) => html`<cxl-filter-header-item class="${i === 0 ?  'checked' : ''}" label="${filter.label}" count="${filter.count}" @click="${mockMarkAsChecked}"></cxl-filter-header-item>`)}
    <select placeholder="Sort by (A-Z)" id="sort" type="select" slot="sort">
      <option value="">- No selection --</option>
    </select>
    <input id="search" type="search" slot="search" placeholder="Search by title"/>
  </cxl-filter-header>
`;

CXLFilterHeader.args = {
  filters: [
    { label: 'All contents', count: '108' },
    { label: 'Deep marketing', count: '32' },
    { label: 'Broad marketing', count: '40' },
    { label: 'Fast marketing', count: '36' },
  ],
}
