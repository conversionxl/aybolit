import { LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { template } from './index.html';
import { CaptionsMixin, SavePositionMixin } from './mixins';

export class JWPlayerElement extends LitElement {
  config = {
    width: '100%',
    height: '100%',
  };

  __boundOnTimeListener;
  __jwPlayer;
  __position;

  @property() mediaId;
  @property() playerId;
  @property() playlistId;

  render() {
    return template.bind(this)();
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    this.__setup();
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (_changedProperties.has('captions') || _changedProperties.has('mediaId')) {
      // this.__setup();
    }
  }

  get __scriptUrl() {
    return `https://content.jwplatform.com/libraries/${this.playerId}.js`;
  }

  __getChapterByPosition(position) {
    return this.__chapters.find(
      (chapter) => chapter.data.start <= position && chapter.data.end >= position
    );
  }

  async __getMedia() {
    return await (await fetch(`https://cdn.jwplayer.com/v2/media/${this.mediaId}`)).json();
  }

  async __getPlaylist() {
    return (
      this.playlistId &&
      (await (await fetch(`https://cdn.jwplayer.com/v2/playlists/${this.playlistId}`)).json())
    );
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

  __onTimeListener({ position }) {}

  __registerListeners() {
    this.__boundOnTimeListener = this.__onTimeListener.bind(this);
    this.__jwPlayer.on('time', this.__boundOnTimeListener);
  }

  async __setup() {
    const jwPlayer = await this.__loadScript();

    const el = document.createElement('div');
    this.appendChild(el);

    this.__jwPlayer = jwPlayer(el).setup({
      ...this.config,
      ...(await this.__getMedia()),
      ...(await this.__getPlaylist()),
    });

    await new Promise((resolve) => {
      this.__jwPlayer.on('ready', resolve);
    });

    this.__registerListeners();
  }
}

customElements.define('jw-player', SavePositionMixin(CaptionsMixin(JWPlayerElement)));
