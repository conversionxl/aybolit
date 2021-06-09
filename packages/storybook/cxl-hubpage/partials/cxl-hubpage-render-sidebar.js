import { html } from 'lit-html';
// import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import sidebarData from '../data/cxl-hubpage.sidebar.data.json';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

const RenderSidebarMenuItem = (menuItem) => html`
    <vaadin-accordion-panel theme="cxl-hub-sidebar">
      <div slot="summary">${menuItem.title}</div>
      <div class="cxl-hub-sidebar-items">
        ${menuItem.menu.map( (subMenu) => html`
          <a cxl-sidebar-hub-link href="${subMenu.url}">
            <span cxl-sidebar-hub-title>${subMenu.title}</span>
            <span cxl-sidebar-playbooks-count>${subMenu.playbooks_count}</span>
          </a>
        `)}
      </div>
    </vaadin-accordion-panel>
`;

const RenderHubsSidebar = () =>
html`
  <cxl-vaadin-accordion id="hubpage-sidebar-menu" theme="cxl-hub-sidebar">
    ${ sidebarData.map( ( menuItem ) => RenderSidebarMenuItem ( menuItem ) ) }
  </cxl-vaadin-accordion>
`;

export default RenderHubsSidebar;

