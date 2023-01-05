import { LitElement, html, render } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import { MediaQueryController } from '@vaadin/component-base/src/media-query-controller.js';
import { throttle } from 'lodash-es';
import cxlMarketingNavStyles from '../styles/cxl-marketing-nav-css.js';
import cxlMarketingNavGlobalStyles from '../styles/global/cxl-marketing-nav-css.js';
import '@vaadin/button';
import '@vaadin/tabs';
import '@vaadin/context-menu';

@customElement('cxl-marketing-nav')
export class CXLMarketingNavElement extends LitElement {
  @property({ type: Object })
  contextMenuItems;

  @property({ type: Boolean, reflect: true })
  fixed = false;

  @query('.menu-items')
  menuShadowItemsElement;

  @property({ type: HTMLElement })
  get menuItemSearchElement() {
    return this.shadowRoot.querySelector('.menu-item-search');
  }

  @property({ type: NodeList })
  get menuItemsElements() {
    return this.querySelectorAll('.menu-items');
  }

  @property({ type: Number })
  menuShadowItemsSelectedIdx = -1;

  // Conditionally hide distracting shadow menu items. Used for checkout, etc.
  @property({ type: Boolean, reflect: true })
  minimal = false;

  // MediaQueryController.
  @property({ type: Boolean, reflect: true })
  wide;

  // Device Detector media query.
  _wideMediaQuery = '(min-width: 750px)';

  @property({ type: Boolean, reflect: true })
  _phone;

  // @see https://github.com/vaadin/web-components/blob/de3db720ec8448a26d2f84d00965a9e369a1c3fb/packages/select/src/vaadin-select.js#L297
  _phoneMediaQuery = '(max-width: 420px), (max-height: 420px)';

  @property({ type: HTMLElement })
  submenuOverlay = null;

  static get styles() {
    return [cxlMarketingNavStyles];
  }

  render() {
    return html`
      <vaadin-tabs
        id="menu-shadow-items"
        class="menu-items"
        selected="${this.menuShadowItemsSelectedIdx}"
        orientation="horizontal"
        theme="cxl-marketing-nav hide-scroll-buttons minimal"
        @selected-changed="${(e) => {
          this.menuShadowItemsSelectedIdx = e.detail.value;
        }}"
        @click="${this._menuShadowItemsClick}"
      >
        <vaadin-tab class="menu-item menu-item-logo" theme="cxl-marketing-nav">
          <a href="https://conversionxl.com"
            ><vaadin-icon
              icon="cxl:logo"
              style="width: var(--lumo-icon-size-xl, 48px);"
            ></vaadin-icon
          ></a>
        </vaadin-tab>
        <vaadin-tab
          class="menu-item menu-item-search"
          theme="cxl-marketing-nav"
          ?hidden="${this.minimal}"
        >
          <a
            ><vaadin-icon icon="lumo:search"></vaadin-icon> Search
            <vaadin-icon icon="lumo:dropdown"></vaadin-icon
          ></a>
          <vaadin-context-menu
            close-on="outside-click"
            open-on="click"
            theme="cxl-marketing-nav"
          ></vaadin-context-menu
        ></vaadin-tab>
        <vaadin-tab
          class="menu-item menu-item-menu-toggle"
          theme="cxl-marketing-nav"
          ?hidden="${this.minimal}"
          @click=${this._toggleMobileMenu}
        >
          <a
            >Menu <vaadin-icon icon="lumo:menu"></vaadin-icon
            ><vaadin-icon icon="lumo:cross"></vaadin-icon
          ></a>
        </vaadin-tab>
      </vaadin-tabs>

      <nav>
        <slot></slot>
      </nav>
    `;
  }

  constructor() {
    super();

    this.addController(
      new MediaQueryController(this._wideMediaQuery, (matches) => {
        this.wide = matches;
      })
    );

    this.addController(
      new MediaQueryController(this._phoneMediaQuery, (matches) => {
        this._phone = matches;
      })
    );
  }

