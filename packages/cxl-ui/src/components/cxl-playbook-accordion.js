import { customElement } from 'lit-element';
import '@vaadin/vaadin-checkbox';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlPlaybookAccordionGlobalStyles from '../styles/global/cxl-playbook-accordion-css.js';
import { CXLVaadinAccordion } from './cxl-vaadin-accordion';

/**
 * Integrates checkboxes + their state tracking in accordion panels.
 */
@customElement('cxl-playbook-accordion')
export class CXLPlaybookAccordion extends CXLVaadinAccordion {
  /**
   * @return {NodeListOf<Element>}
   */
  get panelSummarySlotCheckboxes() {
    return this.items.map((el) => el.querySelector('[slot="summary"] vaadin-checkbox'));
  }

  /**
   * @return {string}
   */
  get checkboxesStorageId() {
    const attr = this.getAttribute('id') || 'default_id';
    return `${attr}_checkboxes`;
  }

  ready() {
    super.ready();

    registerGlobalStyles(cxlPlaybookAccordionGlobalStyles, {
      moduleId: 'cxl-playbook-accordion-global',
    });

    this.addEventListener('items-changed', this._itemsChanged);
  }

  /**
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

      this._saveCheckboxesState();
    }

    // Allow CSS effects also without storage.
    this._updateCSSAndPanelStateToCheckboxesStates();
  }

  _saveCheckboxesState() {
    const stateCheckboxes = [];
    const checkboxes = this.panelSummarySlotCheckboxes;

    checkboxes.forEach((value, key) => {
      const checkbox = checkboxes[key];

      stateCheckboxes[key] =
        checkbox.hasAttribute('aria-checked') && checkbox.getAttribute('aria-checked') === 'true';
    });

    localStorage.setItem(this.checkboxesStorageId, JSON.stringify(stateCheckboxes));
  }

  _updateCheckboxesStates() {
    const stateCheckboxes = JSON.parse(localStorage.getItem(this.checkboxesStorageId));

    if (stateCheckboxes === null) {
      return;
    }

    const checkboxes = this.panelSummarySlotCheckboxes;

    checkboxes.forEach((item, key) => {
      const checkbox = checkboxes[key];
      const isChecked = !!stateCheckboxes[key]; // autocast from null or undefined to boolean

      checkbox.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      checkbox.checked = isChecked;
    });

    this._updateCSSAndPanelStateToCheckboxesStates();
  }

  _updateCSSAndPanelStateToCheckboxesStates() {
    this.panelSummarySlotCheckboxes.forEach((checkbox, index) => {
      if (!this.items[index])
        throw new Error(`vaadin-accordion-panel with index ${index} doesn't exist.`);

      const isChecked =
        checkbox.hasAttribute('aria-checked') && checkbox.getAttribute('aria-checked') === 'true';

      const entryHeader = this.items[index].querySelector('.entry-header');

      if (isChecked) {
        entryHeader.classList.add('checked');
      } else {
        entryHeader.classList.remove('checked');
      }
    });
  }

  /**
   * @private
   * @see cxl-accordion-card
   */
  _setupCheckboxClicked() {
    this.panelSummarySlotCheckboxes.forEach((el) => {
      el.addEventListener('click', (e) => {
        this._saveAccordionState(this.items);

        // Stop panel open on checkbox click.
        e.stopPropagation();
      });
    });
  }

  _itemsChanged() {
    this._updateCheckboxesStates();
    this._setupCheckboxClicked();
  }
}
