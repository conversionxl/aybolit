import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import CxlHubCardDisplay from './partials/cxl-hub-card-display';
import CxlSingleversionCardDisplay from './partials/cxl-singleversion-card-display';
import playbookData from './playbook-card.data.json';
import hubsData from './hub-card.data.json';

export const CXLHubsAndPlaybooks = () => html`
  <style>
    body {
      background-color: var(--lumo-shade-5pct);
    }
  </style>
  <cxl-vaadin-accordion
    id="cxl-vaadin-accordion-26107"
    class="archive archive-certificate plural"
    theme="cxl-accordion-card"
  >
    ${hubsData.map((el) => CxlHubCardDisplay(el, 1234, false))}
    ${playbookData.map((el) => CxlSingleversionCardDisplay(el, 1234, false))}
  </cxl-vaadin-accordion>
`;
