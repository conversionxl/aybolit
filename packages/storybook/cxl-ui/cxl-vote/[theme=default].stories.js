import { CXLVoteElement } from '@conversionxl/cxl-ui';
import { html } from 'lit-html';

export default {
  title: 'CXL UI/cxl-vote',
  component: CXLVoteElement,
};

const Template = ({ apiUrl, postType, postId, userId, upVotes }) => html`
  <cxl-vote
    apiUrl=${apiUrl}
    postType=${postType}
    postId=${postId}
    userId=${userId}
    upVotes=${upVotes}
  ></cxl-vote>
`;

export const CXLVoteThemeDefault = Template.bind({});

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLVoteThemeDefault.args = {
  apiUrl: 'https://jsonplaceholder.typicode.com/users',
  postType: 'playbook',
  postId: 123,
  userId: 555,
  upVotes: 305,
};
