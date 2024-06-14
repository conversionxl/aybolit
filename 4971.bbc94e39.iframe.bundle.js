/*! For license information please see 4971.bbc94e39.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[4971,2521],{"../../node_modules/@vaadin/checkbox/vaadin-checkbox.js":(__unused_webpack___webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/color.js"),__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/font-icons.js"),__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/sizing.js"),__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/spacing.js"),__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/style.js"),__webpack_require__("../../node_modules/@vaadin/vaadin-lumo-styles/typography.js");var _templateObject,vaadin_themable_mixin=__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");(0,vaadin_themable_mixin.hC)("vaadin-checkbox",(0,vaadin_themable_mixin.iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    :host {\n      color: var(--lumo-body-text-color);\n      font-size: var(--lumo-font-size-m);\n      font-family: var(--lumo-font-family);\n      line-height: var(--lumo-line-height-s);\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none;\n      cursor: default;\n      outline: none;\n      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));\n    }\n\n    :host([has-label]) ::slotted(label) {\n      padding-block: var(--lumo-space-xs);\n      padding-inline: var(--lumo-space-xs) var(--lumo-space-s);\n    }\n\n    [part='checkbox'] {\n      width: var(--_checkbox-size);\n      height: var(--_checkbox-size);\n      margin: var(--lumo-space-xs);\n      position: relative;\n      border-radius: var(--lumo-border-radius-s);\n      background-color: var(--lumo-contrast-20pct);\n      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;\n      cursor: var(--lumo-clickable-cursor);\n    }\n\n    :host([indeterminate]) [part='checkbox'],\n    :host([checked]) [part='checkbox'] {\n      background-color: var(--lumo-primary-color);\n    }\n\n    /* Checkmark */\n    [part='checkbox']::after {\n      pointer-events: none;\n      font-family: 'lumo-icons';\n      content: var(--lumo-icons-checkmark);\n      color: var(--lumo-primary-contrast-color);\n      font-size: calc(var(--_checkbox-size) + 2px);\n      line-height: 1;\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      contain: content;\n      opacity: 0;\n    }\n\n    :host([checked]) [part='checkbox']::after {\n      opacity: 1;\n    }\n\n    /* Indeterminate checkmark */\n    :host([indeterminate]) [part='checkbox']::after {\n      content: '';\n      opacity: 1;\n      top: 45%;\n      height: 10%;\n      left: 22%;\n      right: 22%;\n      width: auto;\n      border: 0;\n      background-color: var(--lumo-primary-contrast-color);\n    }\n\n    /* Focus ring */\n    :host([focus-ring]) [part='checkbox'] {\n      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n    }\n\n    /* Disabled */\n    :host([disabled]) {\n      pointer-events: none;\n      color: var(--lumo-disabled-text-color);\n    }\n\n    :host([disabled]) ::slotted(label) {\n      color: inherit;\n    }\n\n    :host([disabled]) [part='checkbox'] {\n      background-color: var(--lumo-contrast-10pct);\n    }\n\n    :host([disabled]) [part='checkbox']::after {\n      color: var(--lumo-contrast-30pct);\n    }\n\n    :host([indeterminate][disabled]) [part='checkbox']::after {\n      background-color: var(--lumo-contrast-30pct);\n    }\n\n    /* RTL specific styles */\n    :host([dir='rtl'][has-label]) ::slotted(label) {\n      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);\n    }\n\n    /* Used for activation \"halo\" */\n    [part='checkbox']::before {\n      pointer-events: none;\n      color: transparent;\n      width: 100%;\n      height: 100%;\n      line-height: var(--_checkbox-size);\n      border-radius: inherit;\n      background-color: inherit;\n      transform: scale(1.4);\n      opacity: 0;\n      transition: transform 0.1s, opacity 0.8s;\n    }\n\n    /* Hover */\n    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {\n      background-color: var(--lumo-contrast-30pct);\n    }\n\n    /* Disable hover for touch devices */\n    @media (pointer: coarse) {\n      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {\n        background-color: var(--lumo-contrast-20pct);\n      }\n    }\n\n    /* Active */\n    :host([active]) [part='checkbox'] {\n      transform: scale(0.9);\n      transition-duration: 0.05s;\n    }\n\n    :host([active][checked]) [part='checkbox'] {\n      transform: scale(1.1);\n    }\n\n    :host([active]:not([checked])) [part='checkbox']::before {\n      transition-duration: 0.01s, 0.01s;\n      transform: scale(0);\n      opacity: 0.4;\n    }\n  "]))),{moduleId:"lumo-checkbox"});var polymer_element=__webpack_require__("../../node_modules/@polymer/polymer/polymer-element.js"),active_mixin=__webpack_require__("../../node_modules/@vaadin/component-base/src/active-mixin.js"),controller_mixin=__webpack_require__("../../node_modules/@vaadin/component-base/src/controller-mixin.js"),element_mixin=__webpack_require__("../../node_modules/@vaadin/component-base/src/element-mixin.js"),tooltip_controller=__webpack_require__("../../node_modules/@vaadin/component-base/src/tooltip-controller.js"),mixin=__webpack_require__("../../node_modules/@polymer/polymer/lib/utils/mixin.js"),disabled_mixin=__webpack_require__("../../node_modules/@vaadin/component-base/src/disabled-mixin.js"),focus_utils=__webpack_require__("../../node_modules/@vaadin/component-base/src/focus-utils.js"),delegate_state_mixin=__webpack_require__("../../node_modules/@vaadin/field-base/src/delegate-state-mixin.js"),input_mixin=__webpack_require__("../../node_modules/@vaadin/field-base/src/input-mixin.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var CheckedMixin=(0,mixin.o)((function(superclass){return function(_DelegateStateMixin){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CheckedMixinClass,_DelegateStateMixin);var _super=_createSuper(CheckedMixinClass);function CheckedMixinClass(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CheckedMixinClass),_super.apply(this,arguments)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CheckedMixinClass,[{key:"_onChange",value:function _onChange(event){var input=event.target;this._toggleChecked(input.checked),(0,focus_utils.Qw)(input)||input.focus()}},{key:"_toggleChecked",value:function _toggleChecked(checked){this.checked=checked}}],[{key:"properties",get:function get(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0}}}},{key:"delegateProps",get:function get(){return[].concat(_toConsumableArray(_get(_getPrototypeOf(CheckedMixinClass),"delegateProps",this)),["checked"])}}]),CheckedMixinClass}((0,delegate_state_mixin.A)((0,disabled_mixin.f)((0,input_mixin.J)(superclass))))})),delegate_focus_mixin=__webpack_require__("../../node_modules/@vaadin/field-base/src/delegate-focus-mixin.js"),input_controller=__webpack_require__("../../node_modules/@vaadin/field-base/src/input-controller.js"),label_mixin=__webpack_require__("../../node_modules/@vaadin/field-base/src/label-mixin.js"),labelled_input_controller=__webpack_require__("../../node_modules/@vaadin/field-base/src/labelled-input-controller.js");function slot_target_controller_typeof(obj){return slot_target_controller_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},slot_target_controller_typeof(obj)}function slot_target_controller_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function slot_target_controller_toPrimitive(input,hint){if("object"!==slot_target_controller_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==slot_target_controller_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===slot_target_controller_typeof(key)?key:String(key)),descriptor)}var arg,key}var vaadin_checkbox_templateObject,SlotTargetController=function(){function SlotTargetController(sourceSlot,targetFactory,callback){var _this=this;!function slot_target_controller_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SlotTargetController),this.sourceSlot=sourceSlot,this.targetFactory=targetFactory,this.copyCallback=callback,sourceSlot&&sourceSlot.addEventListener("slotchange",(function(){_this.__copying?_this.__copying=!1:_this.__checkAndCopyNodesToSlotTarget()}))}return function slot_target_controller_createClass(Constructor,protoProps,staticProps){return protoProps&&slot_target_controller_defineProperties(Constructor.prototype,protoProps),staticProps&&slot_target_controller_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SlotTargetController,[{key:"hostConnected",value:function hostConnected(){var _this2=this;this.__sourceSlotObserver=new MutationObserver((function(){return _this2.__checkAndCopyNodesToSlotTarget()})),this.__copying||this.__checkAndCopyNodesToSlotTarget()}},{key:"__checkAndCopyNodesToSlotTarget",value:function __checkAndCopyNodesToSlotTarget(){this.__sourceSlotObserver.disconnect();var slotTarget=this.targetFactory();if(slotTarget){this.__slotTargetClones&&(this.__slotTargetClones.forEach((function(node){node.parentElement===slotTarget&&slotTarget.removeChild(node)})),delete this.__slotTargetClones);var nodes=this.sourceSlot.assignedNodes({flatten:!0}).filter((function(node){return!(node.nodeType===Node.TEXT_NODE&&""===node.textContent.trim())}));nodes.length>0&&(slotTarget.innerHTML="",this.__copying=!0,this.__copyNodesToSlotTarget(nodes,slotTarget))}}},{key:"__copyNodesToSlotTarget",value:function __copyNodesToSlotTarget(nodes,slotTarget){var _this3=this;this.__slotTargetClones=this.__slotTargetClones||[],nodes.forEach((function(node){var clone=node.cloneNode(!0);_this3.__slotTargetClones.push(clone),slotTarget.appendChild(clone),_this3.__sourceSlotObserver.observe(node,{attributes:!0,childList:!0,subtree:!0,characterData:!0})})),"function"==typeof this.copyCallback&&this.copyCallback(nodes)}}]),SlotTargetController}();function vaadin_checkbox_typeof(obj){return vaadin_checkbox_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},vaadin_checkbox_typeof(obj)}function vaadin_checkbox_toConsumableArray(arr){return function vaadin_checkbox_arrayWithoutHoles(arr){if(Array.isArray(arr))return vaadin_checkbox_arrayLikeToArray(arr)}(arr)||function vaadin_checkbox_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function vaadin_checkbox_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return vaadin_checkbox_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return vaadin_checkbox_arrayLikeToArray(o,minLen)}(arr)||function vaadin_checkbox_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vaadin_checkbox_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function vaadin_checkbox_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function vaadin_checkbox_toPrimitive(input,hint){if("object"!==vaadin_checkbox_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==vaadin_checkbox_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===vaadin_checkbox_typeof(key)?key:String(key)),descriptor)}var arg,key}function vaadin_checkbox_setPrototypeOf(o,p){return vaadin_checkbox_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},vaadin_checkbox_setPrototypeOf(o,p)}function vaadin_checkbox_createSuper(Derived){var hasNativeReflectConstruct=function vaadin_checkbox_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=vaadin_checkbox_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=vaadin_checkbox_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function vaadin_checkbox_possibleConstructorReturn(self,call){if(call&&("object"===vaadin_checkbox_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function vaadin_checkbox_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}(this,result)}}function vaadin_checkbox_get(){return vaadin_checkbox_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function vaadin_checkbox_superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=vaadin_checkbox_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},vaadin_checkbox_get.apply(this,arguments)}function vaadin_checkbox_getPrototypeOf(o){return vaadin_checkbox_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},vaadin_checkbox_getPrototypeOf(o)}var Checkbox=function(_LabelMixin){!function vaadin_checkbox_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&vaadin_checkbox_setPrototypeOf(subClass,superClass)}(Checkbox,_LabelMixin);var _super=vaadin_checkbox_createSuper(Checkbox);function Checkbox(){var _this;return function vaadin_checkbox_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Checkbox),(_this=_super.call(this))._setType("checkbox"),_this.value="on",_this}return function vaadin_checkbox_createClass(Constructor,protoProps,staticProps){return protoProps&&vaadin_checkbox_defineProperties(Constructor.prototype,protoProps),staticProps&&vaadin_checkbox_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Checkbox,[{key:"ready",value:function ready(){var _this2=this;vaadin_checkbox_get(vaadin_checkbox_getPrototypeOf(Checkbox.prototype),"ready",this).call(this),this.addController(new input_controller.b(this,(function(input){_this2._setInputElement(input),_this2._setFocusElement(input),_this2.stateTarget=input,_this2.ariaTarget=input}))),this.addController(new labelled_input_controller.v(this.inputElement,this._labelController)),this.addController(new SlotTargetController(this.$.noop,(function(){return _this2._labelController.node}),(function(){return _this2.__warnDeprecated()}))),this._tooltipController=new tooltip_controller.f(this),this.addController(this._tooltipController)}},{key:"__warnDeprecated",value:function __warnDeprecated(){console.warn('WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.\nPlease use <label slot="label"> wrapper or the label property instead.')}},{key:"_shouldSetActive",value:function _shouldSetActive(event){return"a"!==event.target.localName&&vaadin_checkbox_get(vaadin_checkbox_getPrototypeOf(Checkbox.prototype),"_shouldSetActive",this).call(this,event)}},{key:"_toggleChecked",value:function _toggleChecked(checked){this.indeterminate&&(this.indeterminate=!1),vaadin_checkbox_get(vaadin_checkbox_getPrototypeOf(Checkbox.prototype),"_toggleChecked",this).call(this,checked)}}],[{key:"is",get:function get(){return"vaadin-checkbox"}},{key:"template",get:function get(){return(0,polymer_element.dy)(vaadin_checkbox_templateObject||(vaadin_checkbox_templateObject=function vaadin_checkbox_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host([disabled]) {\n          -webkit-tap-highlight-color: transparent;\n        }\n\n        .vaadin-checkbox-container {\n          display: grid;\n          grid-template-columns: auto 1fr;\n          align-items: baseline;\n        }\n\n        [part=\'checkbox\'],\n        ::slotted(input),\n        ::slotted(label) {\n          grid-row: 1;\n        }\n\n        [part=\'checkbox\'],\n        ::slotted(input) {\n          grid-column: 1;\n        }\n\n        [part=\'checkbox\'] {\n          width: var(--vaadin-checkbox-size, 1em);\n          height: var(--vaadin-checkbox-size, 1em);\n        }\n\n        [part=\'checkbox\']::before {\n          display: block;\n          content: \'\\202F\';\n          line-height: var(--vaadin-checkbox-size, 1em);\n          contain: paint;\n        }\n\n        /* visually hidden */\n        ::slotted(input) {\n          opacity: 0;\n          cursor: inherit;\n          margin: 0;\n          align-self: stretch;\n          -webkit-appearance: none;\n          width: initial;\n          height: initial;\n        }\n      </style>\n      <div class="vaadin-checkbox-container">\n        <div part="checkbox"></div>\n        <slot name="input"></slot>\n        <slot name="label"></slot>\n\n        <div style="display: none !important">\n          <slot id="noop"></slot>\n        </div>\n      </div>\n      <slot name="tooltip"></slot>\n    '],['\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host([disabled]) {\n          -webkit-tap-highlight-color: transparent;\n        }\n\n        .vaadin-checkbox-container {\n          display: grid;\n          grid-template-columns: auto 1fr;\n          align-items: baseline;\n        }\n\n        [part=\'checkbox\'],\n        ::slotted(input),\n        ::slotted(label) {\n          grid-row: 1;\n        }\n\n        [part=\'checkbox\'],\n        ::slotted(input) {\n          grid-column: 1;\n        }\n\n        [part=\'checkbox\'] {\n          width: var(--vaadin-checkbox-size, 1em);\n          height: var(--vaadin-checkbox-size, 1em);\n        }\n\n        [part=\'checkbox\']::before {\n          display: block;\n          content: \'\\\\202F\';\n          line-height: var(--vaadin-checkbox-size, 1em);\n          contain: paint;\n        }\n\n        /* visually hidden */\n        ::slotted(input) {\n          opacity: 0;\n          cursor: inherit;\n          margin: 0;\n          align-self: stretch;\n          -webkit-appearance: none;\n          width: initial;\n          height: initial;\n        }\n      </style>\n      <div class="vaadin-checkbox-container">\n        <div part="checkbox"></div>\n        <slot name="input"></slot>\n        <slot name="label"></slot>\n\n        <div style="display: none !important">\n          <slot id="noop"></slot>\n        </div>\n      </div>\n      <slot name="tooltip"></slot>\n    '])))}},{key:"properties",get:function get(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""}}}},{key:"delegateProps",get:function get(){return[].concat(vaadin_checkbox_toConsumableArray(vaadin_checkbox_get(vaadin_checkbox_getPrototypeOf(Checkbox),"delegateProps",this)),["indeterminate"])}},{key:"delegateAttrs",get:function get(){return[].concat(vaadin_checkbox_toConsumableArray(vaadin_checkbox_get(vaadin_checkbox_getPrototypeOf(Checkbox),"delegateAttrs",this)),["name"])}}]),Checkbox}((0,label_mixin.h)(CheckedMixin((0,delegate_focus_mixin.B)((0,active_mixin.D)((0,element_mixin.S)((0,vaadin_themable_mixin.Tb)((0,controller_mixin.k)(polymer_element.H3))))))));customElements.define(Checkbox.is,Checkbox)},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.A});var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lit-html/directives/unsafe-html.js")}}]);