  firstUpdated(changedProperties) {
    /**
     * Global styles.
     */
    registerGlobalStyles(cxlMarketingNavGlobalStyles, {
      moduleId: 'cxl-marketing-nav-global',
    });

    /**
     * Configure context menu trigger on main link click.
     *
     * @see https://github.com/vaadin/vaadin-context-menu/blob/v4.3.12/src/vaadin-context-menu.html#L172
     * @see https://www.nngroup.com/articles/split-buttons-navigation/
     */
    this.querySelectorAll('.menu-item > vaadin-context-menu').forEach((contextMenu) => {
      // eslint-disable-next-line no-param-reassign
      contextMenu.listenOn = contextMenu.parentElement;

      /**
       * Back button custom event.
       *
       * @since 2022.11.14
       * @see https://app.clickup.com/t/3rgnekt
       * @type {string}
       */
      // eslint-disable-next-line no-param-reassign
      contextMenu.closeOn = 'backBtnClose';

      /**
       * @todo Needs docblock.
       */
      contextMenu.addEventListener('opened-changed', ({ detail: { value } }) => {
        const listBox = document.querySelector('vaadin-context-menu-list-box');
        let listBoxWidth = parseFloat(getComputedStyle(listBox).getPropertyValue('width'));

        const vaadinMenuItemComputedStyle = getComputedStyle(
          listBox.querySelector('.vaadin-menu-item')
        );

        listBoxWidth -=
          parseFloat(vaadinMenuItemComputedStyle.paddingLeft) +
          parseFloat(vaadinMenuItemComputedStyle.paddingRight) * 2;

        listBox.style.setProperty('--cxl-vaadin-context-menu-item-max-width', `${listBoxWidth}px`);

        const descriptionItem = listBox.querySelector('.vaadin-context-menu-item--description');
        if (descriptionItem) {
          descriptionItem.hidden = !value;
        }
      });
    });

    /**
     * Search form integration.
     */
    this._setupSearchForm();

    /**
     * Decide `<vaadin-tabs>` initial orientation.
     */
    this._updatedWide();

    /**
     * Highlight current menu item.
     */
    this._highlightCurrentMenuItem();

    /**
     * Handle `<vaadin-context-menu-overlay>`.
     * Check every 1000ms the scroll position.
     */
    window.addEventListener(
      'scroll',
      throttle(() => {
        this._maybeCloseContextMenuOverlay();
      }, 1000)
    );

    document.body.addEventListener('vaadin-overlay-open', this._onOverlayOpen.bind(this));

    super.firstUpdated(changedProperties);
  }

  /**
   * Store overlay when triggered for `vaadin-context-menu-item` sub menu.
   *
   * @since 2022.11.14
   * @see https://app.clickup.com/t/3rgnekt
   * @private
   */
  _onOverlayOpen(oe) {
    const overlay = oe.target;

    if (!overlay) {
      return;
    }

    const backBtn = overlay.querySelector('.context-menu-item-back-button');

    if (!backBtn) {
      return;
    }

    this.submenuOverlay = overlay;
  }

  /**
   * Listen to back button click event,
   * close the relevant overlay.
   *
   * @since 2022.11.14
   * @see https://app.clickup.com/t/3rgnekt
   * @private
   */
  _onBackBtnClick() {
    if (!this.submenuOverlay) {
      return;
    }

    this.submenuOverlay.dispatchEvent(new CustomEvent('backBtnClose', { bubbles: true }));
  }

  updated(changedProps) {
    if (changedProps.has('contextMenuItems')) {
      this._updatedContextMenuItems();
    }

    if (changedProps.has('wide')) {
      this._updatedWide();
    }

    super.updated(changedProps);
  }

