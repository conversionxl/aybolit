import { customElement } from 'lit/decorators';
import '@conversionxl/cxl-lumo-styles';
// import '@vaadin/vaadin-progress-bar';
import { ProgressBarElement } from '@vaadin/vaadin-progress-bar/src/vaadin-progress-bar';

@customElement('cxl-playbook-progress-bar')
export class CXLPlaybookProgressBarElement extends ProgressBarElement {
  static get properties() {
    return {
      labelElement: {
        type: HTMLElement,
        value() {
          return this.previousElementSibling.localName === 'label'
            ? this.previousElementSibling
            : null;
        },
      },
      /**
       * @see https://github.com/vaadin/web-components/blob/v20.0.0-beta1/packages/vaadin-context-menu/src/vaadin-context-menu.js#L312-L324
       */
      listenOnClosest: {
        type: String,
        value: 'article.playbook',
      },
    };
  }

  /**
   * @see https://stackoverflow.com/a/53343385/35946
   */
  constructor() {
    super();
    this._cxlPlaybookAccordionListener = this._updateProgressBar.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();

    this._listenOnClosestElement = this.closest(this.listenOnClosest);
    this._listenOnClosestElement.addEventListener(
      'cxl-playbook-accordion-changed',
      this._cxlPlaybookAccordionListener
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._listenOnClosestElement.removeEventListener(
      'cxl-playbook-accordion-changed',
      this._cxlPlaybookAccordionListener
    );
  }

  _maybeUpdateTheme() {
    const themeAttr = this.getAttribute('theme');
    let themes = themeAttr ? themeAttr.split(' ') : [];

    if (this.value < 1) {
      themes = themes.filter((t) => t !== 'success');
    } else if (!themes.includes('success')) {
      themes.push('success');
    }

    this.setAttribute('theme', themes.join(' '));
  }

  _updateProgressBar(event) {
    const savedStateCheckboxes = event.detail;

    const totalSteps = savedStateCheckboxes.length;
    const completedSteps = savedStateCheckboxes.filter((checkbox) => checkbox === true).length;

    this.value = completedSteps / totalSteps;

    // Update label.
    if (this.labelElement) {
      this.labelElement.textContent = `Completed ${completedSteps} of ${totalSteps} total steps`;
    }

    // Maybe completed.
    this._maybeUpdateTheme();
  }
}
