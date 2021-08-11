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
    .plural .entry-title {
      margin: 0;
    }
    .entry-title a {
      color: inherit;
    }
    .entry-title {
      flex: 1;
      height: calc(var(--lumo-line-height-xs) * 3em) !important;
      font-size: var(--lumo-font-size-xl);
      word-break: break-word;
      margin-top: 0;
      overflow: visible;
    }
    .entry-summary {
      width: 100%;
      padding: var(--lumo-space-s) 0;
      word-wrap: normal;
      color: var(--lumo-contrast-50pct);
    }
    .entry-byline {
      display: flex;
      flex-direction: column;
    }
    div[hidden] {
      display: none;
    }
    .version-authors div:hover {
      cursor: pointer;
    }
    vaadin-details [slot='summary']:hover {
      cursor: pointer;
    }
    .tags + .version-authors {
      margin-top: var(--lumo-space-m);
    }
    .version-authors div[selected] {
      font-weight: 700;
    }
    .version-authors div {
      color: var(--lumo-primary-color);
    }
    .version-authors > div:not([selected]):hover {
      color: var(--lumo-primary-color-50pct);
    }
    .entry-byline .author:not(:last-child)::after {
      content: ', ';
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
    }
    .tags > a {
      display: block;
      padding: 0 var(--lumo-space-s);
      margin: var(--lumo-space-xs) calc(var(--lumo-space-xs) * 2) var(--lumo-space-xs) 0;
      background: var(--lumo-contrast-10pct);
      border-radius: 10px;
    }
    .tags > a:hover {
      cursor: pointer;
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
