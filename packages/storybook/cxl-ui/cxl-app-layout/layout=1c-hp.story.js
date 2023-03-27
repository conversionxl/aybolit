import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import { CXLSectionHPHero } from '../cxl-section-hp-hero.stories';

export const CXLAppLayout1cHPContent = html`
  <article class="entry">
    <div class="entry-content">
      ${CXLSectionHPHero.render(CXLSectionHPHero.args)}
    </div>
  </article>
`;
