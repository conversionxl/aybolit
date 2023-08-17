"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[2529],{"./cxl-lumo-styles/elements.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VaadinBadge:()=>VaadinBadge,VaadinButton:()=>VaadinButton,VaadinHorizontalLayout:()=>VaadinHorizontalLayout,VaadinNotification:()=>VaadinNotification,VaadinTooltip:()=>VaadinTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../../node_modules/@vaadin/button/vaadin-button.js"),__webpack_require__("../../node_modules/@vaadin/notification/vaadin-notification.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { withKnobs, boolean } from '@storybook/addon-knobs';\nimport '@conversionxl/cxl-lumo-styles';\nimport '@vaadin/button';\nimport '@vaadin/notification';\n\nexport default {\n  decorators: [withKnobs],\n  title: 'CXL Lumo Styles/Elements',\n};\n\n/**\n * VaadinButton.\n *\n * @param Label\n * @returns {TemplateResult}\n * @constructor\n */\nexport const VaadinButton = ({ Label }) => html`\n  <h6>Basic</h6>\n  <vaadin-button>${Label}</vaadin-button>\n  <h6>Disabled</h6>\n  <vaadin-button disabled>${Label}</vaadin-button>\n  <h6>Primary</h6>\n  <vaadin-button theme=\"primary\">${Label}</vaadin-button>\n  <h6>Primary Contrast</h6>\n  <vaadin-button theme=\"primary contrast\">${Label}</vaadin-button>\n  <h6>Secondary</h6>\n  <vaadin-button>${Label}</vaadin-button>\n  <h6>Tertiary</h6>\n  <vaadin-button theme=\"tertiary\">${Label}</vaadin-button>\n  <h6>Tertiary inline</h6>\n  <vaadin-button theme=\"tertiary-inline\">${Label}</vaadin-button>\n  <h6>Upstream</h6>\n  <p>\n    Also see\n    <a href=\"https://vaadin.com/components/vaadin-button/html-examples\"\n      >https://vaadin.com/components/vaadin-button/html-examples</a\n    >\n  </p>\n`;\n\nObject.assign(VaadinButton, {\n  args: {\n    Label: 'Button',\n  },\n  storyName: 'vaadin-button',\n});\n\n/**\n * VaadinHorizontalLayout.\n *\n * @returns {TemplateResult}\n * @constructor\n */\nexport const VaadinHorizontalLayout = () => html`\n  <vaadin-horizontal-layout theme=\"padding spacing\" style=\"justify-content: center;\">\n    <vaadin-button>Button One</vaadin-button>\n    <vaadin-button>Button Two</vaadin-button>\n    <vaadin-button>Button Three</vaadin-button>\n  </vaadin-horizontal-layout>\n`;\n\nObject.assign(VaadinHorizontalLayout, {\n  storyName: 'vaadin-horizontal-layout',\n});\n\n/**\n * VaadinNotification.\n *\n * @param Duration\n * @param Position\n * @param Theme\n * @returns {TemplateResult}\n * @constructor\n */\nexport const VaadinNotification = ({ Duration, Position, Theme }) => html`\n  <vaadin-notification position=\"${Position}\" duration=\"${Duration}\" theme=\"${Theme}\">\n    <template>\n      \x3c!-- Must be static, or story will crash when editing Message control. --\x3e\n      <div>Eat, sleep and pray well.</div>\n    </template>\n  </vaadin-notification>\n  <vaadin-button theme=\"primary\" onclick=\"document.querySelector('vaadin-notification').open()\"\n    >Trigger notification</vaadin-button\n  >\n  <p>\n    We have optimized upstream flexbox CSS specifically for\n    <strong>\"(bottom|top)-center\"</strong> and <strong>\"middle\"</strong> positions.\n  </p>\n  <p>This causes display glitches for other positions.</p>\n  <p>\n    Also see\n    <a href=\"https://vaadin.com/components/vaadin-notification/html-examples\"\n      >https://vaadin.com/components/vaadin-notification/html-examples</a\n    >\n  </p>\n`;\n\nObject.assign(VaadinNotification, {\n  args: {\n    Duration: 3000,\n    Position: 'top-center',\n    Theme: 'default',\n  },\n  argTypes: {\n    Position: {\n      control: {\n        options: [\n          'top-stretch',\n          'top-start',\n          'top-center',\n          'top-end',\n          'middle',\n          'bottom-start',\n          'bottom-center',\n          'bottom-end',\n          'bottom-stretch',\n        ],\n        type: 'inline-radio',\n      },\n    },\n    Theme: {\n      control: {\n        options: ['default', 'primary', 'contrast', 'success', 'error'],\n        type: 'inline-radio',\n      },\n    },\n  },\n  storyName: 'vaadin-notification',\n});\n\n/**\n * VaadinTooltip.\n *\n * @param Text\n * @returns {TemplateResult}\n * @constructor\n */\nexport const VaadinTooltip = ({ Text }) => {\n  const manualTrigger = boolean('Manual trigger', false);\n\n  return html`\n    <h1 id=\"h1-entry-title\" class=\"entry-title\" style=\"margin-top: 0.75em;\">\n      <vaadin-tooltip\n        for=\"h1-entry-title\"\n        ?opened=${manualTrigger}\n        ?manual=${manualTrigger}\n        position=\"top-start\"\n        text=\"${Text}\"\n      ></vaadin-tooltip>\n      Grow faster.\n    </h1>\n  `;\n};\n\nObject.assign(VaadinTooltip, {\n  args: {\n    Text: 'Status: publish',\n  },\n  storyName: 'vaadin-tooltip',\n});\n\nexport const VaadinBadge = () => html`\n  <span theme=\"badge\">Badge</span>\n  <span theme=\"badge success\">Success</span>\n  <span theme=\"badge error\">Error</span>\n  <span theme=\"badge contrast\">Contrast</span>\n`;\n\nObject.assign(VaadinBadge, {\n  args: {\n    Label: 'Badge',\n  },\n  storyName: 'Badge',\n});\n",locationsMap:{"vaadin-button":{startLoc:{col:28,line:19},endLoc:{col:1,line:41},startBody:{col:28,line:19},endBody:{col:1,line:41}},"vaadin-horizontal-layout":{startLoc:{col:38,line:56},endLoc:{col:1,line:62},startBody:{col:38,line:56},endBody:{col:1,line:62}},"vaadin-notification":{startLoc:{col:34,line:77},endLoc:{col:1,line:98},startBody:{col:34,line:77},endBody:{col:1,line:98}},"vaadin-tooltip":{startLoc:{col:29,line:140},endLoc:{col:1,line:155},startBody:{col:29,line:140},endBody:{col:1,line:155}},"vaadin-badge":{startLoc:{col:27,line:164},endLoc:{col:1,line:169},startBody:{col:27,line:164},endBody:{col:1,line:169}}}}},decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs],title:"CXL Lumo Styles/Elements"};var VaadinButton=function VaadinButton(_ref){var Label=_ref.Label;return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  <h6>Basic</h6>\n  <vaadin-button>","</vaadin-button>\n  <h6>Disabled</h6>\n  <vaadin-button disabled>",'</vaadin-button>\n  <h6>Primary</h6>\n  <vaadin-button theme="primary">','</vaadin-button>\n  <h6>Primary Contrast</h6>\n  <vaadin-button theme="primary contrast">',"</vaadin-button>\n  <h6>Secondary</h6>\n  <vaadin-button>",'</vaadin-button>\n  <h6>Tertiary</h6>\n  <vaadin-button theme="tertiary">','</vaadin-button>\n  <h6>Tertiary inline</h6>\n  <vaadin-button theme="tertiary-inline">','</vaadin-button>\n  <h6>Upstream</h6>\n  <p>\n    Also see\n    <a href="https://vaadin.com/components/vaadin-button/html-examples"\n      >https://vaadin.com/components/vaadin-button/html-examples</a\n    >\n  </p>\n'])),Label,Label,Label,Label,Label,Label,Label)};Object.assign(VaadinButton,{args:{Label:"Button"},storyName:"vaadin-button"});var VaadinHorizontalLayout=function VaadinHorizontalLayout(){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n  <vaadin-horizontal-layout theme="padding spacing" style="justify-content: center;">\n    <vaadin-button>Button One</vaadin-button>\n    <vaadin-button>Button Two</vaadin-button>\n    <vaadin-button>Button Three</vaadin-button>\n  </vaadin-horizontal-layout>\n'])))};Object.assign(VaadinHorizontalLayout,{storyName:"vaadin-horizontal-layout"});var VaadinNotification=function VaadinNotification(_ref2){var Duration=_ref2.Duration,Position=_ref2.Position,Theme=_ref2.Theme;return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['\n  <vaadin-notification position="','" duration="','" theme="','">\n    <template>\n      \x3c!-- Must be static, or story will crash when editing Message control. --\x3e\n      <div>Eat, sleep and pray well.</div>\n    </template>\n  </vaadin-notification>\n  <vaadin-button theme="primary" onclick="document.querySelector(\'vaadin-notification\').open()"\n    >Trigger notification</vaadin-button\n  >\n  <p>\n    We have optimized upstream flexbox CSS specifically for\n    <strong>"(bottom|top)-center"</strong> and <strong>"middle"</strong> positions.\n  </p>\n  <p>This causes display glitches for other positions.</p>\n  <p>\n    Also see\n    <a href="https://vaadin.com/components/vaadin-notification/html-examples"\n      >https://vaadin.com/components/vaadin-notification/html-examples</a\n    >\n  </p>\n'])),Position,Duration,Theme)};Object.assign(VaadinNotification,{args:{Duration:3e3,Position:"top-center",Theme:"default"},argTypes:{Position:{control:{options:["top-stretch","top-start","top-center","top-end","middle","bottom-start","bottom-center","bottom-end","bottom-stretch"],type:"inline-radio"}},Theme:{control:{options:["default","primary","contrast","success","error"],type:"inline-radio"}}},storyName:"vaadin-notification"});var VaadinTooltip=function VaadinTooltip(_ref3){var Text=_ref3.Text,manualTrigger=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Manual trigger",!1);return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n    <h1 id="h1-entry-title" class="entry-title" style="margin-top: 0.75em;">\n      <vaadin-tooltip\n        for="h1-entry-title"\n        ?opened=',"\n        ?manual=",'\n        position="top-start"\n        text="','"\n      ></vaadin-tooltip>\n      Grow faster.\n    </h1>\n  '])),manualTrigger,manualTrigger,Text)};Object.assign(VaadinTooltip,{args:{Text:"Status: publish"},storyName:"vaadin-tooltip"});var VaadinBadge=function VaadinBadge(){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(['\n  <span theme="badge">Badge</span>\n  <span theme="badge success">Success</span>\n  <span theme="badge error">Error</span>\n  <span theme="badge contrast">Contrast</span>\n'])))};Object.assign(VaadinBadge,{args:{Label:"Badge"},storyName:"Badge"}),VaadinButton.parameters=Object.assign({storySource:{source:'({ Label }) => html`\n  <h6>Basic</h6>\n  <vaadin-button>${Label}</vaadin-button>\n  <h6>Disabled</h6>\n  <vaadin-button disabled>${Label}</vaadin-button>\n  <h6>Primary</h6>\n  <vaadin-button theme="primary">${Label}</vaadin-button>\n  <h6>Primary Contrast</h6>\n  <vaadin-button theme="primary contrast">${Label}</vaadin-button>\n  <h6>Secondary</h6>\n  <vaadin-button>${Label}</vaadin-button>\n  <h6>Tertiary</h6>\n  <vaadin-button theme="tertiary">${Label}</vaadin-button>\n  <h6>Tertiary inline</h6>\n  <vaadin-button theme="tertiary-inline">${Label}</vaadin-button>\n  <h6>Upstream</h6>\n  <p>\n    Also see\n    <a href="https://vaadin.com/components/vaadin-button/html-examples"\n      >https://vaadin.com/components/vaadin-button/html-examples</a\n    >\n  </p>\n`'}},VaadinButton.parameters),VaadinHorizontalLayout.parameters=Object.assign({storySource:{source:'() => html`\n  <vaadin-horizontal-layout theme="padding spacing" style="justify-content: center;">\n    <vaadin-button>Button One</vaadin-button>\n    <vaadin-button>Button Two</vaadin-button>\n    <vaadin-button>Button Three</vaadin-button>\n  </vaadin-horizontal-layout>\n`'}},VaadinHorizontalLayout.parameters),VaadinNotification.parameters=Object.assign({storySource:{source:'({ Duration, Position, Theme }) => html`\n  <vaadin-notification position="${Position}" duration="${Duration}" theme="${Theme}">\n    <template>\n      \x3c!-- Must be static, or story will crash when editing Message control. --\x3e\n      <div>Eat, sleep and pray well.</div>\n    </template>\n  </vaadin-notification>\n  <vaadin-button theme="primary" onclick="document.querySelector(\'vaadin-notification\').open()"\n    >Trigger notification</vaadin-button\n  >\n  <p>\n    We have optimized upstream flexbox CSS specifically for\n    <strong>"(bottom|top)-center"</strong> and <strong>"middle"</strong> positions.\n  </p>\n  <p>This causes display glitches for other positions.</p>\n  <p>\n    Also see\n    <a href="https://vaadin.com/components/vaadin-notification/html-examples"\n      >https://vaadin.com/components/vaadin-notification/html-examples</a\n    >\n  </p>\n`'}},VaadinNotification.parameters),VaadinTooltip.parameters=Object.assign({storySource:{source:'({ Text }) => {\n  const manualTrigger = boolean(\'Manual trigger\', false);\n\n  return html`\n    <h1 id="h1-entry-title" class="entry-title" style="margin-top: 0.75em;">\n      <vaadin-tooltip\n        for="h1-entry-title"\n        ?opened=${manualTrigger}\n        ?manual=${manualTrigger}\n        position="top-start"\n        text="${Text}"\n      ></vaadin-tooltip>\n      Grow faster.\n    </h1>\n  `;\n}'}},VaadinTooltip.parameters),VaadinBadge.parameters=Object.assign({storySource:{source:'() => html`\n  <span theme="badge">Badge</span>\n  <span theme="badge success">Success</span>\n  <span theme="badge error">Error</span>\n  <span theme="badge contrast">Contrast</span>\n`'}},VaadinBadge.parameters);var __namedExportsOrder=["VaadinButton","VaadinHorizontalLayout","VaadinNotification","VaadinTooltip","VaadinBadge"]},"./cxl-ui/cxl-app-layout/layout=1c.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLAppLayout:()=>CXLAppLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("../cxl-ui/src/components/cxl-app-layout.js"),__webpack_require__("../cxl-ui/src/components/cxl-marketing-nav.js"),__webpack_require__("../cxl-ui/src/components/cxl-section.js"),__webpack_require__("../../node_modules/@vaadin/tooltip/vaadin-tooltip.js"),__webpack_require__("./cxl-ui/cxl-marketing-nav.stories.js")),_footer_nav_stories__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./cxl-ui/footer-nav.stories.js"),_cxl_lumo_styles_elements_stories__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./cxl-lumo-styles/elements.stories.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { withKnobs, boolean, text } from '@storybook/addon-knobs';\nimport '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-section.js';\nimport '@vaadin/tooltip';\nimport { CXLMarketingNav } from '../cxl-marketing-nav.stories';\nimport { CXLFooterNav } from '../footer-nav.stories';\nimport { VaadinTooltip } from '../../cxl-lumo-styles/elements.stories';\n\nexport default {\n  decorators: [withKnobs],\n  title: 'CXL UI/cxl-app-layout',\n};\n\nexport const CXLAppLayout = () => {\n  const backgroundColor = text('Background color', 'var(--lumo-shade-5pct)');\n  const hasWave = boolean('Has wave bottom?', true);\n\n  return html`\n    <style>\n      .entry-content ul {\n        font-family: var(--cxl-lumo-font-secondary);\n      }\n    </style>\n\n    <cxl-app-layout id=\"container\" layout=\"1c\">\n      ${CXLMarketingNav()}\n\n      <article class=\"entry\">\n        <div class=\"entry-content\">\n          <cxl-section\n            class=\"alignwide has-background ${hasWave ? 'has-wave' : ''}\"\n            style=\"${backgroundColor ? `background-color: ${backgroundColor}` : ''}\"\n          >\n            ${VaadinTooltip(VaadinTooltip.args)}\n            <h2>\n              The difference between high-growth and slow-growth companies is the skill sets they\n              have to make it happen.\n            </h2>\n            <p>At CXL, we provide</p>\n            <ul>\n              <li>marketing training programs to people serious about their career,</li>\n              <li>\n                managed online revenue optimization & experimentation services to help mid-to-large\n                companies accelerate growth.\n              </li>\n            </ul>\n            <p>\n              <vaadin-button theme=\"primary large\"\n                >Marketing training <vaadin-icon icon=\"lumo:angle-right\" slot=\"suffix\"></vaadin-icon\n              ></vaadin-button>\n              <vaadin-button theme=\"primary large contrast\"\n                >Managed services <vaadin-icon icon=\"lumo:angle-right\" slot=\"suffix\"></vaadin-icon\n              ></vaadin-button>\n            </p>\n          </cxl-section>\n          <cxl-section>\n            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>\n            <p>\n              Getting results you want with conversion optimization and experimentation is all about\n              knowing what to do. It’s a field where you need to know a lot about a lot, and this\n              program contains it all.\n            </p>\n            <p>After completing it you will</p>\n            <ul>\n              <li>improve your skills in conversion optimization, UX, and web analytics,</li>\n              <li>understand what works on websites, and what doesn't,</li>\n              <li>develop better A/B tests that win more often.</li>\n            </ul>\n          </cxl-section>\n        </div>\n      </article>\n\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n};\n\nCXLAppLayout.storyName = '[layout=1c] (default)';\n",locationsMap:{"cxl-app-layout":{startLoc:{col:28,line:16},endLoc:{col:1,line:78},startBody:{col:28,line:16},endBody:{col:1,line:78}}}}},decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs],title:"CXL UI/cxl-app-layout"};var CXLAppLayout=function CXLAppLayout(){var backgroundColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Background color","var(--lumo-shade-5pct)"),hasWave=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Has wave bottom?",!0);return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n    <style>\n      .entry-content ul {\n        font-family: var(--cxl-lumo-font-secondary);\n      }\n    </style>\n\n    <cxl-app-layout id="container" layout="1c">\n      ','\n\n      <article class="entry">\n        <div class="entry-content">\n          <cxl-section\n            class="alignwide has-background ','"\n            style="','"\n          >\n            ','\n            <h2>\n              The difference between high-growth and slow-growth companies is the skill sets they\n              have to make it happen.\n            </h2>\n            <p>At CXL, we provide</p>\n            <ul>\n              <li>marketing training programs to people serious about their career,</li>\n              <li>\n                managed online revenue optimization & experimentation services to help mid-to-large\n                companies accelerate growth.\n              </li>\n            </ul>\n            <p>\n              <vaadin-button theme="primary large"\n                >Marketing training <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n              <vaadin-button theme="primary large contrast"\n                >Managed services <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n            </p>\n          </cxl-section>\n          <cxl-section>\n            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>\n            <p>\n              Getting results you want with conversion optimization and experimentation is all about\n              knowing what to do. It’s a field where you need to know a lot about a lot, and this\n              program contains it all.\n            </p>\n            <p>After completing it you will</p>\n            <ul>\n              <li>improve your skills in conversion optimization, UX, and web analytics,</li>\n              <li>understand what works on websites, and what doesn\'t,</li>\n              <li>develop better A/B tests that win more often.</li>\n            </ul>\n          </cxl-section>\n        </div>\n      </article>\n\n      ',"\n    </cxl-app-layout>\n  "])),(0,_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_8__.CXLMarketingNav)(),hasWave?"has-wave":"",backgroundColor?"background-color: "+backgroundColor:"",(0,_cxl_lumo_styles_elements_stories__WEBPACK_IMPORTED_MODULE_10__.VaadinTooltip)(_cxl_lumo_styles_elements_stories__WEBPACK_IMPORTED_MODULE_10__.VaadinTooltip.args),(0,_footer_nav_stories__WEBPACK_IMPORTED_MODULE_9__.CXLFooterNav)())};CXLAppLayout.storyName="[layout=1c] (default)",CXLAppLayout.parameters=Object.assign({storySource:{source:'() => {\n  const backgroundColor = text(\'Background color\', \'var(--lumo-shade-5pct)\');\n  const hasWave = boolean(\'Has wave bottom?\', true);\n\n  return html`\n    <style>\n      .entry-content ul {\n        font-family: var(--cxl-lumo-font-secondary);\n      }\n    </style>\n\n    <cxl-app-layout id="container" layout="1c">\n      ${CXLMarketingNav()}\n\n      <article class="entry">\n        <div class="entry-content">\n          <cxl-section\n            class="alignwide has-background ${hasWave ? \'has-wave\' : \'\'}"\n            style="${backgroundColor ? `background-color: ${backgroundColor}` : \'\'}"\n          >\n            ${VaadinTooltip(VaadinTooltip.args)}\n            <h2>\n              The difference between high-growth and slow-growth companies is the skill sets they\n              have to make it happen.\n            </h2>\n            <p>At CXL, we provide</p>\n            <ul>\n              <li>marketing training programs to people serious about their career,</li>\n              <li>\n                managed online revenue optimization & experimentation services to help mid-to-large\n                companies accelerate growth.\n              </li>\n            </ul>\n            <p>\n              <vaadin-button theme="primary large"\n                >Marketing training <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n              <vaadin-button theme="primary large contrast"\n                >Managed services <vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n              ></vaadin-button>\n            </p>\n          </cxl-section>\n          <cxl-section>\n            <h2>Start getting <strong>more</strong> and <strong>bigger wins</strong></h2>\n            <p>\n              Getting results you want with conversion optimization and experimentation is all about\n              knowing what to do. It’s a field where you need to know a lot about a lot, and this\n              program contains it all.\n            </p>\n            <p>After completing it you will</p>\n            <ul>\n              <li>improve your skills in conversion optimization, UX, and web analytics,</li>\n              <li>understand what works on websites, and what doesn\'t,</li>\n              <li>develop better A/B tests that win more often.</li>\n            </ul>\n          </cxl-section>\n        </div>\n      </article>\n\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n}'}},CXLAppLayout.parameters);var __namedExportsOrder=["CXLAppLayout"]},"./cxl-ui/footer-nav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFooterNav:()=>CXLFooterNav,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { html } from \'lit\';\n\nexport default {\n  title: \'CXL UI/footer\',\n};\n\nexport const CXLFooterNav = () => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`;\n\nCXLFooterNav.storyName = \'nav\';\n',locationsMap:{"cxl-footer-nav":{startLoc:{col:28,line:7},endLoc:{col:1,line:48},startBody:{col:28,line:7},endBody:{col:1,line:48}}}}},title:"CXL UI/footer"};var CXLFooterNav=function CXLFooterNav(){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n'])))};CXLFooterNav.storyName="nav",CXLFooterNav.parameters=Object.assign({storySource:{source:'() => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`'}},CXLFooterNav.parameters);var __namedExportsOrder=["CXLFooterNav"]}}]);