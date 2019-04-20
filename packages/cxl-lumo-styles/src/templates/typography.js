import '@vaadin/vaadin-lumo-styles/typography';
import lumoTypography from '../styles/typography-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${lumoTypography}</style>
</custom-style>`;

document.head.appendChild($template.content);
