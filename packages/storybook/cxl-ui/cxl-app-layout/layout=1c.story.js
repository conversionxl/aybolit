import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import { CXLSection } from '../cxl-section.stories';

export const CXLAppLayout1cContent = html`
  <article class="entry">
    <div class="entry-content">
      ${CXLSection.render(CXLSection.args)}
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
`;
