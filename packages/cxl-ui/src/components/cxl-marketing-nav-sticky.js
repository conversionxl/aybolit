// import Headroom from 'headroom.js';

import cxlMarketingNavStickyStyles from '../styles/cxl-marketing-nav-sticky-css.js';

const HRScript = document.createElement('script');
HRScript.src = '//unpkg.com/headroom.js';
document.head.appendChild(HRScript);

const defaultConfig = {
  stickyElement: '.site-header'
};

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["dropInHeaderAssets"] }] */
class CXLMarketingNavStickyElement {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };

    document.addEventListener('DOMContentLoaded', () => {
      this.dropInHeaderAssets();
    });

    window.onload = () => {
      this.dropInHeader();
    };
  }

  dropInHeaderAssets() {
    const tmpl = document.createElement('template');
    tmpl.innerHTML = `<style id="cxl-marketing-nav-sticky">${cxlMarketingNavStickyStyles}</style>`;
    document.head.appendChild(tmpl.content);
  }

  dropInHeader() {
    let headerHeight = 0;
    headerHeight = document.querySelector(this.config.stickyElement).offsetHeight;

    headerHeight *= 2;

    const options = {
      tolerance: 5,
      offset: headerHeight,
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

    const headerElement = document.querySelector(this.config.stickyElement);

    /* global Headroom */
    /* eslint no-undef: "error" */
    const headroom = new Headroom(headerElement, options);
    headroom.init();
  }
}

const CXLMarketingNavStickyElementObj = new CXLMarketingNavStickyElement();

export { CXLMarketingNavStickyElementObj };
