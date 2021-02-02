import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@cwmr/iron-star-rating';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'CXL UI',
  decorators: [withKnobs]
};

const Template = () => {
  const isDisabled = boolean('Disabled', false);
  const starsCount = number('Stars Count', 3);
  return html`
    <cxl-app-layout id="container" theme="2c-l">
      <h2>Iron Star Rating</h2>
      <iron-star-rating ?readonly=${isDisabled} value=${starsCount}></iron-star-rating>
    </cxl-app-layout>
  `;
};

export const CxlIronStarRating = Template.bind({});

CxlIronStarRating.story = {
  name: 'cxl-iron-star-rating'
};
