import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export const Template = (card) => html`
  <cxl-light-card
    ?locked="${card.locked}"
    theme="${card.theme}"
    name="${card.name}"
    time="${card.time}"
    instructor="${card.instructor}"
    avatar="${card.avatar}"
    progress-completed="${card.progressCompleted}"
    progress-total="${card.progressTotal}"
    .new="${card.new}"
    .completed="${card.completed}"
  >
    ${card.footer ? html` <div slot="footer">${unsafeHTML(card.footer)}</div>` : nothing}
  </cxl-light-card>
`;
