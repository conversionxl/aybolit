import '@conversionxl/cxl-ui/src/components/cxl-dialog/cxl-dialog.js';
import { html, render } from 'lit';

export default {
  title: 'CXL UI/cxl-dialog',
};

/* eslint-disable no-param-reassign */
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
      padding: 1rem;
      position: relative;
      width: 80vw;
    }
  </style>
  <div id="container">
    This is a container
    <cxl-dialog
      contained
      .headerRenderer=${(root, dialog) =>
        render(
          html`
            <vaadin-button
              theme="tertiary"
              @click="${() => {
                dialog.opened = false;
              }}"
            >
              <vaadin-icon icon="lumo:cross"></vaadin-icon>
            </vaadin-button>
          `,
          root
        )}
      header-title="Custom Header"
      ?opened=${opened}
      .renderer=${(root) => render(html`This is a dialog`, root)}
    ></cxl-dialog>
  </div>
`;
/* eslint-enable no-param-reassign */

export const CXLDialog = Template.bind({});

Object.assign(CXLDialog, {
  args: {
    opened: true,
  },
});
