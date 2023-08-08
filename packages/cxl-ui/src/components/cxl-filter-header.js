/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html } from 'lit';
import { ResizeController } from '@lit-labs/observers/resize-controller.js';
import { customElement, state, query } from 'lit/decorators.js';
import './cxl-vaadin-accordion';
import '@vaadin/button'
import cxlDashboardFilterHeaderStyles from '../styles/cxl-filter-header-css.js';

const supportsScrollEndEvent = 'onscrollend' in window
const isFirefox = document.scrollingElement.scrollLeftMax  !== undefined

@customElement('cxl-filter-header')
export class CXLFilterHeaderElement extends LitElement {
  static get styles() {
    return [cxlDashboardFilterHeaderStyles];
  }

  @state() tabsWidth = 0

  @state() tabsNumber = 1

  @query('.filters') filtersContainer = null

  @query('#filters-slot') filtersSlot = null

  isOverflowing = new ResizeController(this, {
    callback: (entries) => {
      const entry = entries[0];
      this.showScrollers = entry && entry.borderBoxSize[0].inlineSize < this.tabsWidth;
      return this.showScrollers
    }
  });

  _checkTabsMaxWidth () {
    if (!this.filtersSlot) return 0
    const tabs = this.filtersSlot.assignedElements()
    const fullWidth = tabs.map(tab => tab.clientWidth).reduce((total, w) => total + w, 0);
    this.tabsWidth = fullWidth
    this.tabsNumber = tabs.length
    return this.tabsWidth
  }

  _scrollForwards () {
    // `behavior: 'smooth'` option not being used due to firefox bug
    this.filtersContainer.scrollBy({ left: (this.filtersContainer.scrollWidth - this.filtersContainer.clientWidth), behavior: isFirefox ? 'instant' : 'smooth' })
    // Workaround for browsers that don't support scrollend event to update rendering
    if (!supportsScrollEndEvent) {
      setTimeout(() => { this.requestUpdate() }, 100)
    }
  }

  _scrollBackwards () {
    // `behavior: 'smooth'` option not being used due to firefox bug
    this.filtersContainer.scrollBy({ left: -(this.filtersContainer.scrollWidth - this.filtersContainer.clientWidth), behavior: isFirefox ? 'instant' : 'smooth' })
    // Workaround for browsers that don't support scrollend event to update rendering
    if (!supportsScrollEndEvent) {
      setTimeout(() => { this.requestUpdate() }, 100)
    }
  }

  get showBackwardScroller () {
    return this.isOverflowing.value && this.filtersContainer.scrollLeft > 0
  }

  get showForwardScroller () {
    return this.isOverflowing.value && this.filtersContainer.scrollLeft < (this.filtersContainer.scrollWidth - this.filtersContainer.clientWidth)
  }

  render () {
    return html`
      <div class="container">
        <div class="tabs">
          <vaadin-button ?hidden=${!this.showBackwardScroller} class="scroll-control backwards" theme="icon tertiary" @click=${this._scrollBackwards}><vaadin-icon icon="lumo:angle-left"></vaadin-icon></vaadin-button>
          <div class="filters" @scrollend=${() => { this.requestUpdate() }}>
            <slot id="filters-slot" @slotchange=${this._checkTabsMaxWidth}></slot>
          </div>
          <vaadin-button ?hidden=${!this.showForwardScroller} class="scroll-control forwards" theme="icon tertiary" @click=${this._scrollForwards}><vaadin-icon icon="lumo:angle-right"></vaadin-icon></vaadin-button>
        </div>
        <div class="controls">
          <!-- search -->
          <slot name="search"></slot>
          <div class="flex-group">
            <!-- sort -->
            <slot name="sort"></slot>
            <vaadin-button id="show-filters">
              <vaadin-icon icon="vaadin:filter" slot="prefix"></vaadin-icon>
              <span>Filters</span>
            </vaadin-button>
          </div>
        </div>
      </div>
    `
  }
}
