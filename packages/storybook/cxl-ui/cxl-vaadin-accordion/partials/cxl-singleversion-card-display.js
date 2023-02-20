import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const CxlSingleversionCardDisplay = (el, userId, selected) => {
  const postType = el.cxl_hybrid_attr_post['@attributes'].class.includes(
    'category-minidegree-programs'
  )
    ? 'minidegree'
    : 'playbook';

  return html`
    <cxl-accordion-card
      id="${el.cxl_hybrid_attr_post['@attributes'].id}"
      class="${el.cxl_hybrid_attr_post['@attributes'].class}"
      theme="${postType === 'minidegree' ? 'dark' : ''} cxl-accordion-playbook-card"
    >
      <header class="entry-header" slot="summary">
        <label
          title="${postType === 'minidegree' ? 'Course' : 'Playbook'}/${el.breadcrumbs.join('/')}"
          class="entry-type"
        >
          <div>${postType === 'minidegree' ? 'COURSE' : 'PLAYBOOK'}</div>
          <div class="entry-summary" itemprop="description">${el.breadcrumbs.join('/')}</div>
        </label>

        <cxl-save-favorite
          postType="${postType === 'minidegree' ? 'minidegree' : 'playbook'}"
          postId="${el.cxl_hybrid_attr_post['@attributes'].id}"
          userId="${userId}"
          ?selected=${selected}
          isCardVersion
        ></cxl-save-favorite>

        <h2 class="entry-title no-anchor" itemprop="headline">
          <a href="#" title="${el.title.raw}" rel="bookmark" itemprop="url">${el.title.raw}</a>
        </h2>

        <div class="entry-byline">
          <div>${el.versions[0].upvotes} votes</div>
          <div>Author: ${el.versions[0].author}</div>
        </div>
      </header>

      <div class="entry-content" itemprop="text">
        <p><strong>Use case</strong></p>
        <div class="ttr_start"></div>
        <p>${unsafeHTML(el.versions[0].content.cxl_get_extended_main)}</p>
        <div class="ttr_end"></div>
        <ol>
          ${el.versions[0].playbook_steps.map((step) => html` <li>${step.title}</li> `)}
        </ol>
        <div class="entry-footer" style="text-align: right;">
          <a href="https://cxl.com/institute/online-course/ab-testing-mastery/" title="Open"
            >Open<vaadin-icon icon="lumo:angle-right"></vaadin-icon
          ></a>
        </div>
      </div>
    </cxl-accordion-card>
  `;
};

export default CxlSingleversionCardDisplay;
