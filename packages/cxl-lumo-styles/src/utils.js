/**
 * Polymer legacy adapter is required for at least:
 * template-renderer.js: Adds declarative <template> APIs with Polymer binding support to Vaadin components.
 *
 * @see https://github.com/vaadin/web-components/issues/2642
 * @see https://github.com/vaadin/web-components/tree/23.3/packages/polymer-legacy-adapter
 * @see https://github.com/vaadin/web-components/blob/23.1/packages/vaadin-themable-mixin/vaadin-themable-mixin.js#L36-L58
 */
import '@vaadin/polymer-legacy-adapter/template-renderer';

/**
 * @see https://github.com/vaadin/web-components/issues/2642
 * @todo Align with Vaadin v23.1+.
 */
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
      const styleElement = document.createElement('style');

      styleElement.id = themeId;
      styleElement.innerHTML = `${cssResult.toString()}`;
      document.head.appendChild(styleElement);

      styleMap[cssResult] = themeId;
    }
  });
};
