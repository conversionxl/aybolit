import { render } from 'lit';
import { property } from 'lit/decorators.js';
import style from '../../../../styles/cxl-jw-player/chapter-css';
import { chapterNavigationTemplate } from './index.html';

export function ChapterMixin(BaseClass) {
  class Mixin extends BaseClass {
    @property({ attribute: 'plugin-path', type: String }) pluginPath;

    async __createChapterNavigation() {
      const chapters = await this.__getChapters();

      this.__chapterNavigation = document.createElement('div');
      this.__chapterNavigation.classList.add('chapter-navigation');
      this.__chapterNavigation.hidden = true;

      render(chapterNavigationTemplate.bind(this)(chapters), this.__chapterNavigation);

      this.__jwPlayerContainer.appendChild(this.__chapterNavigation);

      this.__jwPlayer.addButton(
        `${this.pluginPath}images/chapter-bookmark-icon.svg`,
        'Show Chapters',
        this.__toggleChapterNavigation.bind(this),
        'toggle-chapters'
      );
    }

    __addStyle() {
      const el = document.createElement('style');
      render(style, el);
      this.appendChild(el);
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
