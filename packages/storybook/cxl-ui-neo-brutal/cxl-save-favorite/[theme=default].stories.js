import '@conversionxl/cxl-ui/src/components/cxl-save-favorite.js';
import { html } from 'lit';

export default {
  title: 'CXL UI/cxl-save-favorite',
  component: 'cxl-save-favorite',
};

const Template = ({ apiUrl, postType, postId, userId, isCardVersion, selected }) => html`
  <cxl-save-favorite
    apiUrl=${apiUrl}
    postType=${postType}
    postId=${postId}
    userId=${userId}
    ?isCardVersion=${isCardVersion}
    ?selected=${selected}
  ></cxl-save-favorite>
`;

export const CXLSaveFavoriteThemeDefault = Template.bind({});

CXLSaveFavoriteThemeDefault.storyName = '[theme=default]';

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLSaveFavoriteThemeDefault.args = {
  apiUrl: 'https://jsonplaceholder.typicode.com/users',
  postType: 'playbook',
  postId: 123,
  userId: 555,
  selected: false,
  isCardVersion: false,
};
