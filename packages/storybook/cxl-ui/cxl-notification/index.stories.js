import { DefaultStory } from './defaut.story';
import { UnPaidOrderStory } from './unpaid-order.story';
import { GravityFormStory } from './gravity-form.story';

export default {
  title: 'CXL UI/cxl-notification',
};

DefaultStory.storyName = 'Default';
UnPaidOrderStory.storyName = 'Un-paid Order';
GravityFormStory.storyName = 'Gravity Form';

export { DefaultStory, UnPaidOrderStory, GravityFormStory };
