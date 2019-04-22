import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing'; // eslint-disable-line import/no-extraneous-dependencies
import '@conversionxl/cxl-institute'; // eslint-disable-line import/no-extraneous-dependencies

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-layout-marketing', () => {
    return html`
      <cxl-layout-marketing>
        <cxl-navbar id="topnav" navtype="topnav" theme="topnav">
          <vaadin-button theme="primary main-button" onclick="window.location.href='#'"
            >Get free trial</vaadin-button
          >
          <vaadin-button theme="primary main-button transparent" onclick="window.location.href='#'"
            >Download syllabus</vaadin-button
          >
          <nav class="menu menu--marketing-header">
            <h3 class="menu__title screen-reader-text">cxl-2019/marketing-header</h3>
            <ul class="menu__items nav-links">
              <li class="menu__item ">
                <a href="https://conversionxli.warmpress.com/for-teams/" class="menu__link"
                  >For teams</a
                >
              </li>
              <li class="menu__item has-children ">
                <a href="/blog/" class="menu__link">Blog</a>
                <ul class="menu__sub-menu">
                  <li class="menu__item ">
                    <a href="#" class="menu__link">Blog home</a>
                  </li>
                  <li class="menu__item ">
                    <a href="#" class="menu__link">Acquisition</a>
                  </li>
                  <li class="menu__item ">
                    <a href="#" class="menu__link">Activation</a>
                  </li>
                </ul>
              </li>
              <li class="menu__item ">
                <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
              </li>
              <li class="menu__item ">
                <a href="/agency/" class="menu__link">CRO Services</a>
              </li>
            </ul>
          </nav>

          <ul class="nav-links">
            <li><a href="/login">Login</a></li>
            <li>
              <vaadin-button theme="dark main-button transparent small" tabindex="0" role="button"
                >Get free trial</vaadin-button
              >
            </li>
          </ul>
        </cxl-navbar>
        <div class="wrap" style="height: 1500px">
          <h1>h1: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h1>
          <h2>h2: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h2>
          <h3>h3: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h3>
          <h4>h4: The quick brownish <strong>red</strong> fox jumps over the lazy dog</h4>
        </div>
        <cxl-navbar id="bottomnav" navtype="bottomnav" theme="bottomnav">
          <vaadin-button theme="primary main-button" onclick="window.location.href='#'"
            >Get free trial</vaadin-button
          >
          <vaadin-button theme="primary main-button transparent" onclick="window.location.href='#'"
            >Download syllabus</vaadin-button
          >
          <nav class="menu menu--marketing-header">
            <h3 class="menu__title screen-reader-text">cxl-2019/marketing-header</h3>
            <ul class="menu__items nav-links">
              <li class="menu__item ">
                <a href="https://conversionxli.warmpress.com/for-teams/" class="menu__link"
                  >For teams</a
                >
              </li>
              <li class="menu__item has-children ">
                <a href="/blog/" class="menu__link">Blog</a>
                <ul class="menu__sub-menu">
                  <li class="menu__item ">
                    <a href="#" class="menu__link">Blog home</a>
                  </li>
                  <li class="menu__item ">
                    <a href="#" class="menu__link">Acquisition</a>
                  </li>
                  <li class="menu__item ">
                    <a href="#" class="menu__link">Activation</a>
                  </li>
                </ul>
              </li>
              <li class="menu__item ">
                <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
              </li>
              <li class="menu__item ">
                <a href="/agency/" class="menu__link">CRO Services</a>
              </li>
            </ul>
          </nav>

          <ul class="nav-links">
            <li><a href="/login">Login</a></li>
            <li>
              <vaadin-button theme="dark main-button transparent small" tabindex="0" role="button"
                >Get free trial</vaadin-button
              >
            </li>
          </ul>
        </cxl-navbar>
      </cxl-layout-marketing>
    `;
  })
  .add('cxl-layout-institute', () => {
    return html`
      <cxl-layout-institute>
        <cxl-app-layout>
          <h3 slot="sidebar-header">Training Manager</h3>
          <div class="sidebar-content" slot="sidebar-content">
            <strong class="extra-heading">Digital analytics minidegree program</strong>
          </div>
          <div slot="content">
            test content
          </div>
        </cxl-app-layout>
      </cxl-layout-institute>
    `;
  });
