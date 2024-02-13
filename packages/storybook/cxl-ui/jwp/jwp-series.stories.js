import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/jwp/series.js';

export default {
  title: 'CXL UI/JWP/jwp-series',
  parameters: {
    layout: 'centered',
  },
};

export const JWPSeries = ({ seriesId }) => html`
  <style>
    #root, #root-inner {
      width: 100%;
      height: 100%;
    }
  </style>
  <jwp-series series-id=${seriesId}></jwp-series>
`;

JWPSeries.storyName = 'jwp-series';
JWPSeries.args = {
    seriesId: 'kcQrDuBk',
};
