// import '@appnest/masonry-layout'; // just an indicator: we might use it here later
import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLMarketingNav } from '../cxl-ui/cxl-marketing-nav.stories';
import { CXLFooterNav } from '../cxl-ui/footer-nav.stories';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-playbook-breadcrumbs.js';
// import '@conversionxl/cxl-ui/src/components/cxl-masonry-layout.js'; // just an indicator: we might use it here later
import RenderHubs from './partials/cxl-hubpage-render-hubs';
import RenderPlaybooks from './partials/cxl-hubpage-render-playbooks';
import RenderHubsSidebar from './partials/cxl-hubpage-render-sidebar';
import breadcrumbsData from './data/cxl-hubpage.breadcrumbs.data.json';


export default {
  decorators: [withKnobs],
  title: 'CXL Hub Page',
};

export const CXLDHubPage = () => {

  const hasPanelsScroll = boolean('Has panels scroll?', true);
  const hasWidgetBackground = boolean('Has widget background?', false);

  return html`

    <style>
      .cxl-hub-sidebar-header {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
        font-weight: normal;
        margin-bottom: var(--lumo-space-xl);
      }
      .cxl-hub-title {
        margin-top: var(--lumo-space-xl);
        margin-bottom: var(--lumo-space-xl);
      }
    </style>

    <cxl-app-layout
      id="container"
      layout="2c-r"
      scroll="${hasPanelsScroll ? 'panels' : 'document'}"
    >

      ${CXLMarketingNav()}

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <h2 class="cxl-hub-sidebar-header">Navigation</h2>
        ${RenderHubsSidebar()}
      </section>

      <article class="entry">
        <header class="cxl-hub-header">
          <cxl-playbook-breadcrumbs .breadcrumbs="${breadcrumbsData}"></cxl-playbook-breadcrumbs>
          <h2 class="cxl-hub-title">Write a blog.</h2>
        </header>
        <cxl-vaadin-accordion
          id="cxl-hubpage-hubs-and-playbooks"
          class="archive archive-certificate plural"
          theme="cxl-hub-cards"
        >${RenderHubs()}${RenderPlaybooks()}</cxl-vaadin-accordion>
      </article>

      ${CXLFooterNav()}

    </cxl-app-layout>
  `;
};

CXLDHubPage.storyName = '[cxl-hubpage]';
