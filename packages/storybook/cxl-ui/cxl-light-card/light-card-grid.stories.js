import { html } from 'lit';
import { Template } from './template.js';

import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-card-grid.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-light-card-grid',
};

const CXLLightCard = Template.bind({});
CXLLightCard.args = {
  theme: 'light-card',
  name: 'Account based marketing',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
  instructor: 'Lorem Ipsum',
  completed: true,
};

export const CXLLightCardGrid = ({ length, args }) => html`
  <cxl-card-grid>
    ${Array.from({ length }, () => html`
      ${CXLLightCard({ ...CXLLightCard.args, ...args })}
    `)}
  </cxl-card-grid>
`;

CXLLightCardGrid.args = {
  length: 12,
};