  /**
   * Add `<vaadin-context-menu>` element for back button.
   */
  // eslint-disable-next-line class-methods-use-this
  _addBackButtonItem(contextMenuItems) {
    const backBtn = {
      component: 'back',
    };

    // eslint-disable-next-line no-param-reassign
    contextMenuItems = [backBtn, ...contextMenuItems];

    return contextMenuItems;
  }

  /**
   * Create `<vaadin-context-menu>` elements, with children nesting support.
   * Support `{ component: a }`.
   *
   * @private
   * @see https://github.com/vaadin/vaadin-context-menu/issues/254
   */
  _createContextMenuItems(contextMenuItems) {
    contextMenuItems.forEach((item, i, self) => {
      if (item.children) {
        // eslint-disable-next-line no-param-reassign
        item.children = this._addBackButtonItem(item.children);
        this._createContextMenuItems(item.children);
      }

      if (item.component === 'a') {
        const menuItem = document.createElement('vaadin-context-menu-item');
        const link = document.createElement('a');

        link.href = item.href;
        link.text = item.text;

        menuItem.appendChild(link);

        // Add `description` element, if WordPress Menu Item has `description` field set.
        if (item.description) {
          const descriptionItem = document.createElement('div');

          descriptionItem.classList.add('vaadin-context-menu-item--description');

          // Set to hidden, to calculate currently opened menu width and use it for description.
          descriptionItem.hidden = true;

          render(html`${unsafeHTML(item.description)}`, descriptionItem);

          menuItem.appendChild(descriptionItem);
        }

        // eslint-disable-next-line no-param-reassign
        self[i] = { component: menuItem };
      }

      if (item.component === 'back') {
        const menuItemBack = document.createElement('vaadin-context-menu-item');
        const backBtn = document.createElement('vaadin-button');

        backBtn.classList.add('context-menu-item-back-button');
        backBtn.innerHTML = '<vaadin-icon icon="lumo:angle-left"></vaadin-icon> Back';

        menuItemBack.classList.add('back-button-menu-item');
        menuItemBack.appendChild(backBtn);

        menuItemBack.addEventListener('click', this._onBackBtnClick.bind(this));

        // eslint-disable-next-line no-param-reassign
        self[i] = { component: menuItemBack };
      }
    });

    return contextMenuItems;
  }

  /**
   * Highlight menu item with special class.
   * Improves visual "Where am I?" navigation clarity.
   *
   * @since 2020.04.12
   * @private
   */
  _highlightCurrentMenuItem() {
    this.menuItemsElements.forEach((menuItemsEl) => {
      const currentMenuItemEl = menuItemsEl.querySelector('.current-menu-item');

      if (currentMenuItemEl && currentMenuItemEl.id && menuItemsEl.items) {
        const idx = menuItemsEl.items.findIndex((i) => i.id === currentMenuItemEl.id);

        menuItemsEl.setAttribute('selected', idx);
      }
    });
  }

  /**
   * Populate children `<vaadin-context-menu>` elements.
   *
   * @private
   * @todo Links cannot be sub-menu hosts?
   */
  _updatedContextMenuItems() {
    Object.values(this.contextMenuItems).forEach((items) => {
      items.forEach((menuItem) => {
        if (!menuItem.children) {
          return;
        }

        const contextMenu = this.querySelector(
          `vaadin-tab#menu-item-${menuItem.id} > vaadin-context-menu`
        );

        // Populate.
        contextMenu.items = this._createContextMenuItems(menuItem.children);

        // Prevent close on upstream events: clicks, keydown, etc
        contextMenu.addEventListener('item-selected', (e) => {
          e.stopImmediatePropagation();
        });
      });
    });
  }

  /**
   * Re-orient menu items.
   *
   * @see https://github.com/vaadin/vaadin-context-menu/blob/v4.3.12/src/vaadin-device-detector.html#L12
   * @see https://github.com/vaadin/vaadin-context-menu/issues/253
   * @todo refactor w/ `<cxl-icon-nav>`?
   */
  _reorientMenuItems() {
    let orientation = 'vertical';

    if (this.wide) {
      orientation = 'horizontal';
    }

    this.menuItemsElements.forEach((el) => {
      el.setAttribute('orientation', orientation);
      el.setAttribute('wide', this.wide);
    });

    this.menuShadowItemsElement.setAttribute('wide', this.wide);
  }

