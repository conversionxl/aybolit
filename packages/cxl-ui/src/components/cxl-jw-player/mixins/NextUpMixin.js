import { html, render } from 'lit';
import style from '../../../styles/global/cxl-jw-player/cxl-jw-player-next-up-css';
export function NextUpMixin(BaseClass) {
  class Mixin extends BaseClass {
    __nextUpCTA;

    async __setup() {
      await super.__setup();

      this.__addStyle(style);

      this.__nextUpCTA = document.createElement('div');
      this.__nextUpCTA.classList.add('jw-next-up-cta');

      const container = this.querySelector('.jw-nextup-container');
      container.insertBefore(this.__nextUpCTA, container.firstChild);

      this.__updateNextUp();
      this.__jwPlayer.on('playlistItem', this.__updateNextUp.bind(this));
    }

    __updateNextUp() {
      const index = this.__jwPlayer.getPlaylistIndex();
      const playlistItem = this.__jwPlayer.getPlaylistItem(index + 1);

      if (playlistItem && playlistItem.coursePage) {
        render(this.__getTemplate(playlistItem), this.__nextUpCTA);
      }
    }

    // eslint-disable-next-line class-methods-use-this
    __getTemplate(playlistItem) {
      return html`
        <a href=${playlistItem.coursePage}>
          <vaadin-button role="link" theme="primary">Go to the course page</vaadin-button>
        </a>
      `;
    }
  }

  return Mixin;
}
