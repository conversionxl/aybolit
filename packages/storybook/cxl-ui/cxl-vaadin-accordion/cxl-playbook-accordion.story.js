import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { rest } from "msw";
import playbookStepData from './cxl-playbook-accordion.data.json';
import playbookCardData from "./playbook-card.data.json";

export const CXLPlaybookAccordion = ({ FeedbackButtonLabel, PlaybookId }) => html`
  <style>
    #root-inner {
      height: 100vh;
    }
  </style>
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
              <iron-icon icon="vaadin:comment" slot="prefix"></iron-icon>
              ${FeedbackButtonLabel}
            </vaadin-button>
          </div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-playbook-accordion>
`;

CXLPlaybookAccordion.parameters = {
  msw: [
    rest.get('https://cxl.fake/playbooks/1', (_req, res, ctx) => {
      return res(ctx.json(playbookCardData[0]));
    }),
    rest.get('https://cxl.fake/minidegrees/1', (_req, res, ctx) => {
      return res(ctx.json(playbookCardData[2]));
    }),
  ],
};
