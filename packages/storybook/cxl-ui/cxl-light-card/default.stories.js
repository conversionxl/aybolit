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
export const CXLLightCardProgress = Template.bind({});
export const CXLLightCardPortrait = Template.bind({});
export const CXLLightCardMinidegree = Template.bind({});
export const CXLLightCardFooter = Template.bind({});

CXLLightCard.args = {
  theme: 'light-card',
  new: false,
  completed: false,
  name: 'Account based marketing',
  instructor: 'Ton Wesseling',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
};

CXLLightCardProgress.args = {
  theme: 'light-card',
  name: 'Account based marketing',
  progressCompleted: 3,
  progressTotal: 10,
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
};

CXLLightCardPortrait.args = {
  theme: 'light-card portrait',
  name: 'Account based marketing',
  instructor: 'Ton Wesseling',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
};

CXLLightCardMinidegree.args = {
  theme: 'minidegree',
  new: false,
  completed: false,
  name: 'Digital analytics',
};

CXLLightCardFooter.args = {
  ...CXLLightCard.args,
  footer:
    '<span theme="badge tertiary pill">Team</span> <span theme="badge secondary pill">Personal</span>',
};
