export function ChapterMixin(BaseClass) {
  class Mixin extends BaseClass {
    __path = 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/';

    async __onFirstFrame() {
      await super.__onFirstFrame();

      console.log('Hi');

      const chapters_overlay = document.createElement('div');

      // chapters_overlay = document.getElementById(`${player.id}_cxlJWChapters`);

      const chapters = this.__jwPlayer.getCues();

      if (!chapters.length) {
        return;
      }

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

      chapter_nav.innerHTML = `${buildChapterNav(chapters)}`;

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
        toggleChapterOverlay,
        'toggle-chapters'
      );

      function toggleChapterOverlay() {
        chapters_overlay.classList.toggle('hidden');
      }
    }
  }

  return Mixin;
}

/**
 * Build chapter nav UL element
 *
 * @param chapters
 * @returns {string}
 */
function buildChapterNav(chapters) {
  let list = '';
  chapters.forEach((chapter, i) => {
    list += `<li id="chapter${i}" class="chapterItem">${chapter.text}</li>`;
  });
  return `<ul>${list}</ul>`;
}
