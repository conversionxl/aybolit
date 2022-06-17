/**
 * @see https://github.com/vaadin/web-components/blob/23.1/packages/vaadin-themable-mixin/vaadin-themable-mixin.js#L36-L58
 * @todo Align with Vaadin v23.1+.
 */
import '@vaadin/polymer-legacy-adapter';

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
