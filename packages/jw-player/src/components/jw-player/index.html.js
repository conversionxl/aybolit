import { html } from 'lit';
import { style } from './index.css';

export const template = function () {
  return html`
    <style>
      ${style}
    </style>
    <div class="height-100" style="display: grid; grid-template-rows: 1fr min-content 1fr;">
      <div>
        <div class="jw-player"></div>
      </div>
      <div class="padding">
        <label>Search</label>
        <input @input=${this.__search} />
        <span>(${this.__matches.length}) matches</span>
      </div>
      <div class="scroll">
        ${this.__chapters.map(
          (chapter, chapterIndex) => html`
            <h2>${chapter.data.text}</h2>
            ${this.__getCaptionsInChapter(chapterIndex).map(
              (caption, captionIndex) => html`
                <span
                  ?active=${captionIndex === this.__currentCue}
                  data-index=${captionIndex}
                  ?match=${this.__matches.includes(captionIndex)}
                  @click=${this.__seek}
                >
                  ${caption.data.text}
                </span>
              `
            )}
          `
        )}
      </div>
    </div>
  `;
};
