import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import playbookStepData from './cxl-playbook-accordion.data.json';

export const CXLPlaybookAccordion = () => html`
  <cxl-playbook-accordion id="playbook-3895" class="plural" opened="0">
    ${playbookStepData.map(
      (el) => html`
        <vaadin-accordion-panel class="playbook-step" theme="cxl-playbook-accordion reverse">
          <header class="entry-header" slot="summary">
            <h3 class="entry-title no-anchor" itemprop="headline">
              <vaadin-checkbox value="${el.id}"></vaadin-checkbox>
              ${el.id}. ${unsafeHTML(el.title.rendered)}
            </h3>
          </header>

          <div class="entry-summary" itemprop="description">${unsafeHTML(el.content.rendered)}</div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-playbook-accordion>
`;
