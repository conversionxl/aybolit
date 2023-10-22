/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, state, query, queryAll } from 'lit/decorators.js';
import { MediaQueryController } from '@vaadin/component-base/src/media-query-controller.js';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import { dialogRenderer } from '@vaadin/dialog/lit.js';
import cxlMarketingNavStyles from '../styles/cxl-marketing-nav-css.js';
import cxlMarketingNavGlobalStyles from '../styles/global/cxl-marketing-nav-css.js';
import '@vaadin/icon';
import '@vaadin/menu-bar';
import '@vaadin/dialog';

@customElement('cxl-marketing-nav')
export class CXLMarketingNavElement extends LitElement {
  static get styles() {
    return [cxlMarketingNavStyles];
  }

  _contextMenuItems = { global: [], primary: [] };

  _phoneMediaQuery = '(max-width: 568px)';

  @queryAll('vaadin-menu-bar')
  menuBars;

  @query('#search-dialog')
  searchDialog;

  @query('slot#search-form-slot')
  searchFormSlot;

  @state()
  groups = [];

  @state()
  searchDialogOpened = false;

  @property({ type: Boolean, reflect: true, attribute: 'wide' }) wide = false;

  @property({ type: String, attribute: 'home-url' }) homeUrl = '';

  @property({ type: Boolean, attribute: 'minimal' }) minimal = false;

  @property({ type: Object })
  get contextMenuItems() {
    return this._contextMenuItems;
  }

  set contextMenuItems(data) {
    this._contextMenuItems = { ...data };
    const parseItem = (item, group) => {
      const newItem = {
        component: this.createItem(item, group),
      };
      if (item.children?.length) {
        newItem.children = [{ component: 'back' }, ...item.children].map(parseItem);
      }
      return newItem;
    };
    const groups = [];
    Object.keys(data).forEach((group) => {
      const items = data[group];
      groups.push({
        name: group,
        items: [...items?.map((item) => parseItem(item, group))],
      });
    });
    this.groups = groups;
    this.requestUpdate('groups');
  }

  /**
   * Concatenate nav groups into a single nav list for mobile layout. Keeps global
   * menu items last in the list by sorting the original this.groups array before
   * flat map operation.
   */
  @property({ type: Array })
  get mobileGroups() {
    // eslint-disable-next-line no-nested-ternary
    const sorter = (a, b) => (a.name === 'global' ? 1 : b.name === 'global' ? -1 : 0);
    return [
      {
        name: 'primary',
        items: this.groups
          .sort(sorter)
          .map((group) => group.items)
          .flat(1),
      },
    ];
  }

  get menuItemSearchElement() {
    return this.querySelector('.search-button');
  }

