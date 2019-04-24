import lumoVaadinDetails from '../styles/vaadin-details-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<dom-module id="cxl-lumo-details" theme-for="vaadin-details">
  <template>
    <style>${lumoVaadinDetails}</style>
  </template>
</custom-style>`;

document.head.appendChild($template.content);
