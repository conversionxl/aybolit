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
  // Keep track of device width.
  _wide = true;

  // Device width media query
  _wideMediaQuery = '(min-width: 750px)';

  /**
   * Global styles.
   */
  ready() {
    super.ready();

    registerGlobalStyles(cxlVaadinAccordionGlobalStyles, {
      moduleId: 'cxl-vaadin-accordion-global',
    });

    this._registerMediaListener();
  }

  /**
   * Registers a media query listener to keep track of device width.
   * If the user is on mobile, open all panels, and disable panel toggling.
   */
  _registerMediaListener() {
    const observer = window.matchMedia(this._wideMediaQuery);
    const matches = (mediaQueryList) => {
      // Reset the hasAppliedState flag when the media query changes.
      this.hasAppliedState = false;

      if (mediaQueryList.matches) {
        this._wide = true;

        if (this.items) {
          for (let i = 0; i < this.items.length; i++) {
            this.items[i].disabled = false;
          }

          this._updateItems(this.items, 0);
        }
      } else {
        this._wide = false;

        if (this.items) {
          for (let i = 0; i < this.items.length; i++) {
            this.items[i].opened = true;
            this.items[i].disabled = true;
          }
        }
      }
    };

    // Items aren't available on first load, so we need to listen for changes.
    this.addEventListener('items-changed', () => {
      matches(observer);
    });

    // Listen for changes to the device width.
    observer.addEventListener('change', matches);
  }

  // Keep track of accordion panels state.
  _updateOpened(e) {
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

    // Save accordion panel state if on desktop.
    if (this._wide) {
      this._saveAccordionState(this.items, e.detail.value, idx);
    }
  }

  // Restore accordion panel state.
  _updateItems(items, opened) {
    // Check for items and restore state only on desktop.
    if (!items || !this._wide) {
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
