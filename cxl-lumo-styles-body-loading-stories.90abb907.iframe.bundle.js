"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[8177,2529],{"./cxl-lumo-styles/body-loading.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLLoadingSpinner:()=>CXLLoadingSpinner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>body_loading_stories});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,dist=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),lit=__webpack_require__("../../node_modules/lit/index.js");__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js");const loading_css=(0,__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js").iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['html{--cxl-loading-spinner-url: url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255) none repeat scroll 0%25 0%25; display: block; shape-rendering: auto;" width="48px" height="48px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"%3E%3Ccircle cx="50" cy="50" fill="none" stroke="%23d61f2c" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138"%3E%3CanimateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"%3E%3C/animateTransform%3E%3C/circle%3E%3C/svg%3E\');--cxl-transition-duration: 0.5s}body::before{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background-color:#fff}body[unresolved]{overflow:hidden;will-change:opacity}body[unresolved]::before{z-index:2;content:var(--cxl-loading-spinner-url)}@keyframes cxl-dismiss{to{opacity:1}}body:not([unresolved]){opacity:0;animation:cxl-dismiss var(--cxl-transition-duration) forwards}:not(:defined){opacity:0;transition:opacity var(--cxl-transition-duration) ease-in-out}'])));var body_loading_stories_templateObject,layout_1c_stories=__webpack_require__("./cxl-ui/cxl-app-layout/layout=1c.stories.js");const body_loading_stories={parameters:{storySource:{source:"import { withKnobs } from '@storybook/addon-knobs';\nimport { html } from 'lit';\nimport cxlLoadingStyles from '@conversionxl/cxl-lumo-styles/src/styles/loading-css';\nimport { CXLAppLayout } from '../cxl-ui/cxl-app-layout/layout=1c.stories';\n\nexport default {\n  decorators: [withKnobs],\n  title: 'CXL Lumo Styles/Body',\n};\n\n/**\n * CXLLoadingSpinner.\n *\n * @param Loading\n * @returns {TemplateResult}\n * @constructor\n */\nexport const CXLLoadingSpinner = ({ Loading }) => {\n  setTimeout(() => {\n    if (Loading) {\n      document.body.setAttribute('unresolved', '');\n    } else {\n      document.body.removeAttribute('unresolved');\n    }\n  }, 1000);\n\n  return html`\n    <style>\n      ${cxlLoadingStyles}\n    </style>\n    ${CXLAppLayout()}\n  `;\n};\n\nObject.assign(CXLLoadingSpinner, {\n  args: {\n    Loading: true,\n  },\n  storyName: '[unresolved] loading',\n});\n",locationsMap:{"cxl-loading-spinner":{startLoc:{col:33,line:18},endLoc:{col:1,line:33},startBody:{col:33,line:18},endBody:{col:1,line:33}}}}},decorators:[dist.withKnobs],title:"CXL Lumo Styles/Body"};var CXLLoadingSpinner=function CXLLoadingSpinner(_ref){var Loading=_ref.Loading;return setTimeout((function(){Loading?document.body.setAttribute("unresolved",""):document.body.removeAttribute("unresolved")}),1e3),(0,lit.dy)(body_loading_stories_templateObject||(body_loading_stories_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n    <style>\n      ","\n    </style>\n    ","\n  "])),loading_css,(0,layout_1c_stories.CXLAppLayout)())};Object.assign(CXLLoadingSpinner,{args:{Loading:!0},storyName:"[unresolved] loading"}),CXLLoadingSpinner.parameters=Object.assign({storySource:{source:"({ Loading }) => {\n  setTimeout(() => {\n    if (Loading) {\n      document.body.setAttribute('unresolved', '');\n    } else {\n      document.body.removeAttribute('unresolved');\n    }\n  }, 1000);\n\n  return html`\n    <style>\n      ${cxlLoadingStyles}\n    </style>\n    ${CXLAppLayout()}\n  `;\n}"}},CXLLoadingSpinner.parameters);var __namedExportsOrder=["CXLLoadingSpinner"]},"./cxl-ui/cxl-app-layout/layout=1c.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLAppLayout:()=>CXLAppLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("../cxl-ui/src/components/cxl-app-layout.js"),__webpack_require__("../cxl-ui/src/components/cxl-marketing-nav.js"),__webpack_require__("../cxl-ui/src/components/cxl-section.js"),__webpack_require__("../../node_modules/@vaadin/tooltip/vaadin-tooltip.js"),__webpack_require__("./cxl-ui/cxl-marketing-nav.stories.js")),_footer_nav_stories__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./cxl-ui/footer-nav.stories.js"),_cxl_lumo_styles_elements_stories__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./cxl-lumo-styles/elements.stories.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { withKnobs, boolean, text } from '@storybook/addon-knobs';\nimport '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-section.js';\nimport '@vaadin/tooltip';\nimport { CXLMarketingNav } from '../cxl-marketing-nav.stories';\nimport { CXLFooterNav } from '../footer-nav.stories';\nimport { VaadinTooltip } from '../../cxl-lumo-styles/elements.stories';\n\nexport default {\n  decorators: [withKnobs],\n  title: 'CXL UI/cxl-app-layout',\n};\n\nexport const CXLAppLayout = () => {\n  const backgroundColor = text('Background color', 'var(--lumo-shade-5pct)');\n  const hasWave = boolean('Has wave bottom?', true);\n\n  return html`\n    <style>\n      .entry-content ul {\n        font-family: var(--cxl-lumo-font-secondary);\n      }\n    </style>\n\n    <cxl-app-layout id=\"container\" layout=\"1c\">\n      ${CXLMarketingNav()}\n\n      <article class=\"entry\">\n        <div class=\"entry-content\">\n          <cxl-section\n            class=\"alignwide has-background ${hasWave ? 'has-wave' : ''}\"\n            style=\"${backgroundColor ? `background-color: ${backgroundColor}` : ''}\"\n          >\n            ${VaadinTooltip(VaadinTooltip.args)}\n            <h2>\n              The difference between high-growth and slow-growth companies is the skill sets they\n              have to make it happen.\n            </h2>\n            <p>At CXL, we provide</p>\n            <ul>\n              <li>marketing training programs to people serious about their career,</li>\n              <li>\n                managed online revenue optimization & experimentation services to help mid-to-large\n                companies accelerate growth.\n              </li>\n            </ul>\n            <p>\n              <vaadin-button theme=\"primary large\"\n                >Marketing training <vaadin-icon icon=\"lumo:angle-right\" slot=\"suffix\"></vaadin-icon\n              ></vaadin-button>\n              <vaadin-button theme=\"primary large contrast\"\n                >Managed services <vaadin-icon icon=\"lumo:angle-right\" slot=\"suffix\"></vaadin-icon\n              ></vaadin-button>\n            </p>\n          </cxl-section>\n          <cxl-section>\n            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>\n            <p>\n              Getting results you want with conversion optimization and experimentation is all about\n              knowing what to do. It’s a field where you need to know a lot about a lot, and this\n              program contains it all.\n            </p>\n            <p>After completing it you will</p>\n            <ul>\n              <li>improve your skills in conversion optimization, UX, and web analytics,</li>\n              <li>understand what works on websites, and what doesn't,</li>\n              <li>develop better A/B tests that win more often.</li>\n            </ul>\n          </cxl-section>\n        </div>\n      </article>\n\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n};\n\nCXLAppLayout.storyName = '[layout=1c] (default)';\n",locationsMap:{"cxl-app-layout":{startLoc:{col:28,line:16},endLoc:{col:1,line:78},startBody:{col:28,line:16},endBody:{col:1,line:78}}}}},decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs],title:"CXL UI/cxl-app-layout"};var CXLAppLayout=function CXLAppLayout(){var backgroundColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Background color","var(--lumo-shade-5pct)"),hasWave=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has wave bottom?",!0);return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n    <style>\n      .entry-content ul {\n        font-family: var(--cxl-lumo-font-secondary);\n      }\n    </style>\n\n    <cxl-app-layout id="container" layout="1c">\n      ','\n\n      <article class="entry">\n        <div class="entry-content">\n          <cxl-section\n            class="alignwide has-background ','"\n            style="','"\n          >\n            ','\n            <h2>\n              The difference between high-growth and slow-growth companies is the skill sets they\n              have to make it happen.\n            </h2>\n            <p>At CXL, we provide</p>\n            <ul>\n              <li>marketing training programs to people serious about their career,</li>\n              <li>\n                managed online revenue optimization & experimentation services to help mid-to-large\n                companies accelerate growth.\n              </li>\n            </ul>\n            <p>\n              <vaadin-button theme="primary large"\n                >Marketing training <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n              <vaadin-button theme="primary large contrast"\n                >Managed services <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n            </p>\n          </cxl-section>\n          <cxl-section>\n            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>\n            <p>\n              Getting results you want with conversion optimization and experimentation is all about\n              knowing what to do. It’s a field where you need to know a lot about a lot, and this\n              program contains it all.\n            </p>\n            <p>After completing it you will</p>\n            <ul>\n              <li>improve your skills in conversion optimization, UX, and web analytics,</li>\n              <li>understand what works on websites, and what doesn\'t,</li>\n              <li>develop better A/B tests that win more often.</li>\n            </ul>\n          </cxl-section>\n        </div>\n      </article>\n\n      ',"\n    </cxl-app-layout>\n  "])),(0,_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_8__.CXLMarketingNav)(),hasWave?"has-wave":"",backgroundColor?"background-color: "+backgroundColor:"",(0,_cxl_lumo_styles_elements_stories__WEBPACK_IMPORTED_MODULE_10__.VaadinTooltip)(_cxl_lumo_styles_elements_stories__WEBPACK_IMPORTED_MODULE_10__.VaadinTooltip.args),(0,_footer_nav_stories__WEBPACK_IMPORTED_MODULE_9__.CXLFooterNav)())};CXLAppLayout.storyName="[layout=1c] (default)",CXLAppLayout.parameters=Object.assign({storySource:{source:'() => {\n  const backgroundColor = text(\'Background color\', \'var(--lumo-shade-5pct)\');\n  const hasWave = boolean(\'Has wave bottom?\', true);\n\n  return html`\n    <style>\n      .entry-content ul {\n        font-family: var(--cxl-lumo-font-secondary);\n      }\n    </style>\n\n    <cxl-app-layout id="container" layout="1c">\n      ${CXLMarketingNav()}\n\n      <article class="entry">\n        <div class="entry-content">\n          <cxl-section\n            class="alignwide has-background ${hasWave ? \'has-wave\' : \'\'}"\n            style="${backgroundColor ? `background-color: ${backgroundColor}` : \'\'}"\n          >\n            ${VaadinTooltip(VaadinTooltip.args)}\n            <h2>\n              The difference between high-growth and slow-growth companies is the skill sets they\n              have to make it happen.\n            </h2>\n            <p>At CXL, we provide</p>\n            <ul>\n              <li>marketing training programs to people serious about their career,</li>\n              <li>\n                managed online revenue optimization & experimentation services to help mid-to-large\n                companies accelerate growth.\n              </li>\n            </ul>\n            <p>\n              <vaadin-button theme="primary large"\n                >Marketing training <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n              <vaadin-button theme="primary large contrast"\n                >Managed services <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n            </p>\n          </cxl-section>\n          <cxl-section>\n            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>\n            <p>\n              Getting results you want with conversion optimization and experimentation is all about\n              knowing what to do. It’s a field where you need to know a lot about a lot, and this\n              program contains it all.\n            </p>\n            <p>After completing it you will</p>\n            <ul>\n              <li>improve your skills in conversion optimization, UX, and web analytics,</li>\n              <li>understand what works on websites, and what doesn\'t,</li>\n              <li>develop better A/B tests that win more often.</li>\n            </ul>\n          </cxl-section>\n        </div>\n      </article>\n\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n}'}},CXLAppLayout.parameters);var __namedExportsOrder=["CXLAppLayout"]},"./cxl-ui/footer-nav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFooterNav:()=>CXLFooterNav,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { html } from \'lit\';\n\nexport default {\n  title: \'CXL UI/footer\',\n};\n\nexport const CXLFooterNav = () => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`;\n\nCXLFooterNav.storyName = \'nav\';\n',locationsMap:{"cxl-footer-nav":{startLoc:{col:28,line:7},endLoc:{col:1,line:48},startBody:{col:28,line:7},endBody:{col:1,line:48}}}}},title:"CXL UI/footer"};var CXLFooterNav=function CXLFooterNav(){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n'])))};CXLFooterNav.storyName="nav",CXLFooterNav.parameters=Object.assign({storySource:{source:'() => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`'}},CXLFooterNav.parameters);var __namedExportsOrder=["CXLFooterNav"]}}]);