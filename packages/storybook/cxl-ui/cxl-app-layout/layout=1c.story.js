import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import { CXLAppLayout } from './_cxl-app-layout';
import '@vaadin/tooltip';
import { VaadinTooltip } from '../../cxl-lumo-styles/elements.stories';

export const CXLAppLayout1c = ({ backgroundColor, hasWave }) => html`
  ${CXLAppLayout({
    layout: '1c',
    content: html`
      <article class="entry">
        <div class="entry-content">
          <cxl-section
            class="alignwide has-background ${hasWave ? 'has-wave' : ''}"
            style="${backgroundColor ? `background-color: ${backgroundColor}` : ''}"
          >
            ${VaadinTooltip(VaadinTooltip.args)}
            <h2>
              The difference between high-growth and slow-growth companies is the skill sets they
              have to make it happen.
            </h2>
            <p>At CXL, we provide</p>
            <ul>
              <li>marketing training programs to people serious about their career,</li>
              <li>
                managed online revenue optimization & experimentation services to help mid-to-large
                companies accelerate growth.
              </li>
            </ul>
            <p>
              <vaadin-button theme="primary large"
                >Marketing training <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon
              ></vaadin-button>
              <vaadin-button theme="primary large contrast"
                >Managed services <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon
              ></vaadin-button>
            </p>
          </cxl-section>
          <cxl-section>
            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>
            <p>
              Getting results you want with conversion optimization and experimentation is all about
              knowing what to do. It’s a field where you need to know a lot about a lot, and this
              program contains it all.
            </p>
            <p>After completing it you will</p>
            <ul>
              <li>improve your skills in conversion optimization, UX, and web analytics,</li>
              <li>understand what works on websites, and what doesn't,</li>
              <li>develop better A/B tests that win more often.</li>
            </ul>
          </cxl-section>
        </div>
      </article>
    `,
  })}
`;
