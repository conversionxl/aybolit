import { LitElement, html, customElement, property } from 'lit-element';
import cxlJwplayerStyles from '../styles/cxl-jwplayer-css.js';

@customElement('cxl-jwplayer')
export class CxlJwPlayer extends LitElement {
  static get styles() {
    return [cxlJwplayerStyles];
  }

  @property({ type: Object })
  player;

  @property({ type: Object })
  config;

  @property({ type: String })
  mediaId = '';

  constructor() {
    super();
    this.mediaId = 'fZ0XiGdb';
    if (!window.jwplayer) console.error('JWPlayer library not found.');
  }

  render() {
    return html`
      <h2>cxl-jwplayer</h2>
      <div id="jwplayer_container" class="theater-mode ">
        <div id="cxl_jwplayer_fZ0XiGdb"></div>
        <!-- <div id="transcript_container" class="transcript_container">
        <div id="searchbox" class="searchbox">
          <iron-icon icon="lumo:search"></iron-icon>
          <input id="search" type="search" class="search" autocomplete="off" results=5 placeholder="Type and press enter to search" />
          <span id="match" class="match hidden">0 of 0</span>
        </div>
        <div class="transcript_aspect jw-aspect jw-reset"></div>
        <div class="transcript_wrapper">
          <div id="transcript" class="transcript"></div>
        </div>
      </div> -->
      </div>
    `;
  }

  firstUpdated() {
    /**
     *
     * Configure and Setup the Player
     *
     */
    // Fetched via GET request to JW Platform
    // One video is an object. Multiple videos is an array of objects.
    const data = {
      config: {
        playlist: [
          {
            file: `https://cdn.jwplayer.com/manifests/${this.mediaId}.m3u8`,
            image: `https://cdn.jwplayer.com/thumbs/${this.mediaId}-720.jpg`,
            tracks: [
              {
                file: `https://cdn.jwplayer.com/strips/${this.mediaId}-120.vtt`,
                kind: 'thumbnails'
              },
              {
                file: 'https://assets-jpcust.jwpsrv.com/tracks/HujCQO8E',
                kind: 'captions',
                label: 'English',
                language: 'en_US'
              },
              {
                file: 'https://content.jwplatform.com/tracks/qb36nsWb.vtt', // need to be able to set these dynamically...
                kind: 'chapters'
              }
            ]
          }
        ]
      }
    };

    const { config } = data; // JSON.parse(data.config);
    config.plugins = {};

    /**
     *
     * Conditionally load plugins
     *
     */
    let hasChapters = false;
    let hasCaptions = false;
    const { tracks } = config.playlist[0];

    tracks.forEach(track => {
      if (track.kind.startsWith('chapters')) {
        hasChapters = true;
      }
      if (track.kind.startsWith('captions')) {
        hasCaptions = true;
      }
    });

    // How these are loaded in php is different. We do the plugin name = true
    // We use WP to enqueue the scripts, but here we have to init from the jw setup config.
    // EX: config.plugins['cxlJWChapters'] = true.
    if (hasChapters) {
      config.plugins['../plugins/cxlJWChapters.js'] = 'cxlJWChapters';
    }
    if (hasCaptions) {
      config.plugins['../plugins/cxlJWTranscript.js'] = 'cxlJWTranscript';
    }

    config.controls = true;
    config.playbackRateControls = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    config.displaydescription = false;

    config.skin = {
      name: 'cxl-institute'
    };

    const playerid = `#cxl_jwplayer_${this.mediaId}`;
    const playerDiv = this.shadowRoot.querySelector(playerid);
    this.config = config;
    this.player = window.jwplayer(playerDiv).setup(config);
  }
}
