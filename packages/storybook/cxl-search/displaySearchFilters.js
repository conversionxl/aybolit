import { html } from 'lit-html';
import filtersData from './data/search-filters.data.json';

const initDefaultOrStorageValue = (combo, type, defaultVal) => {
  const prevVal = localStorage.getItem(`cxl_search_${type}`);
  // no "prevVal || defaultValue" possible since it can be 0 which is valid index
  // eslint-disable-next-line no-param-reassign
  combo.value = prevVal !== null ? prevVal : defaultVal;
};


const showHideListener = (combo) => {
  if(combo.querySelector('.anchor')) {
    // eslint-disable-next-line no-param-reassign
    combo.querySelector('.anchor').onclick = () => {
      if (combo.classList.contains('visible'))
        combo.classList.remove('visible');
      else
        combo.classList.add('visible');
    }
  }
  // eslint-disable-next-line no-param-reassign
  combo.querySelector('.items').onblur = () => {
    console.log("BLUR!!");
    combo.classList.remove('visible');
  };
}


const setupListenerAndValue = (combo, type, defaultVal) => {
  showHideListener(combo);
  combo.addEventListener('change', (event) => {
    localStorage.setItem(`cxl_search_${type}`, event.target.value);
  });
  initDefaultOrStorageValue(combo, type, defaultVal);
};


const renderComboSingle = (items, label, id) => html`
    <div id="${id}" class="dropdown-check-list" tabindex="100">
      <div class="combo-label">${label}</div>
      <select class="items">
        ${items.map((item) => html`<option id="${item.id}">${item.name}</option>`) }
      </select>
    </div>`

const handleCheckboxClick = (evt) => {
  const currentDropdown = evt.target.parentNode.parentNode.parentNode;
  const anchor = currentDropdown.querySelector(".multiselect-anchor-text");
  const firstChecked = currentDropdown.querySelector("input[type='checkbox']:checked");

  anchor.innerHTML =  firstChecked ? `${firstChecked.parentNode.innerText} (...)` : `Any`;
};

const renderCombo = (items, label, id) => html`
    <div id="${id}" class="dropdown-check-list" tabindex="100">
      <div class="combo-label">${label}</div>
      <span class="anchor">
        <span class="multiselect-anchor-text">Any</span> <span class="fs-arrow"></span>
      </span>
      <ul class="items">
        ${items.map((item) => html`<li><input type="checkbox" id="${item.id}" @change=${handleCheckboxClick} />${item.name} </li>`) }
      </ul>
    </div>`

const initCombo = (type) => {
  const combo = document.querySelector(`#${type}-combo`);
  let data;

  switch (type) {
    case 'category':
      data = filtersData.categories;
      break;
    case 'topic':
      data = filtersData.topics;
      break;
    case 'sort':
      data = filtersData.sort_type;
      break;
    default:
      throw new Error(`No combo type ${type} available`);
  }

  const defaultValue = data[0].id;

  combo.items = data;

  setupListenerAndValue(combo, type, defaultValue);
};

const hideSelectMenuWhenNotFocused = () => {
  document.addEventListener('click', (evt) => {
    document.querySelectorAll('.dropdown-check-list .items').forEach((el) => {
      if(! el.parentNode.classList.contains('visible')){
        return;
      }

      const t = evt.target;
      const anchor = el.parentNode.querySelector('.anchor');

      const optionsClicked = (
         t === anchor ||
         t === el ||
        (t.parentNode && t.parentNode === el) ||
        (t.parentNode.parentNode && t.parentNode.parentNode === el)
      );

      if(!optionsClicked)
      {
        el.parentNode.classList.remove('visible');
      }
    });
  });
}

const init = () => {
  document.addEventListener("DOMContentLoaded", () => {
    initCombo('category');
    initCombo('topic');
    initCombo('sort');
    hideSelectMenuWhenNotFocused();

  });

};

export const displaySearchFilters = () => html`
  <style>
    :focus {
      outline: 0;
    }
    .fs-arrow {
      width: 0;
      height: 0;
      border-left: var(--lumo-space-xs) solid transparent;
      border-right: var(--lumo-space-xs) solid transparent;
      border-top: var(--lumo-space-xs) solid var(--lumo-header-text-color);
      position: absolute;
      top: 0;
      right: var(--lumo-space-xs);
      bottom: 0;
      margin: auto;
      transition: ease-in 0.15s;
    }

    .combo-label {
      display:block;
    }
    .dropdown-check-list {
      display: inline-block;
    }

    .dropdown-check-list select.items {
      padding: var(--lumo-space-s);
      font-size: var(--lumo-font-size-m);
    }

    .dropdown-check-list .anchor {
      position: relative;
      cursor: pointer;
      display: inline-block;
      padding-top: var(--lumo-space-xs);
      padding-right: calc(var(--lumo-space-xl) * 2.5);
      padding-bottom: var(--lumo-space-xs);
      padding-left: var(--lumo-space-s);
      /*  padding: 5px 50px 5px 10px; */
      border: 1px solid  var(--lumo-secondary-text-color);
    }


    .dropdown-check-list .anchor:active:after {
      right: 8px;
      top: 21%;
    }

    .dropdown-check-list ul.items {
      padding: 2px;
      display: none;
      margin: 0;
      border: 1px solid  var(--lumo-secondary-text-color);
      border-top: none;
    }

    .dropdown-check-list ul.items li {
      list-style: none;
    }

    .dropdown-check-list.visible .items {
      display: block;
    }
  </style>

  ${renderCombo(filtersData.categories, "Filter by categories", 'category-combo')}
  ${renderCombo(filtersData.topics, "Filter by topics", 'topic-combo')}
  ${renderComboSingle(filtersData.sort_type, "Sort", 'sort-combo')}

  ${init()}
`;

export default {
  title: 'CXL Search/Search Filters',
};
