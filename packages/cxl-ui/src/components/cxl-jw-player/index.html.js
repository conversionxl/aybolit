import { html, nothing } from 'lit';
import '@vaadin/icon';
import '@vaadin/text-field';

// eslint-disable-next-line func-names
export const template = function () {
  return html`
    <div class="grid height-100" id="container">
      <slot></slot>
      ${this.captions
        ? html`
            <div class="center gap search padding">
              <vaadin-text-field
                @input=${this.__debouncedSearch}
                clear-button-visible
                id="search"
                placeholder="Type and press enter to search"
                theme="small"
              >
                <vaadin-icon slot="prefix" icon="lumo:search"></vaadin-icon>
              </vaadin-text-field>
              ${this.__isSearchMinimumLength
                ? html`<span>(${this.__matches} matches)</span>`
                : nothing}
              <vaadin-checkbox
                @change=${this.__toggleShouldScroll}
                ?checked=${this.__shouldScroll}
                label="Scroll"
              ></vaadin-checkbox>
            </div>
            <div class="captions padding scroll">
              ${this.__tracks.map(
                (track, index) =>
                  html`${track.isChapter
                    ? html`<h2 @click=${this.__onCaptionClick} data-index=${index}>
                        ${track.data.text}
                      </h2>`
                    : html`
                        <span
                          @click=${this.__onCaptionClick}
                          ?active=${this.__currentTrack === index}
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
  `;
};
