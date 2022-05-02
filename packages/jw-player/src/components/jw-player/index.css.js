import { html } from 'lit';

export const style = html`
  <style>
    [active] {
      background-color: var(--lumo-primary-color);
      border-radius: var(--lumo-space-s);
      color: #fff;
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
      cursor: pointer;
      padding: 0.5rem;
    }
  </style>
`;
