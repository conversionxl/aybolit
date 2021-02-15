import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';
import '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';
import '@cwmr/iron-star-rating';
import '@polymer/paper-tooltip/paper-tooltip';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import moment from 'moment';
import playbookViewerCSS from '@conversionxl/cxl-ui/src/styles/playbook-viewer-css.js';
import { registerGlobalStyles } from '@conversionxl/cxl-lumo-styles/src/utils';
import jsonData from './cxl-playbook.data.json';
import DataAdapter from './DataAdapter';

/**
 * Partials/Modules that render specific sections of the Storybook page demo
 */
import RenderAvatarPersonInfo from './render-partials/avatarPersonInfo';
// import RenderAvatarPersonBio from './render-partials/avatarPersonBio'; // greg: disabled as per request
import RenderRelatedBlogs from './sections/sidebar/relatedBlogs';
import RenderRelatedLessons from './sections/sidebar/relatedLessons';
import RenderTools from './sections/sidebar/tools';
import RenderMainTitle from './sections/main/mainTitle';
import RenderBreadcrumbs from './sections/main/breadcrumbs';
import RenderUseCase from './sections/main/useCase';
import RenderRatingWithTooltip from './render-partials/ratingWithTooltip';
import RenderPeerReviewedText from './render-partials/peerReviewedText';
// import RenderSyncWith from './render-partials/syncWith'; // greg: disabled as per request
// import RenderSidebarActions from './sections/sidebar/sidebarActions'; // greg: disabled as per request

export default {
  decorators: [withKnobs],
  title: 'CXL Playbook Viewer',
};

