import 'headroom.js';
import cxlMarketingNavStickyStyles from '../styles/cxl-marketing-nav-sticky-css.js';

const defaultConfig = {
  stickyElement: '.site-header'
};

const tmpl = document.createElement('template');
tmpl.innerHTML = `<style id="cxl-marketing-nav-sticky">${cxlMarketingNavStickyStyles}</style>`;
document.head.appendChild(tmpl.content);

class CXLMarketingNavStickyElement {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };

    this.dropInHeader();
  }

  dropInHeader() {
    const headerElement = document.querySelector(this.config.stickyElement);

    const options = {
      tolerance: 5,
      offset: headerElement.offsetHeight * 2,
      // scroller: window,
      classes: {
        initial: 'site-header--animated',
        pinned: 'site-header--pinned',
        unpinned: 'site-header--unpinned',
        top: 'site-header--top',
        notTop: 'site-header--not-top',
        bottom: 'site-header--bottom',
        notBottom: 'site-header--not-bottom'
      },
      onPin() {},

      onTop() {}
    };

    /* global Headroom */
    /* eslint no-undef: "error" */
    const headroom = new Headroom(headerElement, options);
    headroom.init();
  }
}

export default CXLMarketingNavStickyElement;
