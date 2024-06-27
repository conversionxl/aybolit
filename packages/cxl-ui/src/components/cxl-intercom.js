import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import waitForLoad from 'react-live-chat-loader/module/utils/waitForLoad';
import cxlIntercomStyles from '../styles/cxl-intercom-css.js';

/**
 * @see https://github.com/calibreapp/react-live-chat-loader
 */
@customElement('cxl-intercom')
export class CXLIntercom extends LitElement {
  @property({ type: String, attribute: 'app-id' }) appId = '';

  @property({ type: Number, attribute: 'load-delay' }) loadDelay = 2000;

  static get styles() {
    return [cxlIntercomStyles];
  }

  constructor() {
    super();
    this.addEventListener('click', (e) => this.load());
  }

  render() {
    return html` <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32">
        <path
          d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"
        ></path>
      </svg>
    </div>`;
  }

  /**
   * @see https://github.com/calibreapp/react-live-chat-loader/blob/9af6e831169e73ae342473ef2d88baeb54660579/src/providers/intercom.ts
   */
  load() {
    const loaded = this.loadScript();

    // Continue as long as userlike hasn’t already been initialised.
    if (loaded) {
      window.Intercom('boot', { app_id: this.appId });

      waitForLoad(
        () => window.Intercom.booted,
        // Allow intercom to complete loading before removing fake widget
        () =>
          setTimeout(() => {
            this.remove();
            window.Intercom('show');
          }, this.loadDelay)
      );
    }

    return loaded;
  }

  loadScript() {
    const domain = 'https://widget.intercom.io';
    const { appId } = this;

    if (window.Intercom) {
      return false;
    }

    (function () {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', window.intercomSettings);
      } else {
        const d = document;
        const i = function i() {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        const l = function l() {
          let _x$parentNode;
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = ''.concat(domain, '/widget/').concat(appId);
          const x = d.getElementsByTagName('script')[0];
          (_x$parentNode = x.parentNode) === null ||
            _x$parentNode === void 0 ||
            _x$parentNode.insertBefore(s, x);
        };
        l();
      }
    })();

    return true;
  }
}
