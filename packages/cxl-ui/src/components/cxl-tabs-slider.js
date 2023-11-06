/* eslint-disable import/no-extraneous-dependencies */
import '@conversionxl/cxl-lumo-styles';
import { Tabs } from '@vaadin/tabs';
import { customElement } from 'lit/decorators.js';

@customElement('cxl-tabs-slider')
export class CXLTabsSliderElement extends Tabs {
  /**
   * @return {number}
   * @protected
   */
  get _scrollOffset() {
    const theme = this.getAttribute('theme').split(' ');

    if (theme.includes('cxl-category-accordion') || theme.includes('cxl-slider-dashboard-header')) {
      return 200;
    }

    return super._scrollOffset;
  }

  _onResize() {
    super._onResize();
    // Only for `featured-course-slider`: induce scrolling to snap to next
    // one in case resizing lands between two cards
    if (this.getAttribute('theme').split(' ').includes('cxl-featured-course-slider')) {
      requestAnimationFrame(() => {
        this._scroll(1);
      });
    }
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

  /** Redefining Vaadin-Tabs method to fix bug in scroll position end detection */
  _updateOverflow() {
    this.centeredContainerWidthCheck();

    const scrollPosition = this._vertical
      ? this._scrollerElement.scrollTop
      : this.__getNormalizedScrollLeft(this._scrollerElement);
    const scrollSize = this._vertical
      ? this._scrollerElement.scrollHeight
      : this._scrollerElement.scrollWidth;
    const offset = this._vertical
      ? this._scrollerElement.offsetHeight
      : this._scrollerElement.offsetWidth;

    // Note that we are not comparing floored scrollPosition to be greater than zero here, which would make a natural
    // sense, but to be greater than one intentionally. There is a known bug in Chromium browsers on Linux/Mac
    // (https://bugs.chromium.org/p/chromium/issues/detail?id=1123301), which returns invalid value of scrollLeft when
    // text direction is RTL. The value is off by one pixel in that case. Comparing scrollPosition to be greater than
    // one on the following line is a workaround for that bug. Comparing scrollPosition to be greater than one means,
    // that the left overflow and left arrow will be displayed "one pixel" later than normal. In other words, if the tab
    // scroller element is scrolled just by 1px, the overflow is not yet showing.
    let overflow = Math.floor(scrollPosition) > 1 ? 'start' : '';

    if (Math.ceil(scrollPosition) + offset < Math.ceil(scrollSize - this._scrollOffset / 10)) {
      overflow += ' end';
    }

    if (this.__direction === 1) {
      overflow = overflow.replace(/start|end/gi, (matched) =>
        matched === 'start' ? 'end' : 'start'
      );
    }

    if (overflow) {
      this.setAttribute('overflow', overflow.trim());
    } else {
      this.removeAttribute('overflow');
    }
  }

  static get is() {
    return 'cxl-tabs-slider';
  }
}
