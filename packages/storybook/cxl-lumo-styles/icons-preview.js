/**
 * @see https://github.com/vaadin/docs/blob/838707b08368ca4a225e2e12840ff980b5ecc7ea/frontend/demo/foundation/icons-preview.ts
 */
import { LitElement, html, customElement, property } from 'lit-element';
import { css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';

const DEPRECATED_ICONS = {
  buss: 'bus',
  palete: 'palette',
  funcion: 'function',
  megafone: 'megaphone',
  'trendind-down': 'trending-down',
};

const iconsPreviewStyles = css`
  cxl-icons-preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    max-height: 80vh;
    margin: 2rem 0;
    overflow: auto;
    border: 1px solid var(--lumo-divider-color-1);
    border-radius: var(--lumo-border-radius-l);
  }

  .cxl-icon-preview {
    padding-bottom: var(--lumo-space-l);
    line-height: 1;
    text-align: center;
  }

  .cxl-icon-preview.deprecated {
    text-decoration: line-through;
  }

  .cxl-icon-preview.hidden {
    display: none;
  }

  .cxl-icon-preview svg,
  .cxl-icon-preview iron-icon {
    display: inline-block !important;
    width: 48px !important;
    height: 48px !important;
    fill: currentColor;
  }

  .cxl-icon-preview-name {
    display: block;
    font-size: var(--lumo-font-size-2xs);
    color: var(--lumo-secondary-text-color);
  }

  .cxl-icon-search {
    grid-column: 1 / -1;
    max-width: 20em;
    padding: var(--lumo-space-xs) var(--lumo-space-s);
    margin: var(--lumo-space-xl) auto;
    font: inherit;
    font-size: var(--lumo-font-size-m);
    color: var(--lumo-body-text-color);
    background: var(--lumo-surface-color-1);
    border: 1px solid var(--lumo-divider-color-2);
    border-radius: var(--lumo-border-radius-m);
  }
`;

@customElement('cxl-icons-preview')
export class IconsPreview extends LitElement {
  /**
   * Iconset name.
   *
   * @type {string}
   */
  @property()
  name = 'lumo';

  @property({ type: HTMLElement })
  get searchElement() {
    return this.querySelector('.cxl-icon-search');
  }

  // Disable Shadow Root
  createRenderRoot() {
    return this;
  }

  firstUpdated(changedProperties) {
    registerGlobalStyles(iconsPreviewStyles, {
      moduleId: 'cxl-icons-preview-global-styles',
    });

    super.firstUpdated(changedProperties);
  }

  _getIcons() {
    const iconSetName = this.name;
    const iconSets = document.querySelectorAll('iron-iconset-svg');

    const iconSetFiltered = [...iconSets].filter(
      (iconSet) => iconSet.getAttribute('name') === iconSetName
    );

    if (!iconSetFiltered) {
      return null;
    }

    return iconSetFiltered[0].getIconNames();
  }

  _searchInput(e) {
    const search = e.target;
    search?.addEventListener('input', () => {
      this.querySelectorAll('.cxl-icon-preview').forEach((icon) => {
        icon.classList.toggle(
          'hidden',
          icon.className.toLowerCase().indexOf(search.value.toLowerCase()) === -1
        );
      });
    });
  }

  render() {
    const iconsetName = this.name;
    const iconNames = this._getIcons();
    const content = html`No icons found.`;

    if (!iconNames) {
      return html`${content}`;
    }

    const searchInput = html`<input
      @input="${this._searchInput}"
      class="cxl-icon-search"
      type="search"
      aria-label="Search icons"
      placeholder="Search icons…"
    />`;

    const iconsTemplate = [];

    iconNames.forEach((iconName) => {
      let iconTemplate = '';
      const name = iconName.replace(`${iconsetName}:`, '');

      let title = '';
      const isDeprecated = name in DEPRECATED_ICONS;

      if (isDeprecated) {
        title = `Since Vaadin 21, '${name}' is deprecated. Please use '${DEPRECATED_ICONS[name]}' instead.`;
      }

      iconTemplate = html`
        <div
          class="cxl-icon-preview icon-${name} ${isDeprecated ? 'deprecated' : ''}"
          title="${title}"
        >
          <iron-icon icon="${iconsetName}:${name}"></iron-icon>
          <span class="cxl-icon-preview-name">${name}</div>
        </div>`;

      iconsTemplate.push(iconTemplate);
    });

    return html` ${searchInput} ${iconsTemplate} `;
  }
}
