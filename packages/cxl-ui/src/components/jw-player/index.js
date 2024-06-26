import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseMixin, CaptionMixin, ChapterMixin, SavePositionMixin } from './mixins';
import style from '../../styles/jw-player/jw-player-css';
import { mixin } from './utility';
import { template } from './index.html';

@customElement('jw-player')
export class JWPlayerElement extends mixin(LitElement, [
  BaseMixin,
  CaptionMixin,
  ChapterMixin,
  SavePositionMixin,
]) {
  config = {
    width: '100%',
    height: '100%',
    playbackRateControls: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    plugins: {
      // 'http://192.168.0.101:8080/telemetry-8.20.0.js': {},
    },
    skin: {
      name: 'cxl-institute',
    },
  };

  static get styles() {
    return [style];
  }

  render() {
    return template.bind(this)();
  }
}
