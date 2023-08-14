import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-search-filters-panel.js';
import '@conversionxl/cxl-ui/src/components/cxl-search-filters-item.js';

export default {
  title: 'CXL UI/cxl-search-filters',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CXL Search Filters Panels',
      },
    },
  },
}

export const CXLSearchFiltersPanel = ({ label, filters }) => html`
  <cxl-search-filters-panel label=${label} >
    ${filters.map(filter => html`<cxl-search-filters-item label="${filter.label}" count="${filter.count}"></cxl-search-filters-item>`)}
  </cxl-search-filters-panel>
`;

CXLSearchFiltersPanel.args = {
  label: 'Categories',
  filters: [
    { label: 'Brand Marketing', count: '10' },
    { label: 'Convertion Optimization', count: '20' },
    { label: 'Digital psychology and persuasion', count: '30' },
  ],
}
