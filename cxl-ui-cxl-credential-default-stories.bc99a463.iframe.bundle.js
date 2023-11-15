"use strict";(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[2585],{"./cxl-ui/cxl-credential/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CertificateLongName:()=>CertificateLongName,CertificateLongTitle:()=>CertificateLongTitle,CertificateShort:()=>CertificateShort,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/lit/index.js");__webpack_require__("../cxl-ui/src/components/cxl-credential.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { html } from 'lit';\nimport '@conversionxl/cxl-ui/src/components/cxl-credential.js';\n\nexport default {\n  title: 'CXL UI/cxl-credential',\n};\n\nconst Template = ({ credentialId, fullName, title, type, date, credentialUrl }) => html`\n  <section style=\"display: flex; justify-content: center; padding: 64px\">\n    <cxl-credential\n      credential-id=${credentialId}\n      full-name=${fullName}\n      title=${title}\n      type=${type}\n      date=${date}\n      credential-url=${credentialUrl}\n    ></cxl-credential>\n  </section>\n`;\n\nexport const CertificateShort = Template.bind({});\nexport const CertificateLongTitle = Template.bind({});\nexport const CertificateLongName = Template.bind({});\n\nCertificateShort.argTypes = {\n  credentialId: { control: 'number' },\n  fullName: { control: 'text' },\n  title: { control: 'text' },\n  type: { control: 'select', options: ['course', 'minidegree'] },\n  date: { control: 'date' },\n  credentialUrl: { control: 'text' },\n}\n\nCertificateShort.args = {\n  credentialId: 7858542,\n  fullName: 'First Last',\n  title: 'Marketing Management',\n  type: 'course', // course | minidegree\n  date: '2023-06-16', // YYYY-MM-DD\n};\n\nCertificateLongTitle.args = {\n  ...CertificateShort.args,\n  title: 'Psychology and behaviour for digital marketing',\n};\n\nCertificateLongTitle.argTypes = { ...CertificateShort.argTypes }\n\nCertificateLongName.args = {\n  ...CertificateShort.args,\n  fullName: 'Francisco Guillermo Ochoa Magaña',\n  title: 'Psychology and behaviour for digital marketing longer title',\n};\n\nCertificateLongName.argTypes = { ...CertificateShort.argTypes }\n",locationsMap:{"certificate-short":{startLoc:{col:17,line:8},endLoc:{col:1,line:19},startBody:{col:17,line:8},endBody:{col:1,line:19}},"certificate-long-title":{startLoc:{col:17,line:8},endLoc:{col:1,line:19},startBody:{col:17,line:8},endBody:{col:1,line:19}},"certificate-long-name":{startLoc:{col:17,line:8},endLoc:{col:1,line:19},startBody:{col:17,line:8},endBody:{col:1,line:19}}}}},title:"CXL UI/cxl-credential"};var Template=function Template(_ref){var credentialId=_ref.credentialId,fullName=_ref.fullName,title=_ref.title,type=_ref.type,date=_ref.date,credentialUrl=_ref.credentialUrl;return(0,lit__WEBPACK_IMPORTED_MODULE_3__.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(['\n  <section style="display: flex; justify-content: center; padding: 64px">\n    <cxl-credential\n      credential-id=',"\n      full-name=","\n      title=","\n      type=","\n      date=","\n      credential-url=","\n    ></cxl-credential>\n  </section>\n"])),credentialId,fullName,title,type,date,credentialUrl)},CertificateShort=Template.bind({}),CertificateLongTitle=Template.bind({}),CertificateLongName=Template.bind({});CertificateShort.argTypes={credentialId:{control:"number"},fullName:{control:"text"},title:{control:"text"},type:{control:"select",options:["course","minidegree"]},date:{control:"date"},credentialUrl:{control:"text"}},CertificateShort.args={credentialId:7858542,fullName:"First Last",title:"Marketing Management",type:"course",date:"2023-06-16"},CertificateLongTitle.args=Object.assign({},CertificateShort.args,{title:"Psychology and behaviour for digital marketing"}),CertificateLongTitle.argTypes=Object.assign({},CertificateShort.argTypes),CertificateLongName.args=Object.assign({},CertificateShort.args,{fullName:"Francisco Guillermo Ochoa Magaña",title:"Psychology and behaviour for digital marketing longer title"}),CertificateLongName.argTypes=Object.assign({},CertificateShort.argTypes),CertificateShort.parameters=Object.assign({storySource:{source:'({ credentialId, fullName, title, type, date, credentialUrl }) => html`\n  <section style="display: flex; justify-content: center; padding: 64px">\n    <cxl-credential\n      credential-id=${credentialId}\n      full-name=${fullName}\n      title=${title}\n      type=${type}\n      date=${date}\n      credential-url=${credentialUrl}\n    ></cxl-credential>\n  </section>\n`'}},CertificateShort.parameters),CertificateLongTitle.parameters=Object.assign({storySource:{source:'({ credentialId, fullName, title, type, date, credentialUrl }) => html`\n  <section style="display: flex; justify-content: center; padding: 64px">\n    <cxl-credential\n      credential-id=${credentialId}\n      full-name=${fullName}\n      title=${title}\n      type=${type}\n      date=${date}\n      credential-url=${credentialUrl}\n    ></cxl-credential>\n  </section>\n`'}},CertificateLongTitle.parameters),CertificateLongName.parameters=Object.assign({storySource:{source:'({ credentialId, fullName, title, type, date, credentialUrl }) => html`\n  <section style="display: flex; justify-content: center; padding: 64px">\n    <cxl-credential\n      credential-id=${credentialId}\n      full-name=${fullName}\n      title=${title}\n      type=${type}\n      date=${date}\n      credential-url=${credentialUrl}\n    ></cxl-credential>\n  </section>\n`'}},CertificateLongName.parameters);var __namedExportsOrder=["CertificateShort","CertificateLongTitle","CertificateLongName"]},"../cxl-ui/src/components/cxl-credential.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.fill.js");var _templateObject,lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js"),browser=__webpack_require__("../../node_modules/qrcode/lib/browser.js");__webpack_require__("../cxl-lumo-styles/src/index.js");const cxl_credential_css=(0,__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js").iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([":host{display:flex;margin:auto;text-align:start;color:initial}.container{position:relative;z-index:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;width:1464px;height:1120px;padding:var(--lumo-size-xl);overflow:hidden;font-family:var(--lumo-font-family);font-size:var(--lumo-font-size-m);font-weight:500;color:var(--lumo-primary-contrast-color);text-transform:uppercase;background-color:var(--lumo-primary-color)}.container[invisible]{visibility:hidden}.container *{z-index:2}.container #circles{position:absolute;top:0;left:520px;z-index:1;width:100%;height:100%}.container #circles svg{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.container #cxl-logo{width:128px;height:54px;--lumo-primary-color: #fff}.container .thin{font-size:20px;font-weight:200;text-transform:lowercase;letter-spacing:2px}.container #header .description{font-size:20px;font-weight:900;line-height:19px;color:#010101}.container #header .title{font-size:102px;font-weight:900;margin-block:var(--lumo-space-l) 0;line-height:96px}.container #body{width:982px;font-size:45px;font-weight:900;line-height:40px;color:var(--lumo-contrast)}.container #body .highlight{color:var(--lumo-primary-contrast-color)}.container #body .nowrap{white-space:nowrap}.container #footer{display:flex;align-items:flex-end;justify-content:space-between;height:353px}.container #footer .left{display:flex;flex-direction:column;justify-content:space-between;height:100%}.container #footer .left .signature{margin-top:calc(-1*var(--lumo-size-xl));margin-left:calc(-1*var(--lumo-size-s))}.container #footer .code{text-align:end}:host([type=minidegree]) .container,:host([theme=dark]) .container{background-color:#000}:host([type=minidegree]) #header .description,:host([theme=dark]) #header .description{color:var(--lumo-primary-color)}:host([type=minidegree]) #header .title,:host([theme=dark]) #header .title{color:var(--lumo-contrast)}:host([type=minidegree]) #body,:host([theme=dark]) #body{color:var(--lumo-contrast)}:host([type=minidegree]) #body .highlight,:host([theme=dark]) #body .highlight{color:var(--lumo-primary-color)}:host([type=minidegree]) #footer .left .signature,:host([theme=dark]) #footer .left .signature{filter:invert(1)}"])));var cxl_credential_templateObject,_templateObject2,_templateObject3,_templateObject4;function cxl_credential_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive2(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _getDecoratorsApi(){_getDecoratorsApi=function _getDecoratorsApi(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function initializeInstanceElements(O,elements){["method","field"].forEach((function(kind){elements.forEach((function(element){element.kind===kind&&"own"===element.placement&&this.defineClassElement(O,element)}),this)}),this)},initializeClassElements:function initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach((function(kind){elements.forEach((function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}}),this)}),this)},defineClassElement:function defineClassElement(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function decorateClass(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};if(elements.forEach((function(element){this.addElementPlacement(element,placements)}),this),elements.forEach((function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element),newElements.push.apply(newElements,elementFinishersExtras.extras),finishers.push.apply(finishers,elementFinishersExtras.finishers)}),this),!decorators)return{elements:newElements,finishers};var result=this.decorateConstructor(newElements,decorators);return finishers.push.apply(finishers,result.finishers),result.finishers=finishers,result},addElementPlacement:function addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key))throw new TypeError("Duplicated element ("+element.key+")");keys.push(element.key)},decorateElement:function decorateElement(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element,this.addElementPlacement(element,placements),elementFinisherExtras.finisher&&finishers.push(elementFinisherExtras.finisher);var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++)this.addElementPlacement(newExtras[j],placements);extras.push.apply(extras,newExtras)}}return{element,finishers,extras}},decorateConstructor:function decorateConstructor(elements,decorators){for(var finishers=[],i=decorators.length-1;i>=0;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(void 0!==elementsAndFinisher.finisher&&finishers.push(elementsAndFinisher.finisher),void 0!==elementsAndFinisher.elements){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++)for(var k=j+1;k<elements.length;k++)if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement)throw new TypeError("Duplicated element ("+elements[j].key+")")}}return{elements,finishers}},fromElementDescriptor:function fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===element.kind&&(obj.initializer=element.initializer),obj},toElementDescriptors:function toElementDescriptors(elementObjects){if(void 0!==elementObjects)return function _toArray(arr){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(elementObjects).map((function(elementObject){var element=this.toElementDescriptor(elementObject);return this.disallowProperty(elementObject,"finisher","An element descriptor"),this.disallowProperty(elementObject,"extras","An element descriptor"),element}),this)},toElementDescriptor:function toElementDescriptor(elementObject){var kind=String(elementObject.kind);if("method"!==kind&&"field"!==kind)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+kind+'"');var key=_toPropertyKey(elementObject.key),placement=String(elementObject.placement);if("static"!==placement&&"prototype"!==placement&&"own"!==placement)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+placement+'"');var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind,key,placement,descriptor:Object.assign({},descriptor)};return"field"!==kind?this.disallowProperty(elementObject,"initializer","A method descriptor"):(this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor"),element.initializer=elementObject.initializer),element},toElementFinisherExtras:function toElementFinisherExtras(elementObject){return{element:this.toElementDescriptor(elementObject),finisher:_optionalCallableProperty(elementObject,"finisher"),extras:this.toElementDescriptors(elementObject.extras)}},fromClassDescriptor:function fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),obj},toClassDescriptor:function toClassDescriptor(obj){var kind=String(obj.kind);if("class"!==kind)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+kind+'"');this.disallowProperty(obj,"key","A class descriptor"),this.disallowProperty(obj,"placement","A class descriptor"),this.disallowProperty(obj,"descriptor","A class descriptor"),this.disallowProperty(obj,"initializer","A class descriptor"),this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");return{elements:this.toElementDescriptors(obj.elements),finisher}},runClassFinishers:function runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(void 0!==newConstructor){if("function"!=typeof newConstructor)throw new TypeError("Finishers must return a constructor.");constructor=newConstructor}}return constructor},disallowProperty:function disallowProperty(obj,name,objectType){if(void 0!==obj[name])throw new TypeError(objectType+" can't have a ."+name+" property.")}};return api}function _createElementDescriptor(def){var descriptor,key=_toPropertyKey(def.key);"method"===def.kind?descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}:"get"===def.kind?descriptor={get:def.value,configurable:!0,enumerable:!1}:"set"===def.kind?descriptor={set:def.value,configurable:!0,enumerable:!1}:"field"===def.kind&&(descriptor={configurable:!0,writable:!0,enumerable:!0});var element={kind:"field"===def.kind?"field":"method",key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor};return def.decorators&&(element.decorators=def.decorators),"field"===def.kind&&(element.initializer=def.value),element}function _coalesceGetterSetter(element,other){void 0!==element.descriptor.get?other.descriptor.get=element.descriptor.get:other.descriptor.set=element.descriptor.set}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return void 0!==desc&&!(void 0===desc.value&&void 0===desc.writable)}function _optionalCallableProperty(obj,name){var value=obj[name];if(void 0!==value&&"function"!=typeof value)throw new TypeError("Expected '"+name+"' to be a function");return value}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}(function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins)for(var i=0;i<mixins.length;i++)api=mixins[i](api);var r=factory((function initialize(O){api.initializeInstanceElements(O,decorated.elements)}),superClass),decorated=api.decorateClass(function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function isSameElement(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var other,element=elements[i];if("method"===element.kind&&(other=newElements.find(isSameElement)))if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other))throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+element.key+").");other.decorators=element.decorators}_coalesceGetterSetter(element,other)}else newElements.push(element)}return newElements}(r.d.map(_createElementDescriptor)),decorators);return api.initializeClassElements(r.F,decorated.elements),api.runClassFinishers(r.F,decorated.finishers)})([(0,decorators.Mo)("cxl-credential")],(function(_initialize,_LitElement){var CXLCredentialElement=function(_LitElement2){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CXLCredentialElement,_LitElement2);var _super=_createSuper(CXLCredentialElement);function CXLCredentialElement(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CXLCredentialElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_initialize(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CXLCredentialElement)}(_LitElement);return{F:CXLCredentialElement,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return[cxl_credential_css]}},{kind:"field",key:"_certWidth",value:function value(){return 1464}},{kind:"field",key:"_certHeight",value:function value(){return 1120}},{kind:"field",decorators:[(0,decorators.SB)({type:Number})],key:"correctionFactor",value:void 0},{kind:"field",decorators:[(0,decorators.Cb)({type:Number,attribute:"credential-id"})],key:"credentialId",value:function value(){return 0}},{kind:"field",decorators:[(0,decorators.Cb)({type:String,attribute:"full-name"})],key:"fullName",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"title",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"type",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String})],key:"date",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:String,attribute:"credential-url"})],key:"credentialUrl",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:Number})],key:"scale",value:function value(){return.5}},{kind:"field",decorators:[(0,decorators.Cb)({type:Number,attribute:"max-width"})],key:"maxWidth",value:void 0},{kind:"field",decorators:[(0,decorators.Cb)({type:Number,attribute:"parent-padding"})],key:"parentPadding",value:function value(){return 0}},{kind:"field",decorators:[(0,decorators.Cb)({type:Number,attribute:"code-scale"})],key:"codeScale",value:function value(){return 8}},{kind:"field",decorators:[(0,decorators.IO)("#qr-code")],key:"qrCodeCanvas",value:function value(){return null}},{kind:"field",key:"defaultUrl",value:function value(){return"https://cxl.com/institute/credential"}},{kind:"get",key:"url",value:function url(){return"".concat(this.credentialUrl||this.defaultUrl,"/").concat(this.credentialId)}},{kind:"get",key:"formattedDate",value:function formattedDate(){return new Date(this.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},{kind:"method",static:!0,key:"_circle",value:function _circle(stroke,size){return(0,lit.dy)(cxl_credential_templateObject||(cxl_credential_templateObject=cxl_credential_taggedTemplateLiteral(["\n      <svg\n        width=","\n        height=",'\n        viewBox="0 0 '," ",'"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <circle\n          cx="','"\n          cy="','"\n          r="','"\n          fill="none"\n          stroke-width="','"\n          stroke="rgba(255,255,255,0.15)"\n        />\n      </svg>\n    '])),size,size,size+stroke,size+stroke,(size+stroke)/2,(size+stroke)/2,size/2,stroke)}},{kind:"method",static:!0,key:"_circleBackground",value:function _circleBackground(numberOfCircles){var arr=Array(numberOfCircles).fill(5.5);return(0,lit.dy)(_templateObject2||(_templateObject2=cxl_credential_taggedTemplateLiteral([" "," "])),arr.map((function(stroke,i){return CXLCredentialElement._circle(stroke,stroke+50*i)})))}},{kind:"method",key:"_handleScaling",value:function _handleScaling(){var width=this.maxWidth||window.innerWidth-this.parentPadding,finalW=this._certWidth*this.scale;this.correctionFactor=width<finalW||this.maxWidth?width/finalW:1,this.style.height="".concat(this._certHeight*this.scale*this.correctionFactor,"px"),this.style.width="".concat(this._certWidth*this.scale*this.correctionFactor,"px")}},{kind:"method",key:"_renderQrCode",value:function _renderQrCode(){browser.toCanvas(this.qrCodeCanvas,this.url,{margin:0,scale:this.codeScale||8,color:{dark:"#ffffffff",light:"#ffffff00"}})}},{kind:"method",key:"updated",value:function updated(changes){var _this2=this;(changes.has("credentialId")||changes.has("credentialUrl"))&&this._renderQrCode(),changes.has("type")&&this.setAttribute("theme","minidegree"===this.type?"dark":"light"),(changes.has("scale")||changes.has("correctionFactor")||changes.has("codeScale"))&&requestAnimationFrame((function(){return _this2._handleScaling()}))}},{kind:"method",key:"renderCredential",value:function renderCredential(){return(0,lit.dy)(_templateObject3||(_templateObject3=cxl_credential_taggedTemplateLiteral(['\n      <div class="container" ?invisible=','>\n        <div id="circles">','</div>\n        <section id="header">\n          <div class="description">Certificate of achievement</div>\n          <h1 class="title">'," ",'</h1>\n        </section>\n        <section id="body">\n          <p>\n            <span class="nowrap">This is to certify that</span>\n            <span class="highlight nowrap">','</span>\n            <span class="nowrap">has successfully passed the</span>\n            '," ",'\n            <span class="nowrap">on <span class="highlight date">','</span></span>\n          </p>\n        </section>\n        <section id="footer">\n\n          <div class="left">\n            <div class="signature">\n              <img src="https://cxl.com/institute/wp-content/uploads/2023/07/cxl-accredible-certificates-CXL-Standard-footer.png" />\n            </div>\n            <div class="logo">\n              <vaadin-icon id="cxl-logo" icon="cxl:logo"></vaadin-icon>\n              <div id="certification" class="thin">certification</div>\n            </div>\n          </div>\n          <div class="code">\n            <canvas id="qr-code"></canvas>\n            <div id="qr-code-text" class="thin">certificate : ',"</div>\n          </div>\n        </section>\n      </div>\n    "])),!this.correctionFactor,CXLCredentialElement._circleBackground(28),this.title,this.type,this.fullName,this.title,this.type,this.formattedDate,this.credentialId)}},{kind:"method",key:"render",value:function render(){return(0,lit.dy)(_templateObject4||(_templateObject4=cxl_credential_taggedTemplateLiteral([' <div\n      class="wrapper"\n      style="transform: scale(','); transform-origin: 0 0;"\n    >\n      ',"\n    </div>"])),this.scale*this.correctionFactor,this.renderCredential())}}]}}),lit.oi)}}]);