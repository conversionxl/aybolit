import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-carousel.js';

export default {
  title: 'CXL UI/cxl-carousel',
};

const Template = ({ duration }) =>
  html`
    <cxl-carousel duration=${duration}>
      <img src="https://picsum.photos/1920/1080?random=1" />
      <img src="https://picsum.photos/1920/1080?random=2" />
      <img src="https://picsum.photos/1920/1080?random=3" />
    </cxl-carousel>
  `;

export const Default = Template.bind({});

Object.assign(Default, {
  args: {
    duration: 5000,
  },
});
