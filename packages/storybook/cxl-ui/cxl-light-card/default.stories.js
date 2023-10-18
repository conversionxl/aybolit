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
export const CXLLightCardBadges = Template.bind({});

CXLLightCard.args = {
  theme: 'new-card',
  name: 'Account based marketing',
  time: '43h 00min',
  instructor: 'Ton Wesseling',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
  completed: false,
  portrait: false,
  new: false,
};

CXLLightCardProgress.args = {
  theme: 'new-card',
  name: 'Account based marketing',
  progress: 2,
  lessons: 6,
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
  completed: false,
  portrait: false,
  new: false,
};

CXLLightCardPortrait.args = {
  theme: 'new-card',
  name: 'Account based marketing',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
  completed: false,
  portrait: true,
  new: false,
};

CXLLightCardMinidegree.args = {
  theme: 'minidegree',
  new: false,
  completed: false,
  name: 'Digital analytics',
  time: '43h 00min',
};

CXLLightCardBadges.args = {
  theme: 'new-card',
  name: 'Account based marketing',
  instructor: 'Ton Wesseling',
  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',
  completed: false,
  new: false,
  badges:
    '<span theme="badge tertiary pill">Team</span> <span theme="badge secondary pill">Personal</span>',
};
