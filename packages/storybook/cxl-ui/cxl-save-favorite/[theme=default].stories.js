import {CXLSaveFavoriteElement} from "@conversionxl/cxl-ui";
import {html} from "lit-html";

export default {
  title: 'CXL UI/cxl-save-favorite',
  component: CXLSaveFavoriteElement
};

const Template = ({ ...args }) => html`
    <cxl-save-favorite
      apiUrl=${args.apiUrl}
      postType=${args.postType}
      postId=${args.postId}
      userId=${args.userId}
      ?isCardVersion=${args.isCardVersion}
      ?selected=${args.selected}
    ></cxl-save-favorite>
  `;

export const CXLSaveFavoriteThemeDefault = Template.bind({});

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLSaveFavoriteThemeDefault.args = {
  apiUrl: "https://jsonplaceholder.typicode.com/users",
  postType: "playbook",
  postId: 123,
  userId: 555,
  selected: false,
  isCardVersion: false,
};

