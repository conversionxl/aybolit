"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[5733],{"./cxl-ui/cxl-paywall.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-ui/src/components/cxl-paywall.js");var content=(0,__webpack_require__("../../node_modules/lorem-ipsum/dist/index.js").fH)({count:10,format:"html",units:"paragraphs"});const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '../../cxl-ui/src/components/cxl-paywall';\nimport { loremIpsum } from 'lorem-ipsum';\n\nconst content = loremIpsum({ count: 10, format: 'html', units: 'paragraphs' });\n\nexport default {\n  title: 'CXL UI/Paywall',\n  component: 'cxl-paywall',\n};\n\nconst Template = ({ _count, _limit, delay, message, opacity, subscribed }) => html`\n  <cxl-paywall\n    ._count=${_count}\n    ._limit=${_limit}\n    delay=${delay}\n    opacity=${opacity}\n    ?subscribed=${subscribed}\n  >\n    <div slot=\"message\">\n      <span>${message}</span>\n    </div>\n    ${unsafeHTML(content)}\n  </cxl-paywall>\n`;\n\nexport const Default = (args) => Template(args);\n\nDefault.args = {\n  _count: 0,\n  _limit: 10,\n  delay: 1000,\n  message: \"You have reached you're limit of free playbooks.\",\n  opacity: 0.2,\n  subscribed: false,\n};\n\nDefault.argTypes = {\n  _count: {\n    name: 'Count',\n    control: { type: 'range', min: 0, max: 100 },\n  },\n  _limit: {\n    name: 'Limit',\n  },\n  delay: {\n    name: 'Delay',\n  },\n  message: {\n    name: 'Message',\n  },\n  opacity: {\n    name: 'Opacity',\n    control: { type: 'range', min: 0, max: 1, step: 0.1 },\n  },\n  subscribed: {\n    name: 'Subscribed',\n  },\n};\n",locationsMap:{default:{startLoc:{col:23,line:28},endLoc:{col:47,line:28},startBody:{col:23,line:28},endBody:{col:47,line:28}}}}},title:"CXL UI/Paywall",component:"cxl-paywall"};var Default=function Default(args){return function Template(_ref){var _count=_ref._count,_limit=_ref._limit,delay=_ref.delay,message=_ref.message,opacity=_ref.opacity,subscribed=_ref.subscribed;return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  <cxl-paywall\n    ._count=","\n    ._limit=","\n    delay=","\n    opacity=","\n    ?subscribed=",'\n  >\n    <div slot="message">\n      <span>',"</span>\n    </div>\n    ","\n  </cxl-paywall>\n"])),_count,_limit,delay,opacity,subscribed,message,(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__.A)(content))}(args)};Default.args={_count:0,_limit:10,delay:1e3,message:"You have reached you're limit of free playbooks.",opacity:.2,subscribed:!1},Default.argTypes={_count:{name:"Count",control:{type:"range",min:0,max:100}},_limit:{name:"Limit"},delay:{name:"Delay"},message:{name:"Message"},opacity:{name:"Opacity",control:{type:"range",min:0,max:1,step:.1}},subscribed:{name:"Subscribed"}},Default.parameters=Object.assign({storySource:{source:"(args) => Template(args)"}},Default.parameters);var __namedExportsOrder=["Default"]}}]);