  connectedCallback() {
    super.connectedCallback();
    this.addController(
      new MediaQueryController(this._phoneMediaQuery, (matches) => {
        this.wide = !matches;
      })
    );
    this._boundSearchDialog = this._setupSearchDialog.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  firstUpdated() {
    /**
     * Global styles.
     */
    registerGlobalStyles(cxlMarketingNavGlobalStyles, {
      moduleId: 'cxl-marketing-nav-global',
    });

    requestAnimationFrame(() => {
      this._updateContextMenuItems();
      this._replaceMenuIcon();
      this.initHeadroom();
      this.searchDialog.$.overlay.setAttribute('theme', 'cxl-marketing-nav-search');
    });
  }

  updated(changes) {
    if (changes.has('groups') || changes.has('wide')) {
      this._updateContextMenuItems();
      this._replaceMenuIcon();
    }
  }

  render() {
    // collapse all navs into one if in mobile layout
    const groups = this.wide ? this.groups : this.mobileGroups;

    return html`
      ${groups.map((group) => {
        const { name, items } = group;
        return html`
          <nav id="menu-${name}-items" ?minimal=${!this.wide}>
            <div class="container">
              ${name === 'global' || !this.wide
                ? html`
                    <vaadin-context-menu-item class="cxl-logo" theme="tertiary cxl-marketing-nav">
                      <a href=${this.homeUrl || 'https://cxl.com'}>
                        <vaadin-icon
                          icon="cxl:logo"
                          style="width: var(--lumo-icon-size-xl, 48px);"
                        ></vaadin-icon>
                      </a>
                    </vaadin-context-menu-item>
                  `
                : ''}
              ${!this.wide ? this._renderSearch(group) : ''}
              <vaadin-menu-bar theme="tertiary cxl-marketing-nav" .items=${items}></vaadin-menu-bar>
              <slot name="${name}-after"></slot>
              <slot name="${name}-end"></slot>
              ${this.wide ? this._renderSearch(group) : ''}
            </div>
          </nav>
        `;
      })}
      <vaadin-dialog
        id="search-dialog"
        class="search-form-dialog"
        ?modeless=${this.wide}
        .opened="${this.searchDialogOpened}"
        @opened-changed=${this._boundSearchDialog}
        ${dialogRenderer(this._searchDialogRenderer, [])}
      >
      </vaadin-dialog>
      <slot id="search-form-slot"></slot>
    `;
  }

  _setupSearchDialog(e) {
    this.searchDialogOpened = e.detail.value;
    if (!e.detail.value) return;
    const contents = this.searchFormSlot.assignedElements();
    if (contents.length) {
      this.searchDialog.$.overlay
        .querySelector('div.search-form-container')
        .appendChild(contents[0]);
    }
    this.searchDialog.$.overlay
      .querySelector('div.search-form-container')
      .querySelector('#search-input')
      .focus();
  }

  // eslint-disable-next-line class-methods-use-this
  _renderSearch(group) {
    if (this.minimal || group.name !== 'primary') return '';

    return html`
      <vaadin-menu-bar-button
        theme="tertiary cxl-marketing-nav"
        class="search-button"
        @click=${this.toogleSearch}
      >
        <a>
          <vaadin-icon icon="lumo:search"></vaadin-icon> Search
          <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
        </a>
      </vaadin-menu-bar-button>
    `;
  }

  toogleSearch() {
    this.searchDialogOpened = !this.searchDialogOpened;
  }

  // eslint-disable-next-line class-methods-use-this
  _searchDialogRenderer() {
    return html` <div class="search-form-container"></div> `;
  }

  // eslint-disable-next-line class-methods-use-this
  _onBackBtnClick(e) {
    e.stopImmediatePropagation();
    [...document.body.querySelectorAll('vaadin-context-menu-overlay')].at(-1).close();
  }

  // Creates and returns a custom menu item component for use in vaadin-menu-bar
  createItem(
    { text, description, sectionheader, component, icon, href, children, depth, split },
    group
  ) {
    // If divider, return an <hr> element, nothing else
    if (component === 'hr') {
      return document.createElement('hr');
    }

    // create menu item
    const menuItemElement = document.createElement('vaadin-context-menu-item');
    if (group) menuItemElement.classList.add(`${group}-menu-item`);

    // Add relevant classes conditionally
    if (sectionheader) {
      menuItemElement.classList.add('section-header');
    }
    if (split) {
      menuItemElement.classList.add('menu-item-split-nav');
    }

    // Add prefix icon, if applicable
    if (icon) {
      const prefixIconElement = document.createElement('vaadin-icon');
      prefixIconElement.setAttribute('icon', `lumo:${icon}`);
      menuItemElement.appendChild(prefixIconElement);
    }

    // Add regular link or text label
    if (href && !children && !sectionheader) {
      const link = document.createElement('a');
      link.href = href;
      link.innerText = text;
      menuItemElement.appendChild(link);
    } else if (text) {
      // Use h6 for section headers, otherwise use span
      const labelElement = sectionheader
        ? document.createElement('h6')
        : document.createElement('span');
      labelElement.classList.add('vaadin-context-menu-item--label');
      labelElement.appendChild(document.createTextNode(text));
      menuItemElement.appendChild(labelElement);
    }

    // Add description, if applicable
    if (description) {
      const descriptionElement = document.createElement('div');
      descriptionElement.classList.add('vaadin-context-menu-item--description');
      descriptionElement.appendChild(document.createTextNode(description));
      menuItemElement.appendChild(descriptionElement);
    }

    // Add suffix dropdown icon, if it's a top level item with children
    if (children?.length && depth === 0) {
      const suffixIconElement = document.createElement('vaadin-icon');
      suffixIconElement.setAttribute('icon', 'lumo:dropdown');
      suffixIconElement.classList.add('vaadin-context-menu-item--dropdown-icon');
      menuItemElement.appendChild(suffixIconElement);
    }

    // Back button, used in mobile layout only
    if (component === 'back') {
      const backButtonElement = document.createElement('vaadin-button');

      backButtonElement.classList.add('context-menu-item-back-button');
      backButtonElement.innerHTML = '<vaadin-icon icon="lumo:angle-left"></vaadin-icon> Back';

      menuItemElement.classList.add('back-button-menu-item');
      menuItemElement.appendChild(backButtonElement);

      menuItemElement.addEventListener('click', this._onBackBtnClick.bind(this));
    }

    return menuItemElement;
  }

  _updateContextMenuItems() {
    if (!this.menuBars) return;

    [...this.menuBars].forEach((menu) => {
      const splitItems = menu.shadowRoot.querySelectorAll(
        'vaadin-context-menu-item.menu-item-split-nav'
      );
      [...splitItems].forEach((item) => {
        if (!item.parentElement.classList.contains('menu-item-split-nav')) {
          item.parentElement.classList.add('menu-item-split-nav');
        }
      });
    });
  }

  _replaceMenuIcon() {
    if (!this.menuBars || this.wide) return;

    [...this.menuBars].forEach((menu) => {
      const overflowMenuButton = menu.shadowRoot.querySelector(
        'vaadin-menu-bar-button[part="overflow-button"]'
      );
      overflowMenuButton.toggleAttribute('hidden', false);
      if (overflowMenuButton && !overflowMenuButton.iconFixed) {
        const menuIcon = document.createElement('vaadin-icon');
        const closeIcon = document.createElement('vaadin-icon');
        menuIcon.setAttribute('icon', 'lumo:menu');
        closeIcon.setAttribute('icon', 'lumo:cross');
        menuIcon.classList.add('vaadin-menu-bar-button--icon');
        menuIcon.classList.add('menu-icon');
        closeIcon.classList.add('vaadin-menu-bar-button--icon');
        closeIcon.classList.add('close-icon');
        overflowMenuButton.appendChild(closeIcon);
        overflowMenuButton.appendChild(menuIcon);
        overflowMenuButton.iconFixed = true;
      }
    });
  }

  /**
   * Initialize Headroom.
   *
   * @since 2022.11.10
   *
   * @param contextMenuItems
   * @param Headroom
   */
  async initHeadroom() {
    /**
     * Fix race condition where the css properties are not available yet.
     *
     * @since 2022.11.11
     * @see https://cxlworld.slack.com/archives/C01JABH8AHX/p1667298030545399?thread_ts=1667211996.651629&cid=C01JABH8AHX
     * @see https://stackoverflow.com/a/63062857
     * @see https://lit.dev/docs/components/lifecycle/#updatecomplete
     */
    await this.updateComplete;

    const bodyElement = document.querySelector('body');

    /**
     * Headroom.
     *
     * @see https://github.com/WickyNilliams/headroom.js
     */
    const headroom = new window.Headroom(this, {
      tolerance: {
        up: 30,
        down: 30,
      },
      offset: this.hasAttribute('wide') ? Math.max(this.offsetHeight, this.clientHeight) / 2 : 0,
      onNotTop() {
        bodyElement.classList.add('cxl-marketing-nav-sticky');
      },
      onTop() {
        bodyElement.classList.remove('cxl-marketing-nav-sticky');
      },
    });

    headroom.init();
  }
}
