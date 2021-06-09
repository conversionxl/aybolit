import { html, render } from 'lit-html';
import sidebarData from '../data/sidebar.data.json';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

const tagClickedHandler = (event) => {
  document.querySelectorAll('#selected-tags vaadin-button').forEach((el) => {
    if (el !== event.currentTarget) {
      el.removeAttribute('selected');
    }
  });

  event.currentTarget.toggleAttribute('selected');

  const customEvent = new CustomEvent('cxl-dashboard-tags-changed', {
    detail: {
      element: event.currentTarget,
    },
    bubbles: true,
  });

  event.currentTarget.dispatchEvent(customEvent);
};

const displayTags = (tagsJson, tagsCountJson) => {
  const tagsArr = tagsJson === 'undefined' ? [] : JSON.parse(tagsJson);
  const tagsCountArr = tagsCountJson === 'undefined' ? [] : JSON.parse(tagsCountJson);

  const templateResultObjects = tagsArr.map(
    (tag, index) =>
      html`<vaadin-button theme="secondary" @click="${tagClickedHandler}" tag-name="${tag}">
        ${tag} ${tagsCountArr[index] !== undefined ? html`<span>${tagsCountArr[index]}</span>` : ''}
      </vaadin-button>`
  );

  render(templateResultObjects, document.querySelector('#selected-tags'));
};

const showSpecificActionButtonsForSpecificCategories = (categoryTitle) => {
  document.querySelector('.header-category-time').classList.remove('visible');
  document.querySelector('.cxl-hub-header .edit').classList.remove('visible');
  document.querySelector('.cxl-hub-header .add-new').classList.remove('visible');

  switch (categoryTitle) {
    case 'My Roadmap':
      document.querySelector('.header-category-time').classList.add('visible');
      document.querySelector('.cxl-hub-header .edit').classList.add('visible');
      break;

    case 'Courses':
    case 'Minidegrees':
      document.querySelector('.cxl-hub-header .add-new').classList.add('visible');
      break;

    default:
      break;
  }
};

const displayTitle = (categoryNode) => {
  const categoryTitle = categoryNode.getAttribute('title');

  showSpecificActionButtonsForSpecificCategories(categoryTitle);

  document.querySelector('.cxl-hub-title').innerHTML = categoryTitle;
};

const sidebarCategoryClickHandler = (event) => {
  const elementWithHandler = event.currentTarget;
  const layoutElement = document.querySelector('cxl-app-layout');

  if (!layoutElement.wide) {
    layoutElement.asideOpened = false;
  }

  event.preventDefault();

  document
    .querySelectorAll('#dashboard-sidebar-menu [is-category]')
    .forEach((el) => el.removeAttribute('checked'));

  if (elementWithHandler.parentNode.tagName.toLowerCase() === 'vaadin-accordion-panel') {
    document
      .querySelectorAll('#dashboard-sidebar-menu vaadin-accordion-panel')
      .forEach((el) => el.removeAttribute('opened'));
  }

  elementWithHandler.setAttribute('checked', true);

  displayTitle(elementWithHandler);
  displayTags(
    elementWithHandler.getAttribute('tags'),
    elementWithHandler.getAttribute('tags_elements_count')
  );

  const customEvent = new CustomEvent('cxl-dashboard-category-changed', {
    detail: {
      element: event.currentTarget,
      category: elementWithHandler.querySelector('[cxl-sidebar-title]')
        ? elementWithHandler.querySelector('[cxl-sidebar-title]').innerText
        : elementWithHandler.innerText,
    },
    bubbles: true,
  });

  elementWithHandler.dispatchEvent(customEvent);

  return false;
};

const RenderSidebarMenuItem = (menuItem) => html`
  ${menuItem.menu.length > 0
    ? html` <vaadin-accordion-panel theme="cxl-dashboard-sidebar">
        <div
          ?checked=${menuItem.isChecked}
          is-category
          tags="${JSON.stringify(menuItem.tags)}"
          title="${menuItem.title}"
          slot="summary"
          @click="${sidebarCategoryClickHandler}"
        >
          ${menuItem.title}
        </div>
        <div id="cxl-dashboard-items" class="cxl-hub-items">
          ${menuItem.menu.map(
            (subMenu) => html`
              <a
                ?checked=${subMenu.isChecked}
                is-category
                cxl-sidebar-link
                href="${subMenu.url}"
                tags="${JSON.stringify(subMenu.tags)}"
                tags_elements_count="${JSON.stringify(subMenu.tags_elements_count)}"
                title="${subMenu.title}"
                @click="${sidebarCategoryClickHandler}"
              >
                <span cxl-sidebar-title>${subMenu.title}</span>
                <span cxl-sidebar-playbooks-count>${subMenu.playbooks_count}</span>
              </a>
            `
          )}
        </div>
      </vaadin-accordion-panel>`
    : html`
        <a
          ?checked=${menuItem.isChecked}
          is-category
          one-level
          tags="${JSON.stringify(menuItem.tags)}"
          tags_elements_count="${JSON.stringify(menuItem.tags_elements_count)}"
          title="${menuItem.title}"
          href="${menuItem.url}"
          @click="${sidebarCategoryClickHandler}"
          >${menuItem.title}</a
        >
      `}
`;

const RenderSidebar = (defaultCheckedCategory) =>
  html`
    <h3>My Dashboard</h3>
    <div class="right-panel-info">
      <div><span>Study commitment:</span><b>16h/wk</b><a href="#">Edit</a></div>
      <div><span>Progress on schedule:</span><b>98% on time</b></div>
    </div>
    <h2 class="cxl-sidebar-header">Navigation</h2>
    <cxl-vaadin-accordion id="dashboard-sidebar-menu" theme="cxl-hub-sidebar">
      ${sidebarData.map((menuItem) => {
        // eslint-disable-next-line no-param-reassign
        menuItem.isChecked = menuItem.title === defaultCheckedCategory;
        // eslint-disable-next-line no-param-reassign
        menuItem.menu = menuItem.menu.map((subMenu) => {
          // eslint-disable-next-line no-param-reassign
          subMenu.isChecked = subMenu.title === defaultCheckedCategory;
          return subMenu;
        });
        return RenderSidebarMenuItem(menuItem);
      })}
    </cxl-vaadin-accordion>
  `;

export default RenderSidebar;
