import { html } from 'lit-html';

const RenderRatingWithTooltip = (tooltipTrigger, userLoggedIn) => html`
  <div id=${tooltipTrigger} class="rating-with-tooltip">
    Rate this playbook:
    <iron-star-rating id="iron-star-rating" icon="icons:star"></iron-star-rating>
    ${!userLoggedIn
      ? html`
          <paper-tooltip animationDelay="0" offset="5" position="top" htmlFor=${tooltipTrigger}>
            Log in to vote
          </paper-tooltip>
        `
      : ``}
  </div>
`;

export default RenderRatingWithTooltip;
