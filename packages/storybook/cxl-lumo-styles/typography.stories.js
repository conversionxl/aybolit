import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui';
import '@vaadin/button';
import cxlColorStyles from '@conversionxl/cxl-lumo-styles/src/styles/color-css';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Typography',
};

// @see https://github.com/vaadin/vaadin-lumo-styles/blob/v1.5.0/demo/typography.html
export const Base = () => html`
  <h1>Heading 1</h1>
  <h1>Heading 1 with <strong>highlight</strong></h1>
  <h2>Heading 2</h2>
  <h2>Heading 2 with <strong>highlight</strong></h2>
  <h3>Heading 3</h3>
  <h3>Heading 3 with <strong>highlight</strong></h3>
  <h4>Heading 4</h4>
  <h4>Heading 4 with <strong>highlight</strong></h4>
  <h5>Heading 5</h5>
  <h5>Heading 5 with <strong>highlight</strong></h5>
  <h6>Heading 6</h6>
  <h6>Heading 6 with <strong>highlight</strong></h6>
  <p>Paragraph text.</p>
  <p><a href="https://cxl.com">Paragraph link</a></p>
  <p><a href="https://cxl.com" target="_blank">Paragraph link external.</a></p>
  <p><strong>Paragraph strong text.</strong></p>
  <p><em>Paragraph italic text.</em></p>
  <p><small>Paragraph small text.</small></p>
  <div><span>Element text.</span></div>
  <div class="font-light"><span>Light element text.</span></div>
  <div><a href>Element link</a></div>
  <div><a href="https://cxl.com" target="_blank">Element link external.</a></div>
  <div><em>Element italic text.</em></div>
  <div><small>Element small text.</small></div>
  <blockquote><p>I am a simple blockquote.</p></blockquote>
`;

