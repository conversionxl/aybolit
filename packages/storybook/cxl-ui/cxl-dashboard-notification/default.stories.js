import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-dashboard-notification.js';
import withData from './cxl-dashboard-notification.data.json';
import noRoadmaps from './cxl-dashboard-notification-none.data.json';

export default {
  title: 'CXL UI/cxl-dashboard-notification',
};

const Template = (notification) => html`
  <cxl-dashboard-notification
    count=${notification.count}
    .tabs=${notification.tabs}
  >
  </cxl-dashboard-notification>
`;

export const CXLDashboardNotification = Template.bind({});
export const CXLDashboardNotificationNoRoadmaps = Template.bind({});

CXLDashboardNotification.args = {
  count: '1',
  tabs: withData
}

CXLDashboardNotificationNoRoadmaps.args = {
  count: '1',
  tabs: noRoadmaps
}
