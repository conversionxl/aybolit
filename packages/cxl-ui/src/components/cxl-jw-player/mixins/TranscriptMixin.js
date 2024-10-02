import { property, state, query } from 'lit/decorators.js';
import { debounce } from 'lodash-es';
import Mark from 'mark.js';
import { parseSync } from 'subtitle';

export function TranscriptMixin(BaseClass) {
  class Mixin extends BaseClass {
    _debouncedSearch;

    _mark;

    _searchIndex = 0;

    _searchResults = [];

    @property({ reflect: true, type: Boolean }) captions = false;

    @property({ attribute: 'has-captions', reflect: true, type: Boolean }) hasCaptions = false;

    @state() _currentCue = 0;

    @state() _currentTrack = 0;

    @state() _isSearchMinimumLength = false;

    @state() _matches = 0;

    @property({ attribute: 'minimum-search-length', type: Number }) minimumSearchLength = 3;

    @property({ attribute: 'should-scroll', type: Boolean }) shouldScroll = true;

    @query('#search') _searchElement;

    @state() _searchValue;

    @state() _tracks = [];

    constructor() {
      super();

      this._debouncedSearch = debounce(this._search, 300);
    }

    async _getCaptions() {
      const playlistItem = this._jwPlayer.getPlaylistItem();
      const track = playlistItem.tracks.filter((track) => track.kind === 'captions')[0];

      if (!track) {
        return [];
      }

      const response = await (await fetch(track.file)).text();

      return parseSync(response);
    }

    /* eslint-disable array-callback-return, class-methods-use-this, consistent-return, no-return-assign */
    _getCaptionsInChapter(chapters, captions, index) {
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

    async _getTracks() {
      const tracks = [];

      const captions = await this._getCaptions();

      if (captions.length) {
        const chapters = [...[{ data: { start: 0, text: '' } }], ...(await this._getChapters())];

        chapters.forEach((chapter, index) => {
          tracks.push({ ...chapter, ...{ isChapter: true } });
          tracks.push(...this._getCaptionsInChapter(chapters, captions, index));
        });
      }

      return tracks;
    }

    _onCaptionClick(e) {
      const index = Number(e.currentTarget.dataset.index);
      this._jwPlayer.seek(this._tracks[index].data.start / 1000);
    }

    _onTimeListener(event) {
      super._onTimeListener(event);

      const position = event.position * 1000; // Convert to milliseconds

      this._tracks.forEach(({ data: { end, start } }, index) => {
        if (start <= position && end >= position) {
          if (this.shouldScroll) {
            this._scrollTo(this.renderRoot.querySelector(`[data-index="${index}"]`));
          }

          this._currentTrack = index;
        }
      });
    }

    _scrollTo(element) {
      if (this.shouldScroll) {
        const container = this.renderRoot.querySelector('.captions');
        container.scrollTop = element.offsetTop - container.offsetTop;
      }
    }

    _search() {
      this._mark.unmark();

      if (this._searchElement.value.length >= this.minimumSearchLength) {
        this._isSearchMinimumLength = true;

        this._mark.mark(this._searchElement.value, {
          done: (total) => {
            this._matches = total;
          },
          separateWordSearch: false,
        });
      } else {
        this._isSearchMinimumLength = false;
      }

      this._searchResults = this.shadowRoot.querySelectorAll('mark');
    }

    async _setup() {
      await super._setup();

      this._setupTranscript();

      this._jwPlayer.on('playlistItem', this._setupTranscript.bind(this));

      this.shadowRoot.querySelector('vaadin-text-field').addEventListener('keyup', (e) => {
        if(e.key === 'Enter') {
          if(this._searchResults.length) {
            if(this._searchIndex === this._searchResults.length - 1) {
              this._searchIndex = 0;
            }

            this._scrollTo(this._searchResults[this._searchIndex]);

            this._searchIndex++;
          }
        }
      });
    }

    async _setupTranscript() {
      if (!this._jwPlayer) return;

      this._tracks = [];

      if (this.captions) {
        this._tracks = await this._getTracks();
      }

      if (this._tracks.length) {
        this.captions = true;

        // Make sure the DOM is up to date
        await this.updateComplete;

        this._mark = new Mark(this.renderRoot.querySelectorAll('.captions h2, .captions span'));

        this._jwPlayer.addButton(
          `<svg class="jw-player-button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" aria-hidden="true" viewBox="0 0 1000 1000"><g><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g></svg>`,
          'Transcript',
          this._toggleTranscript.bind(this),
          'toggle-transcript'
        );
      } else {
        this.captions = false;
        this._jwPlayer.removeButton('toggle-transcript');
      }
    }

    updated(changedProperties) {
      super.updated(changedProperties);

      if (changedProperties.has('captions')) {
        if (this.captions) {
          this._setupTranscript();
        } else if (this.mark) {
          this._mark.unmark();
        }
      }
    }

    _attachListeners() {
      super._attachListeners();
    }

    _toggleShouldScroll() {
      this.shouldScroll = !this.shouldScroll;
    }

    _toggleTranscript() {
      // this.dispatchEvent(new CustomEvent('toggle-transcript'));

      this.captions = !this.captions;
    }
  }

  return Mixin;
}
