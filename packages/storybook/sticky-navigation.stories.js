import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import contextMenuItems from './navigation.data.json';

export default {
  title: 'CXL Navigation - Sticky'
};

export const CxlMarketingNav = () => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');

    cxlMarketingNavElement.contextMenuItems = contextMenuItems;

    const cxlHeadroomNavElement = document.querySelector('cxl-headroom#cxl-headroom-primary-nav');
    const cxlHeadroomSubNavElement = document.querySelector('cxl-headroom#cxl-headroom-sub-nav');

    function setSubNavTop(top) {
      cxlHeadroomSubNavElement.top = () => {
        return `${top}px`;
      };
    }

    cxlHeadroomNavElement.addEventListener('set-height-offset', e => {
      setSubNavTop(e.detail.height);
    });

    cxlHeadroomSubNavElement.addEventListener('connected-init', () => {
      const getOffset = el => {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };
      cxlHeadroomSubNavElement.pinStart = getOffset(cxlHeadroomSubNavElement).top;
    });
  }, []);

  // eslint-disable-next-line lit/no-invalid-html
  return html`
    <cxl-headroom id="cxl-headroom-primary-nav">
      <cxl-marketing-nav id="menu-primary" class="menu menu-primary" role="navigation">
        <template id="cxl-marketing-nav-search-form-template">
          <vaadin-context-menu-item class="menu-item-search">
            <form
              role="search"
              method="get"
              class="search-form"
              action="https://conversionxl.com/institute/?s="
            >
              <label for="search-input"
                >Search <em style="color: var(--lumo-primary-color);">C</em>XL Institute:</label
              >
              <input id="search-input" type="search" class="search-field" value="" name="s" />
              <vaadin-button
                type="submit"
                class="search-submit"
                aria-label="Search"
                theme="icon"
                onclick="document.getElementById('search-form').submit();"
              >
                <iron-icon icon="lumo:angle-right"></iron-icon>
              </vaadin-button>
            </form>
          </vaadin-context-menu-item>
        </template>

        <vaadin-tabs
          id="menu-global-items"
          class="menu-items"
          orientation="vertical"
          selected="-1"
          theme="cxl-marketing-nav"
        >
          <vaadin-tab class="menu-item menu-item-logo menu-item-wide" theme="cxl-marketing-nav">
            <a href="https://conversionxl.com"
              ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon
            ></a>
          </vaadin-tab>
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/institute/">Institute</a></vaadin-tab
          >
          <vaadin-tab
            id="menu-item-95"
            class="menu-item menu-item-95 menu-item-has-children"
            theme="cxl-marketing-nav"
          >
            <a href="https://conversionxl.com/agency/"
              >Conversion optimization services <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu
              open-on="click"
              class="sub-menu"
              theme="cxl-marketing-nav"
            ></vaadin-context-menu
          ></vaadin-tab>
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/agency/case-studies/"
              >Agency case studies</a
            ></vaadin-tab
          >
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/blog/">Blog</a></vaadin-tab
          >
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/live/"
              >CXL Live 2020
              <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon></a
          ></vaadin-tab>
          <vaadin-tab
            class="menu-item menu-item-split-nav menu-item-has-children menu-item-wide menu-item-search"
            theme="cxl-marketing-nav"
          >
            <a
              ><iron-icon icon="lumo:search"></iron-icon> Search
              <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
          </vaadin-tab>
        </vaadin-tabs>

        <vaadin-tabs
          id="menu-primary-items"
          class="menu-items"
          orientation="vertical"
          selected="-1"
          theme="cxl-marketing-nav"
        >
          <vaadin-tab
            id="menu-item-35"
            class="menu-item menu-item-35 menu-item-has-children"
            theme="cxl-marketing-nav"
          >
            <a href="https://conversionxl.com/institute/dashboard/"
              >My dashboard <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu
              open-on="click"
              class="sub-menu"
              theme="cxl-marketing-nav"
            ></vaadin-context-menu>
          </vaadin-tab>
          <vaadin-tab
            id="menu-item-36"
            class="menu-item menu-item-36 menu-item-has-children"
            theme="cxl-marketing-nav"
          >
            <a
              href="https://conversionxl.com/institute/online-courses/?_categories=minidegree-programs"
              >Minidegrees <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu
              open-on="click"
              class="sub-menu"
              theme="cxl-marketing-nav"
            ></vaadin-context-menu>
          </vaadin-tab>
          <vaadin-tab
            id="menu-item-37"
            class="menu-item menu-item-37 menu-item-has-children"
            theme="cxl-marketing-nav"
          >
            <a href="https://conversionxl.com/institute/online-courses/"
              >Online courses <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu
              open-on="click"
              class="sub-menu"
              theme="cxl-marketing-nav"
            ></vaadin-context-menu>
          </vaadin-tab>
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/institute/upcoming-courses/"
              >Upcoming courses</a
            ></vaadin-tab
          >
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/institute/media/">Event videos</a></vaadin-tab
          >
          <vaadin-tab class="menu-item menu-item-split-nav" theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/institute/my-account/teams/"
              ><iron-icon icon="lumo:plus"></iron-icon> Invite team</a
            ></vaadin-tab
          >
          <vaadin-tab
            id="menu-item-41"
            class="menu-item menu-item-has-children"
            theme="cxl-marketing-nav"
            ><a href="https://conversionxl.com/institute/my-account/"
              ><iron-icon icon="lumo:user"></iron-icon> My account
              <iron-icon icon="lumo:dropdown"></iron-icon
            ></a>
            <vaadin-context-menu
              open-on="click"
              class="sub-menu"
              theme="cxl-marketing-nav"
            ></vaadin-context-menu>
          </vaadin-tab>
          <vaadin-tab class="menu-item" theme="cxl-marketing-nav"><a>Help</a></vaadin-tab>
        </vaadin-tabs>
      </cxl-marketing-nav>
    </cxl-headroom>
    <vaadin-item theme="cxl-hero-content">
      <h1>Learn to optimize your design using <strong>data.</strong></h1>
      <h2><span>Online course:</span> <strong>Data-driven UX masterclass</strong></h2>
      <h5>by Karl Gilis, world-renowned CRO Expert &amp; Information Architect.</h5>
      <p>
        Get a proven and hand-on UX framework to make more money with your website &amp; landing
        pages. Use user research tools and techniques to uncover usability and UX problems on any
        site.
      </p>
    </vaadin-item>
    <cxl-headroom id="cxl-headroom-sub-nav" pinStart="120">
      <vaadin-tabs>
        <vaadin-tab theme="cxl-marketing-nav-tab">
          <vaadin-button theme="primary cxl-button margin-right"
            ><a href="">Start your free trial</a></vaadin-button
          >
        </vaadin-tab>
        <vaadin-tab theme="cxl-marketing-nav-tab">
          <vaadin-button theme="primary cxl-button cxl-transparent"
            ><a href="">Download syllabus</a></vaadin-button
          >
        </vaadin-tab>
        <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
          <a href="#testimonials">
            Testimonials
          </a>
        </vaadin-tab>
        <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
          <a href="#case-studies">
            Instructors
          </a>
        </vaadin-tab>
        <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
          <a href="#case-studies">
            Curriculum
          </a>
        </vaadin-tab>
      </vaadin-tabs>
    </cxl-headroom>
    <main>
      <style>
        /* @todo @include wrap mixin. */
        .wrap {
          margin: 0 auto;
          max-width: var(--cxl-wrap-width, none);
          padding: 0 var(--cxl-wrap-padding);
          position: relative;
        }
      </style>

      <div class="wrap">
        <p>
          We need to test context menu items vs body links styling, so here's a
          <a href="https://cxl.com">link somewhere like cxl.com</a>.
        </p>
        <p><a href="https://cxl.com">Another link</a> for good measure.</p>
        <hr />
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
        <p>Lorum ipsum.....</p>
      </div>
    </main>
  `;
};

CxlMarketingNav.story = {
  name: 'cxl-marketing-nav-sticky'
};
