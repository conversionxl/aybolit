import { LitElement, html, customElement, property, query } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlMarketingNavStyles from '../styles/cxl-marketing-nav-css.js';
import cxlMarketingNavGlobalStyles from '../styles/global/cxl-marketing-nav-css.js';
import './cxl-headroom/index.js';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-context-menu';

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

  @property({ type: Boolean, reflect: true })
  wide;

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
        @selected-changed="${e => {
          this.menuShadowItemsSelectedIdx = e.detail.value;
        }}"
        @click="${this._menuShadowItemsClick}"
      >
        <vaadin-tab class="menu-item menu-item-logo" theme="cxl-marketing-nav">
          <a href="https://conversionxl.com"
            ><iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon
          ></a>
        </vaadin-tab>
        <vaadin-tab
          class="menu-item menu-item-search"
          theme="cxl-marketing-nav"
          ?hidden="${this.minimal}"
        >
          <a
            ><iron-icon icon="lumo:search"></iron-icon> Search
            <iron-icon icon="lumo:dropdown"></iron-icon
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
        >
          <a
            >Menu <iron-icon icon="lumo:menu"></iron-icon><iron-icon icon="lumo:cross"></iron-icon
          ></a>
        </vaadin-tab>
      </vaadin-tabs>

      <nav>
        <slot></slot>
      </nav>

      <vaadin-device-detector
        @wide-changed="${e => {
          this.wide = e.target.wide;
        }}"
      ></vaadin-device-detector>
    `;
  }

  firstUpdated(changedProperties) {
    /**
     * Global styles.
     *
     * @todo Helper function usable across components.
     */
    const tmpl = document.createElement('template');
    tmpl.innerHTML = `<style id="cxl-marketing-nav-global">${cxlMarketingNavGlobalStyles}</style>`;
    document.head.appendChild(tmpl.content);

    /**
     * Configure context menu trigger on main link click.
     *
     * @see https://github.com/vaadin/vaadin-context-menu/blob/v4.3.12/src/vaadin-context-menu.html#L172
     * @see https://www.nngroup.com/articles/split-buttons-navigation/
     */
    this.querySelectorAll('.menu-item > vaadin-context-menu').forEach(contextMenu => {
      // eslint-disable-next-line no-param-reassign
      contextMenu.listenOn = contextMenu.parentElement;
    });

    /**
     * Configure .menu-item-search keydown listeners.
     *
     * `<vaadin-context-menu-item>` interferes with form input.
     *
     * @see https://github.com/vaadin/vaadin-item/blob/v2.1.1/src/vaadin-item-mixin.html#L136
     */
    const menuItemSearchContextMenu = this.menuItemSearchElement.querySelector(
      'vaadin-context-menu'
    );

    menuItemSearchContextMenu.addEventListener(
      'opened-changed',
      ee => {
        const searchForm = ee.target.$.overlay.querySelector('.search-form');

        searchForm.addEventListener('keydown', ef => {
          // Allow Esc.
          if (ef.key !== 'Esc') {
            ef.stopPropagation();
          }
        });
      } /* , { once: true } necessary for `content-changed`? */
    );

    menuItemSearchContextMenu.addEventListener('item-selected', e => {
      e.stopImmediatePropagation();
    });

    /**
     * Attach search form template.
     */
    const searchFormTemplate = this.querySelector('#cxl-marketing-nav-search-form-template') || '';

    if (searchFormTemplate && 'content' in searchFormTemplate) {
      menuItemSearchContextMenu.items = [
        { component: searchFormTemplate.content.firstElementChild }
      ];
    }

    // @todo Focus search box.
    menuItemSearchContextMenu.$.overlay.focusTrap = true;

    /**
     * Decide `<vaadin-tabs>` initial orientation.
     */
    this._updatedWide();

    super.firstUpdated(changedProperties);
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
   * Create `<vaadin-context-menu>` elements, with children nesting support.
   * Support `{ component: a }`.
   *
   * @private
   * @see https://github.com/vaadin/vaadin-context-menu/issues/254
   */
  _createContextMenuItems(contextMenuItems) {
    contextMenuItems.forEach((item, i, self) => {
      if (item.children) {
        this._createContextMenuItems(item.children);
      }

      if (item.component === 'a') {
        const menuItem = document.createElement('vaadin-context-menu-item');
        const link = document.createElement('a');

        link.href = item.href;
        link.text = item.text;

        menuItem.appendChild(link);

        // eslint-disable-next-line no-param-reassign
        self[i] = { component: menuItem };
      }
    });

    return contextMenuItems;
  }

  /**
   * Populate children `<vaadin-context-menu>` elements.
   *
   * @private
   * @todo Links cannot be sub-menu hosts?
   */
  _updatedContextMenuItems() {
    Object.values(this.contextMenuItems).forEach(items => {
      items.forEach(menuItem => {
        if (!menuItem.children) {
          return;
        }

        const contextMenu = this.querySelector(
          `vaadin-tab#menu-item-${menuItem.id} > vaadin-context-menu`
        );

        // Populate.
        contextMenu.items = this._createContextMenuItems(menuItem.children);

        // Prevent close on upstream events: clicks, keydown, etc
        contextMenu.addEventListener('item-selected', e => {
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

    this.menuItemsElements.forEach(el => {
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

    this.menuItemSearchElement.querySelector('vaadin-context-menu').listenOn = searchElement;
  }

  /**
   * @private
   */
  _updatedWide() {
    this._reorientMenuItems();
    this._rotateMenuItemSearchListenOn();
  }

  _menuShadowItemsClick(e) {
    if (this.menuShadowItemsSelectedIdx !== -1) {
      if (this.menuShadowItemsSelectedIdx === e.currentTarget.selected) {
        e.currentTarget.selected = -1;
        e.stopImmediatePropagation();
      }
    }
  }
}
