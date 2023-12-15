(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[722,3256],{"./cxl-ui/cxl-course-card/[theme=video].stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLCourseCardVideo:()=>CXLCourseCardVideo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _template_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./cxl-ui/cxl-course-card/template.js");__webpack_require__("../cxl-ui/src/components/cxl-course-card.js"),__webpack_require__("../cxl-lumo-styles/src/index.js");const __WEBPACK_DEFAULT_EXPORT__={title:"CXL UI/cxl-course-card",parameters:{storySource:{source:"import { CourseCardTemplate, args } from './template.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-course-card.js';\nimport '@conversionxl/cxl-lumo-styles';\n\nexport default {\n  title: 'CXL UI/cxl-course-card',\n  parameters: {\n    layout: 'centered',\n  },\n};\n\nexport const CXLCourseCardVideo = CourseCardTemplate.bind({});\n\nCXLCourseCardVideo.args = {\n  ...args,\n  theme: 'video',\n  name: 'A/B testing mastery',\n  description:\n    'Understand testing approaches that work (and pitfalls that don’t) to get more wins and insights from optimization efforts.',\n  tags: 'CRO',\n  time: '4 days ago',\n  new: true,\n  showTimeIcon: false,\n};\n",locationsMap:{"cxl-course-card-video":{startLoc:{col:34,line:12},endLoc:{col:61,line:12},startBody:{col:34,line:12},endBody:{col:61,line:12}}}},layout:"centered"}};var CXLCourseCardVideo=_template_js__WEBPACK_IMPORTED_MODULE_2__.UE.bind({});CXLCourseCardVideo.args=Object.assign({},_template_js__WEBPACK_IMPORTED_MODULE_2__.WC,{theme:"video",name:"A/B testing mastery",description:"Understand testing approaches that work (and pitfalls that don’t) to get more wins and insights from optimization efforts.",tags:"CRO",time:"4 days ago",new:!0,showTimeIcon:!1}),CXLCourseCardVideo.parameters=Object.assign({storySource:{source:"CourseCardTemplate.bind({})"}},CXLCourseCardVideo.parameters);var __namedExportsOrder=["CXLCourseCardVideo"]},"./cxl-ui/cxl-course-card/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{PG:()=>argTypes,UE:()=>CourseCardTemplate,WC:()=>args,t9:()=>sectionStyles});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var CourseCardTemplate=function CourseCardTemplate(course){return(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  <cxl-course-card\n    id=","\n    class=","\n    theme=","\n    name=","\n    time=","\n    instructor=","\n    avatar=","\n    cta-url=","\n    .new=","\n    .showTimeIcon=","\n  >\n    ",'\n    <p slot="content" title=',">","</p>\n    ","\n  </cxl-course-card>\n"])),course.id,course.classes||"",course.theme,course.name,course.time,course.instructor,course.avatar,course.ctaUrl,course.new,course.showTimeIcon,course.tags?function renderTags(tags,slot){return(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['<span class="tag" slot=',' title="','">',"</span>"])),slot,tags,tags)}(course.tags,"tags"):"",course.description||"",(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__.A)(course.description),course.more?(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['<p slot="more">',"</p>"])),course.more):"")},args={id:"cxl-course-1",name:"Account based marketing",time:"3h 00min",instructor:"Tom Wesseling",description:"Master the strategies, tactics, metrics, and wisdom you need to become an ABM leader and accelerate the growth of your company and of your career.",theme:"course",tags:"Marketing, Analytics, Growth, Demand Capture",avatar:"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg",new:!1,showTimeIcon:!0},argTypes={theme:{options:["course","video","training","playbook","minidegree","category","lesson","exam"],control:{type:"select"}}},sectionStyles=(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  <style>\n    section {\n      display: grid;\n      grid: auto-flow / repeat(2, calc(50% - var(--lumo-space-l) / 2));\n      margin: 60px auto;\n      justify-items: center;\n      max-width: 843px;\n      grid-gap: var(--lumo-space-l);\n      padding: var(--lumo-space-l);\n    }\n\n    @media (max-width: 800px) {\n      section {\n        grid: auto / 100%;\n        max-width: 100vw;\n        padding: var(--lumo-space-xs);\n      }\n    }\n\n    @media (max-width: 360px) {\n      section {\n        padding: 0;\n      }\n\n      section > cxl-course-card {\n        max-width: calc(100vw - 2 * var(--lumo-space-xs) - var(--lumo-space-m));\n      }\n    }\n  </style>\n"])))},"../../node_modules/core-js/internals/is-data-descriptor.js":(module,__unused_webpack_exports,__webpack_require__)=>{var hasOwn=__webpack_require__("../../node_modules/core-js/internals/has-own-property.js");module.exports=function(descriptor){return void 0!==descriptor&&(hasOwn(descriptor,"value")||hasOwn(descriptor,"writable"))}},"../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),toIndexedObject=__webpack_require__("../../node_modules/core-js/internals/to-indexed-object.js"),nativeGetOwnPropertyDescriptor=__webpack_require__("../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f,DESCRIPTORS=__webpack_require__("../../node_modules/core-js/internals/descriptors.js");$({target:"Object",stat:!0,forced:!DESCRIPTORS||fails((function(){nativeGetOwnPropertyDescriptor(1)})),sham:!DESCRIPTORS},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(it,key){return nativeGetOwnPropertyDescriptor(toIndexedObject(it),key)}})},"../../node_modules/core-js/modules/es.reflect.get.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),call=__webpack_require__("../../node_modules/core-js/internals/function-call.js"),isObject=__webpack_require__("../../node_modules/core-js/internals/is-object.js"),anObject=__webpack_require__("../../node_modules/core-js/internals/an-object.js"),isDataDescriptor=__webpack_require__("../../node_modules/core-js/internals/is-data-descriptor.js"),getOwnPropertyDescriptorModule=__webpack_require__("../../node_modules/core-js/internals/object-get-own-property-descriptor.js"),getPrototypeOf=__webpack_require__("../../node_modules/core-js/internals/object-get-prototype-of.js");$({target:"Reflect",stat:!0},{get:function get(target,propertyKey){var descriptor,prototype,receiver=arguments.length<3?target:arguments[2];return anObject(target)===receiver?target[propertyKey]:(descriptor=getOwnPropertyDescriptorModule.f(target,propertyKey))?isDataDescriptor(descriptor)?descriptor.value:void 0===descriptor.get?void 0:call(descriptor.get,receiver):isObject(prototype=getPrototypeOf(target))?get(prototype,propertyKey,receiver):void 0}})},"../cxl-ui/node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")},"../cxl-ui/node_modules/lit/index.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ld:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.Ld,dy:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.dy,iv:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.iv,oi:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.oi,sY:()=>lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.sY});__webpack_require__("../../node_modules/@lit/reactive-element/reactive-element.js"),__webpack_require__("../../node_modules/lit-html/lit-html.js");var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit-element/lit-element.js")},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);