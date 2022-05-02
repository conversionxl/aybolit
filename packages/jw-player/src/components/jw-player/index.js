import { LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { parseSync } from 'subtitle';
import { template } from './index.html';
import lunr from 'lunr';

@customElement('jw-player')
export class JWPlayerElement extends LitElement {
  config = {
    width: '100%',
    height: '100%',
  };

  __jwPlayer;
  __searchIndex;

  @state() __captions = [];
  @state() __chapters = [];
  @state() __currentChapter = 0;
  @state() __currentCue = 0;
  @state() __matches = [];
  @property() playerId;
  @property() playlist;

  render() {
    return template.bind(this)();
  }

  // disable shadow dom
  createRenderRoot() {
    return this;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    this.__setup();
  }

  get __ready() {
    return new Promise((resolve) => {
      this.__jwPlayer.on('ready', resolve);
    });
  }

  get __scriptUrl() {
    return `https://content.jwplatform.com/libraries/${this.playerId}.js`;
  }

  __createIndex() {
    const captions = this.__captions;
    return lunr(function () {
      captions.forEach((caption, index) => {
        caption.data.id = index;

        this.field('text');

        this.add(caption.data);
      });
    });
  }

  async __getCaptions() {
    const playlistItem = this.__jwPlayer.getPlaylistItem();
    const file = playlistItem.tracks.filter((track) => track.kind === 'captions')[0].file;
    const response = await (await fetch(file)).text();

    return parseSync(response);
  }

  __getCaptionsInChapter(index) {
    return this.__captions.filter((caption) => {
      if (caption.data.start >= this.__chapters[index].data.start) {
        if (this.__chapters[index + 1]) {
          if (caption.data.start <= this.__chapters[index + 1].data.start) {
            return caption;
          }
        } else {
          return caption;
        }
      }
    });
  }

  async __getChapters() {
    const playlistItem = this.__jwPlayer.getPlaylistItem();
    const file = playlistItem.tracks.filter((track) => track.kind === 'chapters')[0].file;
    const response = await (await fetch(file)).text();

    return parseSync(response);
  }

  async __getPlaylist() {
    return await (await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlist}`)).json();
  }

  async __loadScript() {
    return new Promise((resolve) => {
      const el = document.createElement('script');
      el.src = this.__scriptUrl;
      el.onload = () => {
        resolve(self['jwplayer']);
      };
      document.head.appendChild(el);
    });
  }

  __onTimeListener({ position: _position }) {
    const position = _position * 1000; // Convert to milliseconds

    this.__chapters.forEach(({ data: { end, start } }, index) => {
      if (start <= position && end >= position) {
        this.__currentChapter = index;
      }
    });

    this.__captions.forEach(({ data: { end, start } }, index) => {
      if (start <= position && end >= position) {
        this.renderRoot.querySelector(`[data-index="${index}"]`).scrollIntoView(true);

        this.__currentCue = index;
      }
    });
  }

  __registerListeners() {
    this.__jwPlayer.on('time', this.__onTimeListener.bind(this));
  }

  __search(e) {
    if (e.target.value === '') {
      this.__matches = [];
      return;
    }

    const result = this.__searchIndex.search(e.target.value);
    this.__matches = result.map((item) => Number(item.ref));
  }

  __seek(e) {
    const index = Number(e.currentTarget.dataset.index);
    this.__jwPlayer.seek(this.__captions[index].data.start / 1000);
  }

  async __setup() {
    const jwPlayer = await this.__loadScript();

    this.__jwPlayer = jwPlayer(this.renderRoot.querySelector('.jw-player')).setup({
      ...this.config,
      ...(await this.__getPlaylist()),
    });

    await this.__ready;

    this.__captions = await this.__getCaptions();
    this.__chapters = await this.__getChapters();

    console.log(this.__captions, this.__chapters);

    this.__searchIndex = this.__createIndex();

    this.__registerListeners();
  }
}
