import '@conversionxl/cxl-ui/src/components/cxl-dialog/cxl-dialog.js';
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
  <div id="container"></div>
  <script>
    const dialog = document.createElement('cxl-dialog');
    const container = document.querySelector('#container');

    dialog.container = container;
    dialog.renderer = (root) => {
      root.textContent = 'This is a dialog';
    };

    container.appendChild(dialog);
    dialog.opened = true;
  </script>
`;

export const Default = Template.bind({});

Object.assign(Default, {
  args: {},
});
