import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@conversionxl/cxl-ui/src/components/cxl-playbook-accordion.js';
import '@vaadin/vaadin-button';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLStarRating } from '../cxl-star-rating.stories';
import { CXLPlaybookAccordion } from '../cxl-vaadin-accordion/cxl-playbook-accordion.story';

export default {
  decorators: [withKnobs],
  title: 'CXL UI/cxl-app-layout',
};

export const CXLAppLayout2cl = () => {
  const hasWidgetBackground = boolean('Has widget background?', false);

  return html`
    <style>
      .widget.has-background {
        background-color: var(--lumo-shade-5pct);
      }
      .widget > label {
        display: block;
      }
      .widget h5.widget-title {
        font-weight: 700;
        margin-top: 0.5em; /* match <p> */
      }

      .widget h5.widget-title > a {
        color: inherit;
      }
    </style>

    <cxl-app-layout id="container" layout="2c-l" scroll="panels">
      ${CXLMarketingNav()}

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Last updated</label>
        <p>
          <strong><date>Jan 26, 2021</date></strong>
        </p>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Actions</label>
        <p>Rate this playbook ${CXLStarRating()}</p>
        <p>
          <vaadin-button theme="tertiary contrast"
            >Share <iron-icon icon="lumo:cog" slot="prefix"></iron-icon
          ></vaadin-button>
          <br />
          <vaadin-button theme="tertiary contrast"
            >Report <iron-icon icon="lumo:error" slot="prefix"></iron-icon
          ></vaadin-button>
        </p>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>About the author</label>
        <vaadin-accordion opened="-1">
          <vaadin-accordion-panel theme="reverse">
            <h5 class="widget-title" slot="summary">
              <a href="https://trafficiscurrency.com"
                ><img
                  style="--cxl-thumbnail-size: var(--lumo-font-size-xxxl); vertical-align: middle"
                  class="thumbnail"
                  src="https://secure.gravatar.com/avatar/7a56e8ca34286d16241bb78980ee63e5?s=96&amp;d=mm&amp;r=g"
                />
                Wes Bush</a
              >
            </h5>
            <p>
              Wes would rather jump out of a plane than read about what skydiving feels like.
              Similarly, he rather test out a promising software product than read a whitepaper
              about how “life-changing” the product is going to be.
            </p>
            <p>
              Last time Wes checked, he has generated well over 130,000 free trial users since
              founding <a href="https://trafficiscurrency.com">Traffic Is Currency</a>, an agency
              that specializes in this kind of thing.
            </p>
          </vaadin-accordion-panel>
        </vaadin-accordion>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Peer reviewed by</label>
        <h5 class="widget-title">
          <a href="https://twitter.com/andreea_maco">Andreea Macoveiciuc</a>
        </h5>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Related blog posts</label>
        <h5 class="widget-title">
          <a href="https://cxl.com/blog/saas-go-to-market-strategy/"
            >Is your SaaS go-to-market strategy tsunami-proof?</a
          >
        </h5>
      </section>

      <article class="entry">
        <header class="entry-header">
          <label>Playbook</label>
          <h1 class="entry-title">Choose a traditional SaaS go-to-market strategy</h1>
          <div class="entry-byline">
            <span class="progress statement playbook-completion-rate"
              >Completed 4 steps of 8 in total</span
            >
            <vaadin-progress-bar value="0.50">Completed 4 steps of 8 in total</vaadin-progress-bar>
            <section class="course-meta course-enrolment">
              <div class="status in-progress">In Progress</div>
            </section>
          </div>
        </header>

        <div class="entry-content">
          <h2>Use case</h2>
          <p>
            Consider your environment to decide which traditional action plan (sales-led or
            marketing-led) will help your company acquire customers in the most capital-efficient
            way.
          </p>
        </div>

        <footer class="entry-footer">${CXLPlaybookAccordion()}</footer>
      </article>
    </cxl-app-layout>
  `;
};

CXLAppLayout2cl.storyName = '[layout=2c-l]';
