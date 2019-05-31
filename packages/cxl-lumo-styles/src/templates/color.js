import lumoColors from '../styles/color-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${lumoColors}</style>
</custom-style>`;

document.head.appendChild($template.content);