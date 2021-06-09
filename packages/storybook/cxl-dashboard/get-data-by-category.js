import playbookHubsData from './data/cxl-dashboard.playbook-hubs.data.json';
import minidegreesData from './data/cxl-dashboard.minidegrees.data.json';
import playbooksData from './data/cxl-dashboard.playbooks.data.json';
import coursesData from './data/cxl-dashboard.courses.data.json';

const getDataByCategory = (category) => {
  let data;
  switch (category) {
    case 'Most Recent':
      data = {
        black: playbookHubsData.concat(minidegreesData),
        white: playbooksData.concat(coursesData),
      };
      break;

    case 'My Roadmap':
      data = { black: minidegreesData, white: coursesData };
      break;

    case 'Courses':
      data = { black: [], white: coursesData };
      break;

    case 'Minidegrees':
    case 'Advanced stuff':
    case 'Average stuff':
      data = { black: coursesData, white: [] };
      break;

    case 'Playbooks':
    case 'Saved playbooks':
    case 'CXL playbooks':
    case 'Wynter playbooks':
    case 'My drafts':
    case 'Peer review playbooks':
      data = { black: playbookHubsData, white: playbooksData };
      break;

    default:
      data = { black: [], white: [] };
      break;
  }
  return data;
};

export default getDataByCategory;
