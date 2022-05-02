import { LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { parseSync } from 'subtitle';
import { template } from './index.html';

@customElement('jw-player')
export class JWPlayerElement extends LitElement {
  config = {
    width: '100%',
    height: '100%',
  };

  __jwPlayer;

  @state() __captions = [];
  @state() __currentCue = 0;
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

  async __getPlaylist() {
    return await (await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlist}`)).json();
  }

  async __getCaptions() {
    const playlistItem = this.__jwPlayer.getPlaylistItem();
    const file = playlistItem.tracks.filter((track) => track.kind === 'captions')[0].file;
    const response = await (await fetch(file)).text();

    return parseSync(response);
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

    this.__registerListeners();
  }
}
