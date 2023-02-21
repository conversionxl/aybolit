"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[6831],{"./cxl-ui/jw-player/playlist.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playlist:()=>Playlist,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lit/index.js");__webpack_require__("../cxl-ui/src/components/jw-player/index.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/jw-player/index.js';\n\nexport default {\n  title: 'JW Player/JW Player',\n};\n\nconst Template = ({ captions, mediaId, playerId, playlistId, pluginPath }) =>\n  html`\n    <style>\n      #root-inner {\n        height: 100vh;\n      }\n\n      jw-player {\n        display: block;\n        height: 100%;\n      }\n\n      jw-player * {\n        box-sizing: border-box;\n      }\n    </style>\n    <jw-player\n      ?captions=${captions}\n      class=\"cxl-jwplayer-container\"\n      media-id=${mediaId}\n      player-id=${playerId}\n      playlist-id=${playlistId}\n      plugin-path=\"${pluginPath}\"\n      type=\"playlist\"\n    ></jw-player>\n  `;\n\nexport const Playlist = Template.bind({});\n\nObject.assign(Playlist, {\n  args: {\n    captions: true,\n    mediaId: '',\n    playerId: '5CFJNXKb',\n    playlistId: 'tAxwbNsA',\n    pluginPath: 'https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/',\n  },\n});\n",locationsMap:{playlist:{startLoc:{col:17,line:8},endLoc:{col:3,line:33},startBody:{col:17,line:8},endBody:{col:3,line:33}}}}},title:"JW Player/JW Player"};var Playlist=function Template(_ref){var captions=_ref.captions,mediaId=_ref.mediaId,playerId=_ref.playerId,playlistId=_ref.playlistId,pluginPath=_ref.pluginPath;return(0,lit__WEBPACK_IMPORTED_MODULE_3__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n    <style>\n      #root-inner {\n        height: 100vh;\n      }\n\n      jw-player {\n        display: block;\n        height: 100%;\n      }\n\n      jw-player * {\n        box-sizing: border-box;\n      }\n    </style>\n    <jw-player\n      ?captions=",'\n      class="cxl-jwplayer-container"\n      media-id=',"\n      player-id=","\n      playlist-id=",'\n      plugin-path="','"\n      type="playlist"\n    ></jw-player>\n  '])),captions,mediaId,playerId,playlistId,pluginPath)}.bind({});Object.assign(Playlist,{args:{captions:!0,mediaId:"",playerId:"5CFJNXKb",playlistId:"tAxwbNsA",pluginPath:"https://cxl.com/institute/wp-content/plugins/cxl-jwplayer/"}}),Playlist.parameters=Object.assign({storySource:{source:'({ captions, mediaId, playerId, playlistId, pluginPath }) =>\n  html`\n    <style>\n      #root-inner {\n        height: 100vh;\n      }\n\n      jw-player {\n        display: block;\n        height: 100%;\n      }\n\n      jw-player * {\n        box-sizing: border-box;\n      }\n    </style>\n    <jw-player\n      ?captions=${captions}\n      class="cxl-jwplayer-container"\n      media-id=${mediaId}\n      player-id=${playerId}\n      playlist-id=${playlistId}\n      plugin-path="${pluginPath}"\n      type="playlist"\n    ></jw-player>\n  `'}},Playlist.parameters);var __namedExportsOrder=["Playlist"]}}]);