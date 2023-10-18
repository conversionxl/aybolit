import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export const Template = (card) => html`
  <cxl-light-card
    theme="${card.theme}"
    name="${card.name}"
    time="${card.time}"
    progress="${card.progress}"
    lessons="${card.lessons}"
    instructor="${card.instructor}"
    avatar="${card.avatar}"
    .new="${card.new}"
    .completed="${card.completed}"
    .portrait="${card.portrait}"
  >
    ${card.badges ? html` <div slot="badges">${unsafeHTML(card.badges)}</div>` : nothing}
  </cxl-light-card>
`;
