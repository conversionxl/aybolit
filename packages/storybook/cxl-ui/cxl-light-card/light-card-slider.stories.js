import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';
import '@conversionxl/cxl-lumo-styles';
import { CXLLightCard } from './default.stories.js';

export default {
  title: 'CXL UI/cxl-light-card',
};

const Template = ({ numberOfCards }) => html`
  <style>
    vaadin-tab {
      max-width: calc(var(--cxl-content-width) / 2);
    }
  </style>

  <cxl-tabs-slider theme="cxl-course-slider minimal">
    ${Array.from(
      { length: numberOfCards },
      () => html`
        <vaadin-tab
          >${CXLLightCard({
            ...CXLLightCard.args,
          })}</vaadin-tab
        >
      `
    )}
  </cxl-tabs-slider>
`;

export const LightCardSlider = Template.bind({});

LightCardSlider.args = {
  numberOfCards: 3,
};

CXLLightCard.args = {
  theme: 'light-card',
  hasBadges: false,
  title: 'Account based marketing',
  time: '3h 00min',
  instructor: 'Ton Wesseling',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
};
