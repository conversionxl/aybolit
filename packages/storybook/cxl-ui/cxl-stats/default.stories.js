import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import '@conversionxl/cxl-lumo-styles';
import '@conversionxl/cxl-ui/src/components/cxl-stats.js';
import statsData from './cxl-stats.data.json';

export default {
  title: 'CXL UI/cxl-stats',
};

export const CXLStats = ({ theme, statsCount }) => {
  for (let i = 0; i < statsCount; i += 1) {
    const newItem = {
      title: 'Complete<br>library',
      count: '12%',
      featured: true,
    };

    statsData.push(newItem);
  }

  return html`
    <cxl-stats class="stats" theme="${theme}">
      ${statsData.slice(0, statsCount).map((el) => html`
        <div class="stat-item ${el.featured ? 'featured' : ''}">
          <h4 class="stat-title">${unsafeHTML(el.title)}</h4>
          ${el.link
            ? html`<a class="stat-count" href="${el.link}">${el.count}</a>`
            : html`<div class="stat-count">${el.count}</div>`}
        </div>
      `)}
    </cxl-stats>
  `;
};

Object.assign(CXLStats, {
  args: {
    statsCount: 3,
  },
  storyName: 'CXL Stats',
});
