import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-featured-image.js';

export default {
  title: 'CXL UI/cxl-featured-image',
  parameters: {
    layout: 'centered',
  },
};

export const CXLFeaturedImage = ({ src }) =>
  html`<cxl-featured-image src=${src}></cxl-featured-image>`;

CXLFeaturedImage.storyName = 'cxl-featured-image';
CXLFeaturedImage.args = {
  src: 'https://ebpyu8ye7bj.exactdn.com/institute/wp-content/uploads/2023/12/ben-labay_team_headshot-1x1-bw-min-fix-min-compressed.png?strip=all&lossy=1&fit=720%2C720&ssl=1',
};
