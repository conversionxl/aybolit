/* eslint-disable yoda */
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
import '@vaadin/context-menu';
import '@vaadin/button';
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
  searchDialogOpen = false;

  @property({ type: Boolean, reflect: true, attribute: 'wide' }) wide = false;

  @property({ type: String, attribute: 'home-url' }) homeUrl = '';

  @property({ type: Boolean, attribute: 'minimal' }) minimal = false;

  @property({ type: String, attribute: 'logo-bar' }) logoBar = 'global';

  @property({ type: Object })
  get contextMenuItems() {
    return this._contextMenuItems;
  }

  set contextMenuItems(data) {
    this._contextMenuItems = { ...data };
    const parseItem = (item, group) => {
      const newItem = { component: this.createItem(item, group) };

      if (item.children?.length) {
        newItem.children = [{ component: 'back' }, ...item.children].map(parseItem);
      }

      if ('primary' === group) {
        newItem.separator = true;
      }

      return newItem;
    };

    const groups = [];

    Object.keys(data).forEach((group) => {
      const items = data[group];
      const newGroup = {
        name: group,
        items: [...items?.map((item) => parseItem(item, group))],
      };
      groups.push(newGroup);
    });

    this.groups = groups;
    this.requestUpdate('groups');
  }

  /**
   * Concatenate nav groups into a single nav list for mobile layout. Keeps global
   * menu items last in the list by sorting the original this.groups array before
   * flat map operation.
   */
  @property({ type: Array }) mobileGroups = [];

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
    this._boundOnSearchOpen = this._onSearchOpen.bind(this);
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
      this._replaceMenuIcon();
      this.initHeadroom();
    });
  }

  updated(changes) {
    if (changes.has('groups') || changes.has('wide')) {
      this._updateContextMenuItems();
      this._replaceMenuIcon();
    }

    if (changes.has('groups')) {
      this.mobileGroups = this.getMobileGroups();
    }
  }

  render() {
    // collapse all navs into one if in mobile layout
    const groups = this.wide ? this.groups : this.mobileGroups;

    return html`
      ${groups.map((group) => {
        const { name, items } = group;

        return html`
          <nav id="menu-${name}-items" ?minimal=${this.minimal} part="nav" ?wide=${this.wide}>
            <div class="container">
              ${this.logoBar === name || !this.wide
                ? html`
                    <vaadin-menu-bar-button class="cxl-logo" theme="tertiary cxl-marketing-nav">
                      <a href=${this.homeUrl || 'https://cxl.com'}>
                        <vaadin-icon
                          icon="cxl:logo"
                          style="width: var(--lumo-icon-size-xl, 48px);"
                        ></vaadin-icon>
                      </a>
                    </vaadin-menu-bar-button>
                  `
                : ''}
              ${!this.wide ? this._renderSearch(group) : ''}
              <vaadin-menu-bar
                id="${name}-menu-bar"
                theme="tertiary cxl-marketing-nav"
                .items=${items}
              ></vaadin-menu-bar>
              <slot name="${name}-items-fixed"></slot>
            </div>
          </nav>
        `;
      })}

      <vaadin-dialog
        id="search-dialog"
        class="search-form-dialog"
        theme="cxl-marketing-nav-search"
        click
        ?wide=${this.wide}
        .opened="${this.searchDialogOpen}"
        @opened-changed=${this._boundOnSearchOpen}
        ${dialogRenderer(this._searchDialogRenderer, [])}
      >
      </vaadin-dialog>
      <slot id="search-form-slot" @slotchange=${this._boundSetupSearchDialog}></slot>
    `;
  }

  _onSearchOpen(e) {
    this.searchDialogOpen = e.detail.value;
    if (!e.detail.value) return;

    // Automatically focus search field when opened.

    this.searchDialog.$.overlay.querySelector('#search-input')?.focus();
  }

  // eslint-disable-next-line class-methods-use-this
  _renderSearch(group) {
    /**
     * Disable search on mobile.
     *
     * @since 2024.02.14
     * @see https://app.clickup.com/t/86azbhf2a
     */
    return '';

    // eslint-disable-next-line no-unreachable
    if (this.minimal || 'primary' !== group.name) return '';

    return html`
      <vaadin-menu-bar-button
        theme="tertiary cxl-marketing-nav"
        class="search-button"
        @click=${this.toggleSearchDialog}
      >
        <span>
          <vaadin-icon icon="lumo:search"></vaadin-icon> Search
          <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
        </span>
      </vaadin-menu-bar-button>
    `;
  }

  toggleSearchDialog() {
    this.searchDialogOpen = !this.searchDialogOpen;
  }

  // eslint-disable-next-line class-methods-use-this
  _searchDialogRenderer() {
    const template = this.querySelector('#cxl-marketing-nav-search-form-template');
    const templateContents = template.content.cloneNode(true);
    const searchForm = templateContents.querySelector('#search-form');
    return searchForm;
  }

  // eslint-disable-next-line class-methods-use-this
  _onBackBtnClick(e) {
    e.stopImmediatePropagation();
    [...document.body.querySelectorAll('vaadin-context-menu-overlay')].at(-1).close();
  }

  // eslint-disable-next-line class-methods-use-this
  _redirectMenuItemClick(e) {
    const { currentTarget } = e;
    const anchorElement = currentTarget.querySelector('a');
    anchorElement.click();
  }

  // Creates and returns a custom menu item component for use in vaadin-menu-bar
  createItem(
    { text, description, sectionheader, component, icon, href, children, depth, classes },
    group
  ) {
    // If divider, return an <hr> element, nothing else.
    if ('hr' === component) {
      return document.createElement('hr');
    }
    // Create menu item.
    const menuItemElement = document.createElement('vaadin-context-menu-item');

    // Add relevant classes and attributes conditionally.
    if (group) {
      menuItemElement.classList.add(`${group}-menu-item`);
    }

    if (sectionheader) {
      menuItemElement.classList.add('section-header');
    }

    // If there are classes, add them, avoiding empty strings.
    if (classes) {
      try {
        classes.forEach((className) => {
          if (className) menuItemElement.classList.add(className);
        });
      } catch (error) {
        classes.forEach((className) => {
          if (className.indexOf(' ') !== -1) {
            // eslint-disable-next-line no-console
            console.warn(`One of the classes items contains a space: ${className}`);
            className.split(' ').forEach((splitClass) => {
              if (splitClass) menuItemElement.classList.add(splitClass);
            });
          }
        });
      }

      if (classes?.includes('menu-item-search')) {
        menuItemElement.addEventListener('click', this.toggleSearchDialog.bind(this));
      }

      if (classes?.includes('menu-item-help')) {
        menuItemElement.addEventListener('click', () => {
          window.Intercom('show');
        });
      }
    }

    // Add prefix icon.
    if (icon) {
      const prefixIconElement = document.createElement('vaadin-icon');
      prefixIconElement.setAttribute('icon', `${icon}`);
      prefixIconElement.classList.add('vaadin-context-menu-item--icon');
      menuItemElement.appendChild(prefixIconElement);
    }

    // Add regular link, text label or CTA.
    if (href && !children && !sectionheader) {
      const link = document.createElement('a');
      const isCTA = classes?.includes('menu-item-cta');
      link.href = href;
      if (isCTA) {
        const ctaElement = document.createElement('vaadin-button');
        ctaElement.setAttribute('theme', 'primary');
        ctaElement.innerText = text;
        link.appendChild(ctaElement);
      } else {
        link.innerText = text;
      }
      menuItemElement.appendChild(link);
      menuItemElement.addEventListener('click', this._redirectMenuItemClick);
      menuItemElement.classList.add('has-link');
    } else if (text) {
      const labelElement = sectionheader
        ? document.createElement('h6')
        : document.createElement('span');
      labelElement.classList.add('vaadin-context-menu-item--label');
      labelElement.appendChild(document.createTextNode(text));
      menuItemElement.appendChild(labelElement);
    }

    // Add description.
    if (description) {
      const descriptionElement = document.createElement('div');
      descriptionElement.classList.add('vaadin-context-menu-item--description');
      descriptionElement.appendChild(document.createTextNode(description));
      menuItemElement.appendChild(descriptionElement);
    }

    // Add suffix dropdown icon, for a top level item with children.
    if (children?.length && 0 === depth) {
      const suffixIconElement = document.createElement('vaadin-icon');
      suffixIconElement.setAttribute('icon', 'lumo:dropdown');
      suffixIconElement.classList.add('vaadin-context-menu-item--dropdown-icon');
      menuItemElement.appendChild(suffixIconElement);
    }

    // Add back button. Used in mobile layout only.
    if ('back' === component) {
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

      if (overflowMenuButton && !overflowMenuButton.iconFixed) {
        const menuIcon = document.createElement('vaadin-icon');
        menuIcon.setAttribute('icon', 'lumo:menu');
        menuIcon.classList.add('vaadin-menu-bar-button--icon');
        menuIcon.classList.add('menu-icon');

        const closeIcon = document.createElement('vaadin-icon');
        closeIcon.setAttribute('icon', 'lumo:cross');
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

  getMobileGroups() {
    // eslint-disable-next-line no-nested-ternary
    const sorter = (a, b) => ('global' === a.name ? 1 : 'global' === b.name ? -1 : 0);
    const groups = [...this.groups];

    return [
      {
        name: 'primary',
        items: groups
          .sort(sorter)
          .map((group) => group.items.filter((item) => !item.isSearch))
          .flat(1),
      },
    ];
  }
}
