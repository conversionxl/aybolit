(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[4817],{"./cxl-ui/cxl-stats/default.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLStats:()=>CXLStats,__namedExportsOrder:()=>__namedExportsOrder,default:()=>default_stories});__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.link.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var lit=__webpack_require__("../../node_modules/lit/index.js"),unsafe_html=__webpack_require__("../../node_modules/lit/directives/unsafe-html.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../cxl-ui/src/components/cxl-stats.js");const cxl_stats_data_namespaceObject=JSON.parse('[{"title":"Lessons<br>completed","count":"30"},{"title":"Courses<br>completed","count":"1","link":"https://cxl.com"},{"title":"Certificates<br>completed","count":"95","link":"https://cxl.com"}]');var _templateObject,_templateObject2,_templateObject3,_templateObject4;function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const default_stories={parameters:{storySource:{source:"import { html } from 'lit';\nimport { unsafeHTML } from 'lit/directives/unsafe-html.js';\nimport '@conversionxl/cxl-lumo-styles';\nimport '@conversionxl/cxl-ui/src/components/cxl-stats.js';\nimport statsData from './cxl-stats.data.json';\n\nexport default {\n  title: 'CXL UI/cxl-stats',\n};\n\nexport const CXLStats = ({ theme, statsCount }) => {\n  for (let i = 0; i < statsCount; i += 1) {\n    const newItem = {\n      title: 'Complete<br>library',\n      count: '12%',\n      featured: true,\n    };\n\n    statsData.push(newItem);\n  }\n\n  return html`\n    <cxl-stats class=\"stats\" theme=\"${theme}\">\n      ${statsData.slice(0, statsCount).map((el) => html`\n        <div class=\"stat-item ${el.featured ? 'featured' : ''}\">\n          <h4 class=\"stat-title\">${unsafeHTML(el.title)}</h4>\n          ${el.link\n            ? html`<a class=\"stat-count\" href=\"${el.link}\">${el.count}</a>`\n            : html`<p class=\"stat-count\">${el.count}</p>`}\n        </div>\n      `)}\n    </cxl-stats>\n  `;\n};\n\nObject.assign(CXLStats, {\n  args: {\n    statsCount: 3,\n  },\n  storyName: 'CXL Stats',\n});\n",locationsMap:{"cxl-stats":{startLoc:{col:24,line:11},endLoc:{col:1,line:34},startBody:{col:24,line:11},endBody:{col:1,line:34}}}}},title:"CXL UI/cxl-stats"};var CXLStats=function CXLStats(_ref){for(var theme=_ref.theme,statsCount=_ref.statsCount,i=0;i<statsCount;i+=1){cxl_stats_data_namespaceObject.push({title:"Complete<br>library",count:"12%",featured:!0})}return(0,lit.dy)(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(['\n    <cxl-stats class="stats" theme="','">\n      ',"\n    </cxl-stats>\n  "])),theme,cxl_stats_data_namespaceObject.slice(0,statsCount).map((function(el){return(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n        <div class="stat-item ','">\n          <h4 class="stat-title">',"</h4>\n          ","\n        </div>\n      "])),el.featured?"featured":"",(0,unsafe_html.A)(el.title),el.link?(0,lit.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(['<a class="stat-count" href="','">',"</a>"])),el.link,el.count):(0,lit.dy)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(['<p class="stat-count">',"</p>"])),el.count))})))};Object.assign(CXLStats,{args:{statsCount:3},storyName:"CXL Stats"}),CXLStats.parameters=Object.assign({storySource:{source:'({ theme, statsCount }) => {\n  for (let i = 0; i < statsCount; i += 1) {\n    const newItem = {\n      title: \'Complete<br>library\',\n      count: \'12%\',\n      featured: true,\n    };\n\n    statsData.push(newItem);\n  }\n\n  return html`\n    <cxl-stats class="stats" theme="${theme}">\n      ${statsData.slice(0, statsCount).map((el) => html`\n        <div class="stat-item ${el.featured ? \'featured\' : \'\'}">\n          <h4 class="stat-title">${unsafeHTML(el.title)}</h4>\n          ${el.link\n            ? html`<a class="stat-count" href="${el.link}">${el.count}</a>`\n            : html`<p class="stat-count">${el.count}</p>`}\n        </div>\n      `)}\n    </cxl-stats>\n  `;\n}'}},CXLStats.parameters);var __namedExportsOrder=["CXLStats"]},"./cxl-ui/cxl-team-dashboard/cxl-dashboard-team-stats.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CXLDashboardTeamStats:()=>CXLDashboardTeamStats,__namedExportsOrder:()=>__namedExportsOrder,default:()=>cxl_dashboard_team_stats_stories});__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js");var _templateObject,lit=__webpack_require__("../../node_modules/lit/index.js"),default_stories=(__webpack_require__("../cxl-ui/src/components/cxl-dashboard-team-stats.js"),__webpack_require__("./cxl-ui/cxl-stats/default.stories.js"));var ArgTypes={progress:{type:Number,control:"number"},manageRoadmapsURL:{type:String,control:"text"}};const cxl_dashboard_team_stats_stories={parameters:{storySource:{source:"import { TeamDashboardStatsTemplate, ArgTypes } from './stats-template';\n\nexport default {\n  title: 'CXL UI/cxl-team-dashboard',\n};\n\nexport const CXLDashboardTeamStats = TeamDashboardStatsTemplate.bind({});\n\nCXLDashboardTeamStats.argTypes = {\n  ...ArgTypes,\n};\n\nCXLDashboardTeamStats.args = {\n  progress: 0.65,\n  manageRoadmapsURL: 'https://cxl.com',\n  hideProgress: false,\n  hideStats: false,\n};\n",locationsMap:{"cxl-dashboard-team-stats":{startLoc:{col:37,line:7},endLoc:{col:72,line:7},startBody:{col:37,line:7},endBody:{col:72,line:7}}}}},title:"CXL UI/cxl-team-dashboard"};var CXLDashboardTeamStats=function TeamDashboardStatsTemplate(args){return(0,lit.dy)(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  <cxl-dashboard-team-stats\n    progress=","\n    manage-roadmaps-url=","\n    ?hide-progress=","\n    ?hide-stats=",'\n  >\n    <div slot="stats">',"</div>\n  </cxl-dashboard-team-stats>\n"])),args.progress,args.manageRoadmapsURL,args.hideProgress,args.hideStats,(0,default_stories.CXLStats)({statsCount:3}))}.bind({});CXLDashboardTeamStats.argTypes=Object.assign({},ArgTypes),CXLDashboardTeamStats.args={progress:.65,manageRoadmapsURL:"https://cxl.com",hideProgress:!1,hideStats:!1},CXLDashboardTeamStats.parameters=Object.assign({storySource:{source:"TeamDashboardStatsTemplate.bind({})"}},CXLDashboardTeamStats.parameters);var __namedExportsOrder=["CXLDashboardTeamStats"]},"../cxl-ui/src/components/cxl-dashboard-team-stats.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.create.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.splice.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.to-fixed.js");var _templateObject,lit=__webpack_require__("../../node_modules/lit/index.js"),decorators=__webpack_require__("../../node_modules/lit/decorators.js");__webpack_require__("../cxl-lumo-styles/src/index.js"),__webpack_require__("../../node_modules/@vaadin/progress-bar/vaadin-progress-bar.js"),__webpack_require__("../../node_modules/@vaadin/button/vaadin-button.js");const cxl_dashboard_team_stats_css=(0,__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js").iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([':host{display:flex;justify-content:center;width:100%}:host .container{position:relative;box-sizing:border-box;display:flex;flex-direction:column;gap:calc(2*var(--lumo-space-m));width:100%;max-width:var(--cxl-content-max-width-wide);padding:var(--lumo-space-m);background-color:var(--cxl-color-light-gray)}:host .container::before{position:absolute;top:0;bottom:0;left:50%;z-index:-1;width:100vw;content:"";background-color:var(--cxl-color-light-gray);transform:translateX(-50%)}@media only screen and (min-width: 35.5em){:host .container{padding-bottom:calc(var(--lumo-space-xl) + var(--lumo-space-l))}}@media only screen and (min-width: 64em){:host .container{padding:var(--lumo-space-xl) 0}}:host .container header{display:flex;justify-content:space-between}:host .container header .title{margin-block:0;font-weight:900}:host .container header .actions{display:none}:host .container header .team-settings{--_lumo-button-primary-color: var(--lumo-primary-color);--_lumo-button-primary-background-color: var(--lumo-tint)}@media only screen and (min-width: 35.5em){:host .container header .actions{display:flex}}:host .container .content{display:flex;flex-direction:column-reverse;justify-content:space-between;gap:var(--lumo-space-l)}:host .container .content .progress{min-width:280px}:host .container .content .progress-subtitle{margin-block:0}:host .container .content ::slotted(.stats){padding:0;grid-template-columns:repeat(2, 1fr);gap:calc(2*var(--lumo-space-l))}@media only screen and (min-width: 35.5em){:host .container .content{flex-direction:row}:host .container .content ::slotted(.stats){grid-template-columns:repeat(3, 1fr)}}'])));var cxl_dashboard_team_stats_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5;function cxl_dashboard_team_stats_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive2(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _getDecoratorsApi(){_getDecoratorsApi=function _getDecoratorsApi(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function initializeInstanceElements(O,elements){["method","field"].forEach((function(kind){elements.forEach((function(element){element.kind===kind&&"own"===element.placement&&this.defineClassElement(O,element)}),this)}),this)},initializeClassElements:function initializeClassElements(F,elements){var proto=F.prototype;["method","field"].forEach((function(kind){elements.forEach((function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}}),this)}),this)},defineClassElement:function defineClassElement(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function decorateClass(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};if(elements.forEach((function(element){this.addElementPlacement(element,placements)}),this),elements.forEach((function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element),newElements.push.apply(newElements,elementFinishersExtras.extras),finishers.push.apply(finishers,elementFinishersExtras.finishers)}),this),!decorators)return{elements:newElements,finishers};var result=this.decorateConstructor(newElements,decorators);return finishers.push.apply(finishers,result.finishers),result.finishers=finishers,result},addElementPlacement:function addElementPlacement(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key))throw new TypeError("Duplicated element ("+element.key+")");keys.push(element.key)},decorateElement:function decorateElement(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element,this.addElementPlacement(element,placements),elementFinisherExtras.finisher&&finishers.push(elementFinisherExtras.finisher);var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++)this.addElementPlacement(newExtras[j],placements);extras.push.apply(extras,newExtras)}}return{element,finishers,extras}},decorateConstructor:function decorateConstructor(elements,decorators){for(var finishers=[],i=decorators.length-1;i>=0;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(void 0!==elementsAndFinisher.finisher&&finishers.push(elementsAndFinisher.finisher),void 0!==elementsAndFinisher.elements){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++)for(var k=j+1;k<elements.length;k++)if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement)throw new TypeError("Duplicated element ("+elements[j].key+")")}}return{elements,finishers}},fromElementDescriptor:function fromElementDescriptor(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===element.kind&&(obj.initializer=element.initializer),obj},toElementDescriptors:function toElementDescriptors(elementObjects){if(void 0!==elementObjects)return function _toArray(arr){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(elementObjects).map((function(elementObject){var element=this.toElementDescriptor(elementObject);return this.disallowProperty(elementObject,"finisher","An element descriptor"),this.disallowProperty(elementObject,"extras","An element descriptor"),element}),this)},toElementDescriptor:function toElementDescriptor(elementObject){var kind=String(elementObject.kind);if("method"!==kind&&"field"!==kind)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+kind+'"');var key=_toPropertyKey(elementObject.key),placement=String(elementObject.placement);if("static"!==placement&&"prototype"!==placement&&"own"!==placement)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+placement+'"');var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind,key,placement,descriptor:Object.assign({},descriptor)};return"field"!==kind?this.disallowProperty(elementObject,"initializer","A method descriptor"):(this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor"),element.initializer=elementObject.initializer),element},toElementFinisherExtras:function toElementFinisherExtras(elementObject){return{element:this.toElementDescriptor(elementObject),finisher:_optionalCallableProperty(elementObject,"finisher"),extras:this.toElementDescriptors(elementObject.extras)}},fromClassDescriptor:function fromClassDescriptor(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),obj},toClassDescriptor:function toClassDescriptor(obj){var kind=String(obj.kind);if("class"!==kind)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+kind+'"');this.disallowProperty(obj,"key","A class descriptor"),this.disallowProperty(obj,"placement","A class descriptor"),this.disallowProperty(obj,"descriptor","A class descriptor"),this.disallowProperty(obj,"initializer","A class descriptor"),this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");return{elements:this.toElementDescriptors(obj.elements),finisher}},runClassFinishers:function runClassFinishers(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(void 0!==newConstructor){if("function"!=typeof newConstructor)throw new TypeError("Finishers must return a constructor.");constructor=newConstructor}}return constructor},disallowProperty:function disallowProperty(obj,name,objectType){if(void 0!==obj[name])throw new TypeError(objectType+" can't have a ."+name+" property.")}};return api}function _createElementDescriptor(def){var descriptor,key=_toPropertyKey(def.key);"method"===def.kind?descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}:"get"===def.kind?descriptor={get:def.value,configurable:!0,enumerable:!1}:"set"===def.kind?descriptor={set:def.value,configurable:!0,enumerable:!1}:"field"===def.kind&&(descriptor={configurable:!0,writable:!0,enumerable:!0});var element={kind:"field"===def.kind?"field":"method",key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor};return def.decorators&&(element.decorators=def.decorators),"field"===def.kind&&(element.initializer=def.value),element}function _coalesceGetterSetter(element,other){void 0!==element.descriptor.get?other.descriptor.get=element.descriptor.get:other.descriptor.set=element.descriptor.set}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return void 0!==desc&&!(void 0===desc.value&&void 0===desc.writable)}function _optionalCallableProperty(obj,name){var value=obj[name];if(void 0!==value&&"function"!=typeof value)throw new TypeError("Expected '"+name+"' to be a function");return value}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}(function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins)for(var i=0;i<mixins.length;i++)api=mixins[i](api);var r=factory((function initialize(O){api.initializeInstanceElements(O,decorated.elements)}),superClass),decorated=api.decorateClass(function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function isSameElement(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var other,element=elements[i];if("method"===element.kind&&(other=newElements.find(isSameElement)))if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other))throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+element.key+").");other.decorators=element.decorators}_coalesceGetterSetter(element,other)}else newElements.push(element)}return newElements}(r.d.map(_createElementDescriptor)),decorators);return api.initializeClassElements(r.F,decorated.elements),api.runClassFinishers(r.F,decorated.finishers)})([(0,decorators.Mo)("cxl-dashboard-team-stats")],(function(_initialize,_LitElement){var CxlDashboardTeamStatsElement=function(_LitElement2){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(CxlDashboardTeamStatsElement,_LitElement2);var _super=_createSuper(CxlDashboardTeamStatsElement);function CxlDashboardTeamStatsElement(){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CxlDashboardTeamStatsElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_initialize(_assertThisInitialized(_this)),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CxlDashboardTeamStatsElement)}(_LitElement);return{F:CxlDashboardTeamStatsElement,d:[{kind:"get",static:!0,key:"styles",value:function styles(){return[cxl_dashboard_team_stats_css]}},{kind:"field",decorators:[(0,decorators.Cb)({type:Number})],key:"progress",value:function value(){return 0}},{kind:"field",decorators:[(0,decorators.Cb)({type:String,attribute:"manage-roadmaps-url"})],key:"manageRoadmapsURL",value:function value(){return""}},{kind:"field",decorators:[(0,decorators.Cb)({type:Boolean,attribute:"hide-progress"})],key:"hideProgress",value:function value(){return!1}},{kind:"field",decorators:[(0,decorators.Cb)({type:Boolean,attribute:"hide-stats"})],key:"hideStats",value:function value(){return!1}},{kind:"method",key:"render",value:function render(){return(0,lit.dy)(cxl_dashboard_team_stats_templateObject||(cxl_dashboard_team_stats_templateObject=cxl_dashboard_team_stats_taggedTemplateLiteral(['\n      <div class="container">\n        <header>\n          <h1 class="title">Team progress & stats</h1>\n          <div class="actions">\n            ',"\n          </div>\n        </header>\n        ","\n      </div>\n    "])),this.manageRoadmapsURL?(0,lit.dy)(_templateObject2||(_templateObject2=cxl_dashboard_team_stats_taggedTemplateLiteral(["\n              <a href=",'>\n                <vaadin-button class="team-settings" theme="primary">\n                  <vaadin-icon icon="lumo:edit"></vaadin-icon>\n                  Manage team roadmaps\n                </vaadin-button>\n              </a>\n            '])),this.manageRoadmapsURL):lit.Ld,this.hideProgress&&this.hideStats?lit.Ld:(0,lit.dy)(_templateObject3||(_templateObject3=cxl_dashboard_team_stats_taggedTemplateLiteral(['\n          <section class="content">\n            ',"\n            ","\n          </section>\n        "])),this.hideProgress?lit.Ld:(0,lit.dy)(_templateObject4||(_templateObject4=cxl_dashboard_team_stats_taggedTemplateLiteral(['\n              <div class="progress">\n                <span class="progress-title">Team roadmap progress</span>\n                <vaadin-progress-bar value="','"></vaadin-progress-bar>\n                <h2 class="progress-subtitle">',"% complete</h2>\n              </div>\n            "])),this.progress,(100*this.progress).toFixed(0)),this.hideStats?lit.Ld:(0,lit.dy)(_templateObject5||(_templateObject5=cxl_dashboard_team_stats_taggedTemplateLiteral(['\n              <div class="stats">\n                <slot name="stats"></slot>\n              </div>\n            '])))))}}]}}),lit.oi)},"../../node_modules/core-js/internals/create-html.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),quot=/"/g,replace=uncurryThis("".replace);module.exports=function(string,tag,attribute,value){var S=toString(requireObjectCoercible(string)),p1="<"+tag;return""!==attribute&&(p1+=" "+attribute+'="'+replace(toString(value),quot,"&quot;")+'"'),p1+">"+S+"</"+tag+">"}},"../../node_modules/core-js/internals/string-html-forced.js":(module,__unused_webpack_exports,__webpack_require__)=>{var fails=__webpack_require__("../../node_modules/core-js/internals/fails.js");module.exports=function(METHOD_NAME){return fails((function(){var test=""[METHOD_NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3}))}},"../../node_modules/core-js/internals/string-repeat.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var toIntegerOrInfinity=__webpack_require__("../../node_modules/core-js/internals/to-integer-or-infinity.js"),toString=__webpack_require__("../../node_modules/core-js/internals/to-string.js"),requireObjectCoercible=__webpack_require__("../../node_modules/core-js/internals/require-object-coercible.js"),$RangeError=RangeError;module.exports=function repeat(count){var str=toString(requireObjectCoercible(this)),result="",n=toIntegerOrInfinity(count);if(n<0||n==1/0)throw $RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(str+=str))1&n&&(result+=str);return result}},"../../node_modules/core-js/modules/es.number.to-fixed.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),uncurryThis=__webpack_require__("../../node_modules/core-js/internals/function-uncurry-this.js"),toIntegerOrInfinity=__webpack_require__("../../node_modules/core-js/internals/to-integer-or-infinity.js"),thisNumberValue=__webpack_require__("../../node_modules/core-js/internals/this-number-value.js"),$repeat=__webpack_require__("../../node_modules/core-js/internals/string-repeat.js"),fails=__webpack_require__("../../node_modules/core-js/internals/fails.js"),$RangeError=RangeError,$String=String,floor=Math.floor,repeat=uncurryThis($repeat),stringSlice=uncurryThis("".slice),nativeToFixed=uncurryThis(1..toFixed),pow=function(x,n,acc){return 0===n?acc:n%2==1?pow(x,n-1,acc*x):pow(x*x,n/2,acc)},multiply=function(data,n,c){for(var index=-1,c2=c;++index<6;)c2+=n*data[index],data[index]=c2%1e7,c2=floor(c2/1e7)},divide=function(data,n){for(var index=6,c=0;--index>=0;)c+=data[index],data[index]=floor(c/n),c=c%n*1e7},dataToString=function(data){for(var index=6,s="";--index>=0;)if(""!==s||0===index||0!==data[index]){var t=$String(data[index]);s=""===s?t:s+repeat("0",7-t.length)+t}return s};$({target:"Number",proto:!0,forced:fails((function(){return"0.000"!==nativeToFixed(8e-5,3)||"1"!==nativeToFixed(.9,0)||"1.25"!==nativeToFixed(1.255,2)||"1000000000000000128"!==nativeToFixed(0xde0b6b3a7640080,0)}))||!fails((function(){nativeToFixed({})}))},{toFixed:function toFixed(fractionDigits){var e,z,j,k,number=thisNumberValue(this),fractDigits=toIntegerOrInfinity(fractionDigits),data=[0,0,0,0,0,0],sign="",result="0";if(fractDigits<0||fractDigits>20)throw $RangeError("Incorrect fraction digits");if(number!=number)return"NaN";if(number<=-1e21||number>=1e21)return $String(number);if(number<0&&(sign="-",number=-number),number>1e-21)if(z=(e=function(x){for(var n=0,x2=x;x2>=4096;)n+=12,x2/=4096;for(;x2>=2;)n+=1,x2/=2;return n}(number*pow(2,69,1))-69)<0?number*pow(2,-e,1):number/pow(2,e,1),z*=4503599627370496,(e=52-e)>0){for(multiply(data,0,z),j=fractDigits;j>=7;)multiply(data,1e7,0),j-=7;for(multiply(data,pow(10,j,1),0),j=e-1;j>=23;)divide(data,1<<23),j-=23;divide(data,1<<j),multiply(data,1,1),divide(data,2),result=dataToString(data)}else multiply(data,0,z),multiply(data,1<<-e,0),result=dataToString(data)+repeat("0",fractDigits);return result=fractDigits>0?sign+((k=result.length)<=fractDigits?"0."+repeat("0",fractDigits-k)+result:stringSlice(result,0,k-fractDigits)+"."+stringSlice(result,k-fractDigits)):sign+result}})},"../../node_modules/core-js/modules/es.string.link.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),createHTML=__webpack_require__("../../node_modules/core-js/internals/create-html.js");$({target:"String",proto:!0,forced:__webpack_require__("../../node_modules/core-js/internals/string-html-forced.js")("link")},{link:function link(url){return createHTML(this,"a","href",url)}})}}]);