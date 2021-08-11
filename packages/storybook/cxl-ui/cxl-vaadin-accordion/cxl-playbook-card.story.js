import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-multiversion-card.js';
import jsonData from './playbook-card.data.json';
import CXLSingleMultiversionCardDisplay from './cxl-single-multiversion-card-display';

export const CXLPlaybookCard = () => html`
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
    ${jsonData.map((el) => CXLSingleMultiversionCardDisplay(el))}
  </cxl-vaadin-accordion>
`;
