(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[6586],{"./cxl-ui/cxl-dashboard-header/initial-state.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLDashboardHeaderInitial:()=>CXLDashboardHeaderInitial,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./cxl-ui/cxl-dashboard-header/template.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { DashboardHeaderTemplate, ArgTypes } from './template';\n\nexport default {\n  title: 'CXL UI/cxl-dashboard-header',\n};\n\nexport const CXLDashboardHeaderInitial = DashboardHeaderTemplate.bind({});\n\nCXLDashboardHeaderInitial.argTypes = {\n  ...ArgTypes,\n};\nCXLDashboardHeaderInitial.args = {\n  name: 'Mathias Z',\n  lastCourseTitle: '',\n  lastCourseLink: '',\n  hasRoadmap: false,\n  notificationCount: '6',\n  progress: '0',\n  lessonsCompleted: '0',\n  lessonsTotal: '0',\n  cta1: 'Browse all courses',\n  cta2: 'Browse fast skills',\n  cta3: 'Create your personal learning roadmap',\n  cta1Link: 'https://cxl.com',\n  cta2Link: 'https://cxl.com',\n  cta3Link: 'https://cxl.com',\n};\n",locationsMap:{"cxl-dashboard-header-initial":{startLoc:{col:41,line:7},endLoc:{col:73,line:7},startBody:{col:41,line:7},endBody:{col:73,line:7}}}}},title:"CXL UI/cxl-dashboard-header"};var CXLDashboardHeaderInitial=_template__WEBPACK_IMPORTED_MODULE_2__.C.bind({});CXLDashboardHeaderInitial.argTypes=Object.assign({},_template__WEBPACK_IMPORTED_MODULE_2__.E),CXLDashboardHeaderInitial.args={name:"Mathias Z",lastCourseTitle:"",lastCourseLink:"",hasRoadmap:!1,notificationCount:"6",progress:"0",lessonsCompleted:"0",lessonsTotal:"0",cta1:"Browse all courses",cta2:"Browse fast skills",cta3:"Create your personal learning roadmap",cta1Link:"https://cxl.com",cta2Link:"https://cxl.com",cta3Link:"https://cxl.com"},CXLDashboardHeaderInitial.parameters=Object.assign({storySource:{source:"DashboardHeaderTemplate.bind({})"}},CXLDashboardHeaderInitial.parameters);var __namedExportsOrder=["CXLDashboardHeaderInitial"]},"./cxl-ui/cxl-dashboard-header/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>ArgTypes,C:()=>DashboardHeaderTemplate});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.link.js");var lit=__webpack_require__("../../node_modules/lit/index.js"),unsafe_html=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/components/cxl-dashboard-header.js");const theme_cxl_dashboard_header_data_namespaceObject=JSON.parse('[{"title":"Roadmapped","count":"1 <small>trainings</small>","link":"View"},{"title":"Completed","count":"2 <small>trainings</small>"},{"title":"Study commitment","count":"2h <small>/week</small>"}]');__webpack_require__("../cxl-ui/src/components/cxl-stats.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,cxl_dashboard_notification_data=__webpack_require__("./cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var DashboardHeaderTemplate=function DashboardHeaderTemplate(header){return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-dashboard-header\n    theme="cxl-dashboard-header"\n    name=',"\n    notification-count=","\n    .notificationData=","\n    last-course-title=","\n    last-course-link=","\n    progress=","\n    lessons-completed=","\n    lessons-total=","\n    .cta1=","\n    .cta2=","\n    .cta3=","\n    .cta1Link=","\n    .cta2Link=","\n    .cta3Link=","\n    ?hasRoadmap=",'\n  >\n    <div slot="stats-mobile" class="stats-mobile">\n      <vaadin-details theme="cxl-dashboard-header reverse">\n        <div slot="summary">Your roadmap</div>\n        <cxl-stats theme="cxl-stats-dashboard-header">\n          ','\n          <vaadin-button class="edit-roadmap" onclick="window.location.href=\'https://cxl.com\'">\n            <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>\n            Edit roadmap\n          </vaadin-button>\n        </cxl-stats>\n      </vaadin-details>\n    </div>\n    <div slot="stats-desktop" class="stats-desktop">\n      <cxl-stats theme="cxl-stats-dashboard-header">\n        ','\n        <vaadin-button class="edit-roadmap" onclick="window.location.href=\'https://cxl.com\'">\n          <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>\n          Edit roadmap\n        </vaadin-button>\n      </cxl-stats>\n    </div>\n  </cxl-dashboard-header>\n'])),header.name,header.notificationCount,cxl_dashboard_notification_data,header.lastCourseTitle,header.lastCourseLink,header.progress,header.lessonsCompleted,header.lessonsTotal,header.cta1,header.cta2,header.cta3,header.cta1Link,header.cta2Link,header.cta3Link,header.hasRoadmap,theme_cxl_dashboard_header_data_namespaceObject.map((function(el){return(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n              <div>\n                <h4 class="stat-title">','</h4>\n                <p class="stat-count">\n                  '," ","\n                </p>\n              </div>\n            "])),(0,unsafe_html.A)(el.title),(0,unsafe_html.A)(el.count),el.link?(0,lit.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['<a href="#">',"</a>"])),el.link):lit.Ld)})),theme_cxl_dashboard_header_data_namespaceObject.map((function(el){return(0,lit.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n            <div>\n              <h4 class="stat-title">','</h4>\n              <p class="stat-count">\n                '," ","\n              </p>\n            </div>\n          "])),(0,unsafe_html.A)(el.title),(0,unsafe_html.A)(el.count),el.link?(0,lit.dy)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(['<a href="#">',"</a>"])),el.link):lit.Ld)})))},ArgTypes={name:{control:"text"},lastCourseTitle:{control:"text"},lastCourseLink:{control:"text"},hasRoadmap:{control:"boolean"},notificationCount:{control:"text"},progress:{control:"number"},lessonsCompleted:{control:"number"},lessonsTotal:{control:"number"},cta1:{control:"text"},cta2:{control:"text"},cta3:{control:"text"},cta1Link:{control:"text"},cta2Link:{control:"text"},cta3Link:{control:"text"}}},"../../node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"../../node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("../../node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"../../node_modules/core-js/modules/es.string.link.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("../../node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("../../node_modules/core-js/internals/string-html-forced.js")("link")},{link:function link(url){return createHTML(this,"a","href",url)}})},"./cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json":module=>{"use strict";module.exports=JSON.parse('[{"title":"My roadmap updates","id":"tab-1","groups":[{"title":"Unread","count":2,"cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":1,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true},{"theme":"category","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true,"edited":true}]},{"title":"Other","cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"}]}]},{"title":"All CXL updates","id":"tab-2","groups":[{"title":"Unread","count":1,"cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true}]},{"title":"Other","cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":3,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":false}]}]}]')}}]);