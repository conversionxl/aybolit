import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-accordion';
import '@vaadin/vaadin-checkbox';
import { css, registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlPlaybookAccordionGlobalStyles from '../styles/global/cxl-playbook-accordion-css.js';
import { CXLVaadinAccordion } from './cxl-vaadin-accordion';

/**
 * Allows opening multiple panels simultaneously.
 * Saves panel state, restores on page load.
 */
@customElement('cxl-playbook-accordion')
export class CXLPlaybookAccordion extends CXLVaadinAccordion {
  constructor() {
    super();
    registerStyles('vaadin-accordion-panel', [CXLPlaybookAccordion._getAccordionPanelStyles()]);
    registerStyles('vaadin-checkbox', [CXLPlaybookAccordion._getVaadinCheckboxStyles()]);
  }

  static _getAccordionPanelStyles() {
    return css`
      [part='summary'] {
        box-shadow: 0 4px 12px rgba(36, 38, 40, 0.12);
        padding: 0;
      }
      :host(.emptyContent) [part='toggle'] {
        display: none;
      }
      [part='toggle'] {
        padding: 12px;
      }
    `;
  }

  static _getVaadinCheckboxStyles() {
    return css`
      :host([theme~='custom']) [part='checkbox'] {
        border: 2px solid !important;
        width: 18px;
        height: 18px;
      }
      :host([theme~='custom']) [part='label'] {
        display: none;
      }
    `;
  }

  /**
   * Global styles.
   */
  ready() {
    super.ready();

    // Define and register a style sheet for the <vaadin-text-field> component
    registerGlobalStyles(cxlPlaybookAccordionGlobalStyles, {
      moduleId: 'cxl-playbook-accordion-global',
    });

    this._updateCheckboxesStates();
  }

  /**
   *
   * @param {HTMLCollection} items
   * @private
   */
  _saveAccordionState(items) {
    const storageId = this.getAttribute('id');

    // Avoid null key.
    if (storageId) {
      const stateItems = [];

      items.forEach((value, key) => {
        stateItems[key] = items[key].opened;
      });

      localStorage.setItem(storageId, JSON.stringify(stateItems));

      this._updateCSSAndPanelStateToCheckboxesStates();

      this._dispatchCustomEvent(stateItems);

      this._saveCheckboxesState();
    }
  }

  _saveCheckboxesState() {
    const stateCheckboxes = [];
    const checkboxes = this.querySelectorAll('vaadin-checkbox');

    checkboxes.forEach((value, key) => {
      const checkbox = checkboxes[key];

      stateCheckboxes[key] =
        checkbox.hasAttribute('aria-checked') && checkbox.getAttribute('aria-checked') === 'true';
    });

    const checkboxesStorageId = `${this.getAttribute('id')}_checkboxes`;
    localStorage.setItem(checkboxesStorageId, JSON.stringify(stateCheckboxes));
  }

  // Restore accordion panel state.
  _updateItems(items, opened) {
    super._updateItems(items, opened);
  }

  _updateCheckboxesStates() {
    const checkboxesStorageId = `${this.getAttribute('id')}_checkboxes`;
    const stateCheckboxes = JSON.parse(localStorage.getItem(checkboxesStorageId));

    if (stateCheckboxes === null) {
      return;
    }

    const checkboxes = this.querySelectorAll('vaadin-checkbox');

    checkboxes.forEach((item, key) => {
      const checkbox = checkboxes[key];
      const isChecked = !!stateCheckboxes[key]; // autocast from null or undefined to boolean
      checkbox.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      checkbox.checked = isChecked;
    });

    this._updateCSSAndPanelStateToCheckboxesStates();
  }

  _updateCSSAndPanelStateToCheckboxesStates() {
    const checkboxes = this.querySelectorAll('vaadin-checkbox');
    const panels = this.querySelectorAll('vaadin-accordion-panel');

    checkboxes.forEach((checkbox, index) => {
      if (!panels[index])
        throw new Error(`vaadin-accordion-panel with index ${index} doesn't exist`);

      const isChecked =
        checkbox.hasAttribute('aria-checked') && checkbox.getAttribute('aria-checked') === 'true';

      const accordionPanel = panels[index];

      accordionPanel.querySelectorAll('.summary-top').forEach((el) => {
        if (isChecked) {
          el.classList.add('checked');
        } else {
          el.classList.remove('checked');
        }
      });
    });
  }

  _dispatchCustomEvent(stateItems) {
    const event = new CustomEvent('cxl-playbook-accordion-state-changed', {
      detail: {
        items: stateItems,
        bubbles: true,
        id: this.getAttribute('id'),
      },
    });

    this.dispatchEvent(event);
  }
}
