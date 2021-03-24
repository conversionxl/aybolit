import { LitElement, html, customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import cxlPlaybookBreadcrumbsStyles from '../styles/global/cxl-playbook-breadcrumbs-css.js';

@customElement('cxl-playbook-breadcrumbs')
export class CXLPlaybookBreadcrumbs extends LitElement {
  render() {
    return html`
      <ul>
        ${ this.breadcrumbs.map( (breadcrumb) => html`
          <li><a href="${breadcrumb.url}">${breadcrumb.title}</a></li>
        `)}
      </ul>
      `
  }

  static get properties() {
    return {
      breadcrumbs: { type: Array }
    }
  }

  static get styles() {
    return [cxlPlaybookBreadcrumbsStyles];
  }
}
