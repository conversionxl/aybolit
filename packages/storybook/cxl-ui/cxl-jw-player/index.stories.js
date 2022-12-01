import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/index.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

const Template = ({ captions, mediaId, mediaSource, minimumSearchLength, libraryId, librarySource, playlistId, playlistSource, pluginPath }) =>
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
      is-public="true"
      ?captions=${captions}
      media-id=${mediaId}
      media-source=${mediaSource}
      minimum-search-length=${minimumSearchLength}
      library-id=${playerId}
      library-source=${playerSource}
      playlist-id=${playlistId}
      playlist-source=${playlistSource}
      plugin-path="${pluginPath}"
    ></cxl-jw-player>
  `;

export const Default = Template.bind({});

Object.assign(Default, {
  args: {
    captions: true,
    mediaId: 'fZ0XiGdb',
    mediaSource: '',
    minimumSearchLength: 3,
    playerId: '5CFJNXKb',
    playerSource: '',
    playlistId: '',
    playlistSource: '',
    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',
  },
});
