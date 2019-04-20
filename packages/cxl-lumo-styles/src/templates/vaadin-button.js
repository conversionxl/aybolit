import lumoVaadinButton from '../styles/vaadin-button-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="lumo-button-edit" theme-for="vaadin-button">
  <template>
    <style>${lumoVaadinButton}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
