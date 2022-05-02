import { html } from 'lit';

export const style = html`
  <style>
    [active] {
      background-color: var(--lumo-shade-10pct);
    }

    [match]:not([active]) {
      background-color: var(--lumo-primary-color);
    }

    .captions span {
      cursor: pointer;
      border-radius: var(--lumo-space-s);
      line-height: var(--lumo-line-height-s);
      /* padding: var(--lumo-space-xs); */
    }

    .captions span:hover {
      color: var(--lumo-primary-color);
    }

    .flex {
      display: flex;
      height: 100%;
    }

    .flex.column {
      flex-direction: column;
    }

    .flex.grow {
      flex-grow: 1;
    }

    .grid {
      display: grid;
    }

    .height-50 {
      height: 50%;
    }

    .height-100 {
      height: 100%;
    }

    .overflow-hidden {
      overflow: hidden;
    }

    .padding {
      padding: var(--lumo-space-s);
    }

    .scroll {
      overflow: auto;
    }

    .search {
      background-color: #000;
      color: #fff;
    }

    mark {
      background-color: var(--lumo-primary-color);
      color: #fff;
    }
  </style>
`;
