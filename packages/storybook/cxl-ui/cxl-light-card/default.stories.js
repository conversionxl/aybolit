import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';
import '@conversionxl/cxl-lumo-styles';
import { Template } from './template.js';

export default {
  title: 'CXL UI/cxl-light-card',
  parameters: {
    layout: 'centered',
  },
};

export const CXLLightCard = Template.bind({});
export const CXLLightCardMinidegree = Template.bind({});
export const CXLLightCardFooter = Template.bind({});

CXLLightCard.args = {
  theme: 'light-card',
  new: false,
  completed: false,
  name: 'Account based marketing',
  time: '3h 00min',
  instructor: 'Ton Wesseling',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
  footer: '',
};

CXLLightCardMinidegree.args = {
  theme: 'minidegree',
  new: false,
  completed: false,
  name: 'Digital analytics',
  time: '43h 00min',
};

CXLLightCardFooter.args = {
  ...CXLLightCard.args,
  footer:
    '<span theme="badge primary pill">Team Roadmap</span> <span theme="badge secondary pill">Personal Roadmap</span>',
};
