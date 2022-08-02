import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/jw-player/index.js';

export default {
  title: 'JW Player/JW Player',
};

const Template = ({ captions, mediaId, minimumSearchLength, playerId, playlistId, pluginPath }) =>
  html`
    <style>
      #root-inner {
        height: 100vh;
      }

      jw-player {
        display: block;
        height: 100%;
      }

      jw-player * {
        box-sizing: border-box;
      }
    </style>
    <jw-player
      ?captions=${captions}
      media-id=${mediaId}
      minimum-search-length=${minimumSearchLength}
      player-id=${playerId}
      playlist-id=${playlistId}
      plugin-path="${pluginPath}"
    ></jw-player>
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
