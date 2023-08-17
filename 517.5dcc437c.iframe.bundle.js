/*! For license information please see 517.5dcc437c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[517],{"../../node_modules/@vaadin/component-base/src/active-mixin.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ActiveMixin});var _disabled_mixin_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vaadin/component-base/src/disabled-mixin.js"),_gestures_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vaadin/component-base/src/gestures.js"),_keyboard_mixin_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vaadin/component-base/src/keyboard-mixin.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var ActiveMixin=function ActiveMixin(superclass){return function(_DisabledMixin){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ActiveMixinClass,_DisabledMixin);var _super=_createSuper(ActiveMixinClass);function ActiveMixinClass(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ActiveMixinClass),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ActiveMixinClass,[{key:"_activeKeys",get:function get(){return[" "]}},{key:"ready",value:function ready(){var _this=this;_get(_getPrototypeOf(ActiveMixinClass.prototype),"ready",this).call(this),(0,_gestures_js__WEBPACK_IMPORTED_MODULE_1__.NH)(this,"down",(function(event){_this._shouldSetActive(event)&&_this._setActive(!0)})),(0,_gestures_js__WEBPACK_IMPORTED_MODULE_1__.NH)(this,"up",(function(){_this._setActive(!1)}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(ActiveMixinClass.prototype),"disconnectedCallback",this).call(this),this._setActive(!1)}},{key:"_shouldSetActive",value:function _shouldSetActive(_event){return!this.disabled}},{key:"_onKeyDown",value:function _onKeyDown(event){var _this2=this;_get(_getPrototypeOf(ActiveMixinClass.prototype),"_onKeyDown",this).call(this,event),this._shouldSetActive(event)&&this._activeKeys.includes(event.key)&&(this._setActive(!0),document.addEventListener("keyup",(function(e){_this2._activeKeys.includes(e.key)&&_this2._setActive(!1)}),{once:!0}))}},{key:"_setActive",value:function _setActive(active){this.toggleAttribute("active",active)}}]),ActiveMixinClass}((0,_disabled_mixin_js__WEBPACK_IMPORTED_MODULE_0__.f)((0,_keyboard_mixin_js__WEBPACK_IMPORTED_MODULE_2__.L)(superclass)))}},"../../node_modules/@vaadin/component-base/src/gestures.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jp:()=>gestures,NH:()=>addListener,X$:()=>_prevent,ys:()=>removeListener,z2:()=>register});var _async_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vaadin/component-base/src/async.js"),passiveTouchGestures=!1,wrap=function wrap(node){return node},HAS_NATIVE_TA="string"==typeof document.head.style.touchAction,GESTURE_KEY="__polymerGestures",HANDLED_OBJ="__polymerGesturesHandled",TOUCH_ACTION="__polymerGesturesTouchAction",MOUSE_EVENTS=["mousedown","mousemove","mouseup","click"],MOUSE_WHICH_TO_BUTTONS=[0,1,4,2],MOUSE_HAS_BUTTONS=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function isMouseEvent(name){return MOUSE_EVENTS.indexOf(name)>-1}var supportsPassive=!1;function PASSIVE_TOUCH(eventName){if(!isMouseEvent(eventName)&&"touchend"!==eventName)return HAS_NATIVE_TA&&supportsPassive&&passiveTouchGestures?{passive:!0}:void 0}!function(){try{var opts=Object.defineProperty({},"passive",{get:function get(){supportsPassive=!0}});window.addEventListener("test",null,opts),window.removeEventListener("test",null,opts)}catch(e){}}();var IS_TOUCH_ONLY=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),canBeDisabled={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function hasLeftMouseButton(ev){var type=ev.type;if(!isMouseEvent(type))return!1;if("mousemove"===type){var buttons=void 0===ev.buttons?1:ev.buttons;return ev instanceof window.MouseEvent&&!MOUSE_HAS_BUTTONS&&(buttons=MOUSE_WHICH_TO_BUTTONS[ev.which]||0),Boolean(1&buttons)}return 0===(void 0===ev.button?0:ev.button)}var POINTERSTATE={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function trackDocument(stateObj,movefn,upfn){stateObj.movefn=movefn,stateObj.upfn=upfn,document.addEventListener("mousemove",movefn),document.addEventListener("mouseup",upfn)}function untrackDocument(stateObj){document.removeEventListener("mousemove",stateObj.movefn),document.removeEventListener("mouseup",stateObj.upfn),stateObj.movefn=null,stateObj.upfn=null}var getComposedPath=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:function(event){return event.composedPath&&event.composedPath()||[]},gestures={},recognizers=[];function _findOriginalTarget(ev){var path=getComposedPath(ev);return path.length>0?path[0]:ev.target}function _handleNative(ev){var type=ev.type,gobj=ev.currentTarget[GESTURE_KEY];if(gobj){var gs=gobj[type];if(gs){if(!ev[HANDLED_OBJ]&&(ev[HANDLED_OBJ]={},type.startsWith("touch"))){var t=ev.changedTouches[0];if("touchstart"===type&&1===ev.touches.length&&(POINTERSTATE.touch.id=t.identifier),POINTERSTATE.touch.id!==t.identifier)return;HAS_NATIVE_TA||"touchstart"!==type&&"touchmove"!==type||function _handleTouchAction(ev){var t=ev.changedTouches[0],type=ev.type;if("touchstart"===type)POINTERSTATE.touch.x=t.clientX,POINTERSTATE.touch.y=t.clientY,POINTERSTATE.touch.scrollDecided=!1;else if("touchmove"===type){if(POINTERSTATE.touch.scrollDecided)return;POINTERSTATE.touch.scrollDecided=!0;var ta=function firstTouchAction(ev){for(var n,ta="auto",path=getComposedPath(ev),i=0;i<path.length;i++)if((n=path[i])[TOUCH_ACTION]){ta=n[TOUCH_ACTION];break}return ta}(ev),shouldPrevent=!1,dx=Math.abs(POINTERSTATE.touch.x-t.clientX),dy=Math.abs(POINTERSTATE.touch.y-t.clientY);ev.cancelable&&("none"===ta?shouldPrevent=!0:"pan-x"===ta?shouldPrevent=dy>dx:"pan-y"===ta&&(shouldPrevent=dx>dy)),shouldPrevent?ev.preventDefault():_prevent("track")}}(ev)}var handled=ev[HANDLED_OBJ];if(!handled.skip){for(var r,i=0;i<recognizers.length;i++)gs[(r=recognizers[i]).name]&&!handled[r.name]&&r.flow&&r.flow.start.indexOf(ev.type)>-1&&r.reset&&r.reset();for(var _r,_i=0;_i<recognizers.length;_i++)gs[(_r=recognizers[_i]).name]&&!handled[_r.name]&&(handled[_r.name]=!0,_r[type](ev))}}}}function addListener(node,evType,handler){return!!gestures[evType]&&(function _add(node,evType,handler){var recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];gobj||(node[GESTURE_KEY]=gobj={});for(var dep,gd,i=0;i<deps.length;i++)dep=deps[i],IS_TOUCH_ONLY&&isMouseEvent(dep)&&"click"!==dep||((gd=gobj[dep])||(gobj[dep]=gd={_count:0}),0===gd._count&&node.addEventListener(dep,_handleNative,PASSIVE_TOUCH(dep)),gd[name]=(gd[name]||0)+1,gd._count=(gd._count||0)+1);node.addEventListener(evType,handler),recognizer.touchAction&&function setTouchAction(node,value){HAS_NATIVE_TA&&node instanceof HTMLElement&&_async_js__WEBPACK_IMPORTED_MODULE_0__.YA.run((function(){node.style.touchAction=value}));node[TOUCH_ACTION]=value}(node,recognizer.touchAction)}(node,evType,handler),!0)}function removeListener(node,evType,handler){return!!gestures[evType]&&(function _remove(node,evType,handler){var recognizer=gestures[evType],deps=recognizer.deps,name=recognizer.name,gobj=node[GESTURE_KEY];if(gobj)for(var dep,gd,i=0;i<deps.length;i++)(gd=gobj[dep=deps[i]])&&gd[name]&&(gd[name]=(gd[name]||1)-1,gd._count=(gd._count||1)-1,0===gd._count&&node.removeEventListener(dep,_handleNative,PASSIVE_TOUCH(dep)));node.removeEventListener(evType,handler)}(node,evType,handler),!0)}function register(recog){recognizers.push(recog);for(var i=0;i<recog.emits.length;i++)gestures[recog.emits[i]]=recog}function _fire(target,type,detail){var ev=new Event(type,{bubbles:!0,cancelable:!0,composed:!0});if(ev.detail=detail,wrap(target).dispatchEvent(ev),ev.defaultPrevented){var preventer=detail.preventer||detail.sourceEvent;preventer&&preventer.preventDefault&&preventer.preventDefault()}}function _prevent(evName){var recognizer=function _findRecognizerByEvent(evName){for(var r,i=0;i<recognizers.length;i++){r=recognizers[i];for(var j=0;j<r.emits.length;j++)if(r.emits[j]===evName)return r}return null}(evName);recognizer.info&&(recognizer.info.prevent=!0)}function downupFire(type,target,event,preventer){target&&_fire(target,type,{x:event.clientX,y:event.clientY,sourceEvent:event,preventer,prevent:function prevent(e){return _prevent(e)}})}function trackHasMovedEnough(info,x,y){if(info.prevent)return!1;if(info.started)return!0;var dx=Math.abs(info.x-x),dy=Math.abs(info.y-y);return dx>=5||dy>=5}function trackFire(info,target,touch){if(target){var ddx,secondlast=info.moves[info.moves.length-2],lastmove=info.moves[info.moves.length-1],dx=lastmove.x-info.x,dy=lastmove.y-info.y,ddy=0;secondlast&&(ddx=lastmove.x-secondlast.x,ddy=lastmove.y-secondlast.y),_fire(target,"track",{state:info.state,x:touch.clientX,y:touch.clientY,dx,dy,ddx,ddy,sourceEvent:touch,hover:function hover(){return function deepTargetFind(x,y){for(var node=document.elementFromPoint(x,y),next=node;next&&next.shadowRoot&&!window.ShadyDOM&&next!==(next=next.shadowRoot.elementFromPoint(x,y));)next&&(node=next);return node}(touch.clientX,touch.clientY)}})}}function trackForward(info,e,preventer){var dx=Math.abs(e.clientX-info.x),dy=Math.abs(e.clientY-info.y),t=_findOriginalTarget(preventer||e);!t||canBeDisabled[t.localName]&&t.hasAttribute("disabled")||(isNaN(dx)||isNaN(dy)||dx<=25&&dy<=25||function isSyntheticClick(ev){if("click"===ev.type){if(0===ev.detail)return!0;var t=_findOriginalTarget(ev);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;var bcr=t.getBoundingClientRect(),x=ev.pageX,y=ev.pageY;return!(x>=bcr.left&&x<=bcr.right&&y>=bcr.top&&y<=bcr.bottom)}return!1}(e))&&(info.prevent||_fire(t,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer}))}register({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function reset(){untrackDocument(this.info)},mousedown:function mousedown(e){if(hasLeftMouseButton(e)){var t=_findOriginalTarget(e),self=this;trackDocument(this.info,(function movefn(e){hasLeftMouseButton(e)||(downupFire("up",t,e),untrackDocument(self.info))}),(function upfn(e){hasLeftMouseButton(e)&&downupFire("up",t,e),untrackDocument(self.info)})),downupFire("down",t,e)}},touchstart:function touchstart(e){downupFire("down",_findOriginalTarget(e),e.changedTouches[0],e)},touchend:function touchend(e){downupFire("up",_findOriginalTarget(e),e.changedTouches[0],e)}}),register({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function addMove(move){this.moves.length>2&&this.moves.shift(),this.moves.push(move)},movefn:null,upfn:null,prevent:!1},reset:function reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,untrackDocument(this.info)},mousedown:function mousedown(e){if(hasLeftMouseButton(e)){var t=_findOriginalTarget(e),self=this,movefn=function movefn(e){var x=e.clientX,y=e.clientY;trackHasMovedEnough(self.info,x,y)&&(self.info.state=self.info.started?"mouseup"===e.type?"end":"track":"start","start"===self.info.state&&_prevent("tap"),self.info.addMove({x,y}),hasLeftMouseButton(e)||(self.info.state="end",untrackDocument(self.info)),t&&trackFire(self.info,t,e),self.info.started=!0)};trackDocument(this.info,movefn,(function upfn(e){self.info.started&&movefn(e),untrackDocument(self.info)})),this.info.x=e.clientX,this.info.y=e.clientY}},touchstart:function touchstart(e){var ct=e.changedTouches[0];this.info.x=ct.clientX,this.info.y=ct.clientY},touchmove:function touchmove(e){var t=_findOriginalTarget(e),ct=e.changedTouches[0],x=ct.clientX,y=ct.clientY;trackHasMovedEnough(this.info,x,y)&&("start"===this.info.state&&_prevent("tap"),this.info.addMove({x,y}),trackFire(this.info,t,ct),this.info.state="track",this.info.started=!0)},touchend:function touchend(e){var t=_findOriginalTarget(e),ct=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:ct.clientX,y:ct.clientY}),trackFire(this.info,t,ct))}}),register({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function mousedown(e){hasLeftMouseButton(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function click(e){hasLeftMouseButton(e)&&trackForward(this.info,e)},touchstart:function touchstart(e){var touch=e.changedTouches[0];this.info.x=touch.clientX,this.info.y=touch.clientY},touchend:function touchend(e){trackForward(this.info,e.changedTouches[0],e)}})}}]);