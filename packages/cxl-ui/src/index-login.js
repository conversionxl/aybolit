import '@cxl-lumo-styles/src/color.js';
import '@cxl-lumo-styles/src/typography.js';
import loginStyles from '@cxl-ui/src/styles/cxl-login-css';

const $template = document.createElement('template');
$template.innerHTML = `
  <custom-style>
    <style id="cxl-login-styles">${loginStyles}</style>
  </custom-style>
`;
document.head.appendChild($template.content);

