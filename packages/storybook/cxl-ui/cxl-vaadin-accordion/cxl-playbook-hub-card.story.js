import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-accordion-multiversion-card.js';
import jsonData from './hub-card.data.json';
import CXLSingleHubCardDisplay from "./cxl-single-hub-card-display";

export const CXLPlaybookHubCard = () => html`
  <style>
    body {
      background-color: var(--lumo-shade-5pct);
    }
    .entry-title {
      margin-top: 0;
      height: calc(var(--lumo-line-height-xs) * 3em) !important;
    }
    .entry-title a {
      color: inherit;
    }
    .entry-byline  {
      margin: var(--lumo-space-s) 0;
    }
    cxl-accordion-card .entry-summary {
      color: var(--lumo-contrast-50pct);
    }
  </style>
  <cxl-vaadin-accordion
    id="cxl-vaadin-accordion-26107"
    class="archive archive-certificate plural"
    theme="cxl-accordion-card"
  >
    ${jsonData.map((el) => CXLSingleHubCardDisplay(el))}
  </cxl-vaadin-accordion>
`;
