import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-card.js';
import '@conversionxl/cxl-lumo-styles';

export default {
  title: 'CXL UI/cxl-card',
};

export const CXLExploreCoursesCard = () => html`
  <cxl-card theme="cxl-explore-courses">
    <a href="#" class="entry-link" aria-label="Voice of Customer Data"></a>
    <header class="entry-header">
      <img
        class="thumbnail"
        src="https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg"
      />
      <div class="entry-content">
        <h4 class="entry-title">Voice of Customer Data</h4>
        <div class="entry-info">
          <span>
            <vaadin-icon class="entry-icon" icon="lumo:clock"></vaadin-icon>
            2h 09min
          </span>
          <span>Instructor(s) Ben Labay</span>
        </div>
      </div>
    </header>
  </cxl-card>
`;
