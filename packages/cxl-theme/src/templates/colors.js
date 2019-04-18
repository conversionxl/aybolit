import '@vaadin/vaadin-lumo-styles/color.js';
import styles from '../styles/colors-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${styles}</style>
</custom-style>`;

document.head.appendChild($template.content);
