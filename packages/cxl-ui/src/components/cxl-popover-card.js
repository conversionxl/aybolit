import { html, LitElement, render } from 'lit';
import { customElement, property, query } from 'lit/decorators';
import '@conversionxl/cxl-lumo-styles';
import cxlPopoverCardStyles from '../styles/cxl-popover-card-css';
import CXLSingleMultiversionCardDisplay from "./partials/cxl-single-multiversion-card-display";

@customElement('cxl-popover-card')
export class CXLPopoverCardElement extends LitElement {
  @property({ type: String })
  apiUrl = 'https://cxl.fake/playbooks/1';

  @property({ type: String })
  href = 'https://google.com';

  @property({ type: String })
  text = 'Google';

  @property({ type: Number })
  userId = 1234;

  @property({ type: Boolean })
  selected = false;

  @property({ type: Number })
  timeoutId;

  @property({ type: Number })
  timeoutDelayMs = 500;

  @property({ type: Object })
  anchorPosition;

  @query('a')
  anchor;

  static get styles() {
    return [cxlPopoverCardStyles];
  }

  async firstUpdated() {
    await super.firstUpdated();
  }

  async _triggerMouseOver(event) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this._getAnchorPosition(event.target);

    this._removeTemporaryElement();

    const playbookObj = await this._fetchData(this.apiUrl);

    const content = await this._prepareContent(playbookObj);

    await this._showTemporaryElement(content);
  }

  // eslint-disable-next-line class-methods-use-this
  async _triggerMouseOut() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this._removeTemporaryElement();
    }, this.timeoutDelayMs);
  }

  _getAnchorPosition(anchor) {
    const rect = anchor.getBoundingClientRect();

    const offsets = this._getOffset(anchor);

    this.anchorPosition = {
      width: anchor.offsetWidth,
      height: anchor.offsetHeight,
      top: offsets.top,
      left: offsets.left,
      viewportTop: rect.top,
      viewportLeft: rect.left,
      viewportBottom: rect.bottom,
      viewportRight: rect.right,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  _removeTemporaryElement() {
    const el = document.getElementById('cxl-popover-tmp-div');
    if (el) {
      el.remove();
    }
  }

  _getAnchorPositionTop() {
    return this.anchorPosition.top - 50;
  }

  _getAnchorPositionLeft() {
    return this.anchorPosition.left + this.anchorPosition.width + 50;
  }

  // eslint-disable-next-line class-methods-use-this
  _getOffset(el) {
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      // eslint-disable-next-line no-param-reassign
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  /**
   * @param {TemplateResult<1>} content
   * @return {Promise<void>}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  async _showTemporaryElement(content) {
    const el = document.createElement('div');

    el.id = 'cxl-popover-tmp-div';
    el.style.position = 'absolute';
    el.style.left = `${this._getAnchorPositionLeft()}px`;
    el.style.top = `${this._getAnchorPositionTop()}px`;
    el.style.maxWidth = 'calc(var(--cxl-content-width) * 0.7)';
    el.style.zIndex = 1000;

    el.onmouseenter = () => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
    };

    el.onmouseleave = () => {
      this.timeoutId = setTimeout(() => {
        this._removeTemporaryElement();
      }, this.timeoutDelayMs);
    };

    render(content, el);

    document.body.appendChild(el);
  }

  // eslint-disable-next-line class-methods-use-this
  async _prepareContent(el) {
    return html`
      <cxl-vaadin-accordion
        id="cxl-vaadin-accordion-26107"
        class="archive archive-certificate plural"
        theme="cxl-accordion-card"
      >
        ${CXLSingleMultiversionCardDisplay(el, this.userId, this.selected)}
      </cxl-vaadin-accordion>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  async _fetchData(url = '') {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });

    return response.json();
  }

  render() {
    return html`
      <span>
        <a
          @mouseenter=${this._triggerMouseOver}
          @mouseleave=${this._triggerMouseOut}
          href="${this.href}"
          target="_blank"
          >${this.text}</a
        >
      </span>
    `;
  }
}
