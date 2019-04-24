import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-marketing';
import '@conversionxl/cxl-institute';

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
  .add('cxl-institute-layout', () => {
    return html`
      <div class="wrapper">
        <div id="left-nav">
          <a href="/">
            <div class="logo">
              <span class="cxl">C<span>XL</span></span>
            </div>
          </a>
          <div class="top-nav">
            <ul class="nav-items">
              <li>
                <a href="trainings" class="active">
                  <iron-icon class="size-l" icon="cxl:nav-trainings"></iron-icon>
                  <iron-icon class="size-l" icon="cxl:nav-trainings-active"></iron-icon>
                  <span>Trainings</span>
                </a>
              </li>
              <li>
                <a href="roadmap">
                  <iron-icon class="size-l" icon="cxl:nav-roadmap"></iron-icon>
                  <iron-icon class="size-l" icon="cxl:nav-roadmap-active"></iron-icon>
                  <span>Discover</span>
                </a>
              </li>
              <li>
                <a href="discover">
                  <iron-icon class="size-l" icon="cxl:nav-discover"></iron-icon>
                  <iron-icon class="size-l" icon="cxl:nav-discover-active"></iron-icon>
                  <span>Manage</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="bottom-nav">
            <ul class="nav-items">
              <li>
                <a href="/">
                  <iron-icon class="size-l" icon="lumo:user"></iron-icon>
                  <span>Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <cxl-institute-layout>
          <!-- Sidebar -->
          <h3 slot="sidebar-header">Training Manager</h3>
          <div class="sidebar-content" slot="sidebar-content">
            <strong class="extra-heading">Digital analytics minidegree program</strong>
            <vaadin-details theme="sidebar-track" opened>
              <div slot="summary">Google Analytics</div>
              <div>
                <cxl-institute-sidebar-items>
                  <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                    <!-- href class active -->
                    <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                  </cxl-institute-sidebar-item>
                  <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                    <a href="trainings/google-analytics-for-beginners/179345"
                      >Google Analytics for beginners</a
                    >
                  </cxl-institute-sidebar-item>
                  <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                    <a href="trainings/conducting-an-analytics-audit/12230"
                      >Conducting an analytics audit</a
                    >
                  </cxl-institute-sidebar-item>
                  <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                    <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                      >Using analytics to find conversion opportunities</a
                    >
                  </cxl-institute-sidebar-item>
                  <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                    <a href="trainings/intermediate-google-analytics/149924"
                      >Intermediate Google Analytics</a
                    >
                  </cxl-institute-sidebar-item>
                </cxl-institute-sidebar-items>
              </div>
            </vaadin-details>
          </div>

          <!-- Content -->
          <cxl-institute-content>
            <cxl-institute-content-header with-button slot="content-header">
              Course
              <vaadin-button theme="primary main-button" slot="header-button">
                Optional button
              </vaadin-button>
            </cxl-institute-content-header>

            Spit out content here
          </cxl-institute-content>
        </cxl-institute-layout>
      </div>
    `;
  });
