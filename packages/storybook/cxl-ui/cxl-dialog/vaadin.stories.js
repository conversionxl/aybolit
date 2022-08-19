import '@conversionxl/cxl-ui/src/components/cxl-dialog/cxl-dialog-vaadin.js';
import { html, render } from 'lit';

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
    <cxl-dialog-vaadin
      contained
      .headerRenderer=${(root, dialog) =>
        render(
          html`
            <vaadin-button theme="tertiary" @click="${() => (dialog.opened = false)}">
              <vaadin-icon icon="lumo:cross"></vaadin-icon>
            </vaadin-button>
          `,
          root
        )}
      header-title="Custom Header"
      ?opened=${opened}
      .renderer=${(root) => render(html`This is a dialog`, root)}
    ></cxl-dialog-vaadin>
  </div>
`;

export const Vaadin = Template.bind({});

Object.assign(Vaadin, {
  args: {
    opened: true,
  },
});
