import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-comment-section.js';
import '@conversionxl/cxl-ui/src/components/cxl-comment.js';

export default {
  title: 'CXL UI/cxl-comment-section',
  parameters: {
    layout: 'centered',
  },
};

export const CXLCommentSection = ({ comments }) => html`
  <cxl-comment-section replies=${comments.length}>
    ${comments.map(
      (item) => html`
        <cxl-comment
          class="comment" 
          author="${item.author}"
          avatar="${item.avatar}"
          comment=${item.comment}
          time="${item.time}"
          username="${item.username}"
        ></cxl-comment>
      `
    )}
  </cxl-comment-section>
`;

CXLCommentSection.storyName = 'cxl-comment-section';
CXLCommentSection.args = {
  comments: [
    {
      author: 'John Smith',
      username: 'johhnysm',
      time: '2d',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      avatar:
        'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
    },
  ],
};
