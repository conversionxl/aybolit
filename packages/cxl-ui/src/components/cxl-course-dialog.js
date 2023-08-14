/* eslint-disable import/no-extraneous-dependencies */
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import '@vaadin/button';
import '@vaadin/dialog';
import './cxl-time.js';
import './jw-player/index.js';
import { dialogFooterRenderer, dialogRenderer } from '@vaadin/dialog/lit.js';
import cxlCourseDialogGlobalStyles from '../styles/global/cxl-course-dialog-css.js';

@customElement('cxl-course-dialog')
export class CXLCourseDialogElement extends LitElement {
  @property({ type: String }) title = '';

  @property({ type: Object }) course = '';

  @state() dialogOpened = false;

  open() {
    this.dialogOpened = true;
  }

  close() {
    this.dialogOpened = false;
  }

  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);

    // Global styles.
    registerGlobalStyles(cxlCourseDialogGlobalStyles, {
      moduleId: 'cxl-course-dialog',
    });
  }

  renderTags = (tags) => tags.map((tag) => html`<span> | </span><span class="tag" title="${tag}">${tag}</span>`);

  renderContentTags = (tags) => tags.map((tag, i) => html`${i > 0 ? html`<span> | </span>` : ''}<span class="content-tag" title="${tag}">${tag}</span>`);

  renderContent = () => html`
    <div class="header">
      <div class="info">
        <div class="tags">
          <span class="tag">${this.course.theme}</span>${this.course.tags ? this.renderTags(this.course.tags): ''}
          ${this.course.new ? html`<span> | </span><span class="tag new">NEW</span>` : ''}
        </div>
        <vaadin-icon @click="${this.close}" class="icon-close" icon="lumo:cross"></vaadin-icon>
      </div>
      <div class="info">
        <div>
          <div class="name">${this.course.name}</div>
          <div class="attributes">
            <cxl-time
              time=${this.course.time}
              ?show-icon=${!!(this.course.theme.toLowerCase() === 'course')}
            ></cxl-time>
            <div class="instructor">By: ${this.course.instructor}</div>
          </div>
        </div>
        <img class="instructor-image" src=${this.course.avatar} alt="${this.course.instructor}" />
      </div>
    </div>
    <section>
      ${this.video ? html`
        <jw-player
          ?captions=${this.video.captions}
          media-id=${this.video.mediaId}
          minimum-search-length=${this.video.minimumSearchLength}
          player-id=${this.video.playerId}
          playlist-id=${this.video.playlistId}
          plugin-path="${this.video.pluginPath}"
        ></jw-player>` : ''
      }
      <div class="content">
        <p>${this.course.description}</p>
        <div class="content-tags">
          ${this.course.contentTags ? this.renderContentTags(this.course.contentTags): ''}
        </div>
        <p>${this.course.more}</p>
      </div>
    </section>
  `;

  render() {
    return html`
      <vaadin-button theme="secondary" @click="${this.open}">Open</vaadin-button>
      <vaadin-dialog
        theme="cxl-course-dialog"
        .opened="${this.dialogOpened}"
        @opened-changed="${(event) => {
          this.dialogOpened = event.detail.value;
        }}"
        ${dialogRenderer(this.renderContent)}
        ${dialogFooterRenderer(
          () => html`
            <vaadin-button theme="secondary" @click="${this.close}">Close</vaadin-button>
            <vaadin-button theme="primary" @click="${this.close}">Add to training<vaadin-icon class="icon-plus" icon="lumo:plus"></vaadin-icon></vaadin-button>
          `,
          []
        )}
      >
      </vaadin-dialog>
    `;
  }
}
