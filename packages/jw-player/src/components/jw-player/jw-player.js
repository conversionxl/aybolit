import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { parseSync } from 'subtitle';

@customElement('jw-player')
export class JWPlayerElement extends LitElement {
  config = {};

  __jwPlayer;
  __positionInterval;

  @property({ type: Array }) __captions = [];
  @property({ type: Number }) __currentCue = 0;
  @property() playerId;
  @property() playlist;
  @property({ type: Number }) __position = 0;
  @property() type;

  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        [active] {
          background-color: var(--lumo-primary-color);
          border-radius: var(--lumo-space-s);
          color: #fff;
        }

        .flex {
          display: flex;
          height: 100%;
        }

        .flex.column {
          flex-direction: column;
        }

        .height-50 {
          height: 50%;
        }

        .height-100 {
          height: 100%;
        }

        .padding {
          padding: var(--lumo-space-s);
        }

        .scroll {
          overflow: auto;
        }

        li {
          cursor: pointer;
          padding: 0.5rem;
        }
      </style>
      <div class="column flex height-100">
        <div class="jw-player"></div>
        <div class="height-50 padding">
          <div class="height-100 jw-player-captions scroll">
              ${this.__captions.map(
                (caption, index) =>
                  html`<li
                    ?active=${index === this.__currentCue}
                    data-index=${index}
                    @click=${this.__setPosition}
                  >
                    ${caption.data.text}
                  </li>`
              )}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  // disable shadow dom
  createRenderRoot() {
    return this;
  }

  async firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    await this.__setup();

    this.__getCaptions();
  }

  get __scriptUrl() {
    return `https://content.jwplatform.com/libraries/${this.playerId}.js`;
  }

  __createPositionInterval() {
    this.__positionInterval = setInterval(() => {
      this.__position = this.__jwPlayer.getPosition() * 1000; // Convert to milliseconds

      this.__captions.forEach(({ data: { end, start } }, index) => {
        if (start <= this.__position && end >= this.__position) {
          const currentCueElement = this.querySelector(`[data-index="${index}"]`);

          currentCueElement.scrollIntoView(true);

          this.__currentCue = index;
        }
      });
    }, 1000);
  }

  __clearPositionInterval() {
    clearInterval(this.__positionInterval);
  }

  // async __getMedia() {
  //   return await (await fetch(`https://cdn.jwplayer.com/v2/media/${this.mediaId}`)).json();
  // }

  async __getPlaylist() {
    return await (await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlist}`)).json();
  }

  async __getCaptions() {
    const playlistItem = this.__jwPlayer.getPlaylistItem();
    const file = playlistItem.tracks.filter((track) => track.kind === 'captions')[0].file;
    const response = await (await fetch(file)).text();

    this.__captions = parseSync(response);
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

  __setPosition(e) {
    const index = Number(e.currentTarget.dataset.index);
    this.__jwPlayer.seek(this.__captions[index].data.start / 1000);
  }

  async __setup() {
    const jwPlayer = await this.__loadScript();

    const el = this.querySelector('.jw-player');

    this.__jwPlayer = jwPlayer(el).setup({ ...this.config, ...(await this.__getPlaylist()) });

    await new Promise((resolve) => {
      this.__jwPlayer.on('ready', resolve);
    });

    this.__jwPlayer.on('play', () => {
      this.__clearPositionInterval();
      this.__createPositionInterval();
    });

    this.__jwPlayer.on('pause', () => {
      this.__clearPositionInterval();
    });
  }
}
