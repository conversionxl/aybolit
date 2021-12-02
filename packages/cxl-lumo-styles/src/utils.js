// @see https://github.com/vaadin/vaadin-themable-mixin/blob/v1.5.2/register-styles.html
import { css, CSSResult, unsafeCSS } from 'lit-element';

let moduleIdIndex = 0;
const styleMap = {};

export const registerGlobalStyles = (styles, options) => {
  const themeId =
    (options && options.moduleId) || `cxl-global-style-module-${(moduleIdIndex += 1)}`;

  if (!Array.isArray(styles)) {
    // eslint-disable-next-line no-param-reassign
    styles = styles ? [styles] : [];
  }

  styles.forEach((cssResult) => {
    if (!(cssResult instanceof CSSResult)) {
      // After upgrading vaadin components (37967abeb35bc5382021fcc46095ee31a), cssResult is no long of type CSSResult.
      // throw new Error('An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.');

      // eslint-disable-next-line no-param-reassign
      cssResult = css`
        ${unsafeCSS(cssResult)}
      `;
    }

    if (!styleMap[cssResult]) {
      const templateElement = document.createElement('template');
      templateElement.innerHTML = `
        <style id="${themeId}">${cssResult.toString()}</style>
      `;
      document.head.append(templateElement.content);

      styleMap[cssResult] = themeId;
    }
  });
};
