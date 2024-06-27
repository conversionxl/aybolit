import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-intercom';

export default {
  title: 'CXL UI/cxl-intercom',
};

export const CXLIntercom = ({ appId }) => html`
  <cxl-intercom app-id=${appId}></cxl-intercom>
`;

CXLIntercom.storyName = 'cxl-intercom';
CXLIntercom.args = {
  appId: '',
};
