import { html } from 'lit';
import { style } from './index.css';

export const template = function () {
  return html`
    <style>
      ${style}
    </style>
    <div class="column flex height-100">
      <div class="jw-player"></div>
      <div class="height-50 padding">
        <div>
          <input />
        </div>
        <div class="height-100 jw-player-captions scroll">
          <ul>
            ${this.__captions.map(
              (caption, index) =>
                html`
                  <li
                    ?active=${index === this.__currentCue}
                    data-index=${index}
                    @click=${this.__seek}
                  >
                    ${caption.data.text}
                  </li>
                `
            )}
          </ul>
        </div>
      </div>
    </div>
  `;
};
