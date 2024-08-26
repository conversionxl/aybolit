import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL Lumo Styles/Courses List',
};

const data = [
  {
    "title": "Voice of Customer Data",
    "url": "https://cxl.com/institute/online-course/voice-of-customer-data/",
    "instructor": "Ben Lebay",
    "length": "2h 19min",
    "image": "https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png"
  },
  {
    "title": "User-centric marketing",
    "url": "https://cxl.com/institute/online-course/user-centric-marketing/",
    "instructor": "Paul Boag",
    "length": "2h 45min",
    "image": "https://cxl.com/institute/wp-content/uploads/2019/08/paul-boag-1x1-bw-transparent-150x150.png"
  },
  {
    "title": "Customer storytelling & proof",
    "url": "https://cxl.com/institute/online-course/customer-storytelling/",
    "instructor": "Jordan Greene",
    "length": "3h 58min",
    "image": "https://cxl.com/institute/wp-content/uploads/2021/10/jordan-greene-instructor-headshot-1000x1000-transparent-bw-150x150.png"
  },
  {
    "title": "Customer segmentation for ecommerce",
    "url": "https://cxl.com/institute/online-course/customer-segmentation/",
    "instructor": "George Kapernaros",
    "length": "1h 2min",
    "image": "https://cxl.com/institute/wp-content/uploads/2022/06/george-kapernaros-headshot-1080px-transparent-bw-150x150.png"
  }
];

const Template = ({ el }) => html`
    <ul class="courses-list">
      ${data.map(
        (el) => html`
          <li>
            <cxl-card>
              <img class="thumbnail" src="${el.image}" />
              <header class="entry-header">
                <h4 class="entry-title"><a href="${el.url}">${el.title}</a></h4>
                <div class="entry-byline">
                  <vaadin-icon icon="lumo:clock"></vaadin-icon> ${el.length}
                  <div>Instructor(s): ${el.instructor}</div>
                </div>
              </header>
            </cxl-card>
          </li>
        `
      )}
    </ul>
`;

export const CoursesList = Template.bind({});

CoursesList.story = {
  name: 'Courses List',
};
