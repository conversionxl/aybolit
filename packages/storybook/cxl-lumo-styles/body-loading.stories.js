import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit';
import cxlLoadingStyles from '@conversionxl/cxl-lumo-styles/src/styles/loading-css';
import { CXLAppLayout } from '../cxl-ui/cxl-app-layout/layout=1c.stories';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Body',
};

/**
 * CXLLoadingSpinner.
 *
 * @param Loading
 * @returns {TemplateResult}
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
    ${CXLAppLayout()}
  `;
};

Object.assign(CXLLoadingSpinner, {
  args: {
    Loading: true,
  },
  storyName: '[unresolved] loading',
});
