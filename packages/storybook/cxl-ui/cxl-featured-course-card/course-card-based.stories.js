import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';

export default {
  title: 'CXL UI/cxl-featured-course-card',
};

const renderTags = (tags, slot) =>
  tags.map(
    (tag, i) =>
      html`${i > 0 ? html`<span slot=${slot}> | </span>` : ''}<span slot=${slot}>${tag}</span>`
  );

const FeaturedCourseCard2Template = (course) => html`
  <cxl-course-card
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
  </cxl-course-card>
`;

export const CXLFeatureadCourse2Card = FeaturedCourseCard2Template.bind({});

CXLFeatureadCourse2Card.args = {
  id: 'cxl-featured-course-1',
  theme: 'featured course',
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
