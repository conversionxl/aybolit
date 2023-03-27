import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import '@vaadin/button';
import '@vaadin/icon';
import '@vaadin/horizontal-layout';

const meta = {
  component: 'cxl-section',
  title: 'CXL UI/cxl-section-hp-hero',
};

export default meta;

export const CXLSectionHPHero = {
  args: {
    backgroundColor: 'var(--lumo-shade)',
    hasWave: false,
  },
  name: 'cxl-section',
  render: ({ backgroundColor, hasWave, content }) => html`
    <cxl-section
      class="alignwide has-background ${hasWave ? 'has-wave' : ''}"
      style="${backgroundColor ? `background-color: ${backgroundColor}` : ''}"
    >
      <div class="is-layout-flex wp-container-3 wp-block-columns">
        <div class="is-layout-flow wp-block-column">
          <h1 class="entry-title has-white-color has-text-color" id="h-top-1-marketersteach-you-what-they-know"><strong>Top 1% marketers</strong> teach you what they know.</h1>
          <h3 class="has-white-color has-text-color" id="h-hand-picked-instructors-peer-vetted-forexpertise-and-success-record">Hand picked instructors peer vetted for expertise and success record.</h3>
          <p class="has-white-color has-text-color">Expert online marketing courses on customer acquisition, brand &amp; product marketing, conversion optimization, and digital analytics.</p>
          <p>
            <vaadin-button theme="primary large">
              <vaadin-icon slot="prefix" icon="lumo:angle-right"></vaadin-icon>Start 7-day trial for $1
            </vaadin-button>
          </p>
          <p class="has-white-color has-text-color has-small-font-size">Starting from $89/month.</p>
        </div>
        <div class="is-layout-flow wp-block-column">
          <div class="wp-block-image">
            <figure class="alignleft size-large">
              <img decoding="async" src="https://cxl.com/institute/wp-content/uploads/2023/03/Carlos_Hero_Picture_BW-_kjid_Circle_01.png" alt="" data-src="https://cxl.com/institute/wp-content/uploads/2023/03/Carlos_Hero_Picture_BW-_kjid_Circle_01.png" class="lazyloaded"><noscript><img decoding="async" src="https://cxl.com/institute/wp-content/uploads/2023/03/Carlos_Hero_Picture_BW-_kjid_Circle_01.png" alt="" data-eio="l" /></noscript>
            </figure>
          </div>
          <p class="has-white-color has-text-color has-small-font-size">“CXL influenced a quantum leap in my career. After 10 months of study, I was hired alongside some of the most brilliant minds in experimentation to work with leading brands from all over the world.”</p>
          <p class="has-white-color has-text-color has-small-font-size"><strong>Carlos Trujillo</strong>,<br>Experimentation<br>Strategist @ Speero</p>
        </div>
      </div>
    </cxl-section>
  `,
};
