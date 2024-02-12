import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/jw-playlist.js';

export default {
  title: 'CXL UI/jw-playlist',
  parameters: {
    layout: 'centered',
  },
};

export const JWPlaylist = ({ playlistId }) => html`
  <style>
    #root, #root-inner {
      width: 100%;
      height: 100%;
    }
  </style>
  <jw-playlist playlist-id=${playlistId}></jw-playlist>
`;

JWPlaylist.storyName = 'jw-playlist';
JWPlaylist.args = {
    playlistId: 'YxtexLa2',
};
