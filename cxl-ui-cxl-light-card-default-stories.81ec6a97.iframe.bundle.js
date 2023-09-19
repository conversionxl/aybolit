(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[4414],{"./cxl-ui/cxl-light-card/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLLightCard:()=>CXLLightCard,CXLLightCardFooter:()=>CXLLightCardFooter,CXLLightCardMinidegree:()=>CXLLightCardMinidegree,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-ui/src/components/cxl-light-card.js"),__webpack_require__("../cxl-lumo-styles/src/index.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={title:"CXL UI/cxl-light-card",parameters:{storySource:{source:"import { html, nothing } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-light-card.js';\nimport '@conversionxl/cxl-lumo-styles';\n\nexport default {\n  title: 'CXL UI/cxl-light-card',\n  parameters: {\n    layout: 'centered',\n  },\n};\n\nconst Template = (card) => html`\n  <cxl-light-card\n    theme=\"${card.theme}\"\n    name=\"${card.name}\"\n    time=\"${card.time}\"\n    instructor=\"${card.instructor}\"\n    avatar=\"${card.avatar}\"\n    .new=\"${card.new}\"\n    .completed=\"${card.completed}\"\n  >\n    ${card.footer ? html` <footer slot=\"footer\">${unsafeHTML(card.footer)}</footer>` : nothing}\n  </cxl-light-card>\n`;\n\nexport const CXLLightCard = Template.bind({});\nexport const CXLLightCardMinidegree = Template.bind({});\nexport const CXLLightCardFooter = Template.bind({});\n\nCXLLightCard.args = {\n  theme: 'light-card',\n  new: false,\n  completed: false,\n  name: 'Account based marketing',\n  time: '3h 00min',\n  instructor: 'Ton Wesseling',\n  avatar:\n    'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',\n  footer: '',\n};\n\nCXLLightCardMinidegree.args = {\n  theme: 'minidegree',\n  new: false,\n  completed: false,\n  name: 'Digital analytics',\n  time: '43h 00min',\n};\n\n\nCXLLightCardFooter.args = {\n  ...CXLLightCard.args,\n  footer:\n    '<span theme=\"badge primary pill\">Team Roadmap</span> <span theme=\"badge secondary pill\">Personal Roadmap</span>',\n};\n",locationsMap:{"cxl-light-card":{startLoc:{col:17,line:13},endLoc:{col:1,line:25},startBody:{col:17,line:13},endBody:{col:1,line:25}},"cxl-light-card-minidegree":{startLoc:{col:17,line:13},endLoc:{col:1,line:25},startBody:{col:17,line:13},endBody:{col:1,line:25}},"cxl-light-card-footer":{startLoc:{col:17,line:13},endLoc:{col:1,line:25},startBody:{col:17,line:13},endBody:{col:1,line:25}}}},layout:"centered"}};var Template=function Template(card){return(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-light-card\n    theme="','"\n    name="','"\n    time="','"\n    instructor="','"\n    avatar="','"\n    .new="','"\n    .completed="','"\n  >\n    ',"\n  </cxl-light-card>\n"])),card.theme,card.name,card.time,card.instructor,card.avatar,card.new,card.completed,card.footer?(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose([' <footer slot="footer">',"</footer>"])),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__.A)(card.footer)):lit__WEBPACK_IMPORTED_MODULE_4__.Ld)},CXLLightCard=Template.bind({}),CXLLightCardMinidegree=Template.bind({}),CXLLightCardFooter=Template.bind({});CXLLightCard.args={theme:"light-card",new:!1,completed:!1,name:"Account based marketing",time:"3h 00min",instructor:"Ton Wesseling",avatar:"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg",footer:""},CXLLightCardMinidegree.args={theme:"minidegree",new:!1,completed:!1,name:"Digital analytics",time:"43h 00min"},CXLLightCardFooter.args=Object.assign({},CXLLightCard.args,{footer:'<span theme="badge primary pill">Team Roadmap</span> <span theme="badge secondary pill">Personal Roadmap</span>'}),CXLLightCard.parameters=Object.assign({storySource:{source:'(card) => html`\n  <cxl-light-card\n    theme="${card.theme}"\n    name="${card.name}"\n    time="${card.time}"\n    instructor="${card.instructor}"\n    avatar="${card.avatar}"\n    .new="${card.new}"\n    .completed="${card.completed}"\n  >\n    ${card.footer ? html` <footer slot="footer">${unsafeHTML(card.footer)}</footer>` : nothing}\n  </cxl-light-card>\n`'}},CXLLightCard.parameters),CXLLightCardMinidegree.parameters=Object.assign({storySource:{source:'(card) => html`\n  <cxl-light-card\n    theme="${card.theme}"\n    name="${card.name}"\n    time="${card.time}"\n    instructor="${card.instructor}"\n    avatar="${card.avatar}"\n    .new="${card.new}"\n    .completed="${card.completed}"\n  >\n    ${card.footer ? html` <footer slot="footer">${unsafeHTML(card.footer)}</footer>` : nothing}\n  </cxl-light-card>\n`'}},CXLLightCardMinidegree.parameters),CXLLightCardFooter.parameters=Object.assign({storySource:{source:'(card) => html`\n  <cxl-light-card\n    theme="${card.theme}"\n    name="${card.name}"\n    time="${card.time}"\n    instructor="${card.instructor}"\n    avatar="${card.avatar}"\n    .new="${card.new}"\n    .completed="${card.completed}"\n  >\n    ${card.footer ? html` <footer slot="footer">${unsafeHTML(card.footer)}</footer>` : nothing}\n  </cxl-light-card>\n`'}},CXLLightCardFooter.parameters);var __namedExportsOrder=["CXLLightCard","CXLLightCardMinidegree","CXLLightCardFooter"]},"../../node_modules/core-js/internals/is-data-descriptor.js":(module,__unused_webpack_exports,__webpack_require__)=>{var hasOwn=__webpack_require__("../../node_modules/core-js/internals/has-own-property.js");module.exports=function(descriptor){return void 0!==descriptor&&(hasOwn(descriptor,"value")||hasOwn(descriptor,"writable"))}},"../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),toIndexedObject=__webpack_require__("../../node_modules/core-js/internals/to-indexed-object.js"),nativeGetOwnPropertyDescriptor=__webpack_require__("../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f,DESCRIPTORS=__webpack_require__("../../node_modules/core-js/internals/descriptors.js");$({target:"Object",stat:!0,forced:!DESCRIPTORS||fails((function(){nativeGetOwnPropertyDescriptor(1)})),sham:!DESCRIPTORS},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(it,key){return nativeGetOwnPropertyDescriptor(toIndexedObject(it),key)}})},"../../node_modules/core-js/modules/es.reflect.get.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),call=__webpack_require__("../../node_modules/core-js/internals/function-call.js"),isObject=__webpack_require__("../../node_modules/core-js/internals/is-object.js"),anObject=__webpack_require__("../../node_modules/core-js/internals/an-object.js"),isDataDescriptor=__webpack_require__("../../node_modules/core-js/internals/is-data-descriptor.js"),getOwnPropertyDescriptorModule=__webpack_require__("../../node_modules/core-js/internals/object-get-own-property-descriptor.js"),getPrototypeOf=__webpack_require__("../../node_modules/core-js/internals/object-get-prototype-of.js");$({target:"Reflect",stat:!0},{get:function get(target,propertyKey){var descriptor,prototype,receiver=arguments.length<3?target:arguments[2];return anObject(target)===receiver?target[propertyKey]:(descriptor=getOwnPropertyDescriptorModule.f(target,propertyKey))?isDataDescriptor(descriptor)?descriptor.value:void 0===descriptor.get?void 0:call(descriptor.get,receiver):isObject(prototype=getPrototypeOf(target))?get(prototype,propertyKey,receiver):void 0}})},"../../node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);