  /**
   * Rotate search menu item context menu listener, because Chrome does not allow sending clicks to hidden elements.
   *
   * @see https://sookocheff.com/post/javascript/the-javascript-click-event-and-hidden-input-elements/
   */
  _rotateMenuItemSearchListenOn() {
    let searchElement = this.menuItemSearchElement;

    if (this.wide) {
      searchElement = this.querySelector('.menu-item-search');
    }

    // Empty `cxl-marketing-nav` check.
    if (searchElement) {
      this.menuItemSearchElement.querySelector('vaadin-context-menu').listenOn = searchElement;
    }
  }

  /**
   * @private
   */
  _setupSearchForm() {
    /**
     * Configure `.menu-item-search`.
     */
    const menuItemSearchContextMenu =
      this.menuItemSearchElement.querySelector('vaadin-context-menu');

    /**
     * `<vaadin-context-menu-item>` interferes with form input.
     *
     * @see https://github.com/vaadin/vaadin-item/blob/v2.1.1/src/vaadin-item-mixin.html#L136
     */
    menuItemSearchContextMenu.addEventListener(
      'opened-changed',
      (ee) => {
        const searchForm = ee.target.$.overlay.querySelector('.search-form');

        searchForm.addEventListener('keydown', (ef) => {
          // Allow Esc.
          if (ef.key !== 'Escape') {
            ef.stopPropagation();
          }
        });
      },
      { once: true }
    );

    /**
     * Avoid upstream default immediate close behavior.
     */
    menuItemSearchContextMenu.addEventListener('item-selected', (e) => {
      e.stopImmediatePropagation();
    });

    /**
     * Attach search form template.
     */
    const searchFormTemplate = this.querySelector('#cxl-marketing-nav-search-form-template') || '';

    if (searchFormTemplate && 'content' in searchFormTemplate) {
      menuItemSearchContextMenu.items = [
        { component: searchFormTemplate.content.firstElementChild },
      ];
    }

    /**
     * Enable instant typing, avoid focus click.
     */
    menuItemSearchContextMenu.$.overlay.addEventListener('vaadin-overlay-open', (e) =>
      e.target.querySelector('#search-input').focus()
    );
  }

  /**
   * @private
   */
  _updatedWide() {
    this._reorientMenuItems();
    this._rotateMenuItemSearchListenOn();
  }

  /**
   * Mobile menu toggle.
   *
   * @see https://app.clickup.com/t/3phu3bv
   * @since 2022.10.18
   */
  // eslint-disable-next-line class-methods-use-this
  _toggleMobileMenu() {
    const bodyElement = document.querySelector('body');

    if (bodyElement) {
      bodyElement.classList.toggle('cxl-mobile-menu-opened');
    }
  }

  _menuShadowItemsClick(e) {
    if (this.menuShadowItemsSelectedIdx !== -1) {
      if (this.menuShadowItemsSelectedIdx === e.currentTarget.selected) {
        e.currentTarget.selected = -1;
        e.stopImmediatePropagation();
      }
    }
  }

  /**
   * Maybe close context menu overlay on scroll?
   * Only applicable if it's shown as dropdown.
   *
   * @see https://app.clickup.com/t/3q2z1a3
   * @since 2022.10.19
   */
  _maybeCloseContextMenuOverlay() {
    const el = document.querySelector('vaadin-context-menu-overlay');

    if (el && !this._phone) {
      el.close();
    }
  }

  /**
   * Initialize Headroom.
   *
   * @since 2022.11.10
   *
   * @param contextMenuItems
   * @param Headroom
   */
  async initHeadroom(Headroom) {
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
    const headroom = new Headroom(this, {
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
