import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLAppLayout } from './_cxl-app-layout';

export const CXLAppLayout1cc = () => html`
  ${CXLAppLayout({
    layout: '1c-c',
    content: html`
      <article class="entry">
        <header class="entry-header">
          <label>Page</label>
          <h1 class="entry-title">Grow faster.</h1>
        </header>
        <div class="entry-content">
          <h2>
            The difference between high-growth and slow-growth companies is the skill sets they have
            to make it happen.
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
          <vaadin-horizontal-layout theme="cxl-marketing-hero-details spacing-s">
            <span><vaadin-icon icon="lumo:clock"></vaadin-icon>Updated 10/2022</span>
            <span
              ><vaadin-icon icon="vaadin:globe-wire" theme="lumo"></vaadin-icon>English
              subtitles</span
            >
            <span><vaadin-icon icon="lumo:checkmark"></vaadin-icon>Certificate included</span>
          </vaadin-horizontal-layout>
        </div>
      </article>
    `,
  })}
`;
