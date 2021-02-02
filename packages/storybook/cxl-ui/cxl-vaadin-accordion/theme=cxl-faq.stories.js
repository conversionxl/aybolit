import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-inline-comment-context-menu.js';
import faqData from './theme=cxl-faq.data.json';

export default {
  title: 'CXL UI|cxl-vaadin-accordion'
};

const saveInlineCommentHandler = evt => {
  // eslint-disable-next-line no-console
  console.log(evt);
  setTimeout(() => document.body.click(), 1000);
};

export const CxlVaadinAccordionThemeFaq = () => {
  return html`
    <style>
      .plural .entry-title {
        margin: 0;
      }
    </style>
    <h3>Frequently Asked Questions</h3>

    <cxl-vaadin-accordion
      id="cxl-vaadin-accordion-26107"
      class="archive archive-faq plural"
      theme="cxl-faq"
    >
      ${faqData.map(
        el => html`
          <vaadin-accordion-panel
            id="${el.cxl_hybrid_attr_post['@attributes'].id}"
            class="${el.cxl_hybrid_attr_post['@attributes'].class}"
            theme="cxl-faq"
          >
            <header class="entry-header" slot="summary">
              <h5 class="entry-title" itemprop="headline">
                <cxl-inline-comment-context-menu
                  id="${el.cxl_hybrid_attr_post['@attributes'].id}_title"
                  textarea-placeholder="Comment on title"
                  @cxl-save-inline-comment=${saveInlineCommentHandler}
                >
                  <a>${unsafeHTML(el.title.rendered)}</a>
                </cxl-inline-comment-context-menu>
              </h5>
            </header>
            <div class="entry-summary" itemprop="description">
              <cxl-inline-comment-context-menu
                id="${el.cxl_hybrid_attr_post['@attributes'].id}_content"
                textarea-placeholder="Comment on content"
                @cxl-save-inline-comment=${saveInlineCommentHandler}
              >
                <span>${unsafeHTML(el.content.rendered)}</span>
              </cxl-inline-comment-context-menu>
            </div>
          </vaadin-accordion-panel>
        `
      )}
    </cxl-vaadin-accordion>
  `;
};

CxlVaadinAccordionThemeFaq.story = {
  name: '[theme=cxl-faq]'
};
