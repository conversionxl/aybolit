import { html, nothing } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-light-card',
  parameters: {
    layout: 'centered',
  },
};

const Template = (card) => html`
  <cxl-light-card
    theme="${card.theme}"
    title="${card.title}"
    time="${card.time}"
    instructor="${card.instructor}"
    avatar="${card.avatar}"
    .new="${card.new}"
    .completed="${card.completed}"
  >
    ${card.footer
      ? html`card.
          <footer slot="footer" class="entry-footer">${unsafeHTML(card.footer)}</footer>`
      : nothing}
  </cxl-light-card>
`;

export const CXLLightCard = Template.bind({});
export const CXLLightCardFooter = Template.bind({});

CXLLightCard.args = {
  new: false,
  completed: false,
  title: 'Account based marketing',
  time: '3h 00min',
  instructor: 'Ton Wesseling',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
  footer: '',
};

CXLLightCard.story = {
  name: '[theme=light-card]',
};

CXLLightCardFooter.args = {
  ...CXLLightCard.args,
  footer:
    '<span theme="badge primary pill">Team Roadmap</span> <span theme="badge secondary pill">Personal Roadmap</span>',
};
