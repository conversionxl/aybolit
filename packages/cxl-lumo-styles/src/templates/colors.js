import '@vaadin/vaadin-lumo-styles/color.js';
import lumoColors from '../styles/colors-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${lumoColors}</style>
</custom-style>`;

document.head.appendChild($template.content);
