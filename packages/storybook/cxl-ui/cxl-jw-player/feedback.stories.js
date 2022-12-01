import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/index.js';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/cxl-jw-player-feedback/index.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

// eslint-disable-next-line no-empty-pattern
const Template = ({}) =>
  html`
    <style>
      #root-inner {
        height: 100vh;
      }
    </style>

    <cxl-jw-player-feedback>This is a feedback form</cxl-jw-player-feedback>
  `;

export const Feedback = Template.bind({});
