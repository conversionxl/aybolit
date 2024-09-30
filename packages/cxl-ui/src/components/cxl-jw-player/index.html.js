import { html, nothing } from 'lit';
import '@vaadin/icon';
import '@vaadin/text-field';

// eslint-disable-next-line func-names
export const template = function () {
  return html`
    ${this.ready
      ? html`
          <div class="grid height-100" id="container">
            <slot></slot>
            ${this.captions
              ? html`
                  <div class="center search padding">
                    <vaadin-text-field
                      @input=${this._debouncedSearch}
                      clear-button-visible
                      id="search"
                      placeholder="Type and press enter to search"
                      theme="small"
                    >
                      <vaadin-icon slot="prefix" icon="lumo:search"></vaadin-icon>
                    </vaadin-text-field>
                    <div id="searchResultCount">
                      ${this._isSearchMinimumLength
                        ? html`<span>(${this._matches} matches)</span>`
                        : nothing}
                    </div>
                    <vaadin-checkbox
                      @change=${this._toggleShouldScroll}
                      ?checked=${this._shouldScroll}
                      label="Scroll"
                    ></vaadin-checkbox>
                  </div>
                  <div class="captions padding scroll">
                    ${this._tracks.map(
                      (track, index) =>
                        html`${track.isChapter
                          ? html`<h2 @click=${this._onCaptionClick} data-index=${index}>
                              ${track.data.text}
                            </h2>`
                          : html`
                              <span
                                @click=${this._onCaptionClick}
                                ?active=${this._currentTrack === index}
                                data-index=${index}
                              >
                                ${track.data.text}
                              </span>
                            `}`
                    )}
                  </div>
                `
              : nothing}
          </div>
        `
      : nothing}
    ${this.error ? html`<div class="center error">There was an error loading the video.</div>` : nothing}
  `;
};
