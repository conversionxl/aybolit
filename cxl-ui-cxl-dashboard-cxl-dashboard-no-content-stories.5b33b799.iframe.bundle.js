"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[9922],{"./cxl-ui/cxl-dashboard-header/dashboard-header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLDashboardHeader:()=>CXLDashboardHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./cxl-ui/cxl-dashboard-header/template.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { DashboardHeaderTemplate, ArgTypes } from './template';\n\nexport default {\n  title: 'CXL UI/cxl-dashboard-header',\n};\n\nexport const CXLDashboardHeader = DashboardHeaderTemplate.bind({});\n\nCXLDashboardHeader.argTypes = {\n  ...ArgTypes,\n};\n\nCXLDashboardHeader.args = {\n  name: 'Mathias Z',\n  notificationCount: 6,\n  showCompletedStats: true,\n  showContinueSlider: true,\n  showRoadmap: true,\n  showRoadmapStats: true,\n  showRoadmapSlider: true,\n  editRoadmapLinkUrl: 'https://cxl.com',\n  showMinidegrees: true\n};\n",locationsMap:{"cxl-dashboard-header":{startLoc:{col:34,line:7},endLoc:{col:66,line:7},startBody:{col:34,line:7},endBody:{col:66,line:7}}}}},title:"CXL UI/cxl-dashboard-header"};var CXLDashboardHeader=_template__WEBPACK_IMPORTED_MODULE_2__.C.bind({});CXLDashboardHeader.argTypes=Object.assign({},_template__WEBPACK_IMPORTED_MODULE_2__.E),CXLDashboardHeader.args={name:"Mathias Z",notificationCount:6,showCompletedStats:!0,showContinueSlider:!0,showRoadmap:!0,showRoadmapStats:!0,showRoadmapSlider:!0,editRoadmapLinkUrl:"https://cxl.com",showMinidegrees:!0},CXLDashboardHeader.parameters=Object.assign({storySource:{source:"DashboardHeaderTemplate.bind({})"}},CXLDashboardHeader.parameters);var __namedExportsOrder=["CXLDashboardHeader"]},"./cxl-ui/cxl-dashboard/cxl-dashboard-no-content.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLDashboardNoContent:()=>CXLDashboardNoContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("../cxl-ui/src/components/cxl-app-layout.js"),__webpack_require__("../cxl-ui/src/components/cxl-marketing-nav.js"),__webpack_require__("./cxl-ui/cxl-marketing-nav.stories.js")),_cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./cxl-ui/cxl-dashboard-header/dashboard-header.stories.js"),_cxl_featured_course_card_dashboard_slider_stories__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./cxl-ui/cxl-featured-course-card/dashboard-slider.stories.js"),_footer_nav_stories__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./cxl-ui/footer-nav.stories.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';\nimport { CXLMarketingNav } from '../cxl-marketing-nav.stories';\nimport { CXLDashboardHeader } from '../cxl-dashboard-header/dashboard-header.stories';\nimport { DashboardSlider } from '../cxl-featured-course-card/dashboard-slider.stories';\nimport { CXLFooterNav } from '../footer-nav.stories';\n\nexport default {\n  title: 'CXL UI/cxl-dashboard',\n};\n\nexport const CXLDashboardNoContent = () => {\n  CXLDashboardHeader.args = {\n    name: 'Mathias Z',\n    notificationCount: 6,\n    showCompletedStats: true,\n    showContinueSlider: true,\n    showRoadmap: true,\n    showRoadmapStats: true,\n    showRoadmapSlider: true,\n    editRoadmapLinkUrl: 'https://cxl.com',\n    showMinidegrees: true\n  };\n\n  return html`\n    <cxl-app-layout id=\"container\" layout=\"1c-w\" theme=\"cxl-dashboard\">\n      ${CXLMarketingNav()}\n      <article>\n        ${DashboardSlider()}\n        ${CXLDashboardHeader(CXLDashboardHeader.args)}\n      </article>\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n};\n",locationsMap:{"cxl-dashboard-no-content":{startLoc:{col:37,line:13},endLoc:{col:1,line:36},startBody:{col:37,line:13},endBody:{col:1,line:36}}}}},title:"CXL UI/cxl-dashboard"};var CXLDashboardNoContent=function CXLDashboardNoContent(){return _cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_6__.CXLDashboardHeader.args={name:"Mathias Z",notificationCount:6,showCompletedStats:!0,showContinueSlider:!0,showRoadmap:!0,showRoadmapStats:!0,showRoadmapSlider:!0,editRoadmapLinkUrl:"https://cxl.com",showMinidegrees:!0},(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n    <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">\n      ',"\n      <article>\n        ","\n        ","\n      </article>\n      ","\n    </cxl-app-layout>\n  "])),(0,_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_5__.CXLMarketingNav)(),(0,_cxl_featured_course_card_dashboard_slider_stories__WEBPACK_IMPORTED_MODULE_7__.DashboardSlider)(),(0,_cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_6__.CXLDashboardHeader)(_cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_6__.CXLDashboardHeader.args),(0,_footer_nav_stories__WEBPACK_IMPORTED_MODULE_8__.CXLFooterNav)())};CXLDashboardNoContent.parameters=Object.assign({storySource:{source:'() => {\n  CXLDashboardHeader.args = {\n    name: \'Mathias Z\',\n    notificationCount: 6,\n    showCompletedStats: true,\n    showContinueSlider: true,\n    showRoadmap: true,\n    showRoadmapStats: true,\n    showRoadmapSlider: true,\n    editRoadmapLinkUrl: \'https://cxl.com\',\n    showMinidegrees: true\n  };\n\n  return html`\n    <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">\n      ${CXLMarketingNav()}\n      <article>\n        ${DashboardSlider()}\n        ${CXLDashboardHeader(CXLDashboardHeader.args)}\n      </article>\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n}'}},CXLDashboardNoContent.parameters);var __namedExportsOrder=["CXLDashboardNoContent"]},"./cxl-ui/cxl-featured-course-card/dashboard-slider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DashboardSlider:()=>DashboardSlider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lit/index.js"),_default_stories_js__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("../cxl-ui/src/components/cxl-featured-course-card.js"),__webpack_require__("../cxl-ui/src/components/cxl-tabs-slider.js"),__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("./cxl-ui/cxl-featured-course-card/default.stories.js"));const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport { CXLFeatureadCourseCard } from './default.stories.js';\n\nexport default {\n  title: 'CXL UI/cxl-featured-course-card',\n};\n\nconst args2 = {\n  ...CXLFeatureadCourseCard.args,\n  id: 'cxl-featured-course-2',\n  name: 'Advanced Facebook Ads',\n  time: '2h 04min',\n  instructor: 'Curt Maly',\n  avatar:\n    'https://cxl.com/institute/wp-content/uploads/2020/01/curt-maly-bw-transparent-bg-v2-min.png',\n};\n\nconst args3 = {\n  ...CXLFeatureadCourseCard.args,\n  id: 'cxl-featured-course-3',\n  name: 'Google Ads Experiments',\n  time: '1h 30min',\n  instructor: 'Susan Wenograd',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2022/05/susan-wenograd-headshot-bw-bg.png',\n};\n\nconst Template = () => html`\n  <cxl-tabs-slider theme=\"minimal cxl-featured-course-slider\">\n    <vaadin-tab disabled theme=\"cxl-featured-course-slider\">\n      ${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}\n    </vaadin-tab>\n    <vaadin-tab disabled theme=\"cxl-featured-course-slider\">\n      ${CXLFeatureadCourseCard(args2)}\n    </vaadin-tab>\n    <vaadin-tab disabled theme=\"cxl-featured-course-slider\">\n      ${CXLFeatureadCourseCard(args3)}\n    </vaadin-tab>\n  </cxl-tabs-slider>\n`;\n\nexport const DashboardSlider = Template.bind({});\n",locationsMap:{"dashboard-slider":{startLoc:{col:17,line:30},endLoc:{col:1,line:42},startBody:{col:17,line:30},endBody:{col:1,line:42}}}}},title:"CXL UI/cxl-featured-course-card"};var args2=Object.assign({},_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard.args,{id:"cxl-featured-course-2",name:"Advanced Facebook Ads",time:"2h 04min",instructor:"Curt Maly",avatar:"https://cxl.com/institute/wp-content/uploads/2020/01/curt-maly-bw-transparent-bg-v2-min.png"}),args3=Object.assign({},_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard.args,{id:"cxl-featured-course-3",name:"Google Ads Experiments",time:"1h 30min",instructor:"Susan Wenograd",avatar:"https://cxl.com/institute/wp-content/uploads/2022/05/susan-wenograd-headshot-bw-bg.png"}),DashboardSlider=function Template(){return(0,lit__WEBPACK_IMPORTED_MODULE_3__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <cxl-tabs-slider theme="minimal cxl-featured-course-slider">\n    <vaadin-tab disabled theme="cxl-featured-course-slider">\n      ','\n    </vaadin-tab>\n    <vaadin-tab disabled theme="cxl-featured-course-slider">\n      ','\n    </vaadin-tab>\n    <vaadin-tab disabled theme="cxl-featured-course-slider">\n      ',"\n    </vaadin-tab>\n  </cxl-tabs-slider>\n"])),(0,_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard)(_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard.args),(0,_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard)(args2),(0,_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard)(args3))}.bind({});DashboardSlider.parameters=Object.assign({storySource:{source:'() => html`\n  <cxl-tabs-slider theme="minimal cxl-featured-course-slider">\n    <vaadin-tab disabled theme="cxl-featured-course-slider">\n      ${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}\n    </vaadin-tab>\n    <vaadin-tab disabled theme="cxl-featured-course-slider">\n      ${CXLFeatureadCourseCard(args2)}\n    </vaadin-tab>\n    <vaadin-tab disabled theme="cxl-featured-course-slider">\n      ${CXLFeatureadCourseCard(args3)}\n    </vaadin-tab>\n  </cxl-tabs-slider>\n`'}},DashboardSlider.parameters);var __namedExportsOrder=["DashboardSlider"]},"./cxl-ui/cxl-featured-course-card/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFeatureadCourseCard:()=>CXLFeatureadCourseCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-ui/src/components/cxl-featured-course-card.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';\n\nexport default {\n  title: 'CXL UI/cxl-featured-course-card',\n};\n\nconst renderTags = (tags, slot) => tags.map((tag) => html`<span slot=${slot}>${tag}</span>`);\n\nconst FeaturedCourseCardTemplate = (course) => html`\n  <cxl-featured-course-card\n    id=${course.id}\n    theme=${course.theme}\n    name=${course.name}\n    time=${course.time}\n    instructor=${course.instructor}\n    avatar=${course.avatar}\n    cta-url=${course.ctaUrl}\n    .new=${course.new}\n  >\n    ${course.tags ? renderTags(course.tags, 'tags') : ''}\n    <div slot=\"content\" title=${course.description}>${unsafeHTML(course.description)}</div>\n  </cxl-featured-course-card>\n`;\n\nexport const CXLFeatureadCourseCard = FeaturedCourseCardTemplate.bind({});\n\nCXLFeatureadCourseCard.args = {\n  id: 'cxl-featured-course-1',\n  theme: 'Featured',\n  name: 'Get ahead with <strong>Google Analytics 4</strong>',\n  time: '5h 04min',\n  instructor: 'Fred Pike',\n  description:\n    \"GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>\",\n  tags: ['Marketing', 'Analytics'],\n  ctaUrl: '',\n  avatar:\n    'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',\n};\n",locationsMap:{"cxl-featuread-course-card":{startLoc:{col:35,line:11},endLoc:{col:1,line:25},startBody:{col:35,line:11},endBody:{col:1,line:25}}}}},title:"CXL UI/cxl-featured-course-card"};var CXLFeatureadCourseCard=function FeaturedCourseCardTemplate(course){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  <cxl-featured-course-card\n    id=","\n    theme=","\n    name=","\n    time=","\n    instructor=","\n    avatar=","\n    cta-url=","\n    .new=","\n  >\n    ",'\n    <div slot="content" title=',">","</div>\n  </cxl-featured-course-card>\n"])),course.id,course.theme,course.name,course.time,course.instructor,course.avatar,course.ctaUrl,course.new,course.tags?function renderTags(tags,slot){return tags.map((function(tag){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["<span slot=",">","</span>"])),slot,tag)}))}(course.tags,"tags"):"",course.description,(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__.A)(course.description))}.bind({});CXLFeatureadCourseCard.args={id:"cxl-featured-course-1",theme:"Featured",name:"Get ahead with <strong>Google Analytics 4</strong>",time:"5h 04min",instructor:"Fred Pike",description:"GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>",tags:["Marketing","Analytics"],ctaUrl:"",avatar:"https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png"},CXLFeatureadCourseCard.parameters=Object.assign({storySource:{source:"(course) => html`\n  <cxl-featured-course-card\n    id=${course.id}\n    theme=${course.theme}\n    name=${course.name}\n    time=${course.time}\n    instructor=${course.instructor}\n    avatar=${course.avatar}\n    cta-url=${course.ctaUrl}\n    .new=${course.new}\n  >\n    ${course.tags ? renderTags(course.tags, 'tags') : ''}\n    <div slot=\"content\" title=${course.description}>${unsafeHTML(course.description)}</div>\n  </cxl-featured-course-card>\n`"}},CXLFeatureadCourseCard.parameters);var __namedExportsOrder=["CXLFeatureadCourseCard"]},"./cxl-ui/cxl-light-card/light-card-slider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLLightCardSlider:()=>CXLLightCardSlider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/lit/index.js"),_template_js__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("../cxl-ui/src/components/cxl-light-card.js"),__webpack_require__("../cxl-ui/src/components/cxl-tabs-slider.js"),__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("./cxl-ui/cxl-light-card/template.js"));function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/cxl-light-card.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport { Template } from './template.js';\n\nexport default {\n  title: 'CXL UI/cxl-light-card',\n};\n\nconst CXLLightCard = Template.bind({});\nCXLLightCard.args = {\n  theme: 'light-card',\n  name: 'Account based marketing',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',\n  progressCompleted: 3,\n  progressTotal: 12\n};\n\nconst CXLLightCard2 = Template.bind({});\nCXLLightCard2.args = {\n  ...CXLLightCard.args,\n  name: 'Basics of Casual Inference',\n  avatar: '',\n  progressCompleted: 7,\n  progressTotal: 9\n};\n\nconst CXLLightCard3 = Template.bind({});\nCXLLightCard3.args = {\n  ...CXLLightCard.args,\n  name: 'Best Practices',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2019/09/peep-1x1-transparent-150x150.png'\n};\n\nexport const CXLLightCardSlider = ({ theme, length, args }) => html`\n  <cxl-tabs-slider theme=\"cxl-course-slider minimal ${theme}\">\n    ${Array.from(\n      { length: Math.floor(length / 3) },\n      () => html`\n        <vaadin-tab>\n          ${CXLLightCard({ ...CXLLightCard.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard2({ ...CXLLightCard2.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard3({ ...CXLLightCard3.args, ...args })}\n        </vaadin-tab>\n      `\n    )}\n  </cxl-tabs-slider>\n`;\n\nCXLLightCardSlider.args = {\n  length: 3,\n};\n",locationsMap:{"cxl-light-card-slider":{startLoc:{col:34,line:36},endLoc:{col:1,line:53},startBody:{col:34,line:36},endBody:{col:1,line:53}}}}},title:"CXL UI/cxl-light-card"};var CXLLightCard=_template_js__WEBPACK_IMPORTED_MODULE_9__.Y.bind({});CXLLightCard.args={theme:"light-card",name:"Account based marketing",avatar:"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg",progressCompleted:3,progressTotal:12};var CXLLightCard2=_template_js__WEBPACK_IMPORTED_MODULE_9__.Y.bind({});CXLLightCard2.args=Object.assign({},CXLLightCard.args,{name:"Basics of Casual Inference",avatar:"",progressCompleted:7,progressTotal:9});var CXLLightCard3=_template_js__WEBPACK_IMPORTED_MODULE_9__.Y.bind({});CXLLightCard3.args=Object.assign({},CXLLightCard.args,{name:"Best Practices",avatar:"https://cxl.com/institute/wp-content/uploads/2019/09/peep-1x1-transparent-150x150.png"});var CXLLightCardSlider=function CXLLightCardSlider(_ref){var theme=_ref.theme,length=_ref.length,args=_ref.args;return(0,lit__WEBPACK_IMPORTED_MODULE_5__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-tabs-slider theme="cxl-course-slider minimal ','">\n    ',"\n  </cxl-tabs-slider>\n"])),theme,Array.from({length:Math.floor(length/3)},(function(){return(0,lit__WEBPACK_IMPORTED_MODULE_5__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n        <vaadin-tab>\n          ","\n        </vaadin-tab>\n        <vaadin-tab>\n          ","\n        </vaadin-tab>\n        <vaadin-tab>\n          ","\n        </vaadin-tab>\n      "])),CXLLightCard(Object.assign({},CXLLightCard.args,args)),CXLLightCard2(Object.assign({},CXLLightCard2.args,args)),CXLLightCard3(Object.assign({},CXLLightCard3.args,args)))})))};CXLLightCardSlider.args={length:3},CXLLightCardSlider.parameters=Object.assign({storySource:{source:'({ theme, length, args }) => html`\n  <cxl-tabs-slider theme="cxl-course-slider minimal ${theme}">\n    ${Array.from(\n      { length: Math.floor(length / 3) },\n      () => html`\n        <vaadin-tab>\n          ${CXLLightCard({ ...CXLLightCard.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard2({ ...CXLLightCard2.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard3({ ...CXLLightCard3.args, ...args })}\n        </vaadin-tab>\n      `\n    )}\n  </cxl-tabs-slider>\n`'}},CXLLightCardSlider.parameters);var __namedExportsOrder=["CXLLightCardSlider"]},"./cxl-ui/cxl-stats/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLStats:()=>CXLStats,__namedExportsOrder:()=>__namedExportsOrder,default:()=>default_stories});__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.link.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var lit=__webpack_require__("../../node_modules/lit/index.js"),unsafe_html=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/components/cxl-stats.js");const cxl_stats_data_namespaceObject=JSON.parse('[{"title":"Lessons<br>completed","count":"30"},{"title":"Courses<br>completed","count":"1","link":"https://cxl.com"},{"title":"Certificates<br>completed","count":"95","link":"https://cxl.com"}]');var _templateObject,_templateObject2,_templateObject3,_templateObject4;function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const default_stories={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport '@conversionxl/cxl-ui/src/components/cxl-stats.js';\nimport statsData from './cxl-stats.data.json';\n\nexport default {\n  title: 'CXL UI/cxl-stats',\n};\n\nexport const CXLStats = ({ theme, statsCount }) => {\n  for (let i = 0; i < statsCount; i += 1) {\n    const newItem = {\n      title: 'Complete<br>library',\n      count: '12%',\n    };\n\n    statsData.push(newItem);\n  }\n\n  return html`\n    <cxl-stats class=\"stats\" theme=\"${theme}\">\n      ${statsData.slice(0, statsCount).map(\n    (el) => html`\n          <div class=\"stat-item\">\n            <h4 class=\"stat-title\">${unsafeHTML(el.title)}</h4>\n            ${el.link\n      ? html`<a class=\"stat-count\" href=\"${el.link}\">${el.count}</a>`\n      : html`<p class=\"stat-count\">${el.count}</p>`}\n          </div>\n        `\n  )}\n    </cxl-stats>\n  `;\n};\n\nObject.assign(CXLStats, {\n  args: {\n    statsCount: 3,\n  },\n  storyName: 'CXL Stats',\n});\n",locationsMap:{"cxl-stats":{startLoc:{col:24,line:11},endLoc:{col:1,line:35},startBody:{col:24,line:11},endBody:{col:1,line:35}}}}},title:"CXL UI/cxl-stats"};var CXLStats=function CXLStats(_ref){for(var theme=_ref.theme,statsCount=_ref.statsCount,i=0;i<statsCount;i+=1){cxl_stats_data_namespaceObject.push({title:"Complete<br>library",count:"12%"})}return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n    <cxl-stats class="stats" theme="','">\n      ',"\n    </cxl-stats>\n  "])),theme,cxl_stats_data_namespaceObject.slice(0,statsCount).map((function(el){return(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n          <div class="stat-item">\n            <h4 class="stat-title">',"</h4>\n            ","\n          </div>\n        "])),(0,unsafe_html.A)(el.title),el.link?(0,lit.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['<a class="stat-count" href="','">',"</a>"])),el.link,el.count):(0,lit.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['<p class="stat-count">',"</p>"])),el.count))})))};Object.assign(CXLStats,{args:{statsCount:3},storyName:"CXL Stats"}),CXLStats.parameters=Object.assign({storySource:{source:'({ theme, statsCount }) => {\n  for (let i = 0; i < statsCount; i += 1) {\n    const newItem = {\n      title: \'Complete<br>library\',\n      count: \'12%\',\n    };\n\n    statsData.push(newItem);\n  }\n\n  return html`\n    <cxl-stats class="stats" theme="${theme}">\n      ${statsData.slice(0, statsCount).map(\n    (el) => html`\n          <div class="stat-item">\n            <h4 class="stat-title">${unsafeHTML(el.title)}</h4>\n            ${el.link\n      ? html`<a class="stat-count" href="${el.link}">${el.count}</a>`\n      : html`<p class="stat-count">${el.count}</p>`}\n          </div>\n        `\n  )}\n    </cxl-stats>\n  `;\n}'}},CXLStats.parameters);var __namedExportsOrder=["CXLStats"]},"./cxl-ui/footer-nav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFooterNav:()=>CXLFooterNav,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { html } from \'lit\';\n\nexport default {\n  title: \'CXL UI/footer\',\n};\n\nexport const CXLFooterNav = () => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`;\n\nCXLFooterNav.storyName = \'nav\';\n',locationsMap:{"cxl-footer-nav":{startLoc:{col:28,line:7},endLoc:{col:1,line:48},startBody:{col:28,line:7},endBody:{col:1,line:48}}}}},title:"CXL UI/footer"};var CXLFooterNav=function CXLFooterNav(){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n'])))};CXLFooterNav.storyName="nav",CXLFooterNav.parameters=Object.assign({storySource:{source:'() => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`'}},CXLFooterNav.parameters);var __namedExportsOrder=["CXLFooterNav"]},"./cxl-ui/cxl-dashboard-header/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>DashboardHeaderTemplate,E:()=>ArgTypes});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),_cxl_stats_default_stories__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/components/cxl-dashboard-header.js"),__webpack_require__("../cxl-ui/src/components/cxl-stats.js"),__webpack_require__("./cxl-ui/cxl-stats/default.stories.js")),_cxl_light_card_light_card_slider_stories__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./cxl-ui/cxl-light-card/light-card-slider.stories.js"),_cxl_dashboard_notification_cxl_dashboard_notification_data_json__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json");var DashboardHeaderTemplate=function DashboardHeaderTemplate(header){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <cxl-dashboard-header\n    theme="cxl-dashboard-header"\n    name=',"\n    notification-count=","\n    .notificationData=","\n    ?show-completed-stats=","\n    ?show-continue-slider=","\n    ?show-roadmap=","\n    ?show-roadmap-stats=","\n    ?show-roadmap-slider=","\n    ?edit-roadmap-link-url=","\n    ?create-roadmap-link-url=","\n    ?show-minidegrees=",'\n  >\n    <div slot="completed-stats">\n      ','\n    </div>\n    <div slot="roadmap-stats">\n      ','\n    </div>\n    <div slot="continue-slider">\n      ','\n    </div>\n    <div slot="next-slider">\n      ','\n    </div>\n    <div slot="minidegree-slider">\n      ',"\n    </div>\n  </cxl-dashboard-header>\n"])),header.name,header.notificationCount,_cxl_dashboard_notification_cxl_dashboard_notification_data_json__WEBPACK_IMPORTED_MODULE_8__,header.showCompletedStats,header.showContinueSlider,header.showRoadmap,header.showRoadmapStats,header.showRoadmapSlider,header.editRoadmapLinkUrl,header.createRoadmapLinkUrl,header.showMinidegrees,(0,_cxl_stats_default_stories__WEBPACK_IMPORTED_MODULE_6__.CXLStats)({theme:"cxl-stats-dashboard-header completed",statsCount:3}),(0,_cxl_stats_default_stories__WEBPACK_IMPORTED_MODULE_6__.CXLStats)({theme:"cxl-stats-dashboard-header roadmap",statsCount:4}),(0,_cxl_light_card_light_card_slider_stories__WEBPACK_IMPORTED_MODULE_7__.CXLLightCardSlider)({theme:"cxl-slider-dashboard-header",length:8}),(0,_cxl_light_card_light_card_slider_stories__WEBPACK_IMPORTED_MODULE_7__.CXLLightCardSlider)({theme:"cxl-slider-dashboard-header portrait",length:16,args:{theme:"portrait"}}),(0,_cxl_light_card_light_card_slider_stories__WEBPACK_IMPORTED_MODULE_7__.CXLLightCardSlider)({theme:"cxl-slider-dashboard-header",length:8,args:{theme:"minidegree",progress:null,avatar:""}}))},ArgTypes={name:{control:"text"},notificationCount:{control:"number"}}},"./cxl-ui/cxl-light-card/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Template});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Template=function Template(card){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-light-card\n    theme="','"\n    name="','"\n    time="','"\n    instructor="','"\n    avatar="','"\n    progress-completed="','"\n    progress-total="','"\n    .new="','"\n    .completed="','"\n  >\n    ',"\n  </cxl-light-card>\n"])),card.theme,card.name,card.time,card.instructor,card.avatar,card.progressCompleted,card.progressTotal,card.new,card.completed,card.footer?(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose([' <div slot="footer">',"</div>"])),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__.A)(card.footer)):lit__WEBPACK_IMPORTED_MODULE_2__.Ld)}},"./cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json":module=>{module.exports=JSON.parse('[{"title":"My roadmap updates","id":"tab-1","groups":[{"title":"Unread","count":2,"cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":1,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true},{"theme":"category","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true,"edited":true}]},{"title":"Other","cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"}]}]},{"title":"All CXL updates","id":"tab-2","groups":[{"title":"Unread","count":1,"cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true}]},{"title":"Other","cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":3,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":false}]}]}]')}}]);