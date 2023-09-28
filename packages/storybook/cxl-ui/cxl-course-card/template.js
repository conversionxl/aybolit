/* eslint-disable prefer-template */
import { html } from 'lit';

const renderTags = (tags, slot) =>
  html`<span class="tag" slot=${slot} title="${tags}">${tags}</span>`;

export const CourseCardTemplate = (course) => html`
  <cxl-course-card
    id=${course.id}
    theme=${course.theme}
    name=${course.name}
    time=${course.time}
    instructor=${course.instructor}
    avatar=${course.avatar}
    cta-url=${course.ctaUrl}
    .new=${course.new}
    .showTimeIcon=${course.showTimeIcon}
  >
    ${course.tags ? renderTags(course.tags, 'tags') : ''}
    <p slot="content" title=${course.description + '\n\n' + (course.contentTags || '')}>
      ${course.description}
      ${course.contentTags
        ? html`<br /><br />
            <em>${course.contentTags}</em>`
        : ''}
    </p>
    ${course.more ? html`<p slot="more">${course.more}</p>` : ''}
  </cxl-course-card>
`;

export const args = {
  id: 'cxl-course-1',
  name: 'Account based marketing',
  time: '3h 00min',
  instructor: 'Tom Wesseling',
  description:
    'Master the strategies, tactics, metrics, and wisdom you need to become an ABM leader and accelerate the growth of your company and of your career.',
  contentTags: 'B2B | campaigns | pilot planning',
  theme: 'course',
  tags: 'Marketing, Analytics, Growth, Demand Capture',
  avatar:
    'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
  new: false,
  showTimeIcon: true,
};

export const argTypes = {
  theme: {
    options: [
      'course',
      'video',
      'training',
      'playbook',
      'minidegree',
      'category',
      'lesson',
      'exam',
    ],
    control: { type: 'select' },
  },
};

export const sectionStyles = html`
  <style>
    section {
      display: grid;
      grid: auto-flow / repeat(2, calc(50% - var(--lumo-space-l) / 2));
      margin: 60px auto;
      justify-items: center;
      max-width: 900px;
      grid-gap: var(--lumo-space-l);
      padding: var(--lumo-space-l);
    }

    @media (max-width: 800px) {
      section {
        grid: auto / 100%;
        max-width: 100vw;
        padding: var(--lumo-space-xs);
      }
    }

    @media (max-width: 360px) {
      section {
        padding: 0;
      }

      section > cxl-course-card {
        max-width: calc(100vw - 2 * var(--lumo-space-xs) - var(--lumo-space-m));
      }
    }
  </style>
`;
