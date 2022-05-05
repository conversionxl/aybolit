import { html, nothing } from 'lit';
import { style } from './index.css';

export const template = function () {
  return html`
    <style>
      ${style}
    </style>
    <div class="grid height-100" id="container">
      <slot></slot>
      ${this.captions
        ? html`
            <div class="center gap search padding">
              <label>Search</label>
              <input placeholder="Type and press enter to search" @change=${this.__search} />
              <span>(${this.__matches} matches)</span>
              <input
                ?checked=${this.shouldScroll}
                type="checkbox"
                @change=${this.__toggleShouldScroll}
              />
              <label>Scroll</label>
            </div>
            <div class="captions padding scroll">
              ${this.__tracks.map(
                (track, index) =>
                  html`${track.isChapter
                    ? html`<h2>${track.data.text}</h2>`
                    : html`
                        <span
                          ?active=${this.__currentTrack === index}
                          data-index=${index}
                          @click=${this.__onCaptionClick}
                        >
                          ${track.data.text}
                        </span>
                      `}`
              )}
            </div>
          `
        : nothing}
    </div>
  `;
};
