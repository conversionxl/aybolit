import '@conversionxl/cxl-lumo-styles';
import { TabsElement } from '@vaadin/vaadin-tabs';
import { customElement } from 'lit-element';

const observeMedia = (mediaQueryString, callback) => {
  const observer = window.matchMedia(mediaQueryString);
  const matches = (mediaQueryList) => callback(mediaQueryList.matches);
  observer.addListener(matches);
  matches(observer);
};

@customElement('cxl-tabs-slider')
export class CXLTabsSliderElement extends TabsElement {
  _updateOverflow() {
    this.centeredContainerWidthCheck();
    super._updateOverflow();
  }

  /**
   * We want [theme~="centered"] so element would does not hug viewport edge, and gap the other edge.
   *
   * Upstream vaadin-tabs[theme~="centered"] fails to correctly calculate overflow on narrow viewports,
   * user cannot see or scroll to start elements.
   *
   * We hereby apply [theme~="centered"] only when full element width fits into viewport.
   *
   * @see https://github.com/vaadin/web-components/blob/v20.0.0-beta1/packages/vaadin-tabs/src/vaadin-tabs.js#L222-L240
   * @see https://lit-and-friends.slack.com/archives/C6ULJ2F7S/p1620125717028800
   */
  centeredContainerWidthCheck() {
    const themeAttr = 'theme';
    const centeredVal = 'centered';

    let themes = this.getAttribute(themeAttr).split(' ');
    const isCentered = themes.includes(centeredVal);

    if (this._scrollerElement.scrollWidth > parseInt(getComputedStyle(this).width, 10)) {
      if (isCentered) {
        themes = themes.filter((theme) => theme !== centeredVal);
      }
    } else if (!isCentered) {
      themes.push(centeredVal);
    }

    this.setAttribute(themeAttr, themes.join(' '));
  }

  ready() {
    super.ready();

    // This is needed to fire the click event.
    this.style.cursor = 'pointer';

    observeMedia('(min-width: 700px)', (result) => {
      if (result) {
        this.manageScrollButtons(true);
      } else {
        this.manageScrollButtons(false);
      }

      const boundOnClick = this.onClick.bind(this);

      if (result) {
        ['click', 'ontouchstart'].forEach((event) => {
          document.addEventListener(event, boundOnClick);
        });
      } else {
        ['click', 'ontouchstart'].forEach((event) => {
          document.removeEventListener(event, boundOnClick);
        });
      }
    });
  }

  manageScrollButtons(value) {
    let themes = this.getAttribute('theme').split(' ');

    if (value) {
      themes = themes.filter((item) => item !== 'hide-scroll-buttons');
    } else if (!themes.includes('hide-scroll-buttons')) {
      themes.push('hide-scroll-buttons');
    }

    this.setAttribute('theme', themes.join(' '));
  }

  onClick(event) {
    if (this.contains(event.target)) {
      this.manageScrollButtons(true);
    } else {
      this.manageScrollButtons(false);
    }
  }

  static get is() {
    return 'cxl-tabs-slider';
  }
}
