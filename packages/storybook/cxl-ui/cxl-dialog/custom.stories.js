import '@conversionxl/cxl-ui/src/components/cxl-dialog/cxl-dialog-custom.js';
import { html } from 'lit';

export default {
  title: 'CXL UI/cxl-dialog',
};

// eslint-disable-next-line no-empty-pattern
const Template = ({ opened }) => html`
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
    <cxl-dialog-custom ?opened=${opened} ?test=${opened}>This is some content</cxl-dialog-custom>
  </div>
`;

export const Custom = Template.bind({});

Object.assign(Custom, {
  args: {
    opened: true,
  },
});
