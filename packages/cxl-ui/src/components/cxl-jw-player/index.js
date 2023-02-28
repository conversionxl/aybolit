import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from '../../styles/global/cxl-jw-player/cxl-jw-player-css';
import shadowStyle from '../../styles/cxl-jw-player/cxl-jw-player-shadow-css';
import { template } from './index.html';
import {
  BaseMixin,
  ChapterNavigationMixin,
  NextUpMixin,
  SavePositionMixin,
  TranscriptMixin,
} from './mixins';
import { mixin } from './utility';

@customElement('cxl-jw-player')
export class CXLJWPlayerElement extends mixin(LitElement, [
  BaseMixin,
  TranscriptMixin,
  ChapterNavigationMixin,
  NextUpMixin,
  SavePositionMixin,
]) {
  config = {
    width: '100%',
    playbackRateControls: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    plugins: {
      // 'http://192.168.0.101:8080/telemetry-8.20.0.js': {},
    },
    skin: {
      name: 'cxl-institute',
    },
    stretching: 'uniform',
  };

  static get styles() {
    return [shadowStyle];
  }

  render() {
    return template.bind(this)();
  }

  async _setup() {
    await super._setup();

    this._addStyle(style);
  }
}
