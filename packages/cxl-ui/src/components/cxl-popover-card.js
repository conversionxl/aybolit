import { html, LitElement, render } from 'lit';
import { customElement, property, query } from 'lit/decorators';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-lumo-styles';
import cxlPopoverCardStyles from '../styles/cxl-popover-card-css';

@customElement('cxl-popover-card')
export class CXLPopoverCardElement extends LitElement {
  @property({ type: String })
  apiUrl =
    'https://my-json-server.typicode.com/dominik-stypula-polcode/cxl-playbooks-database/playbooks/442534';

  @property({ type: String })
  href = 'https://google.com';

  @property({ type: String })
  text = 'Google';

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
   * @param {TemplateResult} content
   * @return {Promise<void>}
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  async _showTemporaryElement(content) {
    const el = document.createElement('div');

    console.log(this.anchorPosition);

    el.id = 'cxl-popover-tmp-div';
    el.style.position = 'absolute';
    el.style.left = `${this._getAnchorPositionLeft()}px`;
    el.style.top = `${this._getAnchorPositionTop()}px`;
    el.style.maxWidth = 'calc(var(--cxl-content-width) * 0.7)';

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
    const getRandomNumber = (min, max) => parseInt(Math.random() * (max - min) + min, 10);

    return html`
      <cxl-accordion-multiversion-card
        id="${el.cxl_hybrid_attr_post['@attributes'].id}"
        class="${el.cxl_hybrid_attr_post['@attributes'].class}"
        theme="${el.cxl_hybrid_attr_post['@attributes'].class.includes(
          'category-minidegree-programs'
        )
          ? 'dark'
          : ''}"
      >
        <header class="entry-header" slot="summary">
          <label title="Playbook" class="entry-type">Playbook</label>

          <div class="entry-summary" itemprop="description">${el.breadcrumbs.join('/')}</div>

          <h2 class="entry-title no-anchor" itemprop="headline">
            <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url"
              >${el.title.raw}</a
            >
          </h2>

          <div class="entry-byline">
            ${el.versions.length === 1
              ? html` <div>400 votes</div>
                  <div>Author: ${el.versions[0].author}</div>`
              : html``}
            ${el.versions.length > 1
              ? html` <div>
                  Versions: ${html`<span class="author">${el.versions.length}</span>`}
                </div>`
              : html``}
          </div>
        </header>

        <div class="entry-content" itemprop="text">
          <div class="tags">${el.categories_names.map((t) => html`<a href="#">${t}</a>`)}</div>

          ${el.versions.length > 1
            ? html`
                <div class="version-authors">
                  ${el.versions
                    .slice(0, 2)
                    .map(
                      (v) =>
                        html`
                          <div data-version-id="${v.version}">
                            By ${v.author} (${getRandomNumber(2, 1000)} upvotes)
                          </div>
                        `
                    )}
                </div>

                <vaadin-details>
                  <div slot="summary">See more versions</div>
                  <div class="version-authors">
                    ${el.versions
                      .slice(2)
                      .map(
                        (v) =>
                          html`
                            <div data-version-id="${v.version}">
                              By ${v.author} (${getRandomNumber(2, 1000)} upvotes)
                            </div>
                          `
                      )}
                  </div>
                </vaadin-details>
              `
            : html``}
          ${el.versions.map(
            (v) => html`
              <div class="version" data-version-id="${v.version}">
                <p><strong>Use case</strong></p>
                <div class="ttr_start"></div>
                <p>${unsafeHTML(v.content.cxl_get_extended_main)}</p>
                <div class="ttr_end"></div>
                <ol>
                  ${v.playbook_steps.map((step) => html` <li>${step.title}</li> `)}
                </ol>
              </div>
            `
          )}
        </div>
      </cxl-accordion-multiversion-card>
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
          >${this.text}</a
        >
      </span>
    `;
  }
}