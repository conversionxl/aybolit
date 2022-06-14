import '@conversionxl/cxl-ui/src/components/cxl-like-or-dislike.js';
import { html } from 'lit';

export default {
  title: 'CXL UI/cxl-like-or-dislike',
  component: 'cxl-like-or-dislike',
};

const Template = ({ apiUrl, postType, postId, userId, upVotes }) => html`
  <cxl-like-or-dislike
    apiUrl=${apiUrl}
    postType=${postType}
    postId=${postId}
    userId=${userId}
    upVotes=${upVotes}
  ></cxl-like-or-dislike>
`;

export const CXLLIkeOrDislikeThemeDefault = Template.bind({});

// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args
CXLLIkeOrDislikeThemeDefault.args = {
  apiUrl: 'https://jsonplaceholder.typicode.com/users',
  postType: 'playbook',
  postId: 123,
  userId: 555,
  upVotes: 305,
};
