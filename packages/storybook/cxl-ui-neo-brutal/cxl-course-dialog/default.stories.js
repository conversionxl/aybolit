import { html } from 'lit';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-course-dialog.js';

export default {
  title: 'CXL UI/cxl-course-dialog',
};

const Template = (dialog) => html`
  <cxl-course-dialog .course=${dialog.course} .video=${dialog.video}> </cxl-course-dialog>
`;

export const CXLCourseDialog = Template.bind({});
export const CXLCourseDialogVideo = Template.bind({});

CXLCourseDialog.args = {
  course: {
    id: 'cxl-course-1',
    name: 'Account based marketing',
    time: '3h 00min',
    instructor: 'Tom Wesseling',
    description:
      'Continue to build your focus on practical ways you can use AI for CRO, building on the original “Applied AI for Marketers” course.',
    theme: 'Course',
    tags: ['Marketing', 'Analytics'],
    avatar:
      'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',
    more: "This course fills that gap. It's the most in-depth guide to what a team considering implementing GA4 needs to know to make their implementation successful.",
    new: false,
  },
};

CXLCourseDialogVideo.args = {
  ...CXLCourseDialog.args,
  video: {
    captions: false,
    mediaId: 'fZ0XiGdb',
    playerId: '5CFJNXKb',
    playlistId: '',
    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',
  },
};
