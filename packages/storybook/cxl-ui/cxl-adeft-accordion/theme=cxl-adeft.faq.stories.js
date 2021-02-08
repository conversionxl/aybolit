import { html } from 'lit-html';
import { withKnobs } from '@storybook/addon-knobs';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlStoriesStyles from '@conversionxl/cxl-ui/src/styles/theme=cxl-adeft.faq.stories-css';
import faqData from './theme=cxl-faq.data.json';
import '@conversionxl/cxl-ui/src/components/cxl-adeft-accordion.js';
import '@vaadin/vaadin-checkbox';

export default {
  title: 'CXL UI|cxl-adeft-accordion',
  decorators: [withKnobs],
};

const Template = () => {
  registerGlobalStyles(cxlStoriesStyles, {
    moduleId: 'theme=cxl-adeft-accordion.faq.stories',
  });

  return html`
    <style>
      .plural .entry-title {
        margin: 0;
      }
      cxl-adeft-accordion {
        padding: 10px;
      }
    </style>
    <h3>Frequently Asked Questions</h3>

    <cxl-adeft-accordion id="cxl-vaadin-accordion-26107" theme="reverse">
      ${faqData.map(
        (el) => html`
          <vaadin-accordion-panel
            id="${el.cxl_hybrid_attr_post['@attributes'].id}"
            class="${el.cxl_hybrid_attr_post['@attributes'].class}"
            theme="reverse"
          >
            <div class="accordion-summary" slot="summary">
              <div class="left">
                <vaadin-checkbox value="Option" theme="custom"></vaadin-checkbox>
              </div>
              <div class="right">
                <div class="summary-top">${unsafeHTML(el.title.rendered)}</div>
              </div>
            </div>
            <vaadin-vertical-layout>
              <div class="item-content">
                <div class="checked">${unsafeHTML(el.content.rendered)}</div>
              </div>
            </vaadin-vertical-layout>
          </vaadin-accordion-panel>
        `
      )}
    </cxl-adeft-accordion>
  `;
};

export const CxlAdeftVaadinAccordionThemeFaq = Template.bind({});

CxlAdeftVaadinAccordionThemeFaq.story = {
  name: '[theme=cxl-adeft-accordion.faq.stories]',
};
