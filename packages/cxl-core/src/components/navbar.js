import { LitElement, html } from 'lit-element';
import navbarBaseStyles from '../styles/navbar-base-css.js';

export class NavbarElement extends LitElement {
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
    return navbarBaseStyles;
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
