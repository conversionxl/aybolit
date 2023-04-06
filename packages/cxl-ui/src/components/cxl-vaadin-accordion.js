import { customElement } from 'lit/decorators.js';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/accordion';
import { Accordion } from '@vaadin/accordion/src/vaadin-accordion';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlVaadinAccordionGlobalStyles from '../styles/global/cxl-vaadin-accordion-css.js';

/**
 * Allows opening multiple panels simultaneously.
 * Saves panel state, restores on page load.
 */
@customElement('cxl-vaadin-accordion')
export class CXLVaadinAccordionElement extends Accordion {
  static get properties() {
    return {
      ...super.properties,
      simple: { observer: '_simpleChanged', type: Boolean },
    };
  }

  /**
   * Global styles.
   */
  ready() {
    super.ready();

    registerGlobalStyles(cxlVaadinAccordionGlobalStyles, {
      moduleId: 'cxl-vaadin-accordion-global',
    });
  }

  // Observe the the `simple` attribute and close or restore accordion panels.
  _simpleChanged(newValue) {
    if (newValue) {
      this.opened = null;
    } else {
      this.hasAppliedState = false;
      this._updateItems(this.items, this.opened);
    }
  }

  // Keep track of accordion panels state.
  _updateOpened(e) {
    if (this.simple) return;

    const target = this._filterItems(e.composedPath())[0];
    const idx = this.items.indexOf(target);

    if (e.detail.value) {
      if (target.disabled || idx === -1) {
        return;
      }

      this.opened = idx;
    } else if (!this.items.some((item) => item.opened)) {
      this.opened = null;
    }

    this._saveAccordionState(this.items, e.detail.value, idx);
  }

  // Restore accordion panel state.
  _updateItems(items, opened) {
    if (!items) {
      return;
    } else if (this.simple) {
      super._updateItems(items, opened);
      return;
    }

    if (!this.hasAppliedState) {
      const storageId = this.getAttribute('id');

      // Avoid null key.
      if (storageId) {
        const stateItems = JSON.parse(localStorage.getItem(storageId));

        if (stateItems) {
          items.forEach((item, key) => {
            // eslint-disable-next-line no-param-reassign
            item.opened = stateItems[key];
          });

          this.hasAppliedState = true;

          /**
           * If no state, allow initial first panel open.
           *
           * @see https://github.com/vaadin/vaadin-accordion/blob/v1.0.1/src/vaadin-accordion.html#L89
           * @todo maybe unhook from storageId dependency? Some stories may not need `id` attrs.
           */
        } else if (opened === 0) {
          super._updateItems(items, opened);
        }
      }
    }
  }

  // Save accordion panels state in LocalStorage.
  _saveAccordionState(items) {
    const storageId = this.getAttribute('id');

    // Avoid null key.
    if (storageId) {
      const stateItems = [];

      items.forEach((value, key) => {
        stateItems[key] = items[key].opened;
      });

      localStorage.setItem(storageId, JSON.stringify(stateItems));
    }
  }
}
