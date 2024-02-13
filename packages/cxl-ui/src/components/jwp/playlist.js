import '@conversionxl/cxl-lumo-styles';
import '@lit-labs/virtualizer';
import { css, LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import jwpCommonStyles from '../../styles/jwp/common-css.js';
import jwpPlaylistStyles from '../../styles/jwp/playlist-css.js';

@customElement('jwp-playlist')
export class JWPPlaylist extends LitElement {
  @property({ type: Object }) playlist;
  @property({ attribute: 'playlist-id', type: String }) playlistId = '';

  get __endpoint() {
    return `https://cdn.jwplayer.com/v2/playlists/${this.playlistId}`;
  }

  static get styles() {
    return [
      jwpCommonStyles,
      jwpPlaylistStyles,
      css``
    ];
  }

  render() {
    return html`
      <h1>Playlist: #${this.playlistId}</h1>
      ${
        this.playlist
          ? html`
            <lit-virtualizer .items=${this.playlist.playlist} .layout=${{
              direction: 'horizontal',
            }} .renderItem=${this.__renderItem} scroller></lit-virtualizer>
      `
          : nothing
      }
    `;
  }

  async firstUpdated() {
    this.playlist = await this.__getPlaylist(this.playlistId);
  }

  async __getPlaylist(playlistId) {
    return (await fetch(this.__endpoint)).json();
  }

  __renderItem(item, index) {
    return html`
    <div class="container">
      <a class="transform">
        <div class="image" style="background-image: url('${item.images[0].src}')"></div>
        <h3 class="no-wrap" id="title">${item.title}</h3>
      </a>
    </div>
    `;
  }
}
