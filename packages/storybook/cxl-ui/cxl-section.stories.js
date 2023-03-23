import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import '@vaadin/tooltip';
import { VaadinTooltip } from '../cxl-lumo-styles/elements.stories';
import '@vaadin/button';
import '@vaadin/icon';
import '@vaadin/horizontal-layout';

const meta = {
  component: 'cxl-section',
  title: 'CXL UI/cxl-section',
};

export default meta;

export const CXLSection = {
  args: {
    backgroundColor: 'var(--lumo-shade-5pct)',
    hasWave: true,
  },
  name: 'cxl-section',
  render: ({ backgroundColor, hasWave, content }) => html`
    <cxl-section
      class="alignwide has-background ${hasWave ? 'has-wave' : ''}"
      style="${backgroundColor ? `background-color: ${backgroundColor}` : ''}"
    >
      ${content ||
      html`
        ${VaadinTooltip.render(VaadinTooltip.args)}
        <h2>
          The difference between high-growth and slow-growth companies is the skill sets they have
          to make it happen.
        </h2>
        <p>At CXL, we provide</p>
        <ul>
          <li>marketing training programs to people serious about their career,</li>
          <li>
            managed online revenue optimization & experimentation services to help mid-to-large
            companies accelerate growth.
          </li>
        </ul>
        <p>
          <vaadin-button theme="primary large"
            >Marketing training <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon
          ></vaadin-button>
          <vaadin-button theme="primary large contrast"
            >Managed services <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon
          ></vaadin-button>
        </p>
        <vaadin-horizontal-layout theme="cxl-marketing-hero-details spacing-s">
          <span><vaadin-icon icon="lumo:clock"></vaadin-icon>Updated 10/2022</span>
          <span
            ><vaadin-icon icon="vaadin:globe-wire" theme="lumo"></vaadin-icon>English
            subtitles</span
          >
          <span><vaadin-icon icon="lumo:checkmark"></vaadin-icon>Certificate included</span>
        </vaadin-horizontal-layout>
      `}
    </cxl-section>
  `,
};
