/* eslint-disable no-multi-str */
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui';
import '@vaadin/button';

export default {
  title: 'CXL UI/cxl-section',
  parameters: {
    docs: {
      description: {
        component: 'Use `<cxl-section theme="cxl-header">` to create a section header component. \
          `cxl-section` components with id="view-hero" are automatically themed as hero headers. \
          Additionally, it is necessary to add CSS code in wordpress block-editor: \
          \
          \
          `#view-hero::after { \
            background-image: url([wpv-post-featured-image size="xx-large" output="url"]); \
          }` \
        ',
      },
    }
  }
};

export const CXLSectionHeader = (args) => html`
  <style>
    @media only screen and (min-width: 1440px) {
      #view-hero .cxl-hero-titles { bottom: -10px; gap: 0; margin: 0; position: absolute; width: 50%; }
    }

    @media only screen and (min-width: 1280px) and (max-width: 1440px) {
      #view-hero .cxl-hero-titles { bottom: 0; gap: 0; margin: 0; position: absolute; width: 55%; }
    }

    @media only screen and (min-width: 782px) and (max-width: 1280px) {
      #view-hero .cxl-hero-titles { gap: 0; margin: 0; position: absolute; top: 24em; width: 50%; }
    }

    .wp-block-columns {
      align-items: normal !important;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap !important;
      margin-bottom: 1.import { column } from '@wordpress/icons' 75em;
    }

    .wp-clock-column {
      flex-grow: 1;
      min-width: 0;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    cxl-section.wide {
      --cxl-content-max-width: var(--cxl-content-max-width-wide);
    }

    .entry-content #view-hero p {
      font-style: revert;
    }

    .wp-block-spacer {
      height: 48px;
    }

    @media screen and (min-width: 1024px) {
      cxl-section#view-hero::after {
        background-image: url("https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png");
      }
    }
  </style>

  <cxl-section id="view-hero" class="${args.backgroundColor} wide">
    <div class="wp-block-columns">
      <div class="wp-block-column column-1 column-span-1 column-push-0">
        <h1>${unsafeHTML(args.title)}</h1>
        <h3>${unsafeHTML(args.subtitle)}</h3>
        <div class="wp-block-spacer"></div>
        ${args.description ? html`<p>${args.description}</p>` : null}
        <div class="wp-block-spacer"></div>
        ${args.ctaLabel
          ? html`
            <a href="${args.ctaUrl}">
              <vaadin-button
                id="cxl-onboarding"
                class="cxl-homepage-button"
                role="button"
                theme="primary x-large"
              >
                ${args.ctaLabel}
              </vaadin-button>
            </a>
            `
          : null}

      </div>
      <div
        class="column column-2 column-span-1 column-push-0 pure-u-lg-1-2 pure-hidden-xs pure-hidden-sm pure-hidden-md column-last pure-u-1"
        style="position: absolute; right: 0em; bottom: 10.5em;text-align:right; color: white"
      >
        <div class="wrap">
          <div>
            <strong style="display: block;">Ben Labay</strong>
            <small style="display: block;">Managing Director @ Speero</small>
          </div>
        </div>
      </div>
    </div>
  </cxl-section>
`;

CXLSectionHeader.args = {
  backgroundColor: '',
  title: 'Join <strong>the top 1%</strong> of digital marketing.',
  subtitle: 'We find the best practitioners in the world, and get them to teach their craft.',
  description: 'Get access to 100+ digital marketing courses with your CXL subscription.',
  image: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png',
  ctaLabel: 'Sign up now',
  ctaUrl: '#',
  showCta: true,

};

CXLSectionHeader.argTypes = {
  backgroundColor: {
    name: 'Class',
    control: 'select',
    options: [
      'red',
      'blue',
      'light blue',
      'green',
      'black',
    ],
    mapping: {
      red: 'wide-background-red',
      blue: 'wide-background-blue',
      "light blue": 'wide-background-light-blue',
      green: 'wide-background-green',
      black: 'wide-background-black'
    }
  },
};
