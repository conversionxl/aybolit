"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[4987],{"./cxl-ui/cxl-save-favorite/[theme=default].stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLSaveFavoriteThemeDefault:()=>CXLSaveFavoriteThemeDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../cxl-ui/src/components/cxl-save-favorite.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/lit/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import '@conversionxl/cxl-ui/src/components/cxl-save-favorite.js';\nimport { html } from 'lit';\n\nexport default {\n  title: 'CXL UI/cxl-save-favorite',\n  component: 'cxl-save-favorite',\n};\n\nconst Template = ({ apiUrl, postType, postId, userId, isCardVersion, selected }) => html`\n  <cxl-save-favorite\n    apiUrl=${apiUrl}\n    postType=${postType}\n    postId=${postId}\n    userId=${userId}\n    ?isCardVersion=${isCardVersion}\n    ?selected=${selected}\n  ></cxl-save-favorite>\n`;\n\nexport const CXLSaveFavoriteThemeDefault = Template.bind({});\n\nCXLSaveFavoriteThemeDefault.storyName = '[theme=default]';\n\n// more here: https://storybook.js.org/docs/web-components/essentials/controls#fully-custom-args\nCXLSaveFavoriteThemeDefault.args = {\n  apiUrl: 'https://jsonplaceholder.typicode.com/users',\n  postType: 'playbook',\n  postId: 123,\n  userId: 555,\n  selected: false,\n  isCardVersion: false,\n};\n",locationsMap:{"cxl-save-favorite-theme-default":{startLoc:{col:17,line:9},endLoc:{col:1,line:18},startBody:{col:17,line:9},endBody:{col:1,line:18}}}}},title:"CXL UI/cxl-save-favorite",component:"cxl-save-favorite"};var CXLSaveFavoriteThemeDefault=function Template(_ref){var apiUrl=_ref.apiUrl,postType=_ref.postType,postId=_ref.postId,userId=_ref.userId,isCardVersion=_ref.isCardVersion,selected=_ref.selected;return(0,lit__WEBPACK_IMPORTED_MODULE_4__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  <cxl-save-favorite\n    apiUrl=","\n    postType=","\n    postId=","\n    userId=","\n    ?isCardVersion=","\n    ?selected=","\n  ></cxl-save-favorite>\n"])),apiUrl,postType,postId,userId,isCardVersion,selected)}.bind({});CXLSaveFavoriteThemeDefault.storyName="[theme=default]",CXLSaveFavoriteThemeDefault.args={apiUrl:"https://jsonplaceholder.typicode.com/users",postType:"playbook",postId:123,userId:555,selected:!1,isCardVersion:!1},CXLSaveFavoriteThemeDefault.parameters=Object.assign({storySource:{source:"({ apiUrl, postType, postId, userId, isCardVersion, selected }) => html`\n  <cxl-save-favorite\n    apiUrl=${apiUrl}\n    postType=${postType}\n    postId=${postId}\n    userId=${userId}\n    ?isCardVersion=${isCardVersion}\n    ?selected=${selected}\n  ></cxl-save-favorite>\n`"}},CXLSaveFavoriteThemeDefault.parameters);var __namedExportsOrder=["CXLSaveFavoriteThemeDefault"]}}]);