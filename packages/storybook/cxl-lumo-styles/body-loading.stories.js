import { html } from 'lit';
import cxlLoadingStyles from '@conversionxl/cxl-lumo-styles/src/styles/loading-css';
import { CXLAppLayout1c } from '../cxl-ui/cxl-app-layout.stories';

export default {
  title: 'CXL Lumo Styles/Body',
};

/**
 * CXLLoadingSpinner.
 *
 * @param Loading
 * @constructor
 */
export const CXLLoadingSpinner = ({ Loading }) => {
  setTimeout(() => {
    if (Loading) {
      document.body.setAttribute('unresolved', '');
    } else {
      document.body.removeAttribute('unresolved');
    }
  }, 1000);

  return html`
    <style>
      ${cxlLoadingStyles}
    </style>
    ${CXLAppLayout1c(CXLAppLayout1c.args)}
  `;
};

Object.assign(CXLLoadingSpinner, {
  args: {
    Loading: true,
  },
  storyName: '[unresolved] loading',
});
