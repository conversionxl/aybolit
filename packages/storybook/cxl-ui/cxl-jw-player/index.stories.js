import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/cxl-jw-player.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

const Template = ({}) =>
  html`
    <style>
      #root-inner {
        height: 100vh;
      }
    </style>
    <cxl-jw-player playerId="5CFJNXKb" mediaId="fZ0XiGdb">
      <div class="jw-player"></div>
    </cxl-jw-player>
  `;

export const Default = Template.bind({});
