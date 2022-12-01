import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/index.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

const Template = ({ captions, mediaId, playerId, playlistId, pluginPath }) =>
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
      class="cxl-jwplayer-container"
      media-id=${mediaId}
      player-id=${playerId}
      playlist-id=${playlistId}
      plugin-path="${pluginPath}"
      type="playlist"
    ></cxl-jw-player>
  `;

export const Playlist = Template.bind({});

Object.assign(Playlist, {
  args: {
    captions: false,
    mediaId: '',
    playerId: '5CFJNXKb',
    playlistId: 'tAxwbNsA',
    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',
  },
});
