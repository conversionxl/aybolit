"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[9617],{"../cxl-ui/src/components/cxl-course-card.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.reflect.get.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js");var _templateObject,lit=__webpack_require__("../cxl-ui/node_modules/lit/index.js"),unsafe_html=__webpack_require__("../cxl-ui/node_modules/lit/directives/unsafe-html.js"),decorators=__webpack_require__("../cxl-ui/node_modules/lit/decorators.js");__webpack_require__("../../node_modules/@vaadin/details/vaadin-details.js"),__webpack_require__("../../node_modules/@vaadin/button/vaadin-button.js");const cxl_course_card_css=(0,__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js").iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['html{--lumo-font-family: "lato", sans-serif;--cxl-lumo-font-secondary: "lato", sans-serif;--cxl-lumo-font-ternary: "Montserrat", sans-serif;--cxl-lumo-font-size-hero: var(--lumo-font-size-xxxl);--cxl-lumo-font-size-xxl: calc(var(--lumo-font-size-xl) + var(--lumo-font-size-m));--cxl-lumo-line-height-xl: 2;--cxl-lumo-line-height-l: var(--lumo-line-height-m);--cxl-lumo-line-height-m: 1.5;--cxl-lumo-line-height-s: var(--lumo-line-height-s);--cxl-lumo-line-height-xs: var(--lumo-line-height-xs);--cxl-lumo-line-height-xxs: 1.15}@media only screen and (min-width: 35.5em){html{--cxl-lumo-font-size-hero: 4rem}}b,strong{font-weight:700}h1,h2,h3,h4,h5,h6{font-family:var(--cxl-lumo-font-ternary);font-weight:700;line-height:var(--cxl-lumo-line-height-xs);word-break:break-word}h1{margin-top:0;margin-bottom:.75em;font-size:var(--cxl-lumo-font-size-hero);font-weight:900;line-height:var(--cxl-lumo-line-height-xxs)}h1 b,h1 strong{font-weight:inherit}h2{font-size:var(--cxl-lumo-font-size-xxl);font-weight:900;line-height:var(--cxl-lumo-line-height-xxs)}h2 b,h2 strong{font-weight:inherit}h3{font-size:var(--lumo-font-size-xl);font-weight:700}h4{font-weight:500}@media only screen and (min-width: 35.5em){h4{font-size:var(--lumo-font-size-xl)}}h4 b,h4 strong{font-weight:700}h5{font-size:var(--lumo-font-size-l)}h6{font-size:var(--lumo-font-size-m)}p{font-family:var(--cxl-lumo-font-secondary)}.entry-content p{font-family:var(--cxl-lumo-font-secondary)}blockquote{--lumo-secondary-text-color: var(--lumo-tint);padding:var(--lumo-space-m) var(--lumo-space-xl);margin:0;font-style:italic;background-color:var(--lumo-shade);border-left:var(--lumo-space-s) solid var(--lumo-primary-color);border-radius:var(--lumo-border-radius);box-shadow:var(--lumo-box-shadow-xs)}blockquote:before{font-family:lumo-icons;font-family:vaadin-icons;font-style:normal;content:var(--vaadin-icons-quote-right);color:var(--lumo-primary-color)}:host{height:280px}:host(:hover){box-shadow:var(--lumo-box-shadow-s)}:host([completed]){opacity:.6}:host([completed]) [icon="lumo:checkmark"]{display:inline-block;margin-top:calc(var(--lumo-space-xs)*-1);color:var(--lumo-primary-color)}header .info{overflow:visible}header .info cxl-time,header .info .instructor{white-space:nowrap}.content-wrapper{height:100%;min-height:calc(var(--lumo-line-height-s)*3);line-height:var(--lumo-line-height-s)}.content-wrapper .content{display:-moz-box;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:3;-webkit-box-orient:vertical;-moz-line-clamp:3;-moz-box-orient:vertical;min-height:calc(var(--lumo-line-height-s)*3)}.content-wrapper .content ::slotted(p){margin-top:0 !important;margin-bottom:0 !important}.content-wrapper .tags{flex-wrap:wrap;margin-top:var(--lumo-space-s);transition:height .3s ease-in-out}.content-wrapper .tags ::slotted(span){font-style:italic;line-height:1}footer{position:relative;display:flex;justify-content:end}footer vaadin-details[theme=reverse]{display:none}footer vaadin-details[theme=reverse]::part(summary){justify-content:flex-start;gap:var(--lumo-space-s);font-size:var(--lumo-font-size-s)}footer vaadin-details[theme=reverse]::part(toggle){padding:calc(var(--lumo-space-xs)/4);margin-left:initial;font-size:var(--lumo-font-size-m);transform:rotate(90deg)}footer vaadin-details[theme=reverse][opened]::part(toggle){transform:rotate(-90deg)}footer vaadin-details[theme=reverse]::part(summary-content){font-weight:600;color:var(--lumo-contrast)}footer vaadin-details[theme=reverse]::part(content){padding-bottom:0;font-size:var(--lumo-font-size-s);line-height:var(--cxl-lumo-line-height-s)}footer .cta{right:0;font-weight:600}footer .cta vaadin-icon{width:var(--lumo-icon-size-s);height:var(--lumo-icon-size-s);padding:calc(var(--lumo-space-xs)/2);margin-left:var(--lumo-space-xs);background:var(--lumo-primary-color-10pct);border-radius:100%}:host(.cxl-full-card){height:320px}:host(.cxl-full-card) header .info .name{display:-moz-box;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:4;-webkit-box-orient:vertical;-moz-line-clamp:4;-moz-box-orient:vertical}:host(.cxl-full-card) .content-wrapper{min-height:calc(var(--lumo-line-height-s)*4)}:host(.cxl-full-card) .content-wrapper .content{display:-moz-box;display:-webkit-box;text-overflow:ellipsis;overflow:hidden;-webkit-line-clamp:4;-webkit-box-orient:vertical;-moz-line-clamp:4;-moz-box-orient:vertical;min-height:calc(var(--lumo-line-height-s)*4)}'])));var cxl_course_card_templateObject,_templateObject2,_templateObject3,cxl_base_card=__webpack_require__("../cxl-ui/src/components/cxl-base-card.js");function cxl_course_card_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray2(arr)}(arr)||function _iterableToArray2(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray2(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray2(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray2(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray2(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive2(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf2(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf2(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf2(o){return _getPrototypeOf2=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf2(o)}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _getDecoratorsApi(){_getDecoratorsApi=function _getDecoratorsApi(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function initializeInstanceElements(O,elements){["method","field"].forEach((function(kind){elements.forEach((function(element){element.kind===kind&&"own"===element.placement&&this.defineClassElement(O,element)}),this)}),this)},initializeClassElements:function initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach((function(kind){elements.forEach((function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}}),this)}),this)},defineClassElement:function defineClassElement(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function decorateClass(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};if(elements.forEach((function(element){this.addElementPlacement(element,placements)}),this),elements.forEach((function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element),newElements.push.apply(newElements,elementFinishersExtras.extras),finishers.push.apply(finishers,elementFinishersExtras.finishers)}),this),!decorators)return{elements:newElements,finishers};var result=this.decorateConstructor(newElements,decorators);return finishers.push.apply(finishers,result.finishers),result.finishers=finishers,result},addElementPlacement:function addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key))throw new TypeError("Duplicated element ("+element.key+")");keys.push(element.key)},decorateElement:function decorateElement(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element,this.addElementPlacement(element,placements),elementFinisherExtras.finisher&&finishers.push(elementFinisherExtras.finisher);var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++)this.addElementPlacement(newExtras[j],placements);extras.push.apply(extras,newExtras)}}return{element,finishers,extras}},decorateConstructor:function decorateConstructor(elements,decorators){for(var finishers=[],i=decorators.length-1;i>=0;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(void 0!==elementsAndFinisher.finisher&&finishers.push(elementsAndFinisher.finisher),void 0!==elementsAndFinisher.elements){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++)for(var k=j+1;k<elements.length;k++)if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement)throw new TypeError("Duplicated element ("+elements[j].key+")")}}return{elements,finishers}},fromElementDescriptor:function fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===element.kind&&(obj.initializer=element.initializer),obj},toElementDescriptors:function toElementDescriptors(elementObjects){if(void 0!==elementObjects)return function _toArray(arr){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(elementObjects).map((function(elementObject){var element=this.toElementDescriptor(elementObject);return this.disallowProperty(elementObject,"finisher","An element descriptor"),this.disallowProperty(elementObject,"extras","An element descriptor"),element}),this)},toElementDescriptor:function toElementDescriptor(elementObject){var kind=String(elementObject.kind);if("method"!==kind&&"field"!==kind)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+kind+'"');var key=_toPropertyKey(elementObject.key),placement=String(elementObject.placement);if("static"!==placement&&"prototype"!==placement&&"own"!==placement)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+placement+'"');var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind,key,placement,descriptor:Object.assign({},descriptor)};return"field"!==kind?this.disallowProperty(elementObject,"initializer","A method descriptor"):(this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor"),element.initializer=elementObject.initializer),element},toElementFinisherExtras:function toElementFinisherExtras(elementObject){return{element:this.toElementDescriptor(elementObject),finisher:_optionalCallableProperty(elementObject,"finisher"),extras:this.toElementDescriptors(elementObject.extras)}},fromClassDescriptor:function fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),obj},toClassDescriptor:function toClassDescriptor(obj){var kind=String(obj.kind);if("class"!==kind)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+kind+'"');this.disallowProperty(obj,"key","A class descriptor"),this.disallowProperty(obj,"placement","A class descriptor"),this.disallowProperty(obj,"descriptor","A class descriptor"),this.disallowProperty(obj,"initializer","A class descriptor"),this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");return{elements:this.toElementDescriptors(obj.elements),finisher}},runClassFinishers:function runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(void 0!==newConstructor){if("function"!=typeof newConstructor)throw new TypeError("Finishers must return a constructor.");constructor=newConstructor}}return constructor},disallowProperty:function disallowProperty(obj,name,objectType){if(void 0!==obj[name])throw new TypeError(objectType+" can't have a ."+name+" property.")}};return api}function _createElementDescriptor(def){var descriptor,key=_toPropertyKey(def.key);"method"===def.kind?descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}:"get"===def.kind?descriptor={get:def.value,configurable:!0,enumerable:!1}:"set"===def.kind?descriptor={set:def.value,configurable:!0,enumerable:!1}:"field"===def.kind&&(descriptor={configurable:!0,writable:!0,enumerable:!0});var element={kind:"field"===def.kind?"field":"method",key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor};return def.decorators&&(element.decorators=def.decorators),"field"===def.kind&&(element.initializer=def.value),element}function _coalesceGetterSetter(element,other){void 0!==element.descriptor.get?other.descriptor.get=element.descriptor.get:other.descriptor.set=element.descriptor.set}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return void 0!==desc&&!(void 0===desc.value&&void 0===desc.writable)}function _optionalCallableProperty(obj,name){var value=obj[name];if(void 0!==value&&"function"!=typeof value)throw new TypeError("Expected '"+name+"' to be a function");return value}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}(function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins)for(var i=0;i<mixins.length;i++)api=mixins[i](api);var r=factory((function initialize(O){api.initializeInstanceElements(O,decorated.elements)}),superClass),decorated=api.decorateClass(function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function isSameElement(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var other,element=elements[i];if("method"===element.kind&&(other=newElements.find(isSameElement)))if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other))throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+element.key+").");other.decorators=element.decorators}_coalesceGetterSetter(element,other)}else newElements.push(element)}return newElements}(r.d.map(_createElementDescriptor)),decorators);return api.initializeClassElements(r.F,decorated.elements),api.runClassFinishers(r.F,decorated.finishers)})([(0,decorators.Mo)("cxl-course-card")],(function(_initialize,_CXLBaseCardElement){var CXLCourseCardElement=function(_CXLBaseCardElement2){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CXLCourseCardElement,_CXLBaseCardElement2);var _super=_createSuper(CXLCourseCardElement);function CXLCourseCardElement(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CXLCourseCardElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_initialize(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CXLCourseCardElement)}(_CXLBaseCardElement);return{F:CXLCourseCardElement,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return[].concat(_toConsumableArray(_get(_getPrototypeOf(CXLCourseCardElement),"styles",this)),[cxl_course_card_css])}},{kind:"field",decorators:[(0,decorators.SB)()],key:"_moreHasChildren",value:function value(){return!1}},{kind:"field",decorators:[(0,decorators.Cb)({type:String,attribute:"cta-label"})],key:"ctaLabel",value:function value(){return"View"}},{kind:"field",decorators:[(0,decorators.Cb)({type:String,attribute:"cta-url"})],key:"ctaUrl",value:function value(){return""}},{kind:"method",key:"_slotHasChildren",value:function _slotHasChildren(e){var slot=e.target,name=slot.name,children=slot.assignedNodes();this["_".concat(name,"HasChildren")]=!!children.length}},{kind:"method",key:"_renderHeaderName",value:function _renderHeaderName(){return(0,lit.dy)(cxl_course_card_templateObject||(cxl_course_card_templateObject=cxl_course_card_taggedTemplateLiteral(['<h3 class="name" title=',">\n      <a href=",">","</a>\n      ","\n    </h3>"])),this.name,this.ctaUrl,(0,unsafe_html.A)(this.name),this.completed?(0,lit.dy)(_templateObject2||(_templateObject2=cxl_course_card_taggedTemplateLiteral(['<vaadin-icon icon="lumo:checkmark"></vaadin-icon>']))):lit.Ld)}},{kind:"method",key:"render",value:function render(){var _this2=this;return(0,lit.dy)(_templateObject3||(_templateObject3=cxl_course_card_taggedTemplateLiteral(['\n      <div class="container">\n        ','\n        <section class="content-wrapper">\n          <div class="content">\n            <slot name="content"></slot>\n          </div>\n        </section>\n        <footer>\n          <vaadin-details theme="reverse" ?empty=','>\n            <div slot="summary">Read more</div>\n            <slot name="more" @slotchange=','></slot>\n          </vaadin-details>\n          <vaadin-button\n            class="cta"\n            theme="tertiary"\n            @click=',"\n          >\n            "," ",'\n            <vaadin-icon icon="lumo:angle-right"></vaadin-icon>\n          </vaadin-button>\n        </footer>\n      </div>\n    '])),this._renderHeader(),!this._moreHasChildren,this._slotHasChildren,(function(e){e.stopImmediatePropagation(),_this2._goToLink(_this2.ctaUrl)}),this.ctaLabel,this.theme)}}]}}),cxl_base_card.u)}}]);