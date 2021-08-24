import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-multiversion-card.js';
import CXLSingleMultiversionCardDisplay from '@conversionxl/cxl-ui/src/components/partials/cxl-single-multiversion-card-display';
import CXLSingleHubCardDisplay from "@conversionxl/cxl-ui/src/components/partials/cxl-single-hub-card-display";
import playbookData from './playbook-card.data.json';
import hubsData from './hub-card.data.json';

export const CXLMixedCards = () => html`
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
    ${hubsData.map((el) => CXLSingleHubCardDisplay(el))}
    ${playbookData.map((el) => CXLSingleMultiversionCardDisplay(el, 1234, false))}
  </cxl-vaadin-accordion>
`;
