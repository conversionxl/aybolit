import { property, state } from 'lit/decorators.js';
import Mark from 'mark.js';
import { parseSync } from 'subtitle';

export function CaptionMixin(Base) {
  class Mixin extends Base {
    __mark;

    @property({ type: Boolean }) captions = false;
    @state() __currentCue = 0;
    @state() __currentTrack = 0;
    @state() __matches = 0;
    @property({ type: Boolean }) shouldScroll = true;
    @state() __tracks = [];

    async __getCaptions() {
      const playlistItem = this.__jwPlayer.getPlaylistItem();
      const file = playlistItem.tracks.filter((track) => track.kind === 'captions')[0].file;
      const response = await (await fetch(file)).text();

      return parseSync(response);
    }

    async __getChapters() {
      const playlistItem = this.__jwPlayer.getPlaylistItem();
      const file = playlistItem.tracks.filter((track) => track.kind === 'chapters')[0].file;
      const response = await (await fetch(file)).text();

      return [...[{ data: { start: 0, text: '' } }], ...parseSync(response)];
    }

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

    async __getTracks() {
      const tracks = [];

      const captions = await this.__getCaptions();
      const chapters = await this.__getChapters();

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
            this.renderRoot.querySelector(`[data-index="${index}"]`).scrollIntoView(true);
          }

          this.__currentTrack = index;
        }
      });
    }

    __search(e) {
      this.__mark.unmark();
      this.__mark.mark(e.target.value, { done: (total) => (this.__matches = total) });
    }

    async __setup() {
      await super.__setup();

      if (this.captions) {
        this.__tracks = await this.__getTracks();

        // Make sure the DOM is up to date
        await this.updateComplete;

        this.__mark = new Mark(this.renderRoot.querySelectorAll('.captions span'));
      }
    }

    __toggleShouldScroll() {
      this.shouldScroll = !this.shouldScroll;
    }
  }

  return Mixin;
}
