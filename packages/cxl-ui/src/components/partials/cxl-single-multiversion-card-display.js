import {html} from 'lit-html';
import {unsafeHTML} from 'lit-html/directives/unsafe-html';

const CXLSingleMultiversionCardDisplay = (el, userId, selected) => {
  const postType = el.cxl_hybrid_attr_post['@attributes'].class.includes(
    'category-minidegree-programs'
  )
    ? 'minidegree'
    : 'playbook';

  return html`
    <cxl-accordion-multiversion-card
      id="${el.cxl_hybrid_attr_post['@attributes'].id}"
      class="${el.cxl_hybrid_attr_post['@attributes'].class}"
      theme="${postType === 'minidegree' ? 'dark' : ''}"
    >
      <header class="entry-header" slot="summary">
        <label title="${postType === 'minidegree' ? 'Course' : 'Playbook'}"
               class="entry-type">${postType === 'minidegree' ? 'COURSE' : 'PLAYBOOK'}</label>

        <cxl-save-favorite
          postType="${postType === 'minidegree' ? 'minidegree' : 'playbook'}"
          postId="${el.cxl_hybrid_attr_post['@attributes'].id}"
          userId="${userId}"
          ?selected=${selected}
          isCardVersion
        ></cxl-save-favorite>

        <div class="entry-summary" itemprop="description">${el.breadcrumbs.join('/')}</div>

        <h2 class="entry-title no-anchor" itemprop="headline">
          <a href="${el.conversionxl_certificate_sales_page}" rel="bookmark" itemprop="url"
          >${el.title.raw}</a
          >
        </h2>

        <div class="entry-byline">
          ${el.versions.length === 1
            ? html`
              <div>${el.versions[0].upvotes} votes</div>
              <div>Author: ${el.versions[0].author}</div>`
            : html``}
          ${el.versions.length > 1
            ? html`
              <div>
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
                        By ${v.author} (${v.upvotes} upvotes)
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
                          By ${v.author} (${v.upvotes} upvotes)
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
                ${v.playbook_steps.map((step) => html`
                  <li>${step.title}</li> `)}
              </ol>
            </div>
          `
        )}
      </div>
    </cxl-accordion-multiversion-card>
  `;
}

export default CXLSingleMultiversionCardDisplay;
