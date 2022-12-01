import { html, render } from 'lit';
import { property } from 'lit/decorators.js';
import '../../../cxl-dialog/cxl-dialog';

export function FeedbackMixin(BaseClass) {
  class Mixin extends BaseClass {
    @property({ attribute: 'plugin-path', type: String }) pluginPath;

    __feedbackContent;

    __feedbackDialog;

    async __setupFeedback() {
      this.__feedbackContent = this.querySelector('cxl-jw-player-feedback');

      /* eslint-disable no-param-reassign */
      const headerRenderer = (root, dialog) =>
        render(
          html`
            <vaadin-button
              theme="tertiary"
              @click="${() => {
                dialog.opened = false;
              }}"
            >
              <vaadin-icon icon="lumo:cross"></vaadin-icon>
            </vaadin-button>
          `,
          root
        );
      /* eslint-enable no-param-reassign */

      const renderer = function (root) {
        root.appendChild(this.__feedbackContent);
        this.__feedbackContent.hidden = false;
      }.bind(this);

      render(
        html`<cxl-dialog
          contained
          .headerRenderer=${headerRenderer}
          .renderer=${renderer}
          header-title="Feedback"
        ></cxl-dialog>`,
        this.__jwPlayerContainer
      );

      this.__jwPlayer.addButton(
        `<svg class="jw-player-button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" aria-hidden="true" viewBox="0 0 1000 1000"><g><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g></svg>`,
        'Feedback',
        this.__toggleFeedback.bind(this),
        'toggle-feedback'
      );
    }

    async __setup() {
      await super.__setup();

      this.__setupFeedback();
    }

    __toggleFeedback() {
      const el = this.querySelector('.jwplayer').querySelector('cxl-dialog');
      el.opened = !el.opened;
    }
  }

  return Mixin;
}
