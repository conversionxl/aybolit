import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import { CXLAppLayout } from './_cxl-app-layout';
import { CXLVaadinAccordionThemeArchive } from '../cxl-vaadin-accordion.stories';

export const CXLAppLayout1cw = () => html`
  ${CXLAppLayout({
    layout: '1c-w',
    content: html`
      <article class="entry">
        <header class="entry-header">
          <label>Page</label>
          <h1 class="entry-title">Join the top 1% of digital marketing.</h1>
        </header>
        <div class="entry-content">
          <h2>
            We find the absolute best practitioners in the world, and get them to teach their craft.
            Learn from the top performers to become one.
          </h2>
          <p>
            Self-paced online digital marketing courses on all things conversion optimization,
            digital analytics and digital marketing.
          </p>
          <p><strong>All in a single subscription.</strong></p>

          ${CXLVaadinAccordionThemeArchive()}
        </div>
      </article>
    `,
  })}
`;
