import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-jw-player/index.js';

export default {
  title: 'CXL UI/cxl-jw-player',
};

const Template = ({
  apiSecret,
  captions,
  isPublic,
  libraryId,
  librarySource,
  mediaId,
  mediaSource,
  minimumSearchLength,
  nextupoffset,
  playlistId,
  playlistSource,
  pluginPath,
}) =>
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
      api-secret=${apiSecret}
      ?captions=${captions}
      ?is-public=${isPublic}
      library-id=${libraryId}
      library-source=${librarySource}
      media-id=${mediaId}
      media-source=${mediaSource}
      minimum-search-length=${minimumSearchLength}
      nextupoffset=${nextupoffset}
      playlist-id=${playlistId}
      playlist-source=${playlistSource}
      plugin-path="${pluginPath}"
    ></cxl-jw-player>
  `;

export const Playlist = Template.bind({});

Object.assign(Playlist, {
  args: {
    apiSecret: '',
    captions: true,
    isPublic: true,
    libraryId: '5CFJNXKb',
    librarySource: '',
    mediaId: '',
    mediaSource: '',
    minimumSearchLength: 3,
    nextupoffset: '-100%',
    playlistId: 'tAxwbNsA',
    playlistSource: '',
    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',
  },
});
