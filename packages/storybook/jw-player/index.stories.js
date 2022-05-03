import { html } from 'lit';
import 'jw-player/src/components/jw-player';

export default {
  title: 'JW Player/JW Player',
};

const Template = ({ captions, mediaId, playlistId }) =>
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
      mediaId=${mediaId}
      playerId="5CFJNXKb"
      playlist=${playlistId}
      type="playlist"
    ></jw-player>
  `;

export const Default = Template.bind({});

Object.assign(Default, {
  args: {
    captions: true,
    mediaId: 'fZ0XiGdb',
  },
});
