import { LitElement, html, customElement, property, query } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

import headroomStyles from '../../styles/cxl-headroom-css.js';

import util from './helper/_util.js';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["_getViewportHeight", "_getElementPhysicalHeight", "_getDocumentHeight", "_getElementHeight"] }] */
@customElement('cxl-headroom')
export class CXLHeadroom extends LitElement {
  @property({ type: Function, attribute: false, reflect: false })
  noop = () => {};

  @property({ type: String, attribute: false })
  className = 'headroom headroom--unfixed';

  @property({ type: Function })
  parent = () => window;

  @property({ type: Boolean, reflect: true })
  disableInlineStyles = false;

  @property({ type: Boolean, reflect: true })
  disable = false;

  @property({ type: Number })
  upTolerance = 5;

  @property({ type: Number })
  downTolerance = 0;

  @property({ type: Function })
  onPin = this.noop;

  @property({ type: Function })
  onUnpin = this.noop;

  @property({ type: Function })
  onUnfix = this.noop;

  @property({ type: Object })
  wrapperStyle = {};

  @property({ type: Number })
  pinStart = 0;

  @property({ type: Object })
  style = {};

  @property({ type: Boolean, reflect: true })
  calcHeightOnResize = true;

  @property({ type: String, attribute: false })
  state = 'unfixed';

  @property({ type: String, attribute: false })
  translateY = '0';

  @property({ type: Boolean, reflect: true, attribute: false })
  animation = false;

  @property({ type: Number, reflect: true, attribute: false })
  height = '';

  @property({ type: String })
  userClassName = '';

  @property({ type: Number, attribute: false })
  currentScrollY = 0;

  @property({ type: Number, attribute: false })
  lastKnownScrollY = 0;

  @property({ type: Boolean, attribute: false })
  scrollTicking = false;

  @property({ type: Boolean, attribute: false })
  resizeTicking = false;

  @query('.cxl-headroom-inner')
  innerElement;

  constructor() {
    super();

    this._handleScroll = util.throttle(this._handleScroll.bind(this));
    this._handleResize = util.debounce(this._handleResize.bind(this));
  }

  static get styles() {
    return [headroomStyles];
  }

