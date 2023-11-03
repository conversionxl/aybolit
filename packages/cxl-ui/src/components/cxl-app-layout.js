/**
 * @todo implement primary action button.
 */
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import normalizeWheel from '@conversionxl/normalize-wheel';
import { MediaQueryController } from '@vaadin/component-base/src/media-query-controller.js';
import { provide } from '@lit/context';
import cxlAppLayoutStyles from '../styles/cxl-app-layout-css.js';
import cxlAppLayoutGlobalStyles from '../styles/global/cxl-app-layout-css.js';
import '@vaadin/button';
import { mediaContext } from '../media-context.js';

const ASIDE_LOCAL_STORAGE_KEY = 'cxl-app-layout-aside-opened';

@customElement('cxl-app-layout')
export class CXLAppLayoutElement extends LitElement {
  @query('aside')
  asideElement;

  @query('main')
  mainElement;

  @property({ type: Boolean })
  get asideOpened() {
    this._asideOpened = JSON.parse(localStorage.getItem(ASIDE_LOCAL_STORAGE_KEY));

    return (
      this._asideOpened === null ||
      (this.scroll !== 'panels' && this.layout === '2c-l') ||
      this._asideOpened
    );
  }

  set asideOpened(value) {
    localStorage.setItem(ASIDE_LOCAL_STORAGE_KEY, JSON.stringify(value));

    this.requestUpdate('asideOpened', this._asideOpened);
  }

  /**
   * 2-column layouts can scroll individual content panels, or document.
   *
   * @type {string}
   */
  @property({ reflect: true })
  scroll = 'document';

  /**
   * Configurable layout.
   *
   * @type {string}
   */
  @property()
  layout = '1c';

  // @see https://github.com/vaadin/web-components/blob/de3db720ec8448a26d2f84d00965a9e369a1c3fb/packages/select/src/vaadin-select.js#L297
  _phoneMediaQuery = '(max-width: 568px), (max-height: 568px)';

  // @TODO: Improve media query using shared state, possibly @lit/Context (https://lit.dev/docs/data/context/)
  // Device Detector media query.
  _wideMediaQuery = '(min-width: 528px)';

  @provide({ context: mediaContext })
  @property()
  _phone = false;

  @provide({ context: mediaContext })
  @property()
  _wide = false;

  static get styles() {
    return [cxlAppLayoutStyles];
  }

  render() {
    const asideElement = html`
      <aside
        role="complementary"
        aria-label="Primary sidebar"
        itemscope="itemscope"
        itemtype="https://schema.org/WPSideBar"
        ?opened="${this.asideOpened}"
      >
        <vaadin-button
          aria-label="Toggle sidebar"
          theme="contrast icon"
          @click="${() => {
            this.asideOpened = !this.asideOpened;
          }}"
        >
          <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
        </vaadin-button>
        <slot name="sidebar"></slot>
      </aside>
    `;

    const mainElement = html`
      <main role="main" itemprop="mainContentOfPage">
        <slot></slot>
        <slot name="action-bar"></slot>
      </main>
    `;

    return html`
      <header role="banner" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
        <slot name="header"></slot>
      </header>

      <div id="main">
        ${this.getAttribute('layout') === '2c-r' ? html`${asideElement}` : ''} ${mainElement}
        ${this.getAttribute('layout') === '2c-l' ? html`${asideElement}` : ''}
      </div>

      <footer role="contentinfo" itemscope="itemscope" itemtype="https://schema.org/WPFooter">
        <slot name="footer"></slot>
      </footer>
    `;
  }

  constructor() {
    super();

    this.addController(
      new MediaQueryController(this._wideMediaQuery, (matches) => {
        if (this.wide !== undefined && this.wide !== matches) {
          window.location.reload();
        }

        this.wide = matches;
      })
    );

    this.addController(
      new MediaQueryController(this._phoneMediaQuery, (matches) => {
        this._phone = matches;
      })
    );
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    if (changedProperties.has('wide')) {
      if (this.wide && this.scroll === 'panels') {
        this.addEventListener('wheel', this._onWheel, { passive: true });
      } else {
        this.removeEventListener('wheel', this._onWheel);
      }
    }
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlAppLayoutGlobalStyles, {
      moduleId: 'cxl-app-layout-global',
    });
  }

  // Event listener for the wheel event to allow scrolling from outside of the main pane.
  _onWheel(event) {
    if (event.target.tagName === 'CXL-APP-LAYOUT') {
      this.mainElement.scrollTop += normalizeWheel(event).pixelY;
    }
  }
}
