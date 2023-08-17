import { html, render } from 'lit';
import { property } from 'lit/decorators.js';
import style from '../../../styles/global/cxl-jw-player/cxl-jw-player-nextup-css';
export function NextUpMixin(BaseClass) {
  class Mixin extends BaseClass {
    _nextupCTA;
    _nextupCTAMobile;

    @property({ attribute: 'nextupoffset', type: String }) nextupoffset = '-100%`';

    async _beforeSetup() {
      await super._beforeSetup();

      this.config.nextupoffset = this.nextupoffset;
    }

    async _setup() {
      await super._setup();

      this._addStyle(style);

      this._nextupCTA = document.createElement('div');
      this._nextupCTA.classList.add('jw-nextup-cta');

      this._nextupCTAMobile = document.createElement('div');
      this._nextupCTAMobile.classList.add('jw-nextup-cta-mobile');

      const container = this.querySelector('.jw-nextup-container');
      container.insertBefore(this._nextupCTA, container.firstChild);
      container.insertBefore(this._nextupCTAMobile, container.firstChild);

      this._updateNextUp();
      this._jwPlayer.on('playlistItem', this._updateNextUp.bind(this));
    }

    _updateNextUp() {
      const playlistItem = this._jwPlayer.getPlaylistItem();

      if (playlistItem && playlistItem.coursePage) {
        render(this._getTemplate(playlistItem), this._nextupCTA);
        render(this._getMobileTemplate(playlistItem), this._nextupCTAMobile);
      }
    }

    // eslint-disable-next-line class-methods-use-this
    _getMobileTemplate(playlistItem) {
      return html`
        <a href=${playlistItem.coursePage}>
          <vaadin-button role="link" theme="primary small">Go to course</vaadin-button>
        </a>
      `;
    }

    // eslint-disable-next-line class-methods-use-this
    _getTemplate(playlistItem) {
      return html`
        <a href=${playlistItem.coursePage}>
          <vaadin-button role="link" theme="primary">Go to course</vaadin-button>
        </a>
      `;
    }
  }

  return Mixin;
}
