import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/jwp/playlist.js';

export default {
  title: 'CXL UI/JWP/jwp-playlist',
  parameters: {
    layout: 'centered',
  },
};

export const JWPPlaylist = ({ playlistId }) => html`
  <style>
    #root, #root-inner {
      width: 100%;
      height: 100%;
    }
  </style>
  <jwp-playlist playlist-id=${playlistId}></jwp-playlist>
`;

JWPPlaylist.storyName = 'jwp-playlist';
JWPPlaylist.args = {
    playlistId: 'YxtexLa2',
};
