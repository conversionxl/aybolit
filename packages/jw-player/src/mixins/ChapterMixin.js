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

      const chapters_overlay = document.createElement('div');

      /**
       * Build the close button and append to overlay.
       *
       * @type {HTMLAnchorElement}
       */
      const close_chapter_nav = document.createElement('a');
      close_chapter_nav.setAttribute('id', 'close_chapter_nav');
      close_chapter_nav.setAttribute('class', 'hidden');
      close_chapter_nav.innerHTML = `&#10005;`;
      chapters_overlay.appendChild(close_chapter_nav);

      /**
       * Build chapter nav container, links, and setup event listeners.
       * Add the toggle button to JW Player UI.
       *
       * @type {HTMLDivElement}
       */
      const chapter_nav = document.createElement('div');
      chapter_nav.setAttribute('id', 'chapterNav');
      chapter_nav.setAttribute('class', 'chapters');

      chapter_nav.innerHTML = this.__chapterNavigation;

      chapters_overlay.appendChild(chapter_nav);
      chapters_overlay.setAttribute('class', 'chapters-overlay jw-plugin jw-reset hidden');
      close_chapter_nav.classList.toggle('hidden');

      close_chapter_nav.addEventListener('click', (e) => {
        toggleChapterOverlay();
      });

      chapter_nav.addEventListener('click', (e) => {
        if (e.target.id.startsWith('chapter')) {
          let i = Number(e.target.id.replace('chapter', ''));
          toggleChapterOverlay();
          player.seek(chapters[i].begin).play();
        }
      });

      this.__jwPlayer.addButton(
        `${this.__path}images/chapter-bookmark-icon.svg`,
        'Show Chapters',
        this.__toggleShowChapters.bind(this),
        'toggle-chapters'
      );

      function toggleChapterOverlay() {
        chapters_overlay.classList.toggle('hidden');
      }
    }

    __addStyle() {
      const style = document.createElement('style');
      render(
        css`
          .chapter-navigation {
            background: var(--lumo-shade);
            bottom: 0;
            color: var(--lumo-tint);
            max-width: 50%;
            overflow: auto;
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
          }

          .chapter-navigation a {
            color: var(--lumo-tint);
          }

          .chapter-navigation ul {
            list-style-type: none;
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

    __toggleShowChapters() {
      this.__chapterNavigation.hidden = !this.__chapterNavigation.hidden;
    }
  }

  return Mixin;
}

const chapterNavigationTemplate = function (chapters) {
  return html`
    <button class="close" @click=${this.__customNavigationClose}>&#10005;</button>
    <ul>
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
