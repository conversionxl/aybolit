import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-stats.js';
import statsData from './cxl-stats.data.json';

export default {
  title: 'CXL UI/cxl-stats',
};

export const CXLStats = ({ statsCount }) => {
  for (let i = 0; i < statsCount; i += 1) {
    const newItem = {
      title: 'Complete<br>library',
      count: '12%',
    };

    statsData.push(newItem);
  }

  return html`
    <cxl-stats class="stats">
      ${statsData.slice(0, statsCount).map(
        (el) => html`
          <div>
            <h4 class="stats-title">${unsafeHTML(el.title)}</h4>
            <p class="stats-count">${el.count}</p>
          </div>
        `
      )}
    </cxl-stats>
  `;
};

Object.assign(CXLStats, {
  args: {
    statsCount: 4,
  },
  storyName: 'CXL Stats',
});
