import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-inline-comment-context-menu.js';
import faqData from './theme=cxl-faq.data.json';

export default {
  title: 'CXL UI/cxl-inline-comment-context-menu',
};

export const CxlInlineCommentContextMenuThemeFaq = () => html`
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
      (el) => html`
        <vaadin-accordion-panel
          id="${el.cxl_hybrid_attr_post['@attributes'].id}"
          class="${el.cxl_hybrid_attr_post['@attributes'].class}"
          theme="cxl-faq"
        >
          <header class="entry-header" slot="summary">
            <h5 class="entry-title" itemprop="headline">
              <cxl-inline-comment-context-menu
                id="inline_comment_title_${el.cxl_hybrid_attr_post['@attributes'].id}"
              >
                ${unsafeHTML(el.title.rendered)}
              </cxl-inline-comment-context-menu>
            </h5>
          </header>
          <div class="entry-summary" itemprop="description">
            <cxl-inline-comment-context-menu
              id="inline_comment_content_${el.cxl_hybrid_attr_post['@attributes'].id}"
            >
              ${unsafeHTML(el.content.rendered)}
            </cxl-inline-comment-context-menu>
          </div>
        </vaadin-accordion-panel>
      `
    )}
  </cxl-vaadin-accordion>
`;

CxlInlineCommentContextMenuThemeFaq.story = {
  name: 'CXL UI/cxl-inline-comment-context-menu',
};
