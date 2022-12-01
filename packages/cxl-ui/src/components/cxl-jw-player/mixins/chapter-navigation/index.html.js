import { html } from 'lit';
import '@vaadin/button';
import '@vaadin/icon';

// eslint-disable-next-line func-names
export const chapterNavigationTemplate = function (chapters) {
  return html`
    <div class="close-container">
      <span class="title">Chapters</span>
      <vaadin-button
        @click=${this.__toggleChapterNavigation.bind(this)}
        class="close"
        theme="icon small primary"
        aria-label="Close"
      >
        <vaadin-icon icon="lumo:cross"></vaadin-icon>
      </vaadin-button>
    </div>
    <ul class="chapter-navigation-list">
      ${chapters.map(
        (chapter, index) =>
          html`
            <li data-index=${index} @click=${this.__chapterSeek.bind(this)}>
              <a>${chapter.data.text}</a>
            </li>
          `
      )}
    </ul>
  `;
};
