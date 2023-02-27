import { html, render } from 'lit';
import style from '../../../styles/global/cxl-jw-player/cxl-jw-player-next-up-css';
export function NextUpMixin(BaseClass) {
  class Mixin extends BaseClass {
    _nextUpCTA;

    async _setup() {
      await super._setup();

      this._addStyle(style);

      this._nextUpCTA = document.createElement('div');
      this._nextUpCTA.classList.add('jw-next-up-cta');

      const container = this.querySelector('.jw-nextup-container');
      container.insertBefore(this._nextUpCTA, container.firstChild);

      this._updateNextUp();
      this._jwPlayer.on('playlistItem', this._updateNextUp.bind(this));
    }

    _updateNextUp() {
      const index = this._jwPlayer.getPlaylistIndex();
      const playlistItem = this._jwPlayer.getPlaylistItem(index + 1);

      if (playlistItem && playlistItem.coursePage) {
        render(this._getTemplate(playlistItem), this._nextUpCTA);
      }
    }

    // eslint-disable-next-line class-methods-use-this
    _getTemplate(playlistItem) {
      return html`
        <a href=${playlistItem.coursePage}>
          <vaadin-button role="link" theme="primary">Go to the course page</vaadin-button>
        </a>
      `;
    }
  }

  return Mixin;
}
