import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';
import '@conversionxl/cxl-lumo-styles';
import { Template } from './template.js';

export default {
  title: 'CXL UI/cxl-light-card',
};

const CXLLightCard = Template.bind({});
CXLLightCard.args = {
  theme: 'light-card',
  name: 'Account based marketing',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
  progress: 3,
  lessons: 12
};

const CXLLightCard2 = Template.bind({});
CXLLightCard2.args = {
  ...CXLLightCard.args,
  name: 'Basics of Casual Inference',
  avatar: '',
  progress: 7,
  lessons: 9
};

const CXLLightCard3 = Template.bind({});
CXLLightCard3.args = {
  ...CXLLightCard.args,
  name: 'Best Practices',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2019/09/peep-1x1-transparent-150x150.png'
};

export const CXLLightCardSlider = ({ numberOfCards, theme }) => html`
  <cxl-tabs-slider theme="cxl-course-slider minimal ${theme}">
    ${Array.from(
      { length: Math.floor(numberOfCards / 3) },
      () => html`
        <vaadin-tab
          >${CXLLightCard({
            ...CXLLightCard.args,
          })}</vaadin-tab
        >
        <vaadin-tab
          >${CXLLightCard2({
            ...CXLLightCard2.args,
          })}</vaadin-tab
        >
        <vaadin-tab
          >${CXLLightCard3({
            ...CXLLightCard3.args,
          })}</vaadin-tab
        >
      `
    )}
  </cxl-tabs-slider>
`;

CXLLightCardSlider.args = {
  numberOfCards: 3,
};
