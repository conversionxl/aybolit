import '@conversionxl/cxl-lumo-styles';
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * With ability to persist star rating.
 *
 * Notice: If you don't provide `id` attribute for the component,
 * it won't store the state in the `localStorage`
 */
@customElement('cxl-star-rating')
export class CXLStarRatingElement extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      color: var(--mwc-star-rating-text-color, #c0c0c0);
      cursor: pointer;
      --mdc-icon-size: var(--mwc-star-rating-size, 24px);
    }

    :host iron-icon:hover,
    :host iron-icon:hover ~ iron-icon {
      color: var(--mwc-star-rating-text-hover-color, #ffeb3b) !important;
    }

    iron-icon {
      float: right;
    }

    iron-icon.whole {
      -webkit-clip-path: inset(0 0 0 50%);
      -moz-clip-path: inset(0 0 0 50%);
      -ms-clip-path: inset(0 0 0 50%);
      -o-clip-path: inset(0 0 0 50%);
      clip-path: inset(0 0 0 50%);
      position: relative;
      left: calc(var(--mdc-icon-size) * -1);
      margin-right: calc(var(--mdc-icon-size) * -1);
    }

    iron-icon.half {
      -webkit-clip-path: inset(0 50% 0 0);
      -moz-clip-path: inset(0 50% 0 0);
      -ms-clip-path: inset(0 50% 0 0);
      -o-clip-path: inset(0 50% 0 0);
      clip-path: inset(0 50% 0 0);
      position: relative;
    }

    iron-icon[selected],
    iron-icon[selected] ~ iron-icon {
      color: var(--mwc-star-rating-text-selected-color, #fdd835);
    }
  `;

  /**
   * The current rating value (0-5).
   */
  @property({ type: Number })
  value = 0;

  /**
   * The icon to use. Values should correspond to the configured icon font.
   * Defaults to 'star'.
   */
  @property({ type: String, reflect: true })
  icon = 'vaadin:star';

  @property({ type: Number }) id;

  _ratings = [
    { value: 5.0, class: 'whole', selected: false },
    { value: 4.5, class: 'half', selected: false },
    { value: 4.0, class: 'whole', selected: false },
    { value: 3.5, class: 'half', selected: false },
    { value: 3.0, class: 'whole', selected: false },
    { value: 2.5, class: 'half', selected: false },
    { value: 2.0, class: 'whole', selected: false },
    { value: 1.5, class: 'half', selected: false },
    { value: 1.0, class: 'whole', selected: false },
    { value: 0.5, class: 'half', selected: false },
  ];

  render() {
    return html`
      ${this._ratings.map(
        (item) =>
          html`
            <iron-icon
              class="${item.class}"
              icon=${this.icon}
              value="${item.value}"
              ?selected="${item.selected}"
              @click="${(e) => this._starClicked(e, item.value)}"
            ></iron-icon>
          `
      )}
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('value')) {
      this._valueChanged(this.value);
    }
  }

  _valueChanged(value) {
    if (value !== 0 && !value) {
      return;
    }

    const roundedValue = (Math.round(value * 2) / 2).toFixed(1);
    this._ratings.forEach((rating) => {
      const item = rating;
      if (item.value.toFixed(1) === roundedValue) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    this.requestUpdate();

    if (!this._shouldSaveStateToLocalStorage() && value > 0) {
      this.setAttribute('readonly', 'true');
      return;
    }

    this._saveState(value);
    this._updateReadonlyAndValue();
  }

  _starClicked(e, value) {
    e.preventDefault();

    this.value = value;

    this.dispatchEvent(new CustomEvent('rating-selected', { detail: { rating: value } }));
  }

  _getUniqueId() {
    return `cxl-star-rating_${this.id}`;
  }

  _saveState(value) {
    if (value && Number.parseFloat(value) > 0) {
      localStorage.setItem(this._getUniqueId(), value);
    }
  }

  _updateReadonlyAndValue() {
    const value = localStorage.getItem(this._getUniqueId());

    if (value && Number.parseFloat(value) > 0) {
      this.setAttribute('value', value);
      this.setAttribute('readonly', 'true');
    }
  }

  _shouldSaveStateToLocalStorage() {
    return this.id !== undefined && this.id !== null && String(this.id).length > 0;
  }
}
