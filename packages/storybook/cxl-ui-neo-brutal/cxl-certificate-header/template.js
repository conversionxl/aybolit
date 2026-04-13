import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@vaadin/button';
import '@conversionxl/cxl-ui/src/components/cxl-certificate-header.js';

import { CXLStats } from '../cxl-stats/default.stories';

export const CertificateHeaderTemplate = (header) => html`
  <cxl-certificate-header
    theme="cxl-certificate-header ${header.completed ? 'completed' : ''}"
    title=${header.title}
    description=${header.description}
    ?hide-actions=${header.hideActions}
    ?hide-stats=${header.hideStats}
    ?hide-credential=${header.hideCredential}
  >
    <div slot="stats">
      ${CXLStats({
        theme: `cxl-certificate-header ${!header.completed ? 'dark' : ''}`,
        statsCount: 4
      })}
    </div>
    <vaadin-button theme="primary" class="action" slot="actions">
      Research exam
      <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
    </vaadin-button>
    <vaadin-button theme="primary" class="action" slot="actions">
      Marketing  Strategy exam
      <vaadin-icon icon="lumo:angle-right"></vaadin-icon>
    </vaadin-button>
    <div slot="credential">
      <img src="https://cxl.com/institute/wp-content/uploads/2023/11/certificate-storybook.png" alt="Minidegree certificate" />
      <div style="margin-top: var(--lumo-space-l)">Buttons will come from WPS</div>
    </div>
  </cxl-certificate-header>
`;

export const ArgTypes = {
  completed: { control: 'boolean' },
  title: { control: 'text' },
  description: { control: 'text' },
  hideActions: { control: 'boolean' },
  hideStats: { control: 'boolean' },
  hideCredential: { control: 'boolean' },
};
