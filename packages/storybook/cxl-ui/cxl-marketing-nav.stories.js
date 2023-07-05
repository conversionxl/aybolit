import { html } from 'lit';
import { useEffect } from '@storybook/client-api';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { Headroom } from '@conversionxl/cxl-ui';
import contextMenuItems from './cxl-marketing-nav.data.json';

export default {
  title: 'CXL UI/cxl-marketing-nav',
};

export const CXLMarketingNav = () => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');

    cxlMarketingNavElement.contextMenuItems = contextMenuItems;

    cxlMarketingNavElement.initHeadroom(Headroom);
  }, []);

  return html`
    <cxl-marketing-nav id="menu-primary" class="menu menu-primary" role="navigation" slot="header">
      <template id="cxl-marketing-nav-search-form-template">
        <vaadin-context-menu-item class="menu-item-search">
          <form
            role="search"
            method="get"
            class="search-form"
            action="https://cxl.com/institute/?s="
          >
            <label for="search-input">
              Search <em style="color: var(--lumo-primary-color);">C</em>XL:
            </label>
            <input id="search-input" type="search" class="search-field" value="" name="s" />
            <vaadin-button
              type="submit"
              class="search-submit"
              aria-label="Search"
              theme="icon"
              onclick="document.getElementById('search-form').submit();"
            >
              <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
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
        <vaadin-tab
          id="menu-item-95"
          class="menu-item menu-item-95 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a href="https://speero.com">
            Conversion optimization services <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
          </a>
          <vaadin-context-menu
            open-on="click"
            class="sub-menu"
            theme="cxl-marketing-nav"
          ></vaadin-context-menu
        ></vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav">
          <a href="https://speero.com/case-studies">Agency case studies</a>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav">
          <a href="https://cxl.com/blog/">Blog</a>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav">
          <a href="https://cxl.com/live/">CXL Live 2020
            <vaadin-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></vaadin-icon>
          </a
        ></vaadin-tab>
        <vaadin-tab class="menu-item menu-item-split-nav" theme="cxl-marketing-nav"><a>Help</a></vaadin-tab>
      </vaadin-tabs>

      <vaadin-tabs
        id="menu-primary-items"
        class="menu-items"
        orientation="vertical"
        selected="-1"
        theme="cxl-marketing-nav"
      >
        <vaadin-tab class="menu-item menu-item-logo menu-item-wide" theme="cxl-marketing-nav">
          <a href="https://cxl.com">
            <vaadin-icon
              icon="cxl:logo"
              style="width: var(--lumo-icon-size-xl, 48px);"
            ></vaadin-icon>
          </a>
        </vaadin-tab>
        <vaadin-tab
          id="menu-item-35"
          class="menu-item menu-item-35 menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a href="https://cxl.com/institute/dashboard/">
            My dashboard <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
          </a>
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
          <a href="#">
            Training <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
          </a>
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
          <a href="https://cxl.com/institute/online-courses/">
            Online courses <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
          </a>
          <vaadin-context-menu
            open-on="click"
            class="sub-menu"
            theme="cxl-marketing-nav"
          ></vaadin-context-menu>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav">
          <a href="https://cxl.com/institute/upcoming-courses/">Upcoming courses</a>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav">
          <a href="https://cxl.com/institute/media/">Event videos</a>
        </vaadin-tab>
        <vaadin-tab
          class="menu-item menu-item-has-children menu-item-wide menu-item-split-nav menu-item-search"
          theme="cxl-marketing-nav"
        >
          <a>
            <vaadin-icon icon="lumo:search"></vaadin-icon> Search <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
          </a>
        </vaadin-tab>
        <vaadin-tab class="menu-item" theme="cxl-marketing-nav">
          <a href="https://cxl.com/institute/my-account/teams/">
            <vaadin-icon icon="lumo:plus"></vaadin-icon> Invite team
          </a>
        </vaadin-tab>
        <vaadin-tab
          id="menu-item-41"
          class="menu-item menu-item-has-children"
          theme="cxl-marketing-nav"
        >
          <a href="https://cxl.com/institute/my-account/">
            <vaadin-icon icon="lumo:user"></vaadin-icon> My account <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
          </a>
          <vaadin-context-menu
            open-on="click"
            class="sub-menu"
            theme="cxl-marketing-nav"
          ></vaadin-context-menu>
        </vaadin-tab>
      </vaadin-tabs>
    </cxl-marketing-nav>
  `;
};

CXLMarketingNav.storyName = 'menu-primary';
