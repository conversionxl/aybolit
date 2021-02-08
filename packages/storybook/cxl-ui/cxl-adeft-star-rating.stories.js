import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-adeft-star-rating.js';

/**
 * 2021-01-14
 * --> for future selves, machine elves
 * all about knobs in storybook with examples
 * https://github.com/storybookjs/storybook/tree/master/addons/knobs
 */

export default {
  title: 'CXL UI/cxl-adeft-star-rating',
};

const Template = () => html`
  <cxl-app-layout id="container" theme="2c-l">
    <h2>Adeft Star Rating</h2>
    <cxl-adeft-star-rating id="rating_post_id_1234"></cxl-adeft-star-rating>
  </cxl-app-layout>
`;

export const CxlAdeftStarRating = Template.bind({});

CxlAdeftStarRating.story = {
  name: 'cxl-adeft-star-rating',
};
