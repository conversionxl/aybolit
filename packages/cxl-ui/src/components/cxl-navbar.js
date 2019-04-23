import { LitElement, html } from 'lit-element';
import cxlThemeStyles from '../styles/cxl-theme-css.js';
import cxlNavbarStyles from '../styles/cxl-navbar-css.js';

class CXLNavbarElement extends LitElement {
  static get properties() {
    return {
      navType: {
        type: String
      },
      fixed: {
        type: Boolean,
        value: false,
        reflect: true
      }
    };
  }

  static get styles() {
    return [cxlThemeStyles, cxlNavbarStyles];
  }

  render() {
    return html`
      <nav part="${this.navType}" class="${this.getClass(this.fixed)}">
        <div class="wrap flex">
          <ul part="nav-buttons">
            <slot></slot>
          </ul>
        </div>
      </nav>
    `;
  }

  scroll() {
    if (!this.isScrolledIntoView(this)) {
      this.setAttribute('fixed', '');
    } else {
      this.removeAttribute('fixed');
    }
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const isVisible = elemTop >= 0;

    return isVisible;
  }

  getClass(fixed) {
    const fixedClass = fixed ? 'fixed ' : '';

    return fixedClass;
  }
}

customElements.define('cxl-navbar', CXLNavbarElement);
