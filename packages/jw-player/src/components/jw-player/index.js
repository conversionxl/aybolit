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
  static get styles() {
    return [style];
  }

  render() {
    return template.bind(this)();
  }
}
