import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/jw-player/index.js';

export default {
  title: 'JW Player/JW Player',
};

const Template = ({ captions, mediaId, playerId, playlistId, pluginPath }) =>
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
      class="cxl-jwplayer-container"
      media-id=${mediaId}
      player-id=${playerId}
      playlist-id=${playlistId}
      plugin-path="${pluginPath}"
      type="playlist"
    ></jw-player>
  `;

export const Playlist = Template.bind({});

Object.assign(Playlist, {
  args: {
    captions: true,
    mediaId: '',
    playerId: '5CFJNXKb',
    playlistId: 'tAxwbNsA',
    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',
  },
});
