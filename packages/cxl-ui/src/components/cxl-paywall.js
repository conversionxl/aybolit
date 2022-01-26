import '@vaadin/vaadin-dialog';

import { css, customElement, html, LitElement, property, query } from 'lit-element';
import { render } from 'lit-html';

@customElement('cxl-paywall')
export class CXLPaywallElement extends LitElement {
  @property({ type: Number }) _count = 0;

  @property({ type: Number }) delay = 1000;

  @property({ type: Number }) duration = 1000;

  @property({ type: Number }) _limit = 10;

  @property({ type: Number }) _month = 0;

  @property({ type: Number }) opacity = 0;

  @property({ type: Boolean }) _shouldSubscribe = false;

  @property({ type: Boolean }) subscribed = false;

  @query('#content') content;

  @query('vaadin-dialog') dialog;

  @query("slot[name='message']") messageSlot;

  _animation;

  _clickListener;

  _hidden = false;

  static get styles() {
    return [
      css`
        slot[name='message'] {
          display: none;
        }
      `,
    ];
  }

  render() {
    return html`
      <slot name="message"></slot>
      <div id="content">
        <slot></slot>
      </div>
      <vaadin-dialog
        modeless
        no-close-on-esc
        no-close-on-outside-click
        ?opened=${this._shouldSubscribe}
      ></vaadin-dialog>
    `;
  }

  constructor() {
    super();

    // Add paywall class
    this.classList.add('paywall');

    // Read count from local storage
    this._read();
  }

  updated() {
    this.validate();
  }

  firstUpdated() {
    this._setRenderer();
    this._checkDate();
    this._increment();
  }

  /**
   * Check if we are in a new month
   */
  _checkDate() {
    const month = new Date().getMonth();
    if (Math.abs(month - this._month) > 1) {
      this._month = month;
      this._count = 0;
      this._write();
    }
  }

  /**
   * Disable interaction with protected content
   */
  _disable() {
    // Capture and reject
    if (!this._clickListener) {
      this._clickListener = (e) => {
        e.stopPropagation();
      };
      this.addEventListener('click', this._clickListener, { capture: true });
    }

    // Disable text selection
    this.style.userSelect = 'none';
  }

  /**
   * Enable interaction with protected content
   */
  _enable() {
    this.removeEventListener('click', this._clickListener);
    this._clickListener = false;

    // Re-enable text selection
    this.style.userSelect = 'initial';
  }

  /**
   * Hide the content
   */
  _hide() {
    this._animation?.cancel();
    this._animation = this.content.animate(
      [
        {
          opacity: this.opacity,
        },
      ],
      {
        duration: 1000,
        fill: 'forwards',
      }
    );
    this._animation.onfinish = () => {
      this._hidden = true;
      this._shouldSubscribe = true;
    };
    this._animation.play();

    this._disable();
  }

  /**
   * Increment the count
   */
  _increment() {
    this._count += 1;
    this._write();
  }

  /**
   * Read from local storage
   */
  _read() {
    const count = localStorage.getItem('cxl-paywall-count');
    if (count !== undefined) this._count = Number(count);

    const month = localStorage.getItem('cxl-paywall-month');
    if (month !== undefined) this._month = Number(month);
  }

  _setRenderer() {
    this.dialog.renderer = (root) => {
      render(this.messageSlot.assignedNodes()[0].children[0], root);
    };
  }

  /**
   * Show content (Only needed for Storybook demo)
   */
  _show() {
    this._animation?.cancel();
    this._animation = this.content.animate(
      [
        {
          opacity: 100,
        },
      ],
      {
        duration: 0,
        fill: 'forwards',
      }
    );
    this._animation.onfinish = () => {
      this._hidden = false;
      this._shouldSubscribe = false;
    };
    this._animation.play();

    this._enable();
  }

  /**
   * Check if content should be displayed or not
   */
  validate() {
    if (!this.subscribed && this._count >= this._limit) {
      setTimeout(() => {
        if (!this._hidden) this._hide();
      }, this.delay);
    } else if (this._hidden) this._show();
  }

  /**
   * Write to local storage
   */
  _write() {
    localStorage.setItem('cxl-paywall-count', String(this._count));
    localStorage.setItem('cxl-paywall-month', String(this._month));
  }
}
