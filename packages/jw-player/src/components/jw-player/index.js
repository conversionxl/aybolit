import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { mixin } from '../../utility';
import { style } from './index.css';
import { template } from './index.html';
import { BaseMixin, CaptionMixin, SavePositionMixin } from '../../mixins';

@customElement('jw-player')
export class JWPlayerElement extends mixin(LitElement, [
  BaseMixin,
  CaptionMixin,
  SavePositionMixin,
]) {
  config = {
    width: '100%',
    height: '100%',
    playbackRateControls: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    plugins: {
      'http://192.168.0.101:8080/telemetry-8.20.0.js': {},
      'http://192.168.0.101:8080/cxlJWChapters.js': {},
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