  connectedCallback() {
    super.connectedCallback();

    // @todo: Find a proper way to pass functions via
    // @decorator properties for type: Function.
    // This is a user-defined method.
    /* eslint no-eval: "error" */
    /* eslint-env es6 */
    // eslint-disable-next-line no-eval
    this.parent = eval(this.parent);

    if (!this.disable) {
      this.parent().addEventListener('scroll', this._handleScroll);

      if (this.calcHeightOnResize) {
        this.parent().addEventListener('resize', this._handleResize);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.parent().removeEventListener('scroll', this._handleScroll);
    window.removeEventListener('scroll', this._handleScroll);
    this.parent().removeEventListener('resize', this._handleResize);
  }

  firstUpdated(changedProperties) {
    this._setHeightOffset();

    super.firstUpdated(changedProperties);
  }

  _update() {
    this.currentScrollY = this._getScrollY();

    if (!this._isOutOfBound(this.currentScrollY)) {
      const { action } = util.shouldUpdate(
        this.lastKnownScrollY,
        this.currentScrollY,
        this, // this.props
        this // this.state
      );

      if (action === 'pin') {
        this._pin();
      } else if (action === 'unpin') {
        this._unpin();
      } else if (action === 'unpin-snap') {
        this._unpinSnap();
      } else if (action === 'unfix') {
        this._unfix();
      }
    }

    this.lastKnownScrollY = this.currentScrollY;
    this.scrollTicking = false;
  }

  _handleScroll() {
    if (!this.scrollTicking) {
      this.scrollTicking = true;
      this._update();
    }
  }

  _handleResize() {
    if (!this.resizeTicking) {
      this.resizeTicking = true;
      this._setHeightOffset();
    }
  }

  _setHeightOffset() {
    this.height = this.innerElement ? this.innerElement.offsetHeight : '';

    this.resizeTicking = false;
  }

  _getScrollY() {
    if (this.parent().pageYOffset !== undefined) {
      return this.parent().pageYOffset;
    }
    if (this.parent().scrollTop !== undefined) {
      return this.parent().scrollTop;
    }
    return (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  _isOutOfBound(currentScrollY) {
    const pastTop = currentScrollY < 0;

    const scrollerPhysicalHeight = this._getScrollerPhysicalHeight();
    const scrollerHeight = this._getScrollerHeight();

    const pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;

    return pastTop || pastBottom;
  }

  _getScrollerPhysicalHeight() {
    const parent = this.parent();

    return parent === window || parent === document.body
      ? this._getViewportHeight()
      : this._getElementPhysicalHeight(parent);
  }

  _getScrollerHeight() {
    const parent = this.parent();

    return parent === window || parent === document.body
      ? this._getDocumentHeight()
      : this._getElementHeight(parent);
  }

  _getViewportHeight() {
    return (
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    );
  }

  _getElementPhysicalHeight(elm) {
    return Math.max(elm.offsetHeight, elm.clientHeight);
  }

  _getDocumentHeight() {
    const { body } = document;
    const { documentElement } = document;

    return Math.max(
      body.scrollHeight,
      documentElement.scrollHeight,
      body.offsetHeight,
      documentElement.offsetHeight,
      body.clientHeight,
      documentElement.clientHeight
    );
  }

  _getElementHeight(elm) {
    return Math.max(elm.scrollHeight, elm.offsetHeight, elm.clientHeight);
  }

  _unpin() {
    this.onUnpin();

    this.translateY = '-100%';
    this.className = 'headroom headroom--unpinned';
    this.animation = true;
    this.state = 'unpinned';
  }

  _unpinSnap() {
    this.onUnpin();

    this.translateY = '-100%';
    this.className = 'headroom headroom--unpinned headroom-disable-animation';
    this.animation = false;
    this.state = 'unpinned';
  }

  _pin() {
    this.onPin();

    this.translateY = 0;
    this.className = 'headroom headroom--pinned';
    this.animation = true;
    this.state = 'pinned';
  }

  _unfix() {
    this.onUnfix();

    this.translateY = 0;
    this.className = 'headroom headroom--unfixed headroom-disable-animation';
    this.animation = false;
    this.state = 'unfixed';
  }

  render() {
    const { style } = this;

    let innerStyle = {
      position: this.disable || this.state === 'unfixed' ? 'relative' : 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      WebkitTransform: `translate3D(0, ${this.translateY}, 0)`,
      MsTransform: `translate3D(0, ${this.translateY}, 0)`,
      transform: `translate3D(0, ${this.translateY}, 0)`
    };

    let { className } = this;

    // Don't add css transitions until after we've done the initial
    // negative transform when transitioning from 'unfixed' to 'unpinned'.
    // If we don't do this, the header will flash into view temporarily
    // while it transitions from 0 — -100%.
    if (this.animation) {
      innerStyle = {
        ...innerStyle,
        WebkitTransition: 'all .2s ease-in-out',
        MozTransition: 'all .2s ease-in-out',
        OTransition: 'all .2s ease-in-out',
        transition: 'all .2s ease-in-out'
      };
      className += ' headroom--scrolled';
    }

    if (!this.disableInlineStyles) {
      innerStyle = {
        ...innerStyle,
        ...style
      };
    } else {
      innerStyle = style;
    }

    const wrapperStyles = {
      ...this.wrapperStyle,
      height: this.height ? this.height : null
    };

    const wrapperClassName = this.userClassName
      ? `cxl-headroom headroom-wrapper ${this.userClassName} `
      : 'cxl-headroom headroom-wrapper ';

    className = `cxl-headroom-inner ${className}`;

    return html`
      <div style=${styleMap(wrapperStyles)} class="${wrapperClassName}">
        <div style=${styleMap(innerStyle)} class="${className}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
