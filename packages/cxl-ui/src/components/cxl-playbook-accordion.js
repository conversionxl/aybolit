import { customElement } from 'lit-element';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/vaadin-accordion';
import '@vaadin/vaadin-checkbox';
import { registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import cxlPlaybookAccordionGlobalStyles from '../styles/global/cxl-playbook-accordion-css.js';
import { CXLVaadinAccordion } from './cxl-vaadin-accordion';
import vaadinAccordionPanelStyles from '../styles/cxl-playbook-accordion/vaadin-accordion-panel-css.js';
import vaadinCheckboxStyles from '../styles/cxl-playbook-accordion/vaadin-checkbox-css.js';

/**
 * Allows opening multiple panels simultaneously.
 * Saves panel state, restores on page load.
 */
@customElement('cxl-playbook-accordion')
export class CXLPlaybookAccordion extends CXLVaadinAccordion {
  /**
   *
   * @return {NodeListOf<Element>}
   */
  get accordionPanels() {
    return this.querySelectorAll('vaadin-accordion-panel');
  }

  /**
   *
   * @return {NodeListOf<Element>}
   */
  get panelSummarySlotCheckboxes() {
    return Array.from(this.accordionPanels).map((el) =>
      el.querySelector('[slot="summary"] vaadin-checkbox')
    );
  }

  /**
   *
   * @return {string}
   */
  get checkboxesStorageId() {
    const attr = this.getAttribute('id') || 'default_id';
    return `${attr}_checkboxes`;
  }

  constructor() {
    super();
    registerStyles('vaadin-accordion-panel', [vaadinAccordionPanelStyles]);
    registerStyles('vaadin-checkbox', [vaadinCheckboxStyles]);
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
    const panels = this.accordionPanels;

    this.panelSummarySlotCheckboxes.forEach((checkbox, index) => {
      if (!panels[index])
        throw new Error(`vaadin-accordion-panel with index ${index} doesn't exist`);

      const isChecked =
        checkbox.hasAttribute('aria-checked') && checkbox.getAttribute('aria-checked') === 'true';

      const accordionPanel = panels[index];
      const summaryTop = accordionPanel.querySelector('.summary-top');

      if (isChecked) {
        summaryTop.classList.add('checked');
      } else {
        summaryTop.classList.remove('checked');
      }
    });
  }

  _dispatchCustomEvent(stateItems) {
    const event = new CustomEvent('cxl-playbook-accordion-state-changed', {
      detail: {
        items: stateItems,
        bubbles: true,
        id: this.getAttribute('id') || 'default_id',
      },
    });

    this.dispatchEvent(event);
  }
}
