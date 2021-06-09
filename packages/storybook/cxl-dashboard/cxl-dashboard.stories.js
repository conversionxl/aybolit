import { html, render } from 'lit-html';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-playbook-breadcrumbs.js';
import { CXLMarketingNav } from '../cxl-ui/cxl-marketing-nav.stories';
import { CXLFooterNav } from '../cxl-ui/footer-nav.stories';
import RenderSidebar from './partials/render-sidebar';
import RenderDashboardItems from './partials/render-playbooks-dashboard';
import GetDataByCategory from './get-data-by-category';

export default {
  decorators: [withKnobs],
  title: 'CXL Dashboard',
};

let selectedCategory = '';

const renderItems = () => {
  const data = GetDataByCategory(selectedCategory);
  render(
    RenderDashboardItems(data.black, data.white),
    document.getElementById('cxl-dashboard-playbooks')
  );
};

export const CXLDashboard = () => {
  const hasWidgetBackground = boolean('Has widget background?', false);
  const defaultCategorySelected = text('Default category selected?', 'Most Recent');

  document.addEventListener('cxl-dashboard-tags-changed', () => {
    renderItems();
  });

  document.addEventListener('cxl-dashboard-category-changed', (event) => {
    selectedCategory = event.detail.category;
    renderItems();
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#dashboard-sidebar-menu > a:nth-child(1)').click();
  });

  return html`
    <style>
      .widget.has-background {
        background-color: var(--lumo-shade-5pct);
      }

      .cxl-sidebar-header {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
        font-weight: normal;
      }

      .cxl-title {
        margin-top: var(--lumo-space-xl);
        margin-bottom: var(--lumo-space-xl);
      }

      .cxl-hub-header {
        justify-content: left;
      }

      .cxl-hub-title {
        margin-top: var(--lumo-space-m);
      }

      .cxl-hub-header .add-new,
      .cxl-hub-header .edit {
        margin-left: var(--lumo-space-s);
        display: none;
      }

      .cxl-hub-header,
      .cxl-hub-header .left {
        display: flex;
      }

      .header-category-time {
        color: var(--lumo-contrast-50pct);
        margin-left: var(--lumo-space-s);
        display: none;
      }

      .header-category-time.visible,
      .cxl-hub-header .add-new.visible,
      .cxl-hub-header .edit.visible {
        display: block;
      }

      .middle {
        justify-content: center;
        align-items: center;
        display: flex;
      }

      [slot='sidebar'] h3 {
        margin-top: var(--lumo-space-xl);
      }

      .right-panel-info {
        margin-top: var(--lumo-space-s);
      }

      .right-panel-info > div > :not(span) {
        margin-left: var(--lumo-space-s);
      }

      .right-panel-info > div {
        display: flex;
      }

      .right-panel-info > div > a {
        color: var(--lumo-primary-color);
      }

      .right-panel-info span {
        color: var(--lumo-secondary-text-color);
      }

      a[one-level] {
        display: block;
        padding-left: var(--lumo-space-xl);
        margin-bottom: 0;
        margin-top: 0;
        padding-top: var(--lumo-space-s);
        padding-bottom: var(--lumo-space-s);
      }

      vaadin-accordion-panel a[cxl-sidebar-link] {
        display: block;
        margin-bottom: var(--lumo-space-s);
      }

      #dashboard-sidebar-menu [is-category][checked] {
        color: var(--lumo-primary-color);
        font-weight: 600;
      }

      #selected-tags vaadin-button {
        margin-right: var(--lumo-space-s);
        margin-bottom: var(--lumo-space-m);
        color: var(--lumo-body-text-color);
      }

      #selected-tags vaadin-button[selected] {
        border: 1px solid var(--lumo-primary-color);
        color: var(--lumo-primary-color);
      }

      #selected-tags vaadin-button span,
      span[cxl-sidebar-playbooks-count] {
        color: var(--lumo-contrast-50pct);
        margin-left: var(--lumo-space-s);
      }

      .show-time {
        margin-bottom: var(--lumo-space-xs);
      }

      .entry-byline .show-time iron-icon {
        margin-right: var(--lumo-space-xs);
      }
    </style>

    <cxl-app-layout id="container" layout="2c-r" scroll="document">
      ${CXLMarketingNav()}

      <section
        id="sensei_course_progress-2"
        class="widget-odd widget-last widget-first widget-1 widget widget_sensei_course_progress ${hasWidgetBackground
          ? 'has-background'
          : ''}"
        slot="sidebar"
      >
        ${RenderSidebar(defaultCategorySelected)}
      </section>

      <article class="entry">
        <header class="cxl-hub-header">
          <div class="left middle">
            <h3 class="cxl-hub-title">Most Recent</h3>
            <div class="header-category-time">36h</div>
            <a class="add-new" href="#">Add New</a>
            <a class="edit" href="#">Edit</a>
          </div>
        </header>
        <div id="selected-tags"></div>
        <cxl-vaadin-accordion
          id="cxl-dashboard-playbooks"
          class="archive archive-certificate plural"
          theme="cxl-dashboard-cards"
        ></cxl-vaadin-accordion>
      </article>

      ${CXLFooterNav()}
    </cxl-app-layout>
  `;
};

CXLDashboard.storyName = '[layout=2c-r]';
