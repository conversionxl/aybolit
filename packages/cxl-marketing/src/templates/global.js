import globalStyles from '../styles/global-css.js';

const $template = document.createElement('template');

$template.innerHTML = `
<custom-style>
  <style>${globalStyles}</style>
</custom-style>`;

document.head.appendChild($template.content);
