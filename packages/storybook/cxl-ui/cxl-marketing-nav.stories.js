import { html } from 'lit';
import { useEffect } from '@storybook/client-api';
import { Headroom } from '@conversionxl/cxl-ui';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import contextMenuItems from './cxl-marketing-nav.data.json';

export default {
  title: 'CXL UI/cxl-marketing-nav',
};

window.Headroom = Headroom;

export const CXLMarketingNav = (args) => {
  useEffect(() => {
    // Populate `<cxl-marketing-nav>` context menus.
    const cxlMarketingNavElement = document.querySelector('cxl-marketing-nav');

    cxlMarketingNavElement.contextMenuItems = contextMenuItems;

    const htmlEl = document.querySelector('html');
    if (args?.loggedIn) {
      htmlEl.classList.add('loggedIn');
    } else {
      htmlEl.classList.remove('loggedIn');
    }
  }, [args?.loggedIn]);

  return html`
    <style>
      html.loggedIn {
        margin-top: 32px;
      }

      #wp-admin-bar {
        position: fixed;
        width: 100%;
        height: 32px;
        background-color: gray;
        top: 0;
        color: white;
        padding: 0 1em;
      }
    </style>

    <cxl-marketing-nav class="menu" role="navigation" slot="header">
      <div id="search-form">
        <form role="search" method="get" class="search-form" action="https://cxl.com/institute/?s=">
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
      </div>
    </cxl-marketing-nav>
    <div id="wp-admin-bar" ?hidden=${!args?.loggedIn}>wp-admin bar: test nav menu placement</div>
  `;
};

CXLMarketingNav.args = {
  loggedIn: true,
};
