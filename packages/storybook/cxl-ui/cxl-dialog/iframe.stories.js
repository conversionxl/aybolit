import '@conversionxl/cxl-ui/src/components/cxl-dialog/cxl-dialog-iframe.js';
import { html } from 'lit';

export default {
  title: 'CXL UI/cxl-dialog',
};

// eslint-disable-next-line no-empty-pattern
const Template = ({}) => html`
  <style>
    #root-inner {
      align-items: center;
      justify-content: center;
      display: flex;
      height: 100vh;
    }

    #container {
      border: 1px solid #000;
      height: 80vh;
      position: relative;
      width: 80vw;
    }
  </style>
  <div id="container">
    <cxl-dialog-iframe></cxl-dialog-iframe>
  </div>
`;

export const IFrame = Template.bind({});

Object.assign(IFrame, {
  args: {},
  storyName: "IFrame"
});
