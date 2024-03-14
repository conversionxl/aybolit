"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[4414,3256],{"./cxl-ui/cxl-light-card/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLLightCard:()=>CXLLightCard,CXLLightCardFooter:()=>CXLLightCardFooter,CXLLightCardMinidegree:()=>CXLLightCardMinidegree,CXLLightCardPortrait:()=>CXLLightCardPortrait,CXLLightCardProgress:()=>CXLLightCardProgress,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../cxl-ui/src/components/cxl-light-card.js"),__webpack_require__("../cxl-lumo-styles/src/index.js");var _template_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./cxl-ui/cxl-light-card/template.js");const __WEBPACK_DEFAULT_EXPORT__={title:"CXL UI/cxl-light-card",parameters:{storySource:{source:"import '@conversionxl/cxl-ui/src/components/cxl-light-card.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport { Template } from './template.js';\n\nexport default {\n  title: 'CXL UI/cxl-light-card',\n  parameters: {\n    layout: 'centered',\n  },\n};\n\nexport const CXLLightCard = Template.bind({});\nexport const CXLLightCardProgress = Template.bind({});\nexport const CXLLightCardPortrait = Template.bind({});\nexport const CXLLightCardMinidegree = Template.bind({});\nexport const CXLLightCardFooter = Template.bind({});\n\nCXLLightCard.args = {\n  theme: 'light-card',\n  new: false,\n  completed: false,\n  name: 'Account based marketing',\n  instructor: 'Ton Wesseling',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',\n};\n\nCXLLightCardProgress.args = {\n  theme: 'light-card',\n  name: 'Account based marketing',\n  progressCompleted: 3,\n  progressTotal: 10,\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',\n};\n\nCXLLightCardPortrait.args = {\n  theme: 'light-card portrait',\n  name: 'Account based marketing',\n  instructor: 'Ton Wesseling',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png',\n};\n\nCXLLightCardMinidegree.args = {\n  theme: 'minidegree',\n  new: false,\n  completed: false,\n  name: 'Digital analytics',\n};\n\nCXLLightCardFooter.args = {\n  ...CXLLightCard.args,\n  footer:\n    '<span theme=\"badge tertiary pill\">Team</span> <span theme=\"badge secondary pill\">Personal</span>',\n};\n",locationsMap:{"cxl-light-card":{startLoc:{col:28,line:12},endLoc:{col:45,line:12},startBody:{col:28,line:12},endBody:{col:45,line:12}},"cxl-light-card-progress":{startLoc:{col:36,line:13},endLoc:{col:53,line:13},startBody:{col:36,line:13},endBody:{col:53,line:13}},"cxl-light-card-portrait":{startLoc:{col:36,line:14},endLoc:{col:53,line:14},startBody:{col:36,line:14},endBody:{col:53,line:14}},"cxl-light-card-minidegree":{startLoc:{col:38,line:15},endLoc:{col:55,line:15},startBody:{col:38,line:15},endBody:{col:55,line:15}},"cxl-light-card-footer":{startLoc:{col:34,line:16},endLoc:{col:51,line:16},startBody:{col:34,line:16},endBody:{col:51,line:16}}}},layout:"centered"}};var CXLLightCard=_template_js__WEBPACK_IMPORTED_MODULE_4__.Y.bind({}),CXLLightCardProgress=_template_js__WEBPACK_IMPORTED_MODULE_4__.Y.bind({}),CXLLightCardPortrait=_template_js__WEBPACK_IMPORTED_MODULE_4__.Y.bind({}),CXLLightCardMinidegree=_template_js__WEBPACK_IMPORTED_MODULE_4__.Y.bind({}),CXLLightCardFooter=_template_js__WEBPACK_IMPORTED_MODULE_4__.Y.bind({});CXLLightCard.args={theme:"light-card",new:!1,completed:!1,name:"Account based marketing",instructor:"Ton Wesseling",avatar:"https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png"},CXLLightCardProgress.args={theme:"light-card",name:"Account based marketing",progressCompleted:3,progressTotal:10,avatar:"https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png"},CXLLightCardPortrait.args={theme:"light-card portrait",name:"Account based marketing",instructor:"Ton Wesseling",avatar:"https://cxl.com/institute/wp-content/uploads/2020/07/ben-labay_team_headshot-1x1-bw-min-150x150.png"},CXLLightCardMinidegree.args={theme:"minidegree",new:!1,completed:!1,name:"Digital analytics"},CXLLightCardFooter.args=Object.assign({},CXLLightCard.args,{footer:'<span theme="badge tertiary pill">Team</span> <span theme="badge secondary pill">Personal</span>'}),CXLLightCard.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CXLLightCard.parameters),CXLLightCardProgress.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CXLLightCardProgress.parameters),CXLLightCardPortrait.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CXLLightCardPortrait.parameters),CXLLightCardMinidegree.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CXLLightCardMinidegree.parameters),CXLLightCardFooter.parameters=Object.assign({storySource:{source:"Template.bind({})"}},CXLLightCardFooter.parameters);var __namedExportsOrder=["CXLLightCard","CXLLightCardProgress","CXLLightCardPortrait","CXLLightCardMinidegree","CXLLightCardFooter"]},"./cxl-ui/cxl-light-card/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Template});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Template=function Template(card){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-light-card\n    theme="','"\n    name="','"\n    time="','"\n    instructor="','"\n    avatar="','"\n    progress-completed="','"\n    progress-total="','"\n    .new="','"\n    .completed="','"\n  >\n    ',"\n  </cxl-light-card>\n"])),card.theme,card.name,card.time,card.instructor,card.avatar,card.progressCompleted,card.progressTotal,card.new,card.completed,card.footer?(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose([' <div slot="footer">',"</div>"])),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__.A)(card.footer)):lit__WEBPACK_IMPORTED_MODULE_2__.Ld)}},"../cxl-ui/node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")},"../cxl-ui/node_modules/lit/index.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ld:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.Ld,dy:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.dy,iv:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.iv,oi:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.oi,sY:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.sY});__webpack_require__("../../node_modules/@lit/reactive-element/reactive-element.js"),__webpack_require__("../../node_modules/lit-html/lit-html.js");var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit-element/lit-element.js")},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);