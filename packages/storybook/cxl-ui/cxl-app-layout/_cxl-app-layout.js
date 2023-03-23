import { html, nothing } from 'lit';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLFooterNav } from '../footer-nav.stories';

export const CXLAppLayout = ({ layout, scroll, content }) => html`
  <style>
    .entry-content ul {
      font-family: var(--cxl-lumo-font-secondary), serif;
    }
  </style>

  <cxl-app-layout id="container" layout="${layout}" scroll="${scroll || nothing}">
    ${CXLMarketingNav()} ${content} ${scroll === 'panels' ? nothing : CXLFooterNav()}
  </cxl-app-layout>
`;
