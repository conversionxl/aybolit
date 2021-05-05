import { html } from 'lit-html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@conversionxl/cxl-ui/src/components/cxl-playbook-accordion.js';
import '@vaadin/vaadin-button';
import { CXLMarketingNav } from '../cxl-marketing-nav.stories';
import { CXLStarRating } from '../cxl-star-rating.stories';
import { CXLPlaybookAccordion } from '../cxl-vaadin-accordion.stories';

export default {
  decorators: [withKnobs],
  title: 'CXL UI/cxl-app-layout',
};

export const CXLAppLayout2cl = () => {
  const playbookId = 1234;
  const hasWidgetBackground = boolean('Has widget background?', false);

  // styles in: cxl-ui/scss/global/cxl-app-layout.scss
  // under: &[layout^="2c-l"]

  return html`
    <cxl-app-layout id="container" layout="2c-l" scroll="panels">
      ${CXLMarketingNav()}

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Actions</label>
        <p>Rate this playbook ${CXLStarRating()}</p>
        <p>
          <vaadin-button theme="tertiary contrast"
            >Leave feedback <iron-icon icon="lumo:error" slot="prefix"></iron-icon
          ></vaadin-button>
        </p>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Related blog posts</label>
        <h5 class="widget-title">
          <a href="https://cxl.com/blog/saas-go-to-market-strategy/"
            >Is your SaaS go-to-market strategy tsunami-proof?</a
          >
        </h5>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Related course</label>
        <h5 class="widget-title">
          <a href="https://cxl.com/blog/saas-go-to-market-strategy/"
            >This is example course name here. Just an example provided</a
          >
        </h5>
      </section>

      <section class="widget ${hasWidgetBackground ? 'has-background' : ''}" slot="sidebar">
        <label>Last updated</label>
        <p>
          <strong><date>Jan 26, 2021</date></strong>
        </p>
      </section>

      <article id="post-${playbookId}" class="entry post-${playbookId} playbook type-playbook">
        <header class="entry-header">
          <label>Playbook</label>
          <h1 class="entry-title">Choose a traditional SaaS go-to-market strategy</h1>
          <div class="entry-byline">
            <section class="widget">
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
                </vaadin-accordion-panel>
              </vaadin-accordion>
            </section>

            <section class="widget">
              <label class="peer-reviewed-by">Peer reviewed by</label>
              <h5 class="widget-title">
                <a href="https://twitter.com/andreea_maco" class="peer-profile-url">Andreea Macoveiciuc</a>
              </h5>
            </section>

            <label for="cxl-playbook-progress-bar-${playbookId}"></label>
            <cxl-playbook-progress-bar
              id="cxl-playbook-progress-bar-${playbookId}"
              listen-on-closest="article"
            ></cxl-playbook-progress-bar>
            <!-- [listen-on-closest] fixes race condition vs article classes computation -->
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

        <footer class="entry-footer">${CXLPlaybookAccordion(CXLPlaybookAccordion.args)}</footer>
      </article>
    </cxl-app-layout>
  `;
};

CXLAppLayout2cl.storyName = '[layout=2c-l]';
