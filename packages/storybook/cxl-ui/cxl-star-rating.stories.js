import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-star-rating.js';

/**
 * 2021-01-14
 * --> for future selves, machine elves
 * all about knobs in storybook with examples
 * https://github.com/storybookjs/storybook/tree/master/addons/knobs
 */

export default {
  title: 'CXL UI/cxl-star-rating',
};

export const CXLStarRating = () => html`
  <cxl-app-layout id="container" theme="2c-l">
    <h2>CXL Star Rating</h2>
    <cxl-star-rating id="rating_post_id_1234"></cxl-star-rating>
  </cxl-app-layout>
`;

CXLStarRating.storyName = 'cxl-star-rating';
