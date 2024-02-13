import { css, LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@vaadin/virtual-list';
import { virtualListRenderer } from '@vaadin/virtual-list/src/lit/renderer-directives.js';
import '@lit-labs/virtualizer';
import { flow } from '@lit-labs/virtualizer/layouts/flow.js';
import { grid } from '@lit-labs/virtualizer/layouts/grid.js';
import jwPlaylistStyles from '../styles/jw-playlist-css.js';
import '@conversionxl/cxl-lumo-styles';

@customElement('jw-playlist')
export class JWPlaylist extends LitElement {
  @property({ type: Object }) playlist;
  @property({ attribute: 'playlist-id', type: String }) playlistId = '';

  static get styles() {
    return [
      css`
        .border {
          /* border: 0.25rem solid black; */
        }

        .no-wrap {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .container {
          display: grid;
          gap: 1rem;
          margin-left: 1rem;
          max-width: 336px;
        }

        .container:hover .image {
          border: 0.25rem solid red;
        }

        .image {
          border-radius: 1rem;
          box-shadow: 0 8px 10px #00000024, 0 3px 14px #0000001f, 0 4px 5px #0003;
          width: 320px;
          height: 180px;
          box-shadow: 0 8px 10px #00000024, 0 3px 14px #0000001f, 0 4px 5px #0003;
        }

        .transform {
          overflow: hidden;
          /* transition: transform .2s ease-out,-webkit-transform .2s ease-out; */
        }

        .transform:hover {
          transform: scale(1.05);
        }

        lit-virtualizer {
          height: 320px;
          padding: 1rem;
        }

        lit-virtualizer > div.image {
        }

        lit-virtualizer div.image:hover {
          /* border: 0.25rem solid red; */
        }

        lit-virtualizer div:last-of-type {
          margin-right: 1rem;
        }
      `,
    ];
  }

  render() {
    return html`
      ${
        this.playlist
          ? html`
        <h1>Lit Labs Virtualizer</h1>
        <lit-virtualizer .items=${this.playlist.playlist} .layout=${flow({
              direction: 'horizontal',
            })} .renderItem=${this.__renderItem} scroller></lit-virtualizer>
        <h1>Vaadin Virtual List</h1>
        <vaadin-virtual-list .items=${this.playlist.playlist} ${virtualListRenderer(
              this.__renderItem
            )}></vaadin-virtual-list>
      `
          : nothing
      }
    `;
  }

  async firstUpdated() {
    this.playlist = await this.__getPlaylist(this.playlistId);
  }

  async __getPlaylist(playlistId) {
    const response = await fetch(`https://cdn.jwplayer.com/v2/playlists/${playlistId}`);
    const result = await response.json();

    console.log(result);

    return result;
  }

  __renderItem(item, model, virtualList) {
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
