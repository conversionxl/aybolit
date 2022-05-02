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
      border-radius: var(--lumo-space-xs);
      padding: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    }

    .captions span:hover {
      color: var(--lumo-primary-color);
    }

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
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

    .gap {
      gap: var(--lumo-space-m);
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

    .search input {
      border-radius: var(--lumo-space-xs);
      color: var(--lumo-shade);
      line-height: var(--lumo-line-height);
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    mark {
      background-color: var(--lumo-primary-color);
      color: #fff;
    }
  </style>
`;
