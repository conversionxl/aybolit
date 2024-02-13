// import '@conversionxl/cxl-lumo-styles';
import '@lit-labs/virtualizer';
import { css, LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import jwpCommonStyles from '../../styles/jwp/series-css.js';
import jwpSeriesStyles from '../../styles/jwp/series-css.js';

@customElement('jwp-series')
export class JWPSeries extends LitElement {
  @property({ type: Object }) series;
  @property({ attribute: 'series-id', type: String }) seriesId = '';

  get __endpoint() {
    return `https://cdn.jwplayer.com/apps/series/${this.seriesId}/episodes`;
  }

  static get styles() {
    return [
      jwpCommonStyles,
      jwpSeriesStyles,
    ];
  }

  render() {
    return html`
      <h1>Series: #${this.seriesId}</h1>
      ${
        this.series
          ? html`<pre>${JSON.stringify(this.series, null, 2)}</pre>`
          : nothing
      }
    `;
  }

  async firstUpdated() {
    this.series = await this.__getseries(this.seriesId);
  }

  async __getseries(seriesId) {
    return (await fetch(this.__endpoint)).json();
  }

  __renderItem(item, index) {
    return html`
    <div class="container">
      <a class="transform">
        <div class="image" style="background-image: url('${item.images[0].src}')"></div>
        <h4 class="no-wrap" id="title">${item.title}</h4>
      </a>
    </div>
    `;
  }
}
