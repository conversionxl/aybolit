import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import './plugins/customPlugin';

@customElement('cxl-jw-player')
export class CXLJWPlayerElement extends LitElement {
  config = {
    width: '100%',
    height: '100%',
    plugins: {
      'http://192.168.0.101:8080/src/components/cxl-jw-player/plugins/customPlugin.js': {
        sampleFunction: () => {
          console.log('from plugin: hello world');
        },
        name: 'Dan Woon Acorn',
      },
    },
  };

  @property() mediaId;
  @property() playerId;

  __jwPlayer;

  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100%;
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }

  // disable shadow dom
  createRenderRoot() {
    return this;
  }

  async firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    this.__setup();
  }

  get __scriptUrl() {
    return `https://content.jwplatform.com/libraries/${this.playerId}.js`;
  }

  async __getMedia() {
    return await (await fetch(`https://cdn.jwplayer.com/v2/media/${this.mediaId}`)).json();
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

  async __setup() {
    const el = this.querySelector('.jw-player');
    const jwPlayer = await this.__loadScript();
    const media = await this.__getMedia();

    this.__jwPlayer = jwPlayer(el).setup({ ...this.config, ...media });
  }
}
