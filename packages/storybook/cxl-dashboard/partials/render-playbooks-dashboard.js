// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-element';
import DashboardRenderItems from './dashboard-render-items';
import filterByTags from '../filter-by-tags';

const RenderPlaybooksDashboard = (miniDegData, playbooksData) => {
  const filteredPlaybooks = filterByTags(playbooksData);
  const filteredMiniDeg = filterByTags(miniDegData);
  return html`${DashboardRenderItems(filteredMiniDeg)} ${DashboardRenderItems(filteredPlaybooks)}`;
};

export default RenderPlaybooksDashboard;
