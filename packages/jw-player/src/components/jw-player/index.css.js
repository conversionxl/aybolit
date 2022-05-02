import { html } from 'lit';

export const style = html`
  <style>
    [active] {
      background-color: var(--lumo-shade-10pct);
      /* color: #fff; */
    }

    [match]:not([active]) {
      background-color: yellow;
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

    li {
      border-radius: var(--lumo-space-s);
      cursor: pointer;
      padding: 0.5rem;
    }

    ul {
      margin-block-start: 0;
    }
  </style>
`;