export const CxlPlaybookViewerLayout = () => {
  const hasPanelsScroll = boolean('Has panels scroll?', true);
  const hasWidgetBackground = boolean('Has widget background?', false);

  const dataAdapter = new DataAdapter(jsonData.data);
  const authorObj = dataAdapter.getAuthor();
  const userLoggedIn = dataAdapter.getUserId() > 0; // greg: became unused because the component needing it was disabled, to be returned
  const userHasVoted = false;

  registerGlobalStyles(playbookViewerCSS, {
    moduleId: 'cxl-playbook-viewer-layout-global',
  });

  if (userHasVoted) {
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelector('iron-star-rating').setAttribute('readonly', 'readonly');
    });
  }

  return html`
    <cxl-app-layout
      id="container"
      layout="2c-l"
      scroll="${hasPanelsScroll ? 'panels' : 'document'}"
    >
      <cxl-marketing-nav slot="header">
        <vaadin-tabs
          id="menu-primary-items"
          class="menu-items"
          orientation="vertical"
          selected="-1"
          theme="cxl-marketing-nav"
        >
          <vaadin-tab class="menu-item menu-item-logo menu-item-wide" theme="cxl-marketing-nav">
            <a href="https://conversionxl.com">
              <iron-icon icon="cxl:logo" style="width: var(--lumo-icon-size-xl, 48px);"></iron-icon>
            </a>
          </vaadin-tab>
          <vaadin-tab
            theme="cxl-marketing-nav"
            id="menu-item-1820277"
            class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-1820277 menu-item-depth-0"
            aria-selected="false"
            role="tab"
            orientation="horizontal"
            tabindex="0"
          >
            <a>Search <iron-icon icon="lumo:search"></iron-icon></a>
          </vaadin-tab>
        </vaadin-tabs>
      </cxl-marketing-nav>

      <!-- Breadcrumbs -->
      ${RenderBreadcrumbs(dataAdapter.getBreadcrumbsData())}

      <!-- Playbook Title -->
      ${RenderMainTitle(dataAdapter.getPlaybookTitle())}

      <!-- Author Info Top -->
      <div class="main-author-info-with-rating">
        <div class="main-author-info flex-column">
          ${RenderAvatarPersonInfo(authorObj)}
          <!-- greg: disable bio rendering as per request -->
          <!-- {RenderAvatarPersonBio(authorObj.bio)} -->
        </div>
        <div class="main-rating flex-column">
          <!-- Peer Reviewed Text: mobile -->
          <div class="adeft-peer-reviewed-mobile">
            ${RenderPeerReviewedText(dataAdapter.getExpertsNames())}
          </div>
        </div>
      </div>

      <!-- Peer Reviewed - text list-->
      <div class="adeft-peer-reviewed-desktop">
        ${RenderPeerReviewedText(dataAdapter.getExpertsNames())}
      </div>

      <!-- Use Case -->
      <div class="main-use-case">${RenderUseCase(dataAdapter.getUseCase())}</div>

      <section
        class="widget ${hasWidgetBackground ? 'has-background' : ''} only-desktop"
        slot="sidebar"
      >
        <div class="inner-sidebar-wrapper">
          <div class="sidebar-rating">
            <!-- Rating with tooltips -->
            ${RenderRatingWithTooltip('main-rating-with-tooltip', userLoggedIn)}
          </div>

          <div class="sidebar-published">
            <div>
              Last updated:
              <strong>${moment(dataAdapter.getPlaybookTimestamp()).format('DD. MMMM YYYY')}</strong>
            </div>
          </div>
          <!-- sidebar-published -->

          <!-- Sidebar Actions -->
          <!-- greg: disabled as per request -->
          <!-- {RenderSidebarActions(userLoggedIn)} -->

          <!-- greg: disabled as per request -->
          <!--Begin: Author Info SideBar-->
          <!-- <div class="author-info-sb">
            <div class="about">
              <span>About the author:</span>
            </div>
            // RenderAvatarPersonInfo(authorObj)} RenderAvatarPersonBio(authorObj.bio)
          </div> -->
          <!--End: Author Info SideBar-->

          <!-- greg: disabled as per request -->
          <!--Begin: Validated By SideBar-->
          <!-- <div class="validated-by-sb">
            <div class="about">
              <span>Peer reviewed by:</span>
            </div>
            // dataAdapter.getExperts().map(reviewer => RenderAvatarPersonInfo(reviewer))
          </div> -->
          <!--End: Validated By SideBar-->

          <!-- Related Lessons & Courses -->
          ${RenderRelatedLessons(dataAdapter.getLessons())}

          <!-- Related Blogs -->
          ${RenderRelatedBlogs(dataAdapter.getRelatedBlogs())}

          <!-- Tools -->
          ${RenderTools(dataAdapter.getTools())}

          <!-- Sync With -->
          <!-- GREG: disabled as per request -->
          <!-- {RenderSyncWith()} -->
        </div>
        <!--inner-sidebar-wrapper-->
      </section>
      <!--slot sidebar-->

      <div id="container">
        <cxl-adeft-accordion
          id="cxl-vaadin-accordion-26107"
          theme="reverse"
          class="cxl-adeft-accordion-class"
        >
          ${dataAdapter.getAccordionData().items.map(
            (el) => html`
              <vaadin-accordion-panel id="step_${el.idx}" theme="reverse">
                <div slot="summary">
                  <div class="left">
                    <vaadin-checkbox value="Option" theme="custom"></vaadin-checkbox>
                  </div>
                  <div class="right">
                    <div class="summary-top">
                      <cxl-inline-comment-context-menu id="inline_comment_title_${el.idx}">
                        ${unsafeHTML(el.title)}
                      </cxl-inline-comment-context-menu>
                    </div>
                  </div>
                </div>
                <vaadin-vertical-layout>
                  <div class="item-content">
                    <cxl-inline-comment-context-menu id="inline_comment_content_${el.idx}">
                      ${unsafeHTML(el.content)}
                    </cxl-inline-comment-context-menu>
                  </div>
                </vaadin-vertical-layout>
              </vaadin-accordion-panel>
            `
          )}
        </cxl-adeft-accordion>
      </div>
      <!-- container -->

      <footer slot="footer">
        <div class="links">
          <div class="footer-el logo">
            <div>
              <iron-icon icon="cxl:adeft-logo"></iron-icon>
            </div>
          </div>
          <div class="footer-el year">&copy; 2020 Adeft</div>
          <a href="#" class="footer-el contact">Contact us</a>
        </div>
        <!-- links -->
      </footer>
    </cxl-app-layout>
  `;
};

CxlPlaybookViewerLayout.story = {
  name: 'cxl-playbook-viewer',
};
