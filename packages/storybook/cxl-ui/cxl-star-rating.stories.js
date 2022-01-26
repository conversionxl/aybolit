import '@conversionxl/cxl-ui/src/components/cxl-star-rating.js';

import { html } from 'lit-html';

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
  <cxl-star-rating style="vertical-align: text-bottom" id="rating_post_id_1234"></cxl-star-rating>
`;

CXLStarRating.storyName = 'cxl-star-rating';
