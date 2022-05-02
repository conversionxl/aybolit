import { html } from 'lit';
import 'jw-player/src/components/jw-player';

export default {
  title: 'JW Player/JW Player',
};

const Template = ({}) =>
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
      captions
      mediaId="fZ0XiGdb"
      playerId="5CFJNXKb"
      playlist="tAxwbNsA"
      type="playlist"
    ></jw-player>
  `;

export const Default = Template.bind({});
