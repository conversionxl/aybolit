import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import playbookStepData from './cxl-playbook-accordion.data.json';

const render = (htmlStr) => {
  const htmlWithoutAnchors = htmlStr.replace(
    /<a.*?>(.*?)<\/a>/gi,
    '<span class="replaced-for-anchor">$1</span>'
  );
  return unsafeHTML(htmlWithoutAnchors);
};

export const CXLPlaybookAccordion = ({ FeedbackButtonLabel, PlaybookId }) => {
  let stepCnt = 0;
  return html`
    <cxl-playbook-accordion id="playbook-${PlaybookId}" class="plural" opened="0">
      ${playbookStepData.map((el) => {
        stepCnt += 1;

        return html`
          <vaadin-accordion-panel
            class="playbook-step"
            theme="cxl-playbook-accordion reverse"
            data-playbook-step-id="playbook-${PlaybookId}-${el.id}"
          >
            <header class="entry-header" slot="summary">
              <h3 class="entry-title no-anchor" itemprop="headline">
                <vaadin-checkbox value="${el.id}"></vaadin-checkbox>
                ${stepCnt}. ${render(el.title.rendered)}
              </h3>
            </header>

            <div class="entry-summary" itemprop="description">${render(el.content.rendered)}</div>
            <div class="entry-footer">
              <vaadin-button
                onclick="alert('Step ID: ' + this.closest('vaadin-accordion-panel').dataset.stepId)"
              >
                <iron-icon icon="vaadin:comment" slot="prefix"></iron-icon>
                ${FeedbackButtonLabel}
              </vaadin-button>
            </div>
          </vaadin-accordion-panel>
        `;
      })}
    </cxl-playbook-accordion>
  `;
};
