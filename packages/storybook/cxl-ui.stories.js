import '@conversionxl/cxl-ui';

import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('CXL UI', module)
  // .addDecorator(withKnobs)
  .add('cxl-lesson-card', () => {
    const lesson_title = text('Title', 'Why websites fail?');
    const lesson_title_highlighted = text('Title highlighted part', 'Class 1');
    const lesson_image = text('Image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');
    //const lesson_type = text('Type', 'Lesson');
    const lesson_length = text('Length', '1 hour');
    const lesson_instructor = text('Instructor', 'Karl Gilis');
    const lesson_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');

    return `
      <cxl-lesson-card>
        <img class="lesson-thumbnail" slot="entry__header" src="${lesson_image}" />
        <h2 slot="entry__header"><span class="entry-title-highlighted">${lesson_title_highlighted}</span>${lesson_title}</h2>
        <p slot="entry__header" class="lesson-specs">Lesson | ${lesson_length} | ${lesson_instructor}</p>
        <p slot="entry__content">${lesson_description}</p>
      </cxl-lesson-card>
    `
  })
  .add('cxl-course-card', () => {
    const course_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const course_title = text('Title', 'Account based marketing');
    const course_instructor = text('Instructor', 'Ton Wesseling');
    const course_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const course_duration = text('Duration', '2 hours');
    const course_type = text('Type', 'Course');
    const course_category = text('Category', 'Analytics');

    return `
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">${course_title}</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
      `
  })
  .add('cxl-testimonial-card', () => {
    const testimonial_customer_image = text  ('Customer image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');
    const testimonial_company_image = text('Company image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png');
    const testimonial_content = text('Content', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program. ');
    const testimonial_customer_name = text('Customer name', 'Chris Kershaw');
    const testimonial_customer_company = text('Customer company', 'Managing Director - Sweden, at Trollweb Solutions');

    return `
      <cxl-testimonial-card>
        <p class="entry__header-user-thumbnail" slot="entry__header" style="background-image: url('${testimonial_customer_image}');"></p>
        <img class="entry__header-company-thumbnail" slot="entry__header" src="${testimonial_company_image}" />
        <p class="entry__content" slot="entry__content">"${testimonial_content}"</p>
        <p class="entry__header-user-name" slot="entry__footer">${testimonial_customer_name}</p>
        <p class="entry__header-user-company" slot="entry__footer">${testimonial_customer_company}</p>
      </cxl-testimonial-card>
    `
  })
  .add('cxl-minidegree-card', () => {
    const minidegree_image = text('minidegree image\n', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');
    const minidegree_title = text('minidegree title', 'Conversion Optimization Minidegree Program');
    const minidegree_description = text('minidegree description\n', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const minidegree_link_label = text('minidegree link label\n', 'Curriculum & enrollment info');
    const minidegree_link_url = text('minidegree link url\n', '#');

    return `
      <cxl-minidegree-card>
        <p class="entry__header-minidegree-thumbnail" slot="entry__header" style="background-image: url('${minidegree_image}');"></p>
        <h2 class="entry__header-minidegree-title" slot="entry__header">${minidegree_title}</h2>
        <p class="entry__content-minidegree-content" slot="entry__content">${minidegree_description}</p>
        <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="${minidegree_link_url}">${minidegree_link_label}</a>
      </cxl-minidegree-card>
    `
  })
  .add('cxl-training-card', () => {
    const training_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const training_title = text('Title', 'Copywriting & Product Messaging');
    const training_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program.');

    return `
        <cxl-training-card video="https://player.vimeo.com/video/316968481">
          <p class="entry__header-training-thumbnail" slot="entry__header-thumbnail" style="background-image: url('${training_image}');"></p>
          <span slot="entry__title">${training_title}</span>
          <p class="entry__content-training-content" slot="entry__content">${training_description}</p>
        </cxl-training-card>
      `
  })
  .add('[COURSES] cxl-catalog', () => {
    const course_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const course_title = text('Title', 'Account based marketing');
    const course_instructor = text('Instructor', 'Ton Wesseling');
    const course_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const course_duration = text('Duration', '2 hours');
    const course_type = text('Type', 'Course');
    const course_category = text('Category', 'Analytics');

    return `
      <cxl-catalog style="--lumo-data-grid-items: 4; --lumo-data-grid-column-size: 250px;">
      
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">${course_title}</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
        
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">Copywriting & Product Messaging</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.Our flagship training program.</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
        
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">Retention for Subscription Products Products</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
        
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">Google Tag Manager - Intermediate</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
      
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">${course_title}</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
      
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">${course_title}</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>
      
        <cxl-course-card>
          <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
          <h2 class="entry__title" slot="entry__header">${course_title}</h2>
          <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
          <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
          <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
        </cxl-course-card>

        
      </cxl-catalog>
      `
  })
  .add('[TRAININGS] cxl-catalog', () => {
    const training_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const training_title = text('Title', 'Copywriting & Product Messaging');
    const training_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program.');

    return `
      <cxl-catalog style="--lumo-data-grid-items: 4; --lumo-data-grid-column-size: 250px;">
      
        <cxl-training-card video="https://player.vimeo.com/video/316968481">
          <p class="entry__header-training-thumbnail" slot="entry__header-thumbnail" style="background-image: url('${training_image}');"></p>
          <span slot="entry__title">Google Tag Manager - Intermediate</span>
          <p class="entry__content-training-content" slot="entry__content">${training_description}</p>
        </cxl-training-card>
        
        <cxl-training-card video="https://player.vimeo.com/video/316968481">
          <p class="entry__header-training-thumbnail" slot="entry__header-thumbnail" style="background-image: url('${training_image}');"></p>
          <span slot="entry__title">${training_title}</span>
          <p class="entry__content-training-content" slot="entry__content">Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.</p>
        </cxl-training-card>
        
        <cxl-training-card video="https://player.vimeo.com/video/316968481">
          <p class="entry__header-training-thumbnail" slot="entry__header-thumbnail" style="background-image: url('${training_image}');"></p>
          <span slot="entry__title">${training_title}</span>
          <p class="entry__content-training-content" slot="entry__content">${training_description}</p>
        </cxl-training-card>
        
        <cxl-training-card video="https://player.vimeo.com/video/316968481">
          <p class="entry__header-training-thumbnail" slot="entry__header-thumbnail" style="background-image: url('${training_image}');"></p>
          <span slot="entry__title">A/B testing mastery</span>
          <p class="entry__content-training-content" slot="entry__content">${training_description}</p>
        </cxl-training-card>
        
      </cxl-catalog>
      `
  })
  .add('[MINIDEGREES] cxl-catalog', () => {
    const minidegree_image = text('minidegree image\n', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');
    const minidegree_title = text('minidegree title', 'Conversion Optimization Minidegree Program');
    const minidegree_description = text('minidegree description\n', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const minidegree_link_label = text('minidegree link label\n', 'Curriculum & enrollment info');
    const minidegree_link_url = text('minidegree link url\n', '#');

    return `
      <cxl-catalog style="--lumo-data-grid-items: 4; --lumo-data-grid-column-size: 250px;">
      
      <cxl-minidegree-card>
        <p class="entry__header-minidegree-thumbnail" slot="entry__header" style="background-image: url('${minidegree_image}');"></p>
        <h2 class="entry__header-minidegree-title" slot="entry__header">${minidegree_title}</h2>
        <p class="entry__content-minidegree-content" slot="entry__content">${minidegree_description}</p>
        <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="${minidegree_link_url}">${minidegree_link_label}</a>
      </cxl-minidegree-card>
      
      <cxl-minidegree-card>
        <p class="entry__header-minidegree-thumbnail" slot="entry__header" style="background-image: url('${minidegree_image}');"></p>
        <h2 class="entry__header-minidegree-title" slot="entry__header">Digital analytics minidegree program</h2>
        <p class="entry__content-minidegree-content" slot="entry__content">Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program.</p>
        <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="${minidegree_link_url}">${minidegree_link_label}</a>
      </cxl-minidegree-card>
      
      <cxl-minidegree-card>
        <p class="entry__header-minidegree-thumbnail" slot="entry__header" style="background-image: url('${minidegree_image}');"></p>
        <h2 class="entry__header-minidegree-title" slot="entry__header">Digital psychology & persuasion minidegree program</h2>
        <p class="entry__content-minidegree-content" slot="entry__content">${minidegree_description}</p>
        <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="${minidegree_link_url}">${minidegree_link_label}</a>
      </cxl-minidegree-card>
      
      <cxl-minidegree-card>
        <p class="entry__header-minidegree-thumbnail" slot="entry__header" style="background-image: url('${minidegree_image}');"></p>
        <h2 class="entry__header-minidegree-title" slot="entry__header">Growth marketing minidegree program</h2>
        <p class="entry__content-minidegree-content" slot="entry__content">${minidegree_description}</p>
        <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="${minidegree_link_url}">${minidegree_link_label}</a>
      </cxl-minidegree-card>
      
      <cxl-minidegree-card>
        <p class="entry__header-minidegree-thumbnail" slot="entry__header" style="background-image: url('${minidegree_image}');"></p>
        <h2 class="entry__header-minidegree-title" slot="entry__header">${minidegree_title}</h2>
        <p class="entry__content-minidegree-content" slot="entry__content">${minidegree_description}</p>
        <a class="entry__footer-minidegree-more-link" slot="entry__footer" href="${minidegree_link_url}">${minidegree_link_label}</a>
      </cxl-minidegree-card>
        
      </cxl-catalog>
      `
  })