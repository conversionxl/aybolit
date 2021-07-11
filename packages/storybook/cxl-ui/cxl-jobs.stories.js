import { CXLJobsSingleListing } from './jobs/entry-single-offer.story';
import { CXLJobsListing } from './jobs/jobs-listing.story';
import { CXLEmployerDashboard } from './jobs/employer-dashboard.story';

export default {
  title: 'CXL UI/cxl-jobs',
};

// @todo localStorage data panel?
CXLJobsSingleListing.storyName = '[page=single-offer]';
CXLJobsListing.storyName = '[page=jobs-listing]';
CXLEmployerDashboard.storyName = '[page=employer-dashboard]';

export { CXLJobsSingleListing, CXLJobsListing, CXLEmployerDashboard };
