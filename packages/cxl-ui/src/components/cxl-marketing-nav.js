/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, state, queryAll } from 'lit/decorators.js';
import { MediaQueryController } from '@vaadin/component-base/src/media-query-controller.js';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlMarketingNavStyles from '../styles/cxl-marketing-nav-css.js';
import cxlMarketingNavGlobalStyles from '../styles/global/cxl-marketing-nav-css.js';
import '@vaadin/icon';
import '@vaadin/menu-bar';

@customElement('cxl-marketing-nav')
export class CXLMarketingNavElement extends LitElement {
  static get styles() {
    return [cxlMarketingNavStyles];
  }

  _contextMenuItems = { global: [], primary: [] };

  _phoneMediaQuery = '(max-width: 568px), (max-height: 568px)';

  @queryAll('vaadin-menu-bar')
  menuBars;

  @property({ reflect: true, attribute: 'wide' }) wide = false;

  @state()
  groups = [];

  @property({ type: Boolean, attribute: 'show-search' }) showSearch = false;

  @property({ type: Object })
  get contextMenuItems() {
    return this._contextMenuItems;
  }

  set contextMenuItems(data) {
    this._contextMenuItems = { ...data };
    const parseItem = (item) => {
      const newItem = {
        component: this.createItem(item),
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
        items: [...items?.map(parseItem)],
      });
    });
    this.groups = groups;
    this.requestUpdate('groups');
  }

  connectedCallback() {
    super.connectedCallback();
    this.addController(
      new MediaQueryController(this._phoneMediaQuery, (matches) => {
        this.wide = !matches;
        this.mobileGroups = [
          { name: 'primary', items: this.groups.map((group) => group.items).flat(1) },
        ];
      })
    );
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
    });
  }

  updated(changes) {
    if (changes.has('groups') || changes.has('wide')) {
      this._updateContextMenuItems();
      this._replaceMenuIcon();
    }
  }

  render() {
    const groups = this.wide ? this.groups : this.mobileGroups;

    return html`
      ${groups.map((group) => {
        const { name, items } = group;
        return html`
          <nav id="menu-${name}-items" ?minimal=${!this.wide}>
            <div class="container">
              ${name === 'global' || !this.wide
                ? html`
                    <vaadin-menu-bar-button theme="tertiary cxl-marketing-nav">
                      <a href="https://cxl.com">
                        <vaadin-icon
                          icon="cxl:logo"
                          style="width: var(--lumo-icon-size-xl, 48px);"
                        ></vaadin-icon>
                      </a>
                    </vaadin-menu-bar-button>
                  `
                : ''}
              ${!this.wide ? this._renderSearch() : ''}
              <slot></slot>
              <vaadin-menu-bar theme="tertiary cxl-marketing-nav" .items=${items}></vaadin-menu-bar>
              <slot name="${name}-after"></slot>
              <slot name="${name}-end"></slot>
            </div>
          </nav>
        `;
      })}
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderSearch() {
    return html`
      <vaadin-menu-bar-button theme="tertiary cxl-marketing-nav" class="search-button">
        <a>
          <vaadin-icon icon="lumo:search"></vaadin-icon> Search
          <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
        </a>
        <vaadin-context-menu close-on="outside-click" open-on="click" theme="cxl-marketing-nav">
        </vaadin-context-menu>
      </vaadin-menu-bar-button>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _onBackBtnClick(e) {
    e.stopImmediatePropagation();
    [...document.body.querySelectorAll('vaadin-context-menu-overlay')].at(-1).close();
  }

  createItem({ text, description, sectionheader, component, icon, href, children, depth, split }) {
    const item = document.createElement('vaadin-context-menu-item');
    if (sectionheader) {
      item.classList.add('section-header');
    }

    if (split) {
      item.classList.add('menu-item-split-nav');
    }

    if (component === 'hr') {
      return document.createElement('hr');
    }

    if (icon) {
      const vaadinIcon = document.createElement('vaadin-icon');
      vaadinIcon.setAttribute('icon', `lumo:${icon}`);
      item.appendChild(vaadinIcon);
    }

    if (href && !children && !sectionheader) {
      const link = document.createElement('a');
      link.href = href;
      link.innerText = text;
      item.appendChild(link);
    } else if (text) {
      const labelElement = sectionheader
        ? document.createElement('h6')
        : document.createElement('span');
      labelElement.classList.add('vaadin-context-menu-item--label');
      labelElement.appendChild(document.createTextNode(text));
      item.appendChild(labelElement);
    }

    if (description) {
      const descriptiondiv = document.createElement('div');
      descriptiondiv.classList.add('vaadin-context-menu-item--description');
      descriptiondiv.appendChild(document.createTextNode(description));
      item.appendChild(descriptiondiv);
    }

    if (children?.length && depth === 0) {
      const vaadinIcon = document.createElement('vaadin-icon');
      vaadinIcon.setAttribute('icon', 'lumo:dropdown');
      vaadinIcon.classList.add('vaadin-context-menu-item--icon');
      item.appendChild(vaadinIcon);
    }

    if (component === 'back') {
      const backBtn = document.createElement('vaadin-button');

      backBtn.classList.add('context-menu-item-back-button');
      backBtn.innerHTML = '<vaadin-icon icon="lumo:angle-left"></vaadin-icon> Back';

      item.classList.add('back-button-menu-item');
      item.appendChild(backBtn);

      item.addEventListener('click', this._onBackBtnClick.bind(this));
    }

    return item;
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
    if (!this.menuBars) return;

    [...this.menuBars].forEach((menu) => {
      const overflowMenuButton = menu.shadowRoot.querySelector(
        'vaadin-menu-bar-button[part="overflow-button"]'
      );
      if (overflowMenuButton && !overflowMenuButton.iconFixed) {
        const dots = overflowMenuButton.querySelector('.dots');
        if (dots) {
          dots.remove();
        }
        const menuIcon = document.createElement('vaadin-icon');
        const closeIcon = document.createElement('vaadin-icon');
        menuIcon.setAttribute('icon', 'lumo:menu');
        closeIcon.setAttribute('icon', 'lumo:cross');
        menuIcon.classList.add('menu-icon');
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
