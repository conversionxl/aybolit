"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[9922],{"./cxl-ui/cxl-dashboard-header/dashboard-header.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLDashboardHeader:()=>CXLDashboardHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _template__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./cxl-ui/cxl-dashboard-header/template.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { DashboardHeaderTemplate, ArgTypes } from './template';\n\nexport default {\n  title: 'CXL UI/cxl-dashboard-header',\n};\n\nexport const CXLDashboardHeader = DashboardHeaderTemplate.bind({});\n\nCXLDashboardHeader.argTypes = {\n  ...ArgTypes,\n};\n\nCXLDashboardHeader.args = {\n  name: 'Mathias Z',\n  lastCourseTitle: 'Advanced experimentation analysis',\n  lastCourseLink: 'https://cxl.com',\n  hasRoadmap: true,\n  notificationCount: '6',\n  progress: '0.34',\n  lessonsCompleted: '2',\n  lessonsTotal: '6',\n  cta1: 'Browse all courses',\n  cta2: 'Browse fast skills',\n  cta3: 'Create your personal learning roadmap',\n  cta1Link: 'https://cxl.com',\n  cta2Link: 'https://cxl.com',\n  cta3Link: 'https://cxl.com',\n};\n",locationsMap:{"cxl-dashboard-header":{startLoc:{col:34,line:7},endLoc:{col:66,line:7},startBody:{col:34,line:7},endBody:{col:66,line:7}}}}},title:"CXL UI/cxl-dashboard-header"};var CXLDashboardHeader=_template__WEBPACK_IMPORTED_MODULE_2__.C.bind({});CXLDashboardHeader.argTypes=Object.assign({},_template__WEBPACK_IMPORTED_MODULE_2__.E),CXLDashboardHeader.args={name:"Mathias Z",lastCourseTitle:"Advanced experimentation analysis",lastCourseLink:"https://cxl.com",hasRoadmap:!0,notificationCount:"6",progress:"0.34",lessonsCompleted:"2",lessonsTotal:"6",cta1:"Browse all courses",cta2:"Browse fast skills",cta3:"Create your personal learning roadmap",cta1Link:"https://cxl.com",cta2Link:"https://cxl.com",cta3Link:"https://cxl.com"},CXLDashboardHeader.parameters=Object.assign({storySource:{source:"DashboardHeaderTemplate.bind({})"}},CXLDashboardHeader.parameters);var __namedExportsOrder=["CXLDashboardHeader"]},"./cxl-ui/cxl-dashboard/cxl-dashboard-no-content.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLDashboardNoContent:()=>CXLDashboardNoContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@storybook/addon-knobs/dist/index.js"),_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("../cxl-ui/src/components/cxl-app-layout.js"),__webpack_require__("../cxl-ui/src/components/cxl-marketing-nav.js"),__webpack_require__("./cxl-ui/cxl-marketing-nav.stories.js")),_cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./cxl-ui/cxl-dashboard-header/dashboard-header.stories.js"),_cxl_featured_course_card_default_stories__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./cxl-ui/cxl-featured-course-card/default.stories.js"),_cxl_featured_course_card_dashboard_slider_stories__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./cxl-ui/cxl-featured-course-card/dashboard-slider.stories.js"),_cxl_stats_default_stories__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./cxl-ui/cxl-stats/default.stories.js"),_footer_nav_stories__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./cxl-ui/footer-nav.stories.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { text } from '@storybook/addon-knobs';\nimport '@conversionxl/cxl-ui/src/components/cxl-app-layout.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-marketing-nav.js';\nimport { CXLMarketingNav } from '../cxl-marketing-nav.stories';\nimport { CXLDashboardHeader } from '../cxl-dashboard-header/dashboard-header.stories';\nimport { CXLFeatureadCourseCard } from '../cxl-featured-course-card/default.stories';\nimport { DashboardSlider } from '../cxl-featured-course-card/dashboard-slider.stories';\nimport { CXLStats } from '../cxl-stats/default.stories';\nimport { CXLFooterNav } from '../footer-nav.stories';\n\nexport default {\n  title: 'CXL UI/cxl-dashboard',\n};\n\nexport const CXLDashboardNoContent = () => {\n  const boxShadow = text('Box-shadow', 'var(--lumo-box-shadow-l)');\n  const statsCount = 4;\n\n  CXLDashboardHeader.args = {\n    name: 'Mathias Z',\n    lastCourseTitle: 'Advanced experimentation analysis',\n    lastCourseLink: 'https://cxl.com',\n    hasRoadmap: true,\n    notificationCount: '6',\n    progress: '0.34',\n    lessonsCompleted: '2',\n    lessonsTotal: '6',\n    cta1: 'Browse all courses',\n    cta2: 'Browse fast skills',\n    cta3: 'Create your personal learning roadmap',\n    cta1Link: 'https://cxl.com',\n    cta2Link: 'https://cxl.com',\n    cta3Link: 'https://cxl.com',\n  };\n\n  CXLFeatureadCourseCard.args = {\n    id: 'cxl-featured-course-1',\n    theme: 'Featured course',\n    name: 'Get ahead with <strong>Google Analytics 4</strong>',\n    time: '5h 04min',\n    instructor: 'Fred Pike',\n    description:\n      \"<p>GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.</p><p>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong></p>\",\n    tags: ['Marketing', 'Analytics'],\n    ctaUrl: 'https://cxl.com',\n    avatar:\n      'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',\n  };\n\n  return html`\n    <cxl-app-layout id=\"container\" layout=\"1c-w\" theme=\"cxl-dashboard\">\n      ${CXLMarketingNav()}\n      <article style=\"${boxShadow ? `box-shadow: ${boxShadow}` : ''}\">\n        ${CXLDashboardHeader(CXLDashboardHeader.args)} ${DashboardSlider()} ${CXLStats(statsCount)}\n      </article>\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n};\n",locationsMap:{"cxl-dashboard-no-content":{startLoc:{col:37,line:16},endLoc:{col:1,line:60},startBody:{col:37,line:16},endBody:{col:1,line:60}}}}},title:"CXL UI/cxl-dashboard"};var CXLDashboardNoContent=function CXLDashboardNoContent(){var boxShadow=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Box-shadow","var(--lumo-box-shadow-l)");return _cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_7__.CXLDashboardHeader.args={name:"Mathias Z",lastCourseTitle:"Advanced experimentation analysis",lastCourseLink:"https://cxl.com",hasRoadmap:!0,notificationCount:"6",progress:"0.34",lessonsCompleted:"2",lessonsTotal:"6",cta1:"Browse all courses",cta2:"Browse fast skills",cta3:"Create your personal learning roadmap",cta1Link:"https://cxl.com",cta2Link:"https://cxl.com",cta3Link:"https://cxl.com"},_cxl_featured_course_card_default_stories__WEBPACK_IMPORTED_MODULE_8__.CXLFeatureadCourseCard.args={id:"cxl-featured-course-1",theme:"Featured course",name:"Get ahead with <strong>Google Analytics 4</strong>",time:"5h 04min",instructor:"Fred Pike",description:"<p>GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.</p><p>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong></p>",tags:["Marketing","Analytics"],ctaUrl:"https://cxl.com",avatar:"https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png"},(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n    <cxl-app-layout id="container" layout="1c-w" theme="cxl-dashboard">\n      ','\n      <article style="','">\n        '," "," ","\n      </article>\n      ","\n    </cxl-app-layout>\n  "])),(0,_cxl_marketing_nav_stories__WEBPACK_IMPORTED_MODULE_6__.CXLMarketingNav)(),boxShadow?"box-shadow: "+boxShadow:"",(0,_cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_7__.CXLDashboardHeader)(_cxl_dashboard_header_dashboard_header_stories__WEBPACK_IMPORTED_MODULE_7__.CXLDashboardHeader.args),(0,_cxl_featured_course_card_dashboard_slider_stories__WEBPACK_IMPORTED_MODULE_9__.DashboardSlider)(),(0,_cxl_stats_default_stories__WEBPACK_IMPORTED_MODULE_10__.CXLStats)(4),(0,_footer_nav_stories__WEBPACK_IMPORTED_MODULE_11__.CXLFooterNav)())};CXLDashboardNoContent.parameters=Object.assign({storySource:{source:"() => {\n  const boxShadow = text('Box-shadow', 'var(--lumo-box-shadow-l)');\n  const statsCount = 4;\n\n  CXLDashboardHeader.args = {\n    name: 'Mathias Z',\n    lastCourseTitle: 'Advanced experimentation analysis',\n    lastCourseLink: 'https://cxl.com',\n    hasRoadmap: true,\n    notificationCount: '6',\n    progress: '0.34',\n    lessonsCompleted: '2',\n    lessonsTotal: '6',\n    cta1: 'Browse all courses',\n    cta2: 'Browse fast skills',\n    cta3: 'Create your personal learning roadmap',\n    cta1Link: 'https://cxl.com',\n    cta2Link: 'https://cxl.com',\n    cta3Link: 'https://cxl.com',\n  };\n\n  CXLFeatureadCourseCard.args = {\n    id: 'cxl-featured-course-1',\n    theme: 'Featured course',\n    name: 'Get ahead with <strong>Google Analytics 4</strong>',\n    time: '5h 04min',\n    instructor: 'Fred Pike',\n    description:\n      \"<p>GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.</p><p>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong></p>\",\n    tags: ['Marketing', 'Analytics'],\n    ctaUrl: 'https://cxl.com',\n    avatar:\n      'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',\n  };\n\n  return html`\n    <cxl-app-layout id=\"container\" layout=\"1c-w\" theme=\"cxl-dashboard\">\n      ${CXLMarketingNav()}\n      <article style=\"${boxShadow ? `box-shadow: ${boxShadow}` : ''}\">\n        ${CXLDashboardHeader(CXLDashboardHeader.args)} ${DashboardSlider()} ${CXLStats(statsCount)}\n      </article>\n      ${CXLFooterNav()}\n    </cxl-app-layout>\n  `;\n}"}},CXLDashboardNoContent.parameters);var __namedExportsOrder=["CXLDashboardNoContent"]},"./cxl-ui/cxl-featured-course-card/dashboard-slider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DashboardSlider:()=>DashboardSlider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lit/index.js"),_default_stories_js__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("../cxl-ui/src/components/cxl-featured-course-card.js"),__webpack_require__("../cxl-ui/src/components/cxl-tabs-slider.js"),__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("./cxl-ui/cxl-featured-course-card/default.stories.js"));const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport { CXLFeatureadCourseCard } from './default.stories.js';\n\nexport default {\n  title: 'CXL UI/cxl-featured-course-card',\n};\n\nconst args2 = {\n  ...CXLFeatureadCourseCard.args,\n  id: 'cxl-featured-course-2',\n  name: 'Advanced Facebook Ads',\n  time: '2h 04min',\n  instructor: 'Curt Maly',\n  avatar:\n    'https://cxl.com/institute/wp-content/uploads/2020/01/curt-maly-bw-transparent-bg-v2-min.png',\n};\n\nconst args3 = {\n  ...CXLFeatureadCourseCard.args,\n  id: 'cxl-featured-course-3',\n  name: 'Google Ads Experiments',\n  time: '1h 30min',\n  instructor: 'Susan Wenograd',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2022/05/susan-wenograd-headshot-bw-bg.png',\n};\n\nconst Template = () => html`\n  <cxl-tabs-slider theme=\"minimal cxl-featured-course-slider\">\n    <vaadin-tab disabled theme=\"cxl-featured-course-slider\"\n      >${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}</vaadin-tab\n    >\n    <vaadin-tab disabled theme=\"cxl-featured-course-slider\"\n      >${CXLFeatureadCourseCard(args2)}</vaadin-tab\n    >\n    <vaadin-tab disabled theme=\"cxl-featured-course-slider\"\n      >${CXLFeatureadCourseCard(args3)}</vaadin-tab\n    >\n  </cxl-tabs-slider>\n`;\n\nexport const DashboardSlider = Template.bind({});\n",locationsMap:{"dashboard-slider":{startLoc:{col:17,line:30},endLoc:{col:1,line:42},startBody:{col:17,line:30},endBody:{col:1,line:42}}}}},title:"CXL UI/cxl-featured-course-card"};var args2=Object.assign({},_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard.args,{id:"cxl-featured-course-2",name:"Advanced Facebook Ads",time:"2h 04min",instructor:"Curt Maly",avatar:"https://cxl.com/institute/wp-content/uploads/2020/01/curt-maly-bw-transparent-bg-v2-min.png"}),args3=Object.assign({},_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard.args,{id:"cxl-featured-course-3",name:"Google Ads Experiments",time:"1h 30min",instructor:"Susan Wenograd",avatar:"https://cxl.com/institute/wp-content/uploads/2022/05/susan-wenograd-headshot-bw-bg.png"}),DashboardSlider=function Template(){return(0,lit__WEBPACK_IMPORTED_MODULE_3__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <cxl-tabs-slider theme="minimal cxl-featured-course-slider">\n    <vaadin-tab disabled theme="cxl-featured-course-slider"\n      >','</vaadin-tab\n    >\n    <vaadin-tab disabled theme="cxl-featured-course-slider"\n      >','</vaadin-tab\n    >\n    <vaadin-tab disabled theme="cxl-featured-course-slider"\n      >',"</vaadin-tab\n    >\n  </cxl-tabs-slider>\n"])),(0,_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard)(_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard.args),(0,_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard)(args2),(0,_default_stories_js__WEBPACK_IMPORTED_MODULE_7__.CXLFeatureadCourseCard)(args3))}.bind({});DashboardSlider.parameters=Object.assign({storySource:{source:'() => html`\n  <cxl-tabs-slider theme="minimal cxl-featured-course-slider">\n    <vaadin-tab disabled theme="cxl-featured-course-slider"\n      >${CXLFeatureadCourseCard(CXLFeatureadCourseCard.args)}</vaadin-tab\n    >\n    <vaadin-tab disabled theme="cxl-featured-course-slider"\n      >${CXLFeatureadCourseCard(args2)}</vaadin-tab\n    >\n    <vaadin-tab disabled theme="cxl-featured-course-slider"\n      >${CXLFeatureadCourseCard(args3)}</vaadin-tab\n    >\n  </cxl-tabs-slider>\n`'}},DashboardSlider.parameters);var __namedExportsOrder=["DashboardSlider"]},"./cxl-ui/cxl-featured-course-card/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFeatureadCourseCard:()=>CXLFeatureadCourseCard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-ui/src/components/cxl-featured-course-card.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-featured-course-card.js';\n\nexport default {\n  title: 'CXL UI/cxl-featured-course-card',\n};\n\nconst renderTags = (tags, slot) =>\n  tags.map(\n    (tag, i) =>\n      html`${i > 0 ? html`<span slot=${slot}> | </span>` : ''}<span slot=${slot}>${tag}</span>`\n  );\n\nconst FeaturedCourseCardTemplate = (course) => html`\n  <cxl-featured-course-card\n    id=${course.id}\n    theme=${course.theme}\n    name=${course.name}\n    time=${course.time}\n    instructor=${course.instructor}\n    avatar=${course.avatar}\n    cta-url=${course.ctaUrl}\n    .new=${course.new}\n  >\n    ${course.tags ? renderTags(course.tags, 'tags') : ''}\n    <div slot=\"content\" title=${course.description}>${unsafeHTML(course.description)}</div>\n  </cxl-featured-course-card>\n`;\n\nexport const CXLFeatureadCourseCard = FeaturedCourseCardTemplate.bind({});\n\nCXLFeatureadCourseCard.args = {\n  id: 'cxl-featured-course-1',\n  theme: 'Featured course',\n  name: 'Get ahead with <strong>Google Analytics 4</strong>',\n  time: '5h 04min',\n  instructor: 'Fred Pike',\n  description:\n    \"GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>\",\n  tags: ['Marketing', 'Analytics'],\n  ctaUrl: 'https://cxl.com',\n  avatar:\n    'https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png',\n};\n",locationsMap:{"cxl-featuread-course-card":{startLoc:{col:35,line:15},endLoc:{col:1,line:29},startBody:{col:35,line:15},endBody:{col:1,line:29}}}}},title:"CXL UI/cxl-featured-course-card"};var CXLFeatureadCourseCard=function FeaturedCourseCardTemplate(course){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  <cxl-featured-course-card\n    id=","\n    theme=","\n    name=","\n    time=","\n    instructor=","\n    avatar=","\n    cta-url=","\n    .new=","\n  >\n    ",'\n    <div slot="content" title=',">","</div>\n  </cxl-featured-course-card>\n"])),course.id,course.theme,course.name,course.time,course.instructor,course.avatar,course.ctaUrl,course.new,course.tags?function renderTags(tags,slot){return tags.map((function(tag,i){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["","<span slot=",">","</span>"])),i>0?(0,lit__WEBPACK_IMPORTED_MODULE_7__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["<span slot=","> | </span>"])),slot):"",slot,tag)}))}(course.tags,"tags"):"",course.description,(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__.A)(course.description))}.bind({});CXLFeatureadCourseCard.args={id:"cxl-featured-course-1",theme:"Featured course",name:"Get ahead with <strong>Google Analytics 4</strong>",time:"5h 04min",instructor:"Fred Pike",description:"GA4 is packed with new capabilities that help you improve acquisition, engagement, revenue, and retention for your website.<br>In five hours, we'll have you confident, capable, and armed with new insights into your business and your website. <strong>This course pays back for you real quick.</strong>",tags:["Marketing","Analytics"],ctaUrl:"https://cxl.com",avatar:"https://cxl.com/institute/wp-content/uploads/2020/04/fred-pike-instructor-headshot-1x1-color-bw-min-1024x1024.png"},CXLFeatureadCourseCard.parameters=Object.assign({storySource:{source:"(course) => html`\n  <cxl-featured-course-card\n    id=${course.id}\n    theme=${course.theme}\n    name=${course.name}\n    time=${course.time}\n    instructor=${course.instructor}\n    avatar=${course.avatar}\n    cta-url=${course.ctaUrl}\n    .new=${course.new}\n  >\n    ${course.tags ? renderTags(course.tags, 'tags') : ''}\n    <div slot=\"content\" title=${course.description}>${unsafeHTML(course.description)}</div>\n  </cxl-featured-course-card>\n`"}},CXLFeatureadCourseCard.parameters);var __namedExportsOrder=["CXLFeatureadCourseCard"]},"./cxl-ui/cxl-stats/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLStats:()=>CXLStats,__namedExportsOrder:()=>__namedExportsOrder,default:()=>default_stories});__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var lit=__webpack_require__("../../node_modules/lit/index.js"),unsafe_html=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/components/cxl-stats.js");const cxl_stats_data_namespaceObject=JSON.parse('[{"title":"Categories<br>completed","count":"1"},{"title":"Courses<br>completed","count":"30"},{"title":"Lessons<br>completed","count":"95"},{"title":"Complete<br>library","count":"12%"}]');var _templateObject,_templateObject2;function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const default_stories={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport '@conversionxl/cxl-ui/src/components/cxl-stats.js';\nimport statsData from './cxl-stats.data.json';\n\nexport default {\n  title: 'CXL UI/cxl-stats',\n};\n\nexport const CXLStats = ({ statsCount }) => {\n  for (let i = 0; i < statsCount; i += 1) {\n    const newItem = {\n      title: 'Complete<br>library',\n      count: '12%',\n    };\n\n    statsData.push(newItem);\n  }\n\n  return html`\n    <cxl-stats class=\"stats\">\n      ${statsData.slice(0, statsCount).map(\n        (el) => html`\n          <div>\n            <h4 class=\"stat-title\">${unsafeHTML(el.title)}</h4>\n            <p class=\"stat-count\">${el.count}</p>\n          </div>\n        `\n      )}\n    </cxl-stats>\n  `;\n};\n\nObject.assign(CXLStats, {\n  args: {\n    statsCount: 4,\n  },\n  storyName: 'CXL Stats',\n});\n",locationsMap:{"cxl-stats":{startLoc:{col:24,line:11},endLoc:{col:1,line:33},startBody:{col:24,line:11},endBody:{col:1,line:33}}}}},title:"CXL UI/cxl-stats"};var CXLStats=function CXLStats(_ref){for(var statsCount=_ref.statsCount,i=0;i<statsCount;i+=1){cxl_stats_data_namespaceObject.push({title:"Complete<br>library",count:"12%"})}return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n    <cxl-stats class="stats">\n      ',"\n    </cxl-stats>\n  "])),cxl_stats_data_namespaceObject.slice(0,statsCount).map((function(el){return(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n          <div>\n            <h4 class="stat-title">','</h4>\n            <p class="stat-count">',"</p>\n          </div>\n        "])),(0,unsafe_html.A)(el.title),el.count)})))};Object.assign(CXLStats,{args:{statsCount:4},storyName:"CXL Stats"}),CXLStats.parameters=Object.assign({storySource:{source:'({ statsCount }) => {\n  for (let i = 0; i < statsCount; i += 1) {\n    const newItem = {\n      title: \'Complete<br>library\',\n      count: \'12%\',\n    };\n\n    statsData.push(newItem);\n  }\n\n  return html`\n    <cxl-stats class="stats">\n      ${statsData.slice(0, statsCount).map(\n        (el) => html`\n          <div>\n            <h4 class="stat-title">${unsafeHTML(el.title)}</h4>\n            <p class="stat-count">${el.count}</p>\n          </div>\n        `\n      )}\n    </cxl-stats>\n  `;\n}'}},CXLStats.parameters);var __namedExportsOrder=["CXLStats"]},"./cxl-ui/footer-nav.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLFooterNav:()=>CXLFooterNav,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'import { html } from \'lit\';\n\nexport default {\n  title: \'CXL UI/footer\',\n};\n\nexport const CXLFooterNav = () => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`;\n\nCXLFooterNav.storyName = \'nav\';\n',locationsMap:{"cxl-footer-nav":{startLoc:{col:28,line:7},endLoc:{col:1,line:48},startBody:{col:28,line:7},endBody:{col:1,line:48}}}}},title:"CXL UI/footer"};var CXLFooterNav=function CXLFooterNav(){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n'])))};CXLFooterNav.storyName="nav",CXLFooterNav.parameters=Object.assign({storySource:{source:'() => html`\n  <style>\n    .site-footer .menu {\n      background-color: var(--lumo-shade);\n    }\n\n    .site-footer .menu ul {\n      list-style: none;\n      padding: unset;\n    }\n\n    .site-footer .menu > .wrap {\n      padding-bottom: var(--lumo-space-xl);\n      padding-top: var(--lumo-space-xl);\n    }\n  </style>\n\n  <footer\n    id="footer"\n    class="site-footer"\n    role="contentinfo"\n    itemscope="itemscope"\n    itemtype="http://schema.org/WPFooter"\n    slot="footer"\n  >\n    <nav class="menu">\n      <div class="wrap">\n        <ul class="menu-items">\n          <li class="menu-item" style="color: var(--lumo-tint)">\n            <a href="https://cxl.com"\n              ><vaadin-icon\n                icon="cxl:logo"\n                style="width: var(--lumo-icon-size-xl, 48px);"\n              ></vaadin-icon\n            ></a>\n            ©2011-2021\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </footer>\n`'}},CXLFooterNav.parameters);var __namedExportsOrder=["CXLFooterNav"]},"./cxl-ui/cxl-dashboard-header/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>ArgTypes,C:()=>DashboardHeaderTemplate});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.link.js");var lit=__webpack_require__("../../node_modules/lit/index.js"),unsafe_html=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/components/cxl-dashboard-header.js");const theme_cxl_dashboard_header_data_namespaceObject=JSON.parse('[{"title":"Roadmapped","count":"1 <small>trainings</small>","link":"View"},{"title":"Completed","count":"2 <small>trainings</small>"},{"title":"Study commitment","count":"2h <small>/week</small>"}]');__webpack_require__("../cxl-ui/src/components/cxl-stats.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,cxl_dashboard_notification_data=__webpack_require__("./cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var DashboardHeaderTemplate=function DashboardHeaderTemplate(header){return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-dashboard-header\n    theme="cxl-dashboard-header"\n    name=',"\n    notification-count=","\n    .notificationData=","\n    last-course-title=","\n    last-course-link=","\n    progress=","\n    lessons-completed=","\n    lessons-total=","\n    .cta1=","\n    .cta2=","\n    .cta3=","\n    .cta1Link=","\n    .cta2Link=","\n    .cta3Link=","\n    ?hasRoadmap=",'\n  >\n    <div slot="stats-mobile" class="stats-mobile">\n      <vaadin-details theme="cxl-dashboard-header reverse">\n        <div slot="summary">Your roadmap</div>\n        <cxl-stats theme="cxl-stats-dashboard-header">\n          ','\n          <vaadin-button class="edit-roadmap" onclick="window.location.href=\'https://cxl.com\'">\n            <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>\n            Edit roadmap\n          </vaadin-button>\n        </cxl-stats>\n      </vaadin-details>\n    </div>\n    <div slot="stats-desktop" class="stats-desktop">\n      <cxl-stats theme="cxl-stats-dashboard-header">\n        ','\n        <vaadin-button class="edit-roadmap" onclick="window.location.href=\'https://cxl.com\'">\n          <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>\n          Edit roadmap\n        </vaadin-button>\n      </cxl-stats>\n    </div>\n  </cxl-dashboard-header>\n'])),header.name,header.notificationCount,cxl_dashboard_notification_data,header.lastCourseTitle,header.lastCourseLink,header.progress,header.lessonsCompleted,header.lessonsTotal,header.cta1,header.cta2,header.cta3,header.cta1Link,header.cta2Link,header.cta3Link,header.hasRoadmap,theme_cxl_dashboard_header_data_namespaceObject.map((function(el){return(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n              <div>\n                <h4 class="stat-title">','</h4>\n                <p class="stat-count">\n                  '," ","\n                </p>\n              </div>\n            "])),(0,unsafe_html.A)(el.title),(0,unsafe_html.A)(el.count),el.link?(0,lit.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['<a href="#">',"</a>"])),el.link):lit.Ld)})),theme_cxl_dashboard_header_data_namespaceObject.map((function(el){return(0,lit.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['\n            <div>\n              <h4 class="stat-title">','</h4>\n              <p class="stat-count">\n                '," ","\n              </p>\n            </div>\n          "])),(0,unsafe_html.A)(el.title),(0,unsafe_html.A)(el.count),el.link?(0,lit.dy)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(['<a href="#">',"</a>"])),el.link):lit.Ld)})))},ArgTypes={name:{control:"text"},lastCourseTitle:{control:"text"},lastCourseLink:{control:"text"},hasRoadmap:{control:"boolean"},notificationCount:{control:"text"},progress:{control:"number"},lessonsCompleted:{control:"number"},lessonsTotal:{control:"number"},cta1:{control:"text"},cta2:{control:"text"},cta3:{control:"text"},cta1Link:{control:"text"},cta2Link:{control:"text"},cta3Link:{control:"text"}}},"./cxl-ui/cxl-dashboard-notification/cxl-dashboard-notification.data.json":module=>{module.exports=JSON.parse('[{"title":"My roadmap updates","id":"tab-1","groups":[{"title":"Unread","count":2,"cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":1,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true},{"theme":"category","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true,"edited":true}]},{"title":"Other","cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"},{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com"}]}]},{"title":"All CXL updates","id":"tab-2","groups":[{"title":"Unread","count":1,"cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":2,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":true}]},{"title":"Other","cards":[{"theme":"course","title":"Email marketing: from basics to best-in-class","time":3,"avatar":"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg","link":"https://cxl.com","new":false}]}]}]')}}]);