/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { customElement, property, state, queryAll } from 'lit/decorators.js';
import { MediaQueryController } from '@vaadin/component-base/src/media-query-controller.js';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlNavigationStyles from '../styles/cxl-navigation-css.js';
import cxlMarketingNavGlobalStyles from '../styles/global/cxl-marketing-nav-css.js';
import '@vaadin/icon';
import '@vaadin/menu-bar';

@customElement('cxl-navigation')
export class CXLNavigationElement extends LitElement {
  static get styles() {
    return [cxlNavigationStyles];
  }

  _contextMenuItems = { global: [], primary: [] };

  _phoneMediaQuery = '(max-width: 568px), (max-height: 568px)';

  @queryAll('vaadin-menu-bar')
  menuBars

  @state({ reflect: true, attribute: 'is-mobile' }) _isMobile = false;

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
        this._isMobile = matches;
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

    this._replaceMenuIcon();
  }

  updated(changes) {
    if (changes.has('groups') || changes.has('_isMobile')) {
      this._updateContextMenuItems();
    }
  }

  render() {
    const groups = this._isMobile
      ? this.mobileGroups
      : this.groups;
    return html`
      ${groups.map((group) => {
        const { name, items } = group;
        return html`
          <nav id="menu-${name}-items" ?minimal=${this._isMobile}>
            <div class="container">
              ${name === "global" || this._isMobile ? html`
                <vaadin-menu-bar-button theme="tertiary cxl-navigation">
                  <a href="https://cxl.com">
                    <vaadin-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></vaadin-icon>
                  </a>
                </vaadin-menu-bar-button>
                ` 
                : ''
              }
              ${this._isMobile ? this._renderSearch() : ''}
              <slot></slot>
              <vaadin-menu-bar theme="tertiary cxl-navigation" .items=${items}></vaadin-menu-bar>
              <slot name="${name}-after"></slot>
              <slot name="${name}-end"></slot>
            </div>
          </nav>
        `;
      })}
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  _renderSearch () {
    return html`
      <vaadin-menu-bar-button theme="tertiary cxl-navigation" class="search-button">
        <a>
          <vaadin-icon icon="lumo:search"></vaadin-icon> Search
          <vaadin-icon icon="lumo:dropdown"></vaadin-icon>
        </a>
        <vaadin-context-menu
          close-on="outside-click"
          open-on="click"
          theme="cxl-navigation"
        >
        </vaadin-context-menu>
      </vaadin-menu-bar-button>
    `
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

  _updateContextMenuItems () {
    if (!this.menuBars) return;

    [...this.menuBars].forEach(menu => {
      const splitItems = menu.shadowRoot.querySelectorAll('vaadin-context-menu-item.menu-item-split-nav');
      [...splitItems].forEach(item => {
        if (!item.parentElement.classList.contains('menu-item-split-nav')) {
          item.parentElement.classList.add('menu-item-split-nav');
        }
      })
    })
  }

  _replaceMenuIcon () {
    if (!this.menuBars) return;

    [...this.menuBars].forEach(menu => {
      const overflowMenuButton = menu.shadowRoot.querySelector('vaadin-menu-bar-button[part="overflow-button"]');
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
    })
  }
}
