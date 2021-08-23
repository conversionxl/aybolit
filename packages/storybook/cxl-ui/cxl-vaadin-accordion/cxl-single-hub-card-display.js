import { html, nothing } from 'lit-html';

// reason for the helper: https://github.com/lit/lit.dev/issues/452
export const join = (values, joiner) => values.map((v, i) => [v, i < values.length - 1 ? joiner : nothing]);

const getByline = (el) => {
  const arr = [];

  if(el.hubs.length > 0) {
    arr.push(html`${el.hubs.length} hubs`);
  }

  if(el.playbooks.length > 0) {
    arr.push(html`${el.playbooks.length} playbooks`);
  }

  return html`<span>${join(arr, html`,&nbsp;`)}</span>`;
}

const getContent = (el) => html`
  ${el.hubs.length > 0 ?
    html`${el.hubs.map((p) => html`<div><strong>${p.name}</strong></div>`)}` : nothing
  }
  ${el.playbooks.length > 0 ?
    html`${el.playbooks.map((p) => html`<div>${p.name}</div>`)}` : nothing
  }
`

const CXLSingleHubCardDisplay = (el) => html`
  <cxl-accordion-card
    id="${el.id}"
    class="term entry"
    theme="dark"
  >
    <header class="entry-header" slot="summary">
      <label title="Hub" class="entry-type">HUB CONTENT, ${el.categories_names.join(', ').toUpperCase()}</label>

      <h2 class="entry-title no-anchor" itemprop="headline">
        <a href="#" rel="bookmark" itemprop="url"
          >${el.title.raw}</a
        >
      </h2>

      <div class="entry-byline">
        ${getByline(el)}
      </div>
    </header>

    <div class="entry-summary" itemprop="text">
            <div class="ttr_start"></div>
            <p>
              ${getContent(el)}
            </p>
            <div class="ttr_end"></div>
    </div>

  </cxl-accordion-card>
`;

export default CXLSingleHubCardDisplay;
