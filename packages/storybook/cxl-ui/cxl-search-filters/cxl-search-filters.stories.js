import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion';
import '@conversionxl/cxl-ui/src/components/cxl-search-filters.js';
import { CXLSearchFiltersPanel } from './cxl-search-filters-panel.stories';


export default {
  title: 'CXL UI/cxl-search-filters',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'CXL Search Filters',
      },
    },
  },
}
const tagsPanelArgs = {
  label: 'Tags',
  filters: [
    { label: 'A' },
    { label: 'B' },
    { label: 'C' },
    { label: 'D' },
    { label: 'E' },
  ]
}

export const CXLSearchFilters = () => html`
  <cxl-search-filters>
    ${CXLSearchFiltersPanel(CXLSearchFiltersPanel.args)}
    ${CXLSearchFiltersPanel(tagsPanelArgs)}
  </cxl-search-filters>
`;
