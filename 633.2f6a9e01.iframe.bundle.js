"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[633],{"../cxl-ui/src/components/cxl-base-card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>CXLBaseCardElement});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js");var _templateObject,lit=__webpack_require__("../../node_modules/lit/index.js"),unsafe_html=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js");__webpack_require__("../../node_modules/@vaadin/details/vaadin-details.js"),__webpack_require__("../../node_modules/@vaadin/button/vaadin-button.js"),__webpack_require__("../cxl-ui/src/components/cxl-time.js");const cxl_base_card_css=(0,__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js").iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([":host{position:relative;box-sizing:border-box;display:flex;width:100%;max-width:calc(100% - 2*var(--lumo-space-l));height:max-content;padding:var(--lumo-space-m) var(--lumo-space-l);font-size:var(--lumo-font-size-s);background:var(--lumo-tint);border:1px solid var(--lumo-contrast-10pct);border-radius:var(--lumo-border-radius-l);box-shadow:var(--lumo-box-shadow-xs);break-inside:avoid;transform:translateZ(0);--video-background: hsla(355.8, 74.7%, 48%, 0.03);--training-background: hsla(0, 0%, 10%, 0.03);--playbook-background: hsla(213, 100%, 62%, 0.03)}@media only screen and (min-width: 35.5em){:host{max-width:unset;margin:unset}:host .container>.attributes{display:none}:host header .info .attributes{display:flex}}:host [empty]{visibility:hidden;user-select:none}:host([hidden]){display:none}:host(:first-child){margin-top:unset}:host(:last-child){margin-bottom:unset}.container{display:flex;flex-direction:column;gap:var(--lumo-space-s);width:100%;transition:all .3s ease;justify-content:space-between}.container>.attributes{padding-top:0}.tags{display:flex;gap:var(--lumo-space-s);max-width:100%;min-height:1.6em}.attributes{display:flex;align-items:flex-start;align-self:stretch;padding:var(--lumo-space-s) 0;gap:var(--lumo-space-m);color:var(--lumo-shade-60pct)}header{display:flex;align-items:start;justify-content:space-between;gap:var(--lumo-space-m)}header .info{display:flex;flex-direction:column;align-items:flex-start;gap:var(--lumo-space-xs);align-self:stretch;max-width:calc(100% - var(--lumo-space-m) - 80px);overflow:hidden}header .info .label{display:block;margin-bottom:var(--lumo-space-s);font-size:var(--lumo-font-size-s);font-weight:400;color:var(--lumo-primary-color);text-transform:capitalize}header .info .name{font-family:var(--lumo-font-family);font-size:var(--lumo-font-size-xl);font-style:normal;font-weight:700;line-height:var(--lumo-line-height-xs);color:#1a1a1a}header .info .attributes{display:none}header .info .tags{flex-wrap:nowrap}header .info .tags ::slotted(.tag),header .info .tags .tag:not(:first-child):not(.new){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}header .info .tags .tag:first-child,header .info .tags .tag.new{color:var(--lumo-primary-color)}header .info .tags .tag:first-child{text-transform:capitalize}header .instructor-image{width:80px;height:92px}header .instructor-image img{height:80px;overflow:hidden;border-radius:100px}.badge-new{display:none}:host([new]) .badge-new{position:absolute;top:calc(-1*var(--lumo-space-s));right:calc(-1*var(--lumo-space-s));display:block;width:calc(2*var(--lumo-space-m));height:calc(2*var(--lumo-space-m));padding:6px;color:var(--lumo-primary-contrast-color);background:var(--lumo-primary-color);border-radius:100%}:host(:hover){border-color:var(--lumo-primary-color)}"])));var cxl_base_card_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14;function cxl_base_card_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive2(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _getDecoratorsApi(){_getDecoratorsApi=function _getDecoratorsApi(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function initializeInstanceElements(O,elements){["method","field"].forEach((function(kind){elements.forEach((function(element){element.kind===kind&&"own"===element.placement&&this.defineClassElement(O,element)}),this)}),this)},initializeClassElements:function initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach((function(kind){elements.forEach((function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}}),this)}),this)},defineClassElement:function defineClassElement(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function decorateClass(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};if(elements.forEach((function(element){this.addElementPlacement(element,placements)}),this),elements.forEach((function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element),newElements.push.apply(newElements,elementFinishersExtras.extras),finishers.push.apply(finishers,elementFinishersExtras.finishers)}),this),!decorators)return{elements:newElements,finishers};var result=this.decorateConstructor(newElements,decorators);return finishers.push.apply(finishers,result.finishers),result.finishers=finishers,result},addElementPlacement:function addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key))throw new TypeError("Duplicated element ("+element.key+")");keys.push(element.key)},decorateElement:function decorateElement(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element,this.addElementPlacement(element,placements),elementFinisherExtras.finisher&&finishers.push(elementFinisherExtras.finisher);var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++)this.addElementPlacement(newExtras[j],placements);extras.push.apply(extras,newExtras)}}return{element,finishers,extras}},decorateConstructor:function decorateConstructor(elements,decorators){for(var finishers=[],i=decorators.length-1;i>=0;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(void 0!==elementsAndFinisher.finisher&&finishers.push(elementsAndFinisher.finisher),void 0!==elementsAndFinisher.elements){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++)for(var k=j+1;k<elements.length;k++)if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement)throw new TypeError("Duplicated element ("+elements[j].key+")")}}return{elements,finishers}},fromElementDescriptor:function fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===element.kind&&(obj.initializer=element.initializer),obj},toElementDescriptors:function toElementDescriptors(elementObjects){if(void 0!==elementObjects)return function _toArray(arr){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(elementObjects).map((function(elementObject){var element=this.toElementDescriptor(elementObject);return this.disallowProperty(elementObject,"finisher","An element descriptor"),this.disallowProperty(elementObject,"extras","An element descriptor"),element}),this)},toElementDescriptor:function toElementDescriptor(elementObject){var kind=String(elementObject.kind);if("method"!==kind&&"field"!==kind)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+kind+'"');var key=_toPropertyKey(elementObject.key),placement=String(elementObject.placement);if("static"!==placement&&"prototype"!==placement&&"own"!==placement)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+placement+'"');var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind,key,placement,descriptor:Object.assign({},descriptor)};return"field"!==kind?this.disallowProperty(elementObject,"initializer","A method descriptor"):(this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor"),element.initializer=elementObject.initializer),element},toElementFinisherExtras:function toElementFinisherExtras(elementObject){return{element:this.toElementDescriptor(elementObject),finisher:_optionalCallableProperty(elementObject,"finisher"),extras:this.toElementDescriptors(elementObject.extras)}},fromClassDescriptor:function fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),obj},toClassDescriptor:function toClassDescriptor(obj){var kind=String(obj.kind);if("class"!==kind)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+kind+'"');this.disallowProperty(obj,"key","A class descriptor"),this.disallowProperty(obj,"placement","A class descriptor"),this.disallowProperty(obj,"descriptor","A class descriptor"),this.disallowProperty(obj,"initializer","A class descriptor"),this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");return{elements:this.toElementDescriptors(obj.elements),finisher}},runClassFinishers:function runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(void 0!==newConstructor){if("function"!=typeof newConstructor)throw new TypeError("Finishers must return a constructor.");constructor=newConstructor}}return constructor},disallowProperty:function disallowProperty(obj,name,objectType){if(void 0!==obj[name])throw new TypeError(objectType+" can't have a ."+name+" property.")}};return api}function _createElementDescriptor(def){var descriptor,key=_toPropertyKey(def.key);"method"===def.kind?descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}:"get"===def.kind?descriptor={get:def.value,configurable:!0,enumerable:!1}:"set"===def.kind?descriptor={set:def.value,configurable:!0,enumerable:!1}:"field"===def.kind&&(descriptor={configurable:!0,writable:!0,enumerable:!0});var element={kind:"field"===def.kind?"field":"method",key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor};return def.decorators&&(element.decorators=def.decorators),"field"===def.kind&&(element.initializer=def.value),element}function _coalesceGetterSetter(element,other){void 0!==element.descriptor.get?other.descriptor.get=element.descriptor.get:other.descriptor.set=element.descriptor.set}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return void 0!==desc&&!(void 0===desc.value&&void 0===desc.writable)}function _optionalCallableProperty(obj,name){var value=obj[name];if(void 0!==value&&"function"!=typeof value)throw new TypeError("Expected '"+name+"' to be a function");return value}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var CXLBaseCardElement=function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins)for(var i=0;i<mixins.length;i++)api=mixins[i](api);var r=factory((function initialize(O){api.initializeInstanceElements(O,decorated.elements)}),superClass),decorated=api.decorateClass(function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function isSameElement(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var other,element=elements[i];if("method"===element.kind&&(other=newElements.find(isSameElement)))if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other))throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+element.key+").");other.decorators=element.decorators}_coalesceGetterSetter(element,other)}else newElements.push(element)}return newElements}(r.d.map(_createElementDescriptor)),decorators);return api.initializeClassElements(r.F,decorated.elements),api.runClassFinishers(r.F,decorated.finishers)}(null,(function(_initialize,_LitElement){var CXLBaseCardElement=function(_LitElement2){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CXLBaseCardElement,_LitElement2);var _super=_createSuper(CXLBaseCardElement);function CXLBaseCardElement(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CXLBaseCardElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_initialize(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CXLBaseCardElement)}(_LitElement);return{F:CXLBaseCardElement,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return[cxl_base_card_css]}},{kind:"field",key:"separator",value:function value(){return(0,lit.dy)(cxl_base_card_templateObject||(cxl_base_card_templateObject=cxl_base_card_taggedTemplateLiteral(["<span> | </span>"])))}},{kind:"field",decorators:[(0,decorators.SB)()],key:"_tagsHasChildren",value:function value(){return!1}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"id",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"theme",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"name",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"time",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"instructor",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"avatar",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:Boolean})],key:"showTags",value:function value(){return!0}},{kind:"field",decorators:[(0,decorators.Cb)({type:Boolean,reflect:!0})],key:"new",value:function value(){return!1}},{kind:"field",decorators:[(0,decorators.Cb)({type:Boolean,reflect:!0})],key:"completed",value:function value(){return!1}},{kind:"field",decorators:[(0,decorators.Cb)({type:Boolean,reflect:!0,attribute:"show-time-icon"})],key:"showTimeIcon",value:function value(){return!1}},{kind:"method",key:"_slotHasChildren",value:function _slotHasChildren(e){var slot=e.target,name=slot.name,children=slot.assignedNodes();this["_".concat(name,"HasChildren")]=!!children.length}},{kind:"method",key:"_renderHeaderTags",value:function _renderHeaderTags(){return(0,lit.dy)(_templateObject2||(_templateObject2=cxl_base_card_taggedTemplateLiteral(['\n      <div class="tags">\n        ',"\n        ",'\n        <slot name="tags" @slotchange=',"></slot>\n        ","\n      </div>\n    "])),this.theme?(0,lit.dy)(_templateObject3||(_templateObject3=cxl_base_card_taggedTemplateLiteral(['<span class="tag">',"</span>"])),this.theme):"",this.theme&&this._tagsHasChildren?this.separator:"",this._slotHasChildren,this.new?(0,lit.dy)(_templateObject4||(_templateObject4=cxl_base_card_taggedTemplateLiteral(["",'<span class="tag new">NEW</span>'])),this.theme?this.separator:""):"")}},{kind:"method",key:"_renderHeaderName",value:function _renderHeaderName(){return(0,lit.dy)(_templateObject5||(_templateObject5=cxl_base_card_taggedTemplateLiteral(['\n      <div class="name" title=',">\n        ","\n          <span>","","\n      </div>\n    "])),this.name,"minidegree"===this.theme?(0,lit.dy)(_templateObject6||(_templateObject6=cxl_base_card_taggedTemplateLiteral(['<span class="label">',"</span>"])),this.theme):lit.Ld,(0,unsafe_html.A)(this.name),this.completed?(0,lit.dy)(_templateObject7||(_templateObject7=cxl_base_card_taggedTemplateLiteral(['<vaadin-icon icon="lumo:checkmark"></vaadin-icon>']))):lit.Ld)}},{kind:"method",key:"_renderHeaderAttributes",value:function _renderHeaderAttributes(){return(0,lit.dy)(_templateObject8||(_templateObject8=cxl_base_card_taggedTemplateLiteral(["\n      ","\n    "])),this.time||this.instructor?(0,lit.dy)(_templateObject9||(_templateObject9=cxl_base_card_taggedTemplateLiteral(['<div class="attributes">\n          ',"\n          ","\n        </div>"])),this.time?(0,lit.dy)(_templateObject10||(_templateObject10=cxl_base_card_taggedTemplateLiteral(["<cxl-time time="," ?show-icon=","></cxl-time>"])),this.time,this.showTimeIcon):lit.Ld,this.instructor?(0,lit.dy)(_templateObject11||(_templateObject11=cxl_base_card_taggedTemplateLiteral(['<div class="instructor">By: ',"</div>"])),this.instructor):lit.Ld):lit.Ld)}},{kind:"method",key:"_renderAvatar",value:function _renderAvatar(){return(0,lit.dy)(_templateObject12||(_templateObject12=cxl_base_card_taggedTemplateLiteral(["<img src=",' alt="','" />'])),this.avatar,this.instructor)}},{kind:"method",key:"_renderHeader",value:function _renderHeader(){return(0,lit.dy)(_templateObject13||(_templateObject13=cxl_base_card_taggedTemplateLiteral(['\n      <header>\n        <div class="info">\n          '," ","\n          ","\n        </div>\n        ","\n      </header>\n      ","\n    "])),this.showTags?this._renderHeaderTags():"",this._renderHeaderName(),this._renderHeaderAttributes(),this.avatar?(0,lit.dy)(_templateObject14||(_templateObject14=cxl_base_card_taggedTemplateLiteral(['<div class="instructor-image">',"</div>"])),this._renderAvatar()):lit.Ld,this._renderHeaderAttributes())}}]}}),lit.oi)}}]);