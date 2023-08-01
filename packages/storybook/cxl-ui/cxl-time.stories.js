import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-time.js';

export default {
  title: 'CXL UI/cxl-time',
  parameters: {
    layout: 'centered',
  },
};

export const CXLTime = ({ time, showIcon }) => html`
  <cxl-time time=${time} ?show-icon=${showIcon}></cxl-time>
`;

CXLTime.storyName = 'cxl-time';
CXLTime.args = {
  time: '02h 45min',
  showIcon: true,
};
