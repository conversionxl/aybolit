import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-inline-notification.js';

export default {
  title: 'CXL UI/cxl-inline-notification',
  parameters: {
    layout: 'fullscreen',
  },
};

export const CXLInlineNotification = () => html`
  <cxl-inline-notification>
    <p>
      The <strong>Automation with Apps script course</strong> is part of the Technical Marketing
      minidegree.
    </p>
    <p>
      The <strong>Automation with Apps script course</strong> is part of the Technical Marketing
      minidegree.
    </p>
    <p>
      The <strong>Automation with Apps script course</strong> is part of the Technical Marketing
      minidegree.
    </p>
    <p>
      The <strong>Automation with Apps script course</strong> is part of the Technical Marketing
      minidegree.
    </p>
    <p>
      The <strong>Automation with Apps script course</strong> is part of the Technical Marketing
      minidegree.
    </p>
  </cxl-inline-notification>
`;

CXLInlineNotification.storyName = 'cxl-inline-notification';
CXLInlineNotification.args = {};
