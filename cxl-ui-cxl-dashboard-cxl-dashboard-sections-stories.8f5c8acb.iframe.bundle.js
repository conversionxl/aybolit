(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[3299,919,2521],{"./cxl-ui/cxl-light-card/light-card-slider.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLLightCardSlider:()=>CXLLightCardSlider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/index.js"),_template_js__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__("../cxl-ui/src/components/cxl-light-card.js"),__webpack_require__("../cxl-ui/src/components/cxl-tabs-slider.js"),__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("./cxl-ui/cxl-light-card/template.js"));function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/cxl-light-card.js';\nimport '@conversionxl/cxl-ui/src/components/cxl-tabs-slider.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport { Template } from './template.js';\n\nexport default {\n  title: 'CXL UI/cxl-light-card',\n};\n\nconst CXLLightCard = Template.bind({});\nCXLLightCard.args = {\n  theme: 'light-card',\n  name: 'Account based marketing',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg',\n  progressCompleted: 3,\n  progressTotal: 12\n};\n\nconst CXLLightCard2 = Template.bind({});\nCXLLightCard2.args = {\n  ...CXLLightCard.args,\n  name: 'Basics of Casual Inference',\n  avatar: '',\n  progressCompleted: 7,\n  progressTotal: 9\n};\n\nconst CXLLightCard3 = Template.bind({});\nCXLLightCard3.args = {\n  ...CXLLightCard.args,\n  name: 'Best Practices',\n  avatar: 'https://cxl.com/institute/wp-content/uploads/2019/09/peep-1x1-transparent-150x150.png'\n};\n\nexport const CXLLightCardSlider = ({ theme, length, args }) => html`\n  <cxl-tabs-slider theme=\"cxl-course-slider minimal ${theme}\">\n    ${Array.from(\n      { length: Math.floor(length / 3) },\n      () => html`\n        <vaadin-tab>\n          ${CXLLightCard({ ...CXLLightCard.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard2({ ...CXLLightCard2.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard3({ ...CXLLightCard3.args, ...args })}\n        </vaadin-tab>\n      `\n    )}\n  </cxl-tabs-slider>\n`;\n\nCXLLightCardSlider.args = {\n  length: 3,\n};\n",locationsMap:{"cxl-light-card-slider":{startLoc:{col:34,line:36},endLoc:{col:1,line:53},startBody:{col:34,line:36},endBody:{col:1,line:53}}}}},title:"CXL UI/cxl-light-card"};var CXLLightCard=_template_js__WEBPACK_IMPORTED_MODULE_9__.Y.bind({});CXLLightCard.args={theme:"light-card",name:"Account based marketing",avatar:"https://cxl.com/institute/wp-content/uploads/2020/05/48192546_10156982340630746_8127333122065825792_n-wpv_400pxx400px_center_center.jpg",progressCompleted:3,progressTotal:12};var CXLLightCard2=_template_js__WEBPACK_IMPORTED_MODULE_9__.Y.bind({});CXLLightCard2.args=Object.assign({},CXLLightCard.args,{name:"Basics of Casual Inference",avatar:"",progressCompleted:7,progressTotal:9});var CXLLightCard3=_template_js__WEBPACK_IMPORTED_MODULE_9__.Y.bind({});CXLLightCard3.args=Object.assign({},CXLLightCard.args,{name:"Best Practices",avatar:"https://cxl.com/institute/wp-content/uploads/2019/09/peep-1x1-transparent-150x150.png"});var CXLLightCardSlider=function CXLLightCardSlider(_ref){var theme=_ref.theme,length=_ref.length,args=_ref.args;return(0,lit__WEBPACK_IMPORTED_MODULE_5__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-tabs-slider theme="cxl-course-slider minimal ','">\n    ',"\n  </cxl-tabs-slider>\n"])),theme,Array.from({length:Math.floor(length/3)},(function(){return(0,lit__WEBPACK_IMPORTED_MODULE_5__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n        <vaadin-tab>\n          ","\n        </vaadin-tab>\n        <vaadin-tab>\n          ","\n        </vaadin-tab>\n        <vaadin-tab>\n          ","\n        </vaadin-tab>\n      "])),CXLLightCard(Object.assign({},CXLLightCard.args,args)),CXLLightCard2(Object.assign({},CXLLightCard2.args,args)),CXLLightCard3(Object.assign({},CXLLightCard3.args,args)))})))};CXLLightCardSlider.args={length:3},CXLLightCardSlider.parameters=Object.assign({storySource:{source:'({ theme, length, args }) => html`\n  <cxl-tabs-slider theme="cxl-course-slider minimal ${theme}">\n    ${Array.from(\n      { length: Math.floor(length / 3) },\n      () => html`\n        <vaadin-tab>\n          ${CXLLightCard({ ...CXLLightCard.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard2({ ...CXLLightCard2.args, ...args })}\n        </vaadin-tab>\n        <vaadin-tab>\n          ${CXLLightCard3({ ...CXLLightCard3.args, ...args })}\n        </vaadin-tab>\n      `\n    )}\n  </cxl-tabs-slider>\n`'}},CXLLightCardSlider.parameters);var __namedExportsOrder=["CXLLightCardSlider"]},"./cxl-ui/cxl-light-card/template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>Template});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _templateObject,_templateObject2,lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/index.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Template=function Template(card){return(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n  <cxl-light-card\n    theme="','"\n    name="','"\n    time="','"\n    instructor="','"\n    avatar="','"\n    progress-completed="','"\n    progress-total="','"\n    .new="','"\n    .completed="','"\n  >\n    ',"\n  </cxl-light-card>\n"])),card.theme,card.name,card.time,card.instructor,card.avatar,card.progressCompleted,card.progressTotal,card.new,card.completed,card.footer?(0,lit__WEBPACK_IMPORTED_MODULE_2__.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose([' <div slot="footer">',"</div>"])),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_3__.A)(card.footer)):lit__WEBPACK_IMPORTED_MODULE_2__.Ld)}},"../../node_modules/core-js/internals/correct-is-regexp-logic.js":(module,__unused_webpack_exports,__webpack_require__)=>{var MATCH=__webpack_require__("../../node_modules/core-js/internals/well-known-symbol.js")("match");module.exports=function(METHOD_NAME){var regexp=/./;try{"/./"[METHOD_NAME](regexp)}catch(error1){try{return regexp[MATCH]=!1,"/./"[METHOD_NAME](regexp)}catch(error2){}}return!1}},"../../node_modules/core-js/internals/is-regexp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("../../node_modules/core-js/internals/is-object.js"),classof=__webpack_require__("../../node_modules/core-js/internals/classof-raw.js"),MATCH=__webpack_require__("../../node_modules/core-js/internals/well-known-symbol.js")("match");module.exports=function(it){var isRegExp;return isObject(it)&&(void 0!==(isRegExp=it[MATCH])?!!isRegExp:"RegExp"==classof(it))}},"../../node_modules/core-js/internals/not-a-regexp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isRegExp=__webpack_require__("../../node_modules/core-js/internals/is-regexp.js"),$TypeError=TypeError;module.exports=function(it){if(isRegExp(it))throw $TypeError("The method doesn't accept regular expressions");return it}},"../../node_modules/core-js/internals/number-parse-int.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("../../node_modules/core-js/internals/global.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("../../node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("../../node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"../../node_modules/core-js/internals/string-trim-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var PROPER_FUNCTION_NAME=__webpack_require__("../../node_modules/core-js/internals/function-name.js").PROPER,fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),whitespaces=__webpack_require__("../../node_modules/core-js/internals/whitespaces.js");module.exports=function(METHOD_NAME){return fails((function(){return!!whitespaces[METHOD_NAME]()||"​᠎"!=="​᠎"[METHOD_NAME]()||PROPER_FUNCTION_NAME&&whitespaces[METHOD_NAME].name!==METHOD_NAME}))}},"../../node_modules/core-js/modules/es.array.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$includes=__webpack_require__("../../node_modules/core-js/internals/array-includes.js").includes,fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),addToUnscopables=__webpack_require__("../../node_modules/core-js/internals/add-to-unscopables.js");$({target:"Array",proto:!0,forced:fails((function(){return!Array(1).includes()}))},{includes:function includes(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("includes")},"../../node_modules/core-js/modules/es.array.join.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),IndexedObject=__webpack_require__("../../node_modules/core-js/internals/indexed-object.js"),toIndexedObject=__webpack_require__("../../node_modules/core-js/internals/to-indexed-object.js"),arrayMethodIsStrict=__webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js"),nativeJoin=uncurryThis([].join);$({target:"Array",proto:!0,forced:IndexedObject!=Object||!arrayMethodIsStrict("join",",")},{join:function join(separator){return nativeJoin(toIndexedObject(this),void 0===separator?",":separator)}})},"../../node_modules/core-js/modules/es.array.some.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$some=__webpack_require__("../../node_modules/core-js/internals/array-iteration.js").some;$({target:"Array",proto:!0,forced:!__webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js")("some")},{some:function some(callbackfn){return $some(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"../../node_modules/core-js/modules/es.parse-int.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("../../node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})},"../../node_modules/core-js/modules/es.string.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),notARegExp=__webpack_require__("../../node_modules/core-js/internals/not-a-regexp.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),correctIsRegExpLogic=__webpack_require__("../../node_modules/core-js/internals/correct-is-regexp-logic.js"),stringIndexOf=uncurryThis("".indexOf);$({target:"String",proto:!0,forced:!correctIsRegExpLogic("includes")},{includes:function includes(searchString){return!!~stringIndexOf(toString(requireObjectCoercible(this)),toString(notARegExp(searchString)),arguments.length>1?arguments[1]:void 0)}})},"../../node_modules/core-js/modules/es.string.split.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var apply=__webpack_require__("../../node_modules/core-js/internals/function-apply.js"),call=__webpack_require__("../../node_modules/core-js/internals/function-call.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),fixRegExpWellKnownSymbolLogic=__webpack_require__("../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"),anObject=__webpack_require__("../../node_modules/core-js/internals/an-object.js"),isNullOrUndefined=__webpack_require__("../../node_modules/core-js/internals/is-null-or-undefined.js"),isRegExp=__webpack_require__("../../node_modules/core-js/internals/is-regexp.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),speciesConstructor=__webpack_require__("../../node_modules/core-js/internals/species-constructor.js"),advanceStringIndex=__webpack_require__("../../node_modules/core-js/internals/advance-string-index.js"),toLength=__webpack_require__("../../node_modules/core-js/internals/to-length.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),getMethod=__webpack_require__("../../node_modules/core-js/internals/get-method.js"),arraySlice=__webpack_require__("../../node_modules/core-js/internals/array-slice-simple.js"),callRegExpExec=__webpack_require__("../../node_modules/core-js/internals/regexp-exec-abstract.js"),regexpExec=__webpack_require__("../../node_modules/core-js/internals/regexp-exec.js"),stickyHelpers=__webpack_require__("../../node_modules/core-js/internals/regexp-sticky-helpers.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),UNSUPPORTED_Y=stickyHelpers.UNSUPPORTED_Y,min=Math.min,$push=[].push,exec=uncurryThis(/./.exec),push=uncurryThis($push),stringSlice=uncurryThis("".slice);fixRegExpWellKnownSymbolLogic("split",(function(SPLIT,nativeSplit,maybeCallNative){var internalSplit;return internalSplit="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(separator,limit){var string=toString(requireObjectCoercible(this)),lim=void 0===limit?4294967295:limit>>>0;if(0===lim)return[];if(void 0===separator)return[string];if(!isRegExp(separator))return call(nativeSplit,string,separator,lim);for(var match,lastIndex,lastLength,output=[],flags=(separator.ignoreCase?"i":"")+(separator.multiline?"m":"")+(separator.unicode?"u":"")+(separator.sticky?"y":""),lastLastIndex=0,separatorCopy=new RegExp(separator.source,flags+"g");(match=call(regexpExec,separatorCopy,string))&&!((lastIndex=separatorCopy.lastIndex)>lastLastIndex&&(push(output,stringSlice(string,lastLastIndex,match.index)),match.length>1&&match.index<string.length&&apply($push,output,arraySlice(match,1)),lastLength=match[0].length,lastLastIndex=lastIndex,output.length>=lim));)separatorCopy.lastIndex===match.index&&separatorCopy.lastIndex++;return lastLastIndex===string.length?!lastLength&&exec(separatorCopy,"")||push(output,""):push(output,stringSlice(string,lastLastIndex)),output.length>lim?arraySlice(output,0,lim):output}:"0".split(void 0,0).length?function(separator,limit){return void 0===separator&&0===limit?[]:call(nativeSplit,this,separator,limit)}:nativeSplit,[function split(separator,limit){var O=requireObjectCoercible(this),splitter=isNullOrUndefined(separator)?void 0:getMethod(separator,SPLIT);return splitter?call(splitter,separator,O,limit):call(internalSplit,toString(O),separator,limit)},function(string,limit){var rx=anObject(this),S=toString(string),res=maybeCallNative(internalSplit,rx,S,limit,internalSplit!==nativeSplit);if(res.done)return res.value;var C=speciesConstructor(rx,RegExp),unicodeMatching=rx.unicode,flags=(rx.ignoreCase?"i":"")+(rx.multiline?"m":"")+(rx.unicode?"u":"")+(UNSUPPORTED_Y?"g":"y"),splitter=new C(UNSUPPORTED_Y?"^(?:"+rx.source+")":rx,flags),lim=void 0===limit?4294967295:limit>>>0;if(0===lim)return[];if(0===S.length)return null===callRegExpExec(splitter,S)?[S]:[];for(var p=0,q=0,A=[];q<S.length;){splitter.lastIndex=UNSUPPORTED_Y?0:q;var e,z=callRegExpExec(splitter,UNSUPPORTED_Y?stringSlice(S,q):S);if(null===z||(e=min(toLength(splitter.lastIndex+(UNSUPPORTED_Y?q:0)),S.length))===p)q=advanceStringIndex(S,q,unicodeMatching);else{if(push(A,stringSlice(S,p,q)),A.length===lim)return A;for(var i=1;i<=z.length-1;i++)if(push(A,z[i]),A.length===lim)return A;q=p=e}}return push(A,stringSlice(S,p)),A}]}),!!fails((function(){var re=/(?:)/,originalExec=re.exec;re.exec=function(){return originalExec.apply(this,arguments)};var result="ab".split(re);return 2!==result.length||"a"!==result[0]||"b"!==result[1]})),UNSUPPORTED_Y)},"../../node_modules/core-js/modules/es.string.trim.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$trim=__webpack_require__("../../node_modules/core-js/internals/string-trim.js").trim;$({target:"String",proto:!0,forced:__webpack_require__("../../node_modules/core-js/internals/string-trim-forced.js")("trim")},{trim:function trim(){return $trim(this)}})},"../cxl-ui/node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);