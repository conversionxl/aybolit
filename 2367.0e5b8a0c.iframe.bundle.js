/*! For license information please see 2367.0e5b8a0c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[2367],{"../../node_modules/core-js/internals/correct-is-regexp-logic.js":(module,__unused_webpack_exports,__webpack_require__)=>{var MATCH=__webpack_require__("../../node_modules/core-js/internals/well-known-symbol.js")("match");module.exports=function(METHOD_NAME){var regexp=/./;try{"/./"[METHOD_NAME](regexp)}catch(error1){try{return regexp[MATCH]=!1,"/./"[METHOD_NAME](regexp)}catch(error2){}}return!1}},"../../node_modules/core-js/internals/is-regexp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("../../node_modules/core-js/internals/is-object.js"),classof=__webpack_require__("../../node_modules/core-js/internals/classof-raw.js"),MATCH=__webpack_require__("../../node_modules/core-js/internals/well-known-symbol.js")("match");module.exports=function(it){var isRegExp;return isObject(it)&&(void 0!==(isRegExp=it[MATCH])?!!isRegExp:"RegExp"==classof(it))}},"../../node_modules/core-js/internals/not-a-regexp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isRegExp=__webpack_require__("../../node_modules/core-js/internals/is-regexp.js"),$TypeError=TypeError;module.exports=function(it){if(isRegExp(it))throw $TypeError("The method doesn't accept regular expressions");return it}},"../../node_modules/core-js/internals/number-parse-int.js":(module,__unused_webpack_exports,__webpack_require__)=>{var global=__webpack_require__("../../node_modules/core-js/internals/global.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),trim=__webpack_require__("../../node_modules/core-js/internals/string-trim.js").trim,whitespaces=__webpack_require__("../../node_modules/core-js/internals/whitespaces.js"),$parseInt=global.parseInt,Symbol=global.Symbol,ITERATOR=Symbol&&Symbol.iterator,hex=/^[+-]?0x/i,exec=uncurryThis(hex.exec),FORCED=8!==$parseInt(whitespaces+"08")||22!==$parseInt(whitespaces+"0x16")||ITERATOR&&!fails((function(){$parseInt(Object(ITERATOR))}));module.exports=FORCED?function parseInt(string,radix){var S=trim(toString(string));return $parseInt(S,radix>>>0||(exec(hex,S)?16:10))}:$parseInt},"../../node_modules/core-js/internals/string-trim-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var PROPER_FUNCTION_NAME=__webpack_require__("../../node_modules/core-js/internals/function-name.js").PROPER,fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),whitespaces=__webpack_require__("../../node_modules/core-js/internals/whitespaces.js");module.exports=function(METHOD_NAME){return fails((function(){return!!whitespaces[METHOD_NAME]()||"​᠎"!=="​᠎"[METHOD_NAME]()||PROPER_FUNCTION_NAME&&whitespaces[METHOD_NAME].name!==METHOD_NAME}))}},"../../node_modules/core-js/modules/es.array.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$includes=__webpack_require__("../../node_modules/core-js/internals/array-includes.js").includes,fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),addToUnscopables=__webpack_require__("../../node_modules/core-js/internals/add-to-unscopables.js");$({target:"Array",proto:!0,forced:fails((function(){return!Array(1).includes()}))},{includes:function includes(el){return $includes(this,el,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("includes")},"../../node_modules/core-js/modules/es.array.join.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),IndexedObject=__webpack_require__("../../node_modules/core-js/internals/indexed-object.js"),toIndexedObject=__webpack_require__("../../node_modules/core-js/internals/to-indexed-object.js"),arrayMethodIsStrict=__webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js"),nativeJoin=uncurryThis([].join);$({target:"Array",proto:!0,forced:IndexedObject!=Object||!arrayMethodIsStrict("join",",")},{join:function join(separator){return nativeJoin(toIndexedObject(this),void 0===separator?",":separator)}})},"../../node_modules/core-js/modules/es.array.some.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$some=__webpack_require__("../../node_modules/core-js/internals/array-iteration.js").some;$({target:"Array",proto:!0,forced:!__webpack_require__("../../node_modules/core-js/internals/array-method-is-strict.js")("some")},{some:function some(callbackfn){return $some(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"../../node_modules/core-js/modules/es.parse-int.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$parseInt=__webpack_require__("../../node_modules/core-js/internals/number-parse-int.js");$({global:!0,forced:parseInt!=$parseInt},{parseInt:$parseInt})},"../../node_modules/core-js/modules/es.string.includes.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),notARegExp=__webpack_require__("../../node_modules/core-js/internals/not-a-regexp.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),correctIsRegExpLogic=__webpack_require__("../../node_modules/core-js/internals/correct-is-regexp-logic.js"),stringIndexOf=uncurryThis("".indexOf);$({target:"String",proto:!0,forced:!correctIsRegExpLogic("includes")},{includes:function includes(searchString){return!!~stringIndexOf(toString(requireObjectCoercible(this)),toString(notARegExp(searchString)),arguments.length>1?arguments[1]:void 0)}})},"../../node_modules/core-js/modules/es.string.split.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var apply=__webpack_require__("../../node_modules/core-js/internals/function-apply.js"),call=__webpack_require__("../../node_modules/core-js/internals/function-call.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),fixRegExpWellKnownSymbolLogic=__webpack_require__("../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js"),anObject=__webpack_require__("../../node_modules/core-js/internals/an-object.js"),isNullOrUndefined=__webpack_require__("../../node_modules/core-js/internals/is-null-or-undefined.js"),isRegExp=__webpack_require__("../../node_modules/core-js/internals/is-regexp.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),speciesConstructor=__webpack_require__("../../node_modules/core-js/internals/species-constructor.js"),advanceStringIndex=__webpack_require__("../../node_modules/core-js/internals/advance-string-index.js"),toLength=__webpack_require__("../../node_modules/core-js/internals/to-length.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),getMethod=__webpack_require__("../../node_modules/core-js/internals/get-method.js"),arraySlice=__webpack_require__("../../node_modules/core-js/internals/array-slice-simple.js"),callRegExpExec=__webpack_require__("../../node_modules/core-js/internals/regexp-exec-abstract.js"),regexpExec=__webpack_require__("../../node_modules/core-js/internals/regexp-exec.js"),stickyHelpers=__webpack_require__("../../node_modules/core-js/internals/regexp-sticky-helpers.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),UNSUPPORTED_Y=stickyHelpers.UNSUPPORTED_Y,min=Math.min,$push=[].push,exec=uncurryThis(/./.exec),push=uncurryThis($push),stringSlice=uncurryThis("".slice);fixRegExpWellKnownSymbolLogic("split",(function(SPLIT,nativeSplit,maybeCallNative){var internalSplit;return internalSplit="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(separator,limit){var string=toString(requireObjectCoercible(this)),lim=void 0===limit?4294967295:limit>>>0;if(0===lim)return[];if(void 0===separator)return[string];if(!isRegExp(separator))return call(nativeSplit,string,separator,lim);for(var match,lastIndex,lastLength,output=[],flags=(separator.ignoreCase?"i":"")+(separator.multiline?"m":"")+(separator.unicode?"u":"")+(separator.sticky?"y":""),lastLastIndex=0,separatorCopy=new RegExp(separator.source,flags+"g");(match=call(regexpExec,separatorCopy,string))&&!((lastIndex=separatorCopy.lastIndex)>lastLastIndex&&(push(output,stringSlice(string,lastLastIndex,match.index)),match.length>1&&match.index<string.length&&apply($push,output,arraySlice(match,1)),lastLength=match[0].length,lastLastIndex=lastIndex,output.length>=lim));)separatorCopy.lastIndex===match.index&&separatorCopy.lastIndex++;return lastLastIndex===string.length?!lastLength&&exec(separatorCopy,"")||push(output,""):push(output,stringSlice(string,lastLastIndex)),output.length>lim?arraySlice(output,0,lim):output}:"0".split(void 0,0).length?function(separator,limit){return void 0===separator&&0===limit?[]:call(nativeSplit,this,separator,limit)}:nativeSplit,[function split(separator,limit){var O=requireObjectCoercible(this),splitter=isNullOrUndefined(separator)?void 0:getMethod(separator,SPLIT);return splitter?call(splitter,separator,O,limit):call(internalSplit,toString(O),separator,limit)},function(string,limit){var rx=anObject(this),S=toString(string),res=maybeCallNative(internalSplit,rx,S,limit,internalSplit!==nativeSplit);if(res.done)return res.value;var C=speciesConstructor(rx,RegExp),unicodeMatching=rx.unicode,flags=(rx.ignoreCase?"i":"")+(rx.multiline?"m":"")+(rx.unicode?"u":"")+(UNSUPPORTED_Y?"g":"y"),splitter=new C(UNSUPPORTED_Y?"^(?:"+rx.source+")":rx,flags),lim=void 0===limit?4294967295:limit>>>0;if(0===lim)return[];if(0===S.length)return null===callRegExpExec(splitter,S)?[S]:[];for(var p=0,q=0,A=[];q<S.length;){splitter.lastIndex=UNSUPPORTED_Y?0:q;var e,z=callRegExpExec(splitter,UNSUPPORTED_Y?stringSlice(S,q):S);if(null===z||(e=min(toLength(splitter.lastIndex+(UNSUPPORTED_Y?q:0)),S.length))===p)q=advanceStringIndex(S,q,unicodeMatching);else{if(push(A,stringSlice(S,p,q)),A.length===lim)return A;for(var i=1;i<=z.length-1;i++)if(push(A,z[i]),A.length===lim)return A;q=p=e}}return push(A,stringSlice(S,p)),A}]}),!!fails((function(){var re=/(?:)/,originalExec=re.exec;re.exec=function(){return originalExec.apply(this,arguments)};var result="ab".split(re);return 2!==result.length||"a"!==result[0]||"b"!==result[1]})),UNSUPPORTED_Y)},"../../node_modules/core-js/modules/es.string.trim.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),$trim=__webpack_require__("../../node_modules/core-js/internals/string-trim.js").trim;$({target:"String",proto:!0,forced:__webpack_require__("../../node_modules/core-js/internals/string-trim-forced.js")("trim")},{trim:function trim(){return $trim(this)}})},"../../node_modules/@vaadin/accordion/vaadin-accordion.js":(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/color.js"),__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/spacing.js");var _templateObject,vaadin_details_styles=__webpack_require__("../../node_modules/@vaadin/details/theme/lumo/vaadin-details-styles.js"),vaadin_themable_mixin=__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");var accordionPanel=(0,vaadin_themable_mixin.iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  :host {\n    margin: 0;\n    border-bottom: solid 1px var(--lumo-contrast-10pct);\n  }\n\n  :host(:last-child) {\n    border-bottom: none;\n  }\n\n  :host([theme~='filled']) {\n    border-bottom: none;\n  }\n\n  :host([theme~='filled']:not(:last-child)) {\n    margin-bottom: 2px;\n  }\n"])));(0,vaadin_themable_mixin.hC)("vaadin-accordion-panel",[vaadin_details_styles.X,accordionPanel],{moduleId:"lumo-accordion-panel"});__webpack_require__("../../node_modules/@vaadin/accordion/src/vaadin-accordion-panel.js"),__webpack_require__("../../node_modules/@vaadin/accordion/src/vaadin-accordion.js")},"../../node_modules/@vaadin/accordion/src/vaadin-accordion-panel.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_require__.d(__webpack_exports__,{H:()=>AccordionPanel});var AccordionPanel=function(_Details){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(AccordionPanel,_Details);var _super=_createSuper(AccordionPanel);function AccordionPanel(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,AccordionPanel),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(AccordionPanel,null,[{key:"is",get:function get(){return"vaadin-accordion-panel"}}]),AccordionPanel}(__webpack_require__("../../node_modules/@vaadin/details/src/vaadin-details.js").P);customElements.define(AccordionPanel.is,AccordionPanel)},"../../node_modules/@vaadin/accordion/src/vaadin-accordion.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>Accordion});var _templateObject,_polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js"),_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@polymer/polymer/polymer-element.js"),_vaadin_component_base_src_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vaadin/component-base/src/element-mixin.js"),_vaadin_component_base_src_keyboard_direction_mixin_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@vaadin/component-base/src/keyboard-direction-mixin.js"),_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js"),_vaadin_accordion_panel_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@vaadin/accordion/src/vaadin-accordion-panel.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Accordion=function(_KeyboardDirectionMix){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Accordion,_KeyboardDirectionMix);var _super=_createSuper(Accordion);function Accordion(){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Accordion),(_this=_super.call(this))._boundUpdateOpened=_this._updateOpened.bind(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Accordion,[{key:"focus",value:function focus(){this._observer&&this._observer.flush(),_get(_getPrototypeOf(Accordion.prototype),"focus",this).call(this)}},{key:"ready",value:function ready(){var _this2=this;_get(_getPrototypeOf(Accordion.prototype),"ready",this).call(this),this._observer=new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_0__.o(this,(function(info){_this2._setItems(_this2._filterItems(Array.from(_this2.children))),_this2._filterItems(info.addedNodes).forEach((function(el){el.addEventListener("opened-changed",_this2._boundUpdateOpened)}))}))}},{key:"_getItems",value:function _getItems(){return this.items}},{key:"_filterItems",value:function _filterItems(array){return array.filter((function(el){return el instanceof _vaadin_accordion_panel_js__WEBPACK_IMPORTED_MODULE_5__.H}))}},{key:"_updateItems",value:function _updateItems(items,opened){if(items){var itemToOpen=items[opened];items.forEach((function(item){item.opened=item===itemToOpen}))}}},{key:"_onKeyDown",value:function _onKeyDown(event){var item=event.composedPath()[0];this.items.some((function(el){return el.focusElement===item}))&&_get(_getPrototypeOf(Accordion.prototype),"_onKeyDown",this).call(this,event)}},{key:"_updateOpened",value:function _updateOpened(e){var target=this._filterItems(e.composedPath())[0],idx=this.items.indexOf(target);if(e.detail.value){if(target.disabled||-1===idx)return;this.opened=idx}else this.items.some((function(item){return item.opened}))||(this.opened=null)}}],[{key:"template",get:function get(){return(0,_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n      <slot></slot>\n    "])))}},{key:"is",get:function get(){return"vaadin-accordion"}},{key:"properties",get:function get(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}},{key:"observers",get:function get(){return["_updateItems(items, opened)"]}}]),Accordion}((0,_vaadin_component_base_src_keyboard_direction_mixin_js__WEBPACK_IMPORTED_MODULE_3__.V)((0,_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__.Tb)((0,_vaadin_component_base_src_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__.S)(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__.H3))));customElements.define(Accordion.is,Accordion)},"../cxl-ui/node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);