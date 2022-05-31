import { css, html, nothing, render } from 'lit';
import { property } from 'lit/decorators.js';

export function ChapterMixin(BaseClass) {
  class Mixin extends BaseClass {
    __path = 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/';

    async __createChapterNavigation() {
      const chapters = await this.__getChapters();

      this.__chapterNavigation = document.createElement('div');
      this.__chapterNavigation.classList.add('chapter-navigation');
      this.__chapterNavigation.hidden = true;

      render(chapterNavigationTemplate.bind(this)(chapters), this.__chapterNavigation);

      this.__jwPlayerContainer.appendChild(this.__chapterNavigation);

      this.__jwPlayer.addButton(
        `${this.__path}images/chapter-bookmark-icon.svg`,
        'Show Chapters',
        this.__toggleChapterNavigation.bind(this),
        'toggle-chapters'
      );
    }

    __addStyle() {
      const style = document.createElement('style');
      render(
        css`
          .chapter-navigation {
            background: var(--lumo-shade);
            bottom: 0;
            color: var(--lumo-tint);
            display: flex;
            flex-direction: column;
            max-width: 50%;
            padding: var(--lumo-space-s) var(--lumo-space-m);
            position: absolute;
            right: 0;
            top: 0;
            z-index: 100;
          }

          .chapter-navigation .close {
            background: inherit;
            color: var(--lumo-primary-color);
            cursor: pointer;
            padding: var(--lumo-space-s) var(--lumo-space-s) var(--lumo-space-s) 0;
          }

          .chapter-navigation .close:hover {
            text-decoration: none;
          }

          .chapter-navigation-list {
            overflow: auto;
          }

          .chapter-navigation a {
            color: var(--lumo-tint);
          }

          .chapter-navigation input[type=checkted]:checked {
            background-color: var(--lumo-primary-color);
          }

          .chapter-navigation li {
            cursor: pointer;
            font-size: var(--lumo-font-size-s);
            line-height: var(--lumo-line-height-xs);
            margin-bottom: var(--lumo-space-s);
            padding: var(--lumo-space-s) 0;
          }

          .chapter-navigation li:hover a {
            text-decoration: underline;
          }

          .chapter-navigation ul {
            list-style-type: none;
            padding-inline-start: 0;
          }
        `,
        style
      );

      this.appendChild(style);
    }

    __chapterSeek(e) {
      const index = Number(e.currentTarget.dataset.index);
      this.__jwPlayer.seek(this.__chapters[index].data.start / 1000);
    }

    async __setup() {
      await super.__setup();

      this.__addStyle();
      this.__createChapterNavigation();
    }

    __toggleChapterNavigation() {
      this.__chapterNavigation.hidden = !this.__chapterNavigation.hidden;
    }
  }

  return Mixin;
}

const chapterNavigationTemplate = function (chapters) {
  return html`
    <a class="close" @click=${this.__toggleChapterNavigation.bind(this)}>&#10005;</a>
    <ul class="chapter-navigation-list">
      ${chapters.map(
        (chapter, index) =>
          html`
            <li data-index=${index} @click=${this.__chapterSeek.bind(this)}>
              <a>${chapter.data.text}</a>
            </li>
          `
      )}
    </ul>
  `;
};
