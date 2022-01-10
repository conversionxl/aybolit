import { visualDiff } from '@web/test-runner-visual-regression';
import { render } from 'lit';
import '../../../cxl-ui/src/components/cxl-card.js';
import { CXLTestimonial } from './[theme=cxl-testimonial].stories';

// eslint-disable-next-line no-undef
it('can diff an element', async () => {
  render(CXLTestimonial({ el: { cxl_hybrid_attr_post: { '@attributes': {} } } }), document.body);
  await visualDiff(document.body, 'cxl-card');
});
