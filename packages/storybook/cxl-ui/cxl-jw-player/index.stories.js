import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/index.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

const Template = ({ captions, mediaId, minimumSearchLength, playerId, playlistId, pluginPath }) =>
  html`
    <style>
      #root-inner {
        height: 100vh;
      }

      cxl-jw-player {
        display: block;
        height: 100%;
      }

      cxl-jw-player * {
        box-sizing: border-box;
      }
    </style>
    <cxl-jw-player
      ?captions=${captions}
      media-id=${mediaId}
      minimum-search-length=${minimumSearchLength}
      player-id=${playerId}
      playlist-id=${playlistId}
      plugin-path="${pluginPath}"
    ></cxl-jw-player>
  `;

export const Default = Template.bind({});

Object.assign(Default, {
  args: {
    captions: true,
    mediaId: 'fZ0XiGdb',
    minimumSearchLength: 3,
    playerId: '5CFJNXKb',
    playlistId: '',
    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',
  },
});
