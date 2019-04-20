import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing'; // eslint-disable-line import/no-extraneous-dependencies

storiesOf('Navbars', module)
  .addDecorator(withKnobs)
  .add('cxl-navbar', () => {
    return html`
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
            <li id="menu-item-1029882" class="menu__item ">
              <a href="https://conversionxli.warmpress.com/for-teams/" class="menu__link"
                >For teams</a
              >
            </li>
            <li id="menu-item-1029883" class="menu__item has-children ">
              <a href="/blog/" class="menu__link">Blog</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1030279" class="menu__item ">
                  <a href="#" class="menu__link">Blog home</a>
                </li>
                <li id="menu-item-1030280" class="menu__item ">
                  <a href="#" class="menu__link">Acquisition</a>
                </li>
                <li id="menu-item-1030281" class="menu__item ">
                  <a href="#" class="menu__link">Activation</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-1029884" class="menu__item ">
              <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
            </li>
            <li id="menu-item-1029885" class="menu__item ">
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
        <h1>
          h1: The quick brownish <span class="text-primary">red</span> fox jumps over the lazy dog
        </h1>
        <h2>
          h2: The quick brownish <span class="text-primary">red</span> fox jumps over the lazy dog
        </h2>
        <h3>
          h3: The quick brownish <span class="text-primary">red</span> fox jumps over the lazy dog
        </h3>
        <h4>
          h4: The quick brownish <span class="text-primary">red</span> fox jumps over the lazy dog
        </h4>
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
            <li id="menu-item-1029882" class="menu__item ">
              <a href="https://conversionxli.warmpress.com/for-teams/" class="menu__link"
                >For teams</a
              >
            </li>
            <li id="menu-item-1029883" class="menu__item has-children ">
              <a href="/blog/" class="menu__link">Blog</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1030279" class="menu__item ">
                  <a href="#" class="menu__link">Blog home</a>
                </li>
                <li id="menu-item-1030280" class="menu__item ">
                  <a href="#" class="menu__link">Acquisition</a>
                </li>
                <li id="menu-item-1030281" class="menu__item ">
                  <a href="#" class="menu__link">Activation</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-1029884" class="menu__item ">
              <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
            </li>
            <li id="menu-item-1029885" class="menu__item ">
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
    `;
  });
