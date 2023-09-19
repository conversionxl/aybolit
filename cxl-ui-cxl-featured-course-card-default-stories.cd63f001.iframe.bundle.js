(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[5927],{"./cxl-ui/cxl-featured-course-card/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFeatureadCourseCard:()=>CXLFeatureadCourseCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-ui/src/components/cxl-featured-course-card.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';\n\nexport default {\n  title: 'CXL UI/cxl-featured-course-card',\n};\n\nconst renderTags = (tags, slot) =>\n  tags.map(\n    (tag, i) =>\n      html`${i > 0 ? html`<span slot=${slot}> | </span>` : ''}<span slot=${slot}>${tag}</span>`\n  );\n\nconst FeaturedCourseCardTemplate = (course) => html`\n  <cxl-featured-course-card\n    id=${course.id}\n    theme=${course.theme}\n    name=${course.name}\n    time=${course.time}\n    instructor=${course.instructor}\n    avatar=${course.avatar}\n    cta-url=${course.ctaUrl}\n    .new=${course.new}\n  >\n    ${course.tags ? renderTags(course.tags, 'tags') : ''}\n    <div slot=\"content\" title=${course.description}>${unsafeHTML(course.description)}</div>\n  </cxl-featured-course-card>\n`;\n\nexport const CXLFeatureadCourseCard = FeaturedCourseCardTemplate.bind({});\n\nCXLFeatureadCourseCard.args = {\n  id: 'cxl-featured-course-1',\n  theme: 'Featured course',\n  name: 'Get ahead with <strong>Google Analytics 4</strong>',\n  time: '5h 04min',\n  instructor: 'Fred Pike',\n  description:\n    \"GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>\",\n  tags: ['Marketing', 'Analytics'],\n  ctaUrl: 'https://cxl.com',\n  avatar:\n    'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',\n};\n",locationsMap:{"cxl-featuread-course-card":{startLoc:{col:35,line:15},endLoc:{col:1,line:29},startBody:{col:35,line:15},endBody:{col:1,line:29}}}}},title:"CXL UI/cxl-featured-course-card"};var CXLFeatureadCourseCard=function FeaturedCourseCardTemplate(course){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  <cxl-featured-course-card\n    id=","\n    theme=","\n    name=","\n    time=","\n    instructor=","\n    avatar=","\n    cta-url=","\n    .new=","\n  >\n    ",'\n    <div slot="content" title=',">","</div>\n  </cxl-featured-course-card>\n"])),course.id,course.theme,course.name,course.time,course.instructor,course.avatar,course.ctaUrl,course.new,course.tags?function renderTags(tags,slot){return tags.map((function(tag,i){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["","<span slot=",">","</span>"])),i>0?(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["<span slot=","> | </span>"])),slot):"",slot,tag)}))}(course.tags,"tags"):"",course.description,(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__.A)(course.description))}.bind({});CXLFeatureadCourseCard.args={id:"cxl-featured-course-1",theme:"Featured course",name:"Get ahead with <strong>Google Analytics 4</strong>",time:"5h 04min",instructor:"Fred Pike",description:"GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>",tags:["Marketing","Analytics"],ctaUrl:"https://cxl.com",avatar:"https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png"},CXLFeatureadCourseCard.parameters=Object.assign({storySource:{source:"(course) => html`\n  <cxl-featured-course-card\n    id=${course.id}\n    theme=${course.theme}\n    name=${course.name}\n    time=${course.time}\n    instructor=${course.instructor}\n    avatar=${course.avatar}\n    cta-url=${course.ctaUrl}\n    .new=${course.new}\n  >\n    ${course.tags ? renderTags(course.tags, 'tags') : ''}\n    <div slot=\"content\" title=${course.description}>${unsafeHTML(course.description)}</div>\n  </cxl-featured-course-card>\n`"}},CXLFeatureadCourseCard.parameters);var __namedExportsOrder=["CXLFeatureadCourseCard"]},"../../node_modules/core-js/internals/is-data-descriptor.js":(module,__unused_webpack_exports,__webpack_require__)=>{var hasOwn=__webpack_require__("../../node_modules/core-js/internals/has-own-property.js");module.exports=function(descriptor){return void 0!==descriptor&&(hasOwn(descriptor,"value")||hasOwn(descriptor,"writable"))}},"../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),toIndexedObject=__webpack_require__("../../node_modules/core-js/internals/to-indexed-object.js"),nativeGetOwnPropertyDescriptor=__webpack_require__("../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f,DESCRIPTORS=__webpack_require__("../../node_modules/core-js/internals/descriptors.js");$({target:"Object",stat:!0,forced:!DESCRIPTORS||fails((function(){nativeGetOwnPropertyDescriptor(1)})),sham:!DESCRIPTORS},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(it,key){return nativeGetOwnPropertyDescriptor(toIndexedObject(it),key)}})},"../../node_modules/core-js/modules/es.reflect.get.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),call=__webpack_require__("../../node_modules/core-js/internals/function-call.js"),isObject=__webpack_require__("../../node_modules/core-js/internals/is-object.js"),anObject=__webpack_require__("../../node_modules/core-js/internals/an-object.js"),isDataDescriptor=__webpack_require__("../../node_modules/core-js/internals/is-data-descriptor.js"),getOwnPropertyDescriptorModule=__webpack_require__("../../node_modules/core-js/internals/object-get-own-property-descriptor.js"),getPrototypeOf=__webpack_require__("../../node_modules/core-js/internals/object-get-prototype-of.js");$({target:"Reflect",stat:!0},{get:function get(target,propertyKey){var descriptor,prototype,receiver=arguments.length<3?target:arguments[2];return anObject(target)===receiver?target[propertyKey]:(descriptor=getOwnPropertyDescriptorModule.f(target,propertyKey))?isDataDescriptor(descriptor)?descriptor.value:void 0===descriptor.get?void 0:call(descriptor.get,receiver):isObject(prototype=getPrototypeOf(target))?get(prototype,propertyKey,receiver):void 0}})},"../../node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);