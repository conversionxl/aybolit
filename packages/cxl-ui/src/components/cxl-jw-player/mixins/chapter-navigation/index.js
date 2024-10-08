import { render } from 'lit';
import style from '../../../../styles/global/cxl-jw-player/cxl-jw-player-chapter-navigation-css';
import { chapterNavigationTemplate } from './index.html';

export function ChapterNavigationMixin(BaseClass) {
  class Mixin extends BaseClass {
    _chapterNavigation;

    async _setupChapterNavigation() {
      const chapters = await this._getChapters();

      if (!chapters.length) {
        this._jwPlayer.removeButton('toggle-chapters');

        return;
      }

      render(chapterNavigationTemplate.bind(this)(chapters), this._chapterNavigation);

      this._jwPlayer.addButton(
        `<svg class="jw-player-button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" aria-hidden="true" viewBox="0 0 1000 1000"><g><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g></svg>`,
        'Show Chapters',
        this._toggleChapterNavigation.bind(this),
        'toggle-chapters'
      );
    }

    _chapterSeek(e) {
      const index = Number(e.currentTarget.dataset.index);
      this._jwPlayer.seek(this._chapters[index].data.start / 1000);
    }

    async _setup() {
      await super._setup();
      
      this._addStyle(style);

      this._chapterNavigation = document.createElement('div');
      this._chapterNavigation.classList.add('chapter-navigation');
      this._chapterNavigation.hidden = true;
      this._jwPlayerContainer.appendChild(this._chapterNavigation);

      if (this.mediaId) {
        this._setupChapterNavigation();
      }

      if (this.playlistId) {
        this._jwPlayer.on('playlistItem', () => {
          this._setupChapterNavigation();
        });
      }
    }

    _toggleChapterNavigation() {
      this._chapterNavigation.hidden = !this._chapterNavigation.hidden;
    }
  }

  return Mixin;
}
