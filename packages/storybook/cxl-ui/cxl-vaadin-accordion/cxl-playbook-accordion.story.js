import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import playbookStepData from './cxl-playbook-accordion.data.json';

export const CXLPlaybookAccordion = ({ FeedbackButtonLabel, PlaybookId }) => html`
  <cxl-playbook-accordion id="cxl-playbook-accordion-${PlaybookId}" class="plural" opened="0">
    ${playbookStepData.map(
      (el) => html`
        <vaadin-accordion-panel theme="cxl-playbook-accordion reverse" data-step-id="${el.id}">
          <header class="entry-header" slot="summary">
            <vaadin-checkbox value="${el.id}"></vaadin-checkbox>
            <h3 class="entry-title no-anchor" itemprop="headline">
              ${el.id}. ${unsafeHTML(el.title.rendered)}
            </h3>
          </header>
          <div class="entry-summary" itemprop="description">${unsafeHTML(el.content.rendered)}</div>
          <div class="entry-footer">
            <vaadin-button
              onclick="alert('Step ID: ' + this.closest('vaadin-accordion-panel').dataset.stepId)"
            >
              <vaadin-icon icon="vaadin:comment" slot="prefix"></vaadin-icon>
              ${FeedbackButtonLabel}
            </vaadin-button>
          </div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-playbook-accordion>
`;
