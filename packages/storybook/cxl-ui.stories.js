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
        <p slot="lesson-image" style="background-image: url('${lesson_image}');"></p>
        <span slot="lesson-highlighted-title">${lesson_title_highlighted}</span><p slot="lesson-title">${lesson_title}</p>
        <small slot="type">Lesson</small>
        <small slot="lesson-length">${lesson_length}</small>
        <small slot="lesson-instructor">${lesson_instructor}</small>
        <p slot="lesson-description">${lesson_description}</p>
      </cxl-lesson-card>
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
        <p slot="testimonial-customer-image" style="background-image: url('${testimonial_customer_image}');"></p>
        <img slot="testimonial-company-image" src="${testimonial_company_image}" />
        <p slot="testimonial-content">"${testimonial_content}"</p>
        <small slot="testimonial-customer-name">${testimonial_customer_name}</small>
        <small slot="testimonial-customer-company">${testimonial_customer_company}</small>
      </cxl-testimonial-card>
    `
  })
  .add('cxl-banner-card', () => {
    const banner_image = text('Banner image\n', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');
    const banner_title = text('Banner title', 'Conversion Optimization Minidegree Program');
    const banner_description = text('Banner description\n', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const banner_link_label = text('Banner link label\n', 'Curriculum & enrollment info >');
    const banner_link_url = text('Banner link url\n', '#');

    return `
      <cxl-banner-card>
        <p slot="banner-image" style="background-image: url('${banner_image}');"></p>
        <p slot="banner-title">${banner_title}</p>
        <small slot="banner-description">${banner_description}</small>
        <a slot="banner-link" href="${banner_link_url}">${banner_link_label}</a>
      </cxl-banner-card>
    `
  })
  .add('cxl-course-card', () => {
    const course_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const course_title = text('Title', 'A/B testing mastery');
    const course_instructor = text('Instructor', 'Ton Wesseling');
    const course_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const course_duration = text('Duration', '2 hours');
    const course_type = text('Type', 'Course');
    const course_category = text('Category', 'Analytics');

    return `
      <cxl-course-card>
        <p slot="course-image" style="background-image: url('${course_image}');"></p>
        <p slot="course-title">${course_title}</p>
        <p slot="course-instructor">${course_instructor}</p>
        <small slot="course-description">${course_description}</small>
        <small slot="course-duration">${course_duration}</small>
        <small slot="course-type">${course_type}</small>
        <small slot="course-category">${course_category}</small>
      </cxl-course-card>
    `
  })


