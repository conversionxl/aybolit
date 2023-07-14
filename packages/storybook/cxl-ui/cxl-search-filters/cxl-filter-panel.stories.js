import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-filter-panel.js';
import '@conversionxl/cxl-ui/src/components/cxl-filter-item.js';

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

export const CXLFilterPanel = ({ label, filters }) => html`
  <cxl-filter-panel label=${label} >
    ${filters.map(filter => html`<cxl-filter-item label="${filter.label}" count="${filter.count}"></cxl-filter-item>`)}
  </cxl-filter-panel>
`;

CXLFilterPanel.args = {
  label: 'Categories',
  filters: [
    { label: 'Brand Marketing', count: '10' },
    { label: 'Convertion Optimization', count: '20' },
    { label: 'Digital psychology and persuasion', count: '30' },
  ],
}
