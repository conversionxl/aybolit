"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[2861],{"./cxl-ui/cxl-section/cxl-section.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLSectionHeader:()=>CXLSectionHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/index.js"),__webpack_require__("../../node_modules/@vaadin/button/vaadin-button.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={title:"CXL UI/cxl-section",parameters:{storySource:{source:"\nimport { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport '@conversionxl/cxl-ui';\nimport '@vaadin/button';\n\nexport default {\n  title: 'CXL UI/cxl-section',\n  parameters: {\n    docs: {\n      description: {\n        component: 'Use `<cxl-section theme=\"cxl-header\">` to create a section header component. \\\n          `cxl-section` components with id=\"view-hero\" are automatically themed as hero headers. \\\n          Additionally, it is necessary to custom CSS code on cxl-section element, for each page: \\\n          \\\n          \\\n           <style> \\\n            cxl-section { \\\n              --cxl-hero-image: url([wpv-post-featured-image size=\"large\" output=\"url\"]) \\\n            } \\\n          </style> \\\n        ',\n      },\n    }\n  }\n};\n\nexport const CXLSectionHeader = (args) => html`\n  <style>\n    @media only screen and (min-width: 1440px) {\n      #view-hero .cxl-hero-titles { bottom: -10px; gap: 0; margin: 0; position: absolute; width: 50%; }\n    }\n\n    @media only screen and (min-width: 1280px) and (max-width: 1440px) {\n      #view-hero .cxl-hero-titles { bottom: 0; gap: 0; margin: 0; position: absolute; width: 55%; }\n    }\n\n    @media only screen and (min-width: 782px) and (max-width: 1280px) {\n      #view-hero .cxl-hero-titles { gap: 0; margin: 0; position: absolute; top: 24em; width: 50%; }\n    }\n\n    .wp-block-columns {\n      align-items: normal !important;\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap !important;\n      margin-bottom: 1.import { column } from '@wordpress/icons' 75em;\n    }\n\n    .wp-clock-column {\n      flex-grow: 1;\n      min-width: 0;\n      overflow-wrap: break-word;\n      word-break: break-word;\n    }\n\n    cxl-section.wide {\n      --cxl-content-max-width: var(--cxl-content-max-width-wide);\n    }\n\n    .entry-content #view-hero p {\n      font-style: revert;\n    }\n\n    .wp-block-spacer {\n      height: 48px;\n    }\n\n    @media screen and (min-width: 1024px) {\n      cxl-section#view-hero::after {\n        background-image: url(\"https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png\");\n      }\n    }\n  </style>\n\n  <cxl-section id=\"view-hero\" class=\"${args.backgroundColor} wide\">\n    <div class=\"wp-block-columns\">\n      <div class=\"wp-block-column column-1 column-span-1 column-push-0\">\n        <h1>${unsafeHTML(args.title)}</h1>\n        <h3>${unsafeHTML(args.subtitle)}</h3>\n        <div class=\"wp-block-spacer\"></div>\n        ${args.description ? html`<p>${args.description}</p>` : null}\n        <div class=\"wp-block-spacer\"></div>\n        ${args.ctaLabel\n          ? html`\n            <a href=\"${args.ctaUrl}\">\n              <vaadin-button\n                id=\"cxl-onboarding\"\n                class=\"cxl-homepage-button\"\n                role=\"button\"\n                theme=\"primary x-large\"\n              >\n                ${args.ctaLabel}\n              </vaadin-button>\n            </a>\n            `\n          : null}\n\n      </div>\n      <div\n        class=\"column column-2 column-span-1 column-push-0 pure-u-lg-1-2 pure-hidden-xs pure-hidden-sm pure-hidden-md column-last pure-u-1\"\n        style=\"position: absolute; right: 0em; bottom: 10.5em;text-align:right; color: white\"\n      >\n        <div class=\"wrap\">\n          <div>\n            <strong style=\"display: block;\">Ben Labay</strong>\n            <small style=\"display: block;\">Managing Director @ Speero</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </cxl-section>\n`;\n\nCXLSectionHeader.args = {\n  backgroundColor: '',\n  title: 'Join <strong>the top 1%</strong> of digital marketing.',\n  subtitle: 'We find the best practitioners in the world, and get them to teach their craft.',\n  description: 'Get access to 100+ digital marketing courses with your CXL subscription.',\n  image: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png',\n  ctaLabel: 'Sign up now',\n  ctaUrl: '#',\n  showCta: true,\n\n};\n\nCXLSectionHeader.argTypes = {\n  backgroundColor: {\n    name: 'Class',\n    control: 'select',\n    options: [\n      'red',\n      'blue',\n      'light blue',\n      'green',\n      'black',\n    ],\n    mapping: {\n      red: 'wide-background-red',\n      blue: 'wide-background-blue',\n      \"light blue\": 'wide-background-light-blue',\n      green: 'wide-background-green',\n      black: 'wide-background-black'\n    }\n  },\n};\n",locationsMap:{"cxl-section-header":{startLoc:{col:32,line:29},endLoc:{col:1,line:114},startBody:{col:32,line:29},endBody:{col:1,line:114}}}},docs:{description:{component:'Use `<cxl-section theme="cxl-header">` to create a section header component.           `cxl-section` components with id="view-hero" are automatically themed as hero headers.           Additionally, it is necessary to custom CSS code on cxl-section element, for each page:                                <style>             cxl-section {               --cxl-hero-image: url([wpv-post-featured-image size="large" output="url"])             }           </style>         '}}}};var CXLSectionHeader=function CXLSectionHeader(args){return(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <style>\n    @media only screen and (min-width: 1440px) {\n      #view-hero .cxl-hero-titles { bottom: -10px; gap: 0; margin: 0; position: absolute; width: 50%; }\n    }\n\n    @media only screen and (min-width: 1280px) and (max-width: 1440px) {\n      #view-hero .cxl-hero-titles { bottom: 0; gap: 0; margin: 0; position: absolute; width: 55%; }\n    }\n\n    @media only screen and (min-width: 782px) and (max-width: 1280px) {\n      #view-hero .cxl-hero-titles { gap: 0; margin: 0; position: absolute; top: 24em; width: 50%; }\n    }\n\n    .wp-block-columns {\n      align-items: normal !important;\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap !important;\n      margin-bottom: 1.import { column } from \'@wordpress/icons\' 75em;\n    }\n\n    .wp-clock-column {\n      flex-grow: 1;\n      min-width: 0;\n      overflow-wrap: break-word;\n      word-break: break-word;\n    }\n\n    cxl-section.wide {\n      --cxl-content-max-width: var(--cxl-content-max-width-wide);\n    }\n\n    .entry-content #view-hero p {\n      font-style: revert;\n    }\n\n    .wp-block-spacer {\n      height: 48px;\n    }\n\n    @media screen and (min-width: 1024px) {\n      cxl-section#view-hero::after {\n        background-image: url("https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png");\n      }\n    }\n  </style>\n\n  <cxl-section id="view-hero" class="',' wide">\n    <div class="wp-block-columns">\n      <div class="wp-block-column column-1 column-span-1 column-push-0">\n        <h1>',"</h1>\n        <h3>",'</h3>\n        <div class="wp-block-spacer"></div>\n        ','\n        <div class="wp-block-spacer"></div>\n        ','\n\n      </div>\n      <div\n        class="column column-2 column-span-1 column-push-0 pure-u-lg-1-2 pure-hidden-xs pure-hidden-sm pure-hidden-md column-last pure-u-1"\n        style="position: absolute; right: 0em; bottom: 10.5em;text-align:right; color: white"\n      >\n        <div class="wrap">\n          <div>\n            <strong style="display: block;">Ben Labay</strong>\n            <small style="display: block;">Managing Director @ Speero</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </cxl-section>\n'])),args.backgroundColor,(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__.A)(args.title),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__.A)(args.subtitle),args.description?(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["<p>","</p>"])),args.description):null,args.ctaLabel?(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['\n            <a href="','">\n              <vaadin-button\n                id="cxl-onboarding"\n                class="cxl-homepage-button"\n                role="button"\n                theme="primary x-large"\n              >\n                ',"\n              </vaadin-button>\n            </a>\n            "])),args.ctaUrl,args.ctaLabel):null)};CXLSectionHeader.args={backgroundColor:"",title:"Join <strong>the top 1%</strong> of digital marketing.",subtitle:"We find the best practitioners in the world, and get them to teach their craft.",description:"Get access to 100+ digital marketing courses with your CXL subscription.",image:"https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png",ctaLabel:"Sign up now",ctaUrl:"#",showCta:!0},CXLSectionHeader.argTypes={backgroundColor:{name:"Class",control:"select",options:["red","blue","light blue","green","black"],mapping:{red:"wide-background-red",blue:"wide-background-blue","light blue":"wide-background-light-blue",green:"wide-background-green",black:"wide-background-black"}}},CXLSectionHeader.parameters=Object.assign({storySource:{source:'(args) => html`\n  <style>\n    @media only screen and (min-width: 1440px) {\n      #view-hero .cxl-hero-titles { bottom: -10px; gap: 0; margin: 0; position: absolute; width: 50%; }\n    }\n\n    @media only screen and (min-width: 1280px) and (max-width: 1440px) {\n      #view-hero .cxl-hero-titles { bottom: 0; gap: 0; margin: 0; position: absolute; width: 55%; }\n    }\n\n    @media only screen and (min-width: 782px) and (max-width: 1280px) {\n      #view-hero .cxl-hero-titles { gap: 0; margin: 0; position: absolute; top: 24em; width: 50%; }\n    }\n\n    .wp-block-columns {\n      align-items: normal !important;\n      box-sizing: border-box;\n      display: flex;\n      flex-wrap: wrap !important;\n      margin-bottom: 1.import { column } from \'@wordpress/icons\' 75em;\n    }\n\n    .wp-clock-column {\n      flex-grow: 1;\n      min-width: 0;\n      overflow-wrap: break-word;\n      word-break: break-word;\n    }\n\n    cxl-section.wide {\n      --cxl-content-max-width: var(--cxl-content-max-width-wide);\n    }\n\n    .entry-content #view-hero p {\n      font-style: revert;\n    }\n\n    .wp-block-spacer {\n      height: 48px;\n    }\n\n    @media screen and (min-width: 1024px) {\n      cxl-section#view-hero::after {\n        background-image: url("https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-1024x1024.png");\n      }\n    }\n  </style>\n\n  <cxl-section id="view-hero" class="${args.backgroundColor} wide">\n    <div class="wp-block-columns">\n      <div class="wp-block-column column-1 column-span-1 column-push-0">\n        <h1>${unsafeHTML(args.title)}</h1>\n        <h3>${unsafeHTML(args.subtitle)}</h3>\n        <div class="wp-block-spacer"></div>\n        ${args.description ? html`<p>${args.description}</p>` : null}\n        <div class="wp-block-spacer"></div>\n        ${args.ctaLabel\n          ? html`\n            <a href="${args.ctaUrl}">\n              <vaadin-button\n                id="cxl-onboarding"\n                class="cxl-homepage-button"\n                role="button"\n                theme="primary x-large"\n              >\n                ${args.ctaLabel}\n              </vaadin-button>\n            </a>\n            `\n          : null}\n\n      </div>\n      <div\n        class="column column-2 column-span-1 column-push-0 pure-u-lg-1-2 pure-hidden-xs pure-hidden-sm pure-hidden-md column-last pure-u-1"\n        style="position: absolute; right: 0em; bottom: 10.5em;text-align:right; color: white"\n      >\n        <div class="wrap">\n          <div>\n            <strong style="display: block;">Ben Labay</strong>\n            <small style="display: block;">Managing Director @ Speero</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </cxl-section>\n`'}},CXLSectionHeader.parameters);var __namedExportsOrder=["CXLSectionHeader"]},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);