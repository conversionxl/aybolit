import { CXLSaveFavoriteElement } from '@conversionxl/cxl-ui';
import { html } from 'lit-html';

export default {
  title: 'CXL UI/cxl-save-favorite',
  component: CXLSaveFavoriteElement,
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
