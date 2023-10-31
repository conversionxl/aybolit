import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export const Template = (card) => html`
  <cxl-light-card
    theme="${card.theme}"
    name="${card.name}"
    time="${card.time}"
    instructor="${card.instructor}"
    avatar="${card.avatar}"
    progress="${card.progress}"
    lessons="${card.lessons}"
    .new="${card.new}"
    .completed="${card.completed}"
  >
    ${card.footer ? html` <footer slot="footer">${unsafeHTML(card.footer)}</footer>` : nothing}
  </cxl-light-card>
`;
