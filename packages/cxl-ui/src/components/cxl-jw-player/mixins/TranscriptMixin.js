import { property, state, query } from 'lit/decorators.js';
import { debounce } from 'lodash-es';
import Mark from 'mark.js';
import { parseSync } from 'subtitle';

export function TranscriptMixin(BaseClass) {
  class Mixin extends BaseClass {
    __debouncedSearch;

    __mark;

    @property({ reflect: true, type: Boolean }) captions = false;

    @state() __currentCue = 0;

    @state() __currentTrack = 0;

    @state() __isSearchMinimumLength = false;

    @state() __matches = 0;

    @property({ attribute: 'minimum-search-length', type: Number }) minimumSearchLength = 3;

    @property({ type: Boolean }) shouldScroll = true;

    @query('#search') __searchElement;

    @state() __searchValue;

    @state() __tracks = [];

    constructor() {
      super();

      this.__debouncedSearch = debounce(this.__search, 300);
    }

    async __getCaptions() {
      const playlistItem = this.__jwPlayer.getPlaylistItem();
      const { file } = playlistItem.tracks.filter((track) => track.kind === 'captions')[0];
      const response = await (await fetch(file)).text();

      return parseSync(response);
    }

    /* eslint-disable array-callback-return, class-methods-use-this, consistent-return, no-return-assign */
    __getCaptionsInChapter(chapters, captions, index) {
      return captions.filter((caption) => {
        if (caption.data.start >= chapters[index].data.start) {
          if (chapters[index + 1]) {
            if (caption.data.start <= chapters[index + 1].data.start) {
              return caption;
            }
          } else {
            return caption;
          }
        }
      });
    }
    /* eslint-enable array-callback-return, class-methods-use-this, consistent-return, no-return-assign */

    async __getTracks() {
      const tracks = [];

      const captions = await this.__getCaptions();
      const chapters = [...[{ data: { start: 0, text: '' } }], ...(await this.__getChapters())];

      chapters.forEach((chapter, index) => {
        tracks.push({ ...chapter, ...{ isChapter: true } });
        tracks.push(...this.__getCaptionsInChapter(chapters, captions, index));
      });

      return tracks;
    }

    __onCaptionClick(e) {
      const index = Number(e.currentTarget.dataset.index);
      this.__jwPlayer.seek(this.__tracks[index].data.start / 1000);
    }

    __onTimeListener(event) {
      super.__onTimeListener(event);

      const position = event.position * 1000; // Convert to milliseconds

      this.__tracks.forEach(({ data: { end, start } }, index) => {
        if (start <= position && end >= position) {
          if (this.shouldScroll) {
            const el = this.renderRoot.querySelector(`[data-index="${index}"]`);
            if (el) {
              el.scrollIntoView(true);
            }
          }

          this.__currentTrack = index;
        }
      });
    }

    __search() {
      this.__mark.unmark();

      if (this.__searchElement.value.length >= this.minimumSearchLength) {
        this.__isSearchMinimumLength = true;

        this.__mark.mark(this.__searchElement.value, {
          done: (total) => {
            this.__matches = total;
          },
          separateWordSearch: false,
        });
      } else {
        this.__isSearchMinimumLength = false;
      }
    }

    async __setup() {
      await super.__setup();

      this.__setupTranscript();
    }

    async __setupTranscript() {
      if (!this.__jwPlayer) return;

      this.__jwPlayer.addButton(
        `<svg class="jw-player-button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" aria-hidden="true" viewBox="0 0 1000 1000"><g><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g></svg>`,
        'Transcript',
        this.__toggleTranscript.bind(this),
        'toggle-transcript'
      );

      if (this.captions) {
        this.__tracks = await this.__getTracks();

        // Make sure the DOM is up to date
        await this.updateComplete;

        this.__mark = new Mark(this.renderRoot.querySelectorAll('.captions h2, .captions span'));
      }
    }

    updated(changedProperties) {
      super.updated(changedProperties);

      if (changedProperties.has('captions')) {
        if (this.captions) {
          this.__setupTranscript();
        } else if (this.mark) {
          this.__mark.unmark();
        }
      }
    }

    __attachListeners() {
      super.__attachListeners();
    }

    __toggleShouldScroll() {
      this.shouldScroll = !this.shouldScroll;
    }

    __toggleTranscript() {
      // this.dispatchEvent(new CustomEvent('toggle-transcript'));

      this.captions = !this.captions;
    }
  }

  return Mixin;
}
