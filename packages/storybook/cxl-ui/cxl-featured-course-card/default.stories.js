import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';

export default {
  title: 'CXL UI/cxl-featured-course-card',
};

const renderTags = (tags, slot) => tags.map((tag) => html`<span slot=${slot}>${tag}</span>`);

const FeaturedCourseCardTemplate = (course) => html`
  <cxl-featured-course-card
    id=${course.id}
    theme=${course.theme}
    name=${course.name}
    time=${course.time}
    instructor=${course.instructor}
    avatar=${course.avatar}
    cta-url=${course.ctaUrl}
    .new=${course.new}
  >
    ${course.tags ? renderTags(course.tags, 'tags') : ''}
    <div slot="content" title=${course.description}>${unsafeHTML(course.description)}</div>
  </cxl-featured-course-card>
`;

export const CXLFeatureadCourseCard = FeaturedCourseCardTemplate.bind({});

CXLFeatureadCourseCard.args = {
  id: 'cxl-featured-course-1',
  theme: 'Featured course',
  name: 'Get ahead with <strong>Google Analytics 4</strong>',
  time: '5h 04min',
  instructor: 'Fred Pike',
  description:
    "GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>",
  tags: ['Marketing', 'Analytics'],
  ctaUrl: '',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',
};
