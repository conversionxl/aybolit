import { html } from 'lit-html';
import '../../cxl-jwplayer/src/components/cxl-jwplayer.js';
import cxlJWPlayerData from './cxl-jwplayer.data.json';

export default {
  title: 'CXL JWPlayer | cxl-jwplayer'
};

export const CxlJWPlayer = () => {
  return html`
    <style>
      .jwplayers-wrapper {
        max-width: 800px;
      }
    </style>

    <div class="jwplayers-wrapper">
      ${Object.keys(cxlJWPlayerData).map(mediaId => {
        return html`
          <cxl-jwplayer mediaId=${mediaId} .config=${cxlJWPlayerData[mediaId]}></cxl-jwplayer>
        `;
      })}
    </div>
  `;
};

// @todo localStorage data panel?
CxlJWPlayer.story = {
  name: 'cxl-jwplayer'
};
