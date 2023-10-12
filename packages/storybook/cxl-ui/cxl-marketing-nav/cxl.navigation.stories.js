import { useEffect } from '@storybook/client-api';
import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-navigation.js';
import contextMenuItems from '../cxl-marketing-nav.data.json';

export default {
  title: 'CXL UI/cxl-marketing-nav',
};

export const CXLNavigation = (args) => {
  useEffect(() => {
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
    <cxl-navigation .contextMenuItems=${contextMenuItems}>
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
    </cxl-navigation>
    <div id="wp-admin-bar" ?hidden=${!args?.loggedIn}>
      wp-admin bar: test nav menu placement
    </div>
  `
}

CXLNavigation.args = {
  loggedIn: true
}