export const Examples = () => {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nam hendrerit pharetra neque, non gravida neque interdum ac.
    Donec porttitor quis velit nec tempor. Sed arcu est, molestie ut aliquet at, egestas eu augue. Nunc lobortis imperdiet massa sed pharetra.
  `;

  return html`
    <h1>Become great at <strong>content marketing research</strong></h1>
    <h2>Produce relevant, authoritative content that hits money-making KPIs</h2>
    <h3>Online Course</h3>
    <p>By <strong>Derek Gleason</strong>, Content Lead @ CXL</p>
    <p><strong>Course Length:</strong> 1h 07min</p>

    <h1>Digital psychology & behavioral design training</h1>
    <p>${loremIpsum}</p>

    <h1>How to Design, Roll Out, & Scale an Optimization Program</h1>
    <p>${loremIpsum}</p>

    <h1>Heuristic Analysis frameworks for conversion optimization audits</h1>
    <p>${loremIpsum}</p>

    <h1>Implementing Urgency on eCommerce Product Pages For a 27.1% Lift [Case Study]</h1>
    <p>${loremIpsum}</p>

    <h1>
      Checkout Optimization: How Do Trust Seals Affect Security Perception? [Original Research]
    </h1>
    <p>${loremIpsum}</p>
  `;
};

export const CXLComExamples = () => html`
  <style>
    ${cxlColorStyles}

    cxl-section {
      padding: 2em 0;
    }

    cxl-section.wide {
      --cxl-content-max-width: 60em;
    }

    #view-hero {
      margin-bottom: 4em;
    }

    .pure-u-lg-1-2 {
      width: 40%;
      display: inline-block;
      letter-spacing: normal;
      word-spacing: normal;
      vertical-align: top;
      text-rendering: auto;
    }

    .wp-block-cxl-section#view-hero {
      --cxl-content-max-width: 85em;

      background: url(http://localhost:8080/wp-content/uploads/2023/07/ben-labay_team_headshot-1x1-bw-min.png) no-repeat bottom right var(--lumo-shade-5pct);
      background-size: auto 85%;
      background-position: bottom right calc( 45% - 200px );

      padding: unset;
    }

    .flex {
      display: flex;
    }

    .w50-pct > * {
      flex-basis: 50%;
    }

    .hero > div {
      display: flex;
      flex-direction: column;
      gap: 3.75em;
      align-items: start;
    }

    .hero > div h1,
    .hero > div h3 {
      margin: 0 auto;
    }
  </style>

  <cxl-section id="view-hero" class="wide hero wp-block-cxl-section wide-background-black">
    <div class="pure-u-lg-1-2">
      <h1><strong>Top 1% marketers</strong> teach you what they know.</h1>
      <h3>Master the most in-demand marketing skills with our online courses created by marketers with a proven record of driving real growth.</h3>
      <vaadin-button id="cxl-onboarding" class="cxl-homepage-button" role="button" theme="primary x-large">
        Sign up now
      </vaadin-button>
    </div>
  </cxl-section>

  <cxl-section class="has-gray-background-color wide">
    <h2 class="wp-block-heading center ">On-demand courses taught by <strong>elite marketers</strong> from companies like Drift, ClickUp and Hubspot.</h2>
  </cxl-section>

  <cxl-section class="wide">
    <div class="flex w50-pct">
      <div class="wrap">
        <h2 class="wp-block-heading separator">Learn from the <strong>legitimate experts</strong> with a proven track record</h2>
        <p>
          Betting your career and your company's growth on some guru's playbook is dangerous.
        </p>
        <p>
          We identify the top 1% masters of the marketing craft through a rock-solid vetting process that we've been perfecting for over a decade. Then we get them to teach you what they're best at.
        </p>
        <p>
          <a href="https://cxl.com/institute/">Browse all courses and instructors here.</a>
        </p>
      </div>
      <div></div>
    </div>
  </cxl-section>

  <cxl-section class="has-black-background-color wide">
    <div class="flex w50-pct">
      <div class="wrap">
        <h2 class="wp-block-heading separator separator-white">How we identify and vet <strong>top 1% marketers</strong></h2>
        <p>
          This is how we find and vet the top 1% marketers:
        </p>
        <ol>
          <li>We regularly survey the marketing community for experts they want to learn from</li>
          <li>We narrow down the list through a reference check, talking to their peers and executives</li>
          <li>We make sure they have a proven track record, meaning they’ve significantly contributed to growth of more than 2 companies</li>
        </ol>
      </div>
    </div>
  </cxl-section>

  <cxl-section class="has-gray-background-color wide">
    <div class="flex w50-pct">
      <div class="wrap">
        <h2 class="wp-block-heading separator"><strong>Help your company grow</strong> with frameworks that bring results</h2>
        <p>
          In 2016, Drift’s CEO, David Cancel, famously said that the era of product-based differentiation is going away. By now, we can conclude that it has already gone away.
        </p>
      </div>
      <div></div>
    </div>
  </cxl-section>

  <cxl-section class="has-black-background-color">
    <div class="wrap">
      <h2 class="wp-block-heading center separator separator-white"><strong>All access</strong> Subscription</h2>
    <ul>
      <li>Access to 90+ courses and 11 minidegrees</li>
      <li>Earn certificates and add them to your LinkedIn profile</li>
      <li>2500+ playbooks</li>
      <li>Exclusive community access</li>
    </div>
    <vaadin-button id="cxl-onboarding" class="cxl-homepage-button wide" role="button" theme="primary x-large">
      Sign up now
    </vaadin-button>
  </cxl-section>
  <cxl-section>
    <div class="wrap">
      <h2 class="wp-block-heading center separator separator-gray">Become certified in 10 minidegrees</h2>
      <p>
        Each course is a puzzle piece teaching discrete skills. Each Minidegree is a completed puzzle teaching a marketing discipline from A to Z and takes you on a path towards becoming the top 1% marketer. After going through the entire curriculum, you’ll be given an exam that earns you a CXL certificate. Add your certificates to your LinkedIn profile, share your accomplishments with the world, and join our alumni network.
      </p>
    </div>
  </cxl-section>
`;
