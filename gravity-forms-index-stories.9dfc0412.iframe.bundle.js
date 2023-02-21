/*! For license information please see gravity-forms-index-stories.9dfc0412.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_conversionxl_storybook=self.webpackChunk_conversionxl_storybook||[]).push([[3833],{"./gravity-forms/index.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GravityForm:()=>GravityForm,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js");var _templateObject,lit=__webpack_require__("../../node_modules/lit/index.js");__webpack_require__("../../node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-properties.js");const gravity_forms_css=(0,__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js").iv)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(['\ufeff.loading-container{position:relative}.loading-container:not([isPending]) .loading-overlay{display:none}.loading-container .loading-overlay{position:absolute;background-color:rgba(255,255,255,.75);inset:0}.loading-container .loading-spinner{content:var(--cxl-loading-spinner-url)}.gform_wrapper img.gform_ajax_spinner{z-index:11;width:var(--lumo-icon-size-l) !important;height:var(--lumo-icon-size-l) !important;margin:0;filter:drop-shadow(0 0 0 rgba(0, 0, 0, 0.8));filter:drop-shadow(0 0 3px rgba(0, 0, 0, 0.8));animation:pulse 2s infinite alternate}.top_label .gform_wrapper label{display:block}.gform_wrapper textarea{width:100%;max-height:6em}.gform_wrapper .gfield_checkbox>li{display:flex;align-items:center}.gform_wrapper .gfield_description{font-size:var(--lumo-font-size-s)}.gform_wrapper .gfield_error{padding:var(--lumo-space-m);margin-top:var(--lumo-space-m) !important;margin-bottom:var(--lumo-space-m) !important;outline:solid 2px var(--lumo-error-color)}.gform_wrapper .gfield_required{display:none}.gform_wrapper .gfield_visibility_hidden{display:none !important}.gform_wrapper .gfield_visibility_visible.hidden_label>label{display:none}.gform_wrapper .gform_ajax_spinner{position:absolute;top:0;right:calc(0 - var(--lumo-font-size-m));bottom:0;margin:auto}.gform_wrapper .gform_body ul{font-family:inherit}.gform_wrapper .gform_body ul.gform_fields,.gform_wrapper .gform_body ul.gform_fields ul[class^=gfield]{padding:0;list-style:none}.gform_wrapper .gform_body ul.gform_fields>li,.gform_wrapper .gform_body ul.gform_fields ul[class^=gfield]>li{padding-left:0;margin:0}.gform_wrapper .gform_body ul.gform_fields>li::before,.gform_wrapper .gform_body ul.gform_fields ul[class^=gfield]>li::before{content:unset}.gform_wrapper .gform_hidden{display:none}.gform_wrapper .gform_validation_container{display:none}.gform_wrapper .ginput_container{margin:var(--lumo-space-s) 0}.gform_wrapper .ginput_container_number .instruction{display:none}.gform_wrapper .error,.gform_wrapper .validation_message,.gform_wrapper .validation_error{font-weight:bold;color:var(--lumo-error-color)}.gform_wrapper .validation_message::after{content:"↑"}'])));var index_stories_templateObject,_templateObject2,_templateObject3;function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}const index_stories={parameters:{storySource:{source:'import { html } from \'lit\';\nimport gravityFormsStyles from \'@conversionxl/cxl-lumo-styles/src/styles/gravity-forms-css.js\';\n\nexport default {\n  title: \'CXL UI/Gravity Form\',\n};\n\nconst formStyles = html`\n  <link\n    rel="stylesheet"\n    href="https://cxl.com/institute/wp-content/themes/conversionxl-institute/style.css?ver=20211013.1158"\n  />\n  <style>\n    ${gravityFormsStyles}\n  </style>\n  <style>\n    .center {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  </style>\n`;\n\nconst formTemplate = html`\n  <div\n    class="gf_browser_chrome gform_wrapper gform-upcoming-courses_wrapper gform_legacy_markup_wrapper"\n    id="gform_wrapper_3"\n    data-gtm-vis-recent-on-screen-452950_332="2623"\n    data-gtm-vis-first-on-screen-452950_332="2623"\n    data-gtm-vis-total-visible-time-452950_332="100"\n    data-gtm-vis-has-fired-452950_332="1"\n  >\n    <div id="gf_3" class="gform_anchor" tabindex="-1"></div>\n    <div class="gform_heading">\n      <h3 class="gform_title">Get notified of upcoming courses</h3>\n    </div>\n    <form\n      method="post"\n      enctype="multipart/form-data"\n      target="gform_ajax_frame_3"\n      id="gform_3"\n      class="pure-form gform-upcoming-courses gform_legacy_markup"\n      action="/institute/upcoming-courses/#gf_3"\n      novalidate=""\n    >\n      <input\n        type="hidden"\n        class="gforms-pum"\n        value=\'{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}\'\n      />\n      <div class="gform_body gform-body">\n        <ul\n          id="gform_fields_3"\n          class="gform_fields top_label form_sublabel_below description_below"\n        >\n          <li\n            id="field_3_3"\n            class="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"\n          >\n            <style>\n              .gform_wrapper .gfield_required {\n                display: inline-block;\n                color: var(--lumo-error-color);\n              }\n              .gform_wrapper small {\n                font-size: var(--lumo-font-size-xs);\n              }\n            </style>\n          </li>\n          <li\n            id="field_3_1"\n            class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"\n          >\n            <label class="gfield_label" for="input_3_1"\n              >Email<span class="gfield_required"\n                ><span class="gfield_required gfield_required_asterisk">*</span></span\n              ></label\n            >\n            <div class="ginput_container ginput_container_email">\n              <input\n                name="input_1"\n                id="input_3_1"\n                type="email"\n                value=""\n                class="large"\n                placeholder="Your e-mail here"\n                aria-required="true"\n                aria-invalid="false"\n              />\n            </div>\n          </li>\n          <li\n            id="field_3_2"\n            class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"\n          >\n            <label class="gfield_label gfield_label_before_complex"\n              >Consent<span class="gfield_required"\n                ><span class="gfield_required gfield_required_asterisk">*</span></span\n              ></label\n            >\n            <div class="ginput_container ginput_container_checkbox">\n              <ul class="gfield_checkbox" id="input_3_2">\n                <li class="gchoice gchoice_3_2_1">\n                  <input\n                    class="gfield-choice-input"\n                    name="input_2.1"\n                    type="checkbox"\n                    value="Yes"\n                    id="choice_3_2_1"\n                  />\n                  <label for="choice_3_2_1" id="label_3_2_1"\n                    >I agree to weekly emails <span class="gfield_required">*</span></label\n                  >\n                </li>\n              </ul>\n            </div>\n          </li>\n          <li\n            id="field_3_4"\n            class="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"\n          >\n            <label class="gfield_label" for="input_3_4">Email</label>\n            <div class="ginput_container">\n              <input\n                name="input_4"\n                id="input_3_4"\n                type="text"\n                value=""\n                autocomplete="new-password"\n              />\n            </div>\n            <div class="gfield_description" id="gfield_description_3_4">\n              This field is for validation purposes and should be left unchanged.\n            </div>\n          </li>\n          <li\n            id="field_3_5"\n            class="gfield gform_hidden field_sublabel_below field_description_below gfield_visibility_visible"\n          >\n            <div class="ginput_container ginput_container_text">\n              <input\n                name="input_5"\n                id="input_3_5"\n                type="hidden"\n                class="gform_hidden"\n                aria-invalid="false"\n                value="anonymous_id"\n              />\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class="gform_footer top_label">\n        <vaadin-button\n          type="submit"\n          id="gform_submit_button_3"\n          class="gform_button"\n          onclick=\'if(window["gf_submitting_3"]){return false;}  if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}   jQuery("#gform_3").trigger("submit",[true]);\'\n          onkeypress=\'if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  jQuery("#gform_3").trigger("submit",[true]); }\'\n          theme="primary"\n          tabindex="0"\n          role="button"\n          >Get launch updates<vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n        ></vaadin-button>\n        <input\n          type="hidden"\n          name="gform_ajax"\n          value="form_id=3&amp;title=1&amp;description=&amp;tabindex=0"\n        />\n        <input type="hidden" class="gform_hidden" name="is_submit_3" value="1" />\n        <input type="hidden" class="gform_hidden" name="gform_submit" value="3" />\n        <input type="hidden" class="gform_hidden" name="gform_unique_id" value="" />\n        <input\n          type="hidden"\n          class="gform_hidden"\n          name="state_3"\n          value="WyJbXSIsImIzNDFiYTkwZTdkZmI3NjU1YTNhNDFlYzYzMmM2NmVlIl0="\n        />\n        <input\n          type="hidden"\n          class="gform_hidden"\n          name="gform_target_page_number_3"\n          id="gform_target_page_number_3"\n          value="0"\n        />\n        <input\n          type="hidden"\n          class="gform_hidden"\n          name="gform_source_page_number_3"\n          id="gform_source_page_number_3"\n          value="1"\n        />\n        <input type="hidden" name="gform_field_values" value="" />\n      </div>\n    </form>\n  </div>\n`;\n\nconst Template = ({ isPending }) => html`\n  ${formStyles}\n  <div class="center loading-container" ?isPending=${isPending}>\n    ${formTemplate}\n    <div class="center loading-overlay">\n      <div class="loading-spinner"></div>\n    </div>\n  </div>\n`;\n\nexport const GravityForm = (args) => Template(args);\n\nGravityForm.args = {\n  isPending: false,\n};\n',locationsMap:{"gravity-form":{startLoc:{col:27,line:210},endLoc:{col:51,line:210},startBody:{col:27,line:210},endBody:{col:51,line:210}}}}},title:"CXL UI/Gravity Form"};var formStyles=(0,lit.dy)(index_stories_templateObject||(index_stories_templateObject=_taggedTemplateLiteralLoose(['\n  <link\n    rel="stylesheet"\n    href="https://cxl.com/institute/wp-content/themes/conversionxl-institute/style.css?ver=20211013.1158"\n  />\n  <style>\n    ',"\n  </style>\n  <style>\n    .center {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  </style>\n"])),gravity_forms_css),formTemplate=(0,lit.dy)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(['\n  <div\n    class="gf_browser_chrome gform_wrapper gform-upcoming-courses_wrapper gform_legacy_markup_wrapper"\n    id="gform_wrapper_3"\n    data-gtm-vis-recent-on-screen-452950_332="2623"\n    data-gtm-vis-first-on-screen-452950_332="2623"\n    data-gtm-vis-total-visible-time-452950_332="100"\n    data-gtm-vis-has-fired-452950_332="1"\n  >\n    <div id="gf_3" class="gform_anchor" tabindex="-1"></div>\n    <div class="gform_heading">\n      <h3 class="gform_title">Get notified of upcoming courses</h3>\n    </div>\n    <form\n      method="post"\n      enctype="multipart/form-data"\n      target="gform_ajax_frame_3"\n      id="gform_3"\n      class="pure-form gform-upcoming-courses gform_legacy_markup"\n      action="/institute/upcoming-courses/#gf_3"\n      novalidate=""\n    >\n      <input\n        type="hidden"\n        class="gforms-pum"\n        value=\'{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}\'\n      />\n      <div class="gform_body gform-body">\n        <ul\n          id="gform_fields_3"\n          class="gform_fields top_label form_sublabel_below description_below"\n        >\n          <li\n            id="field_3_3"\n            class="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"\n          >\n            <style>\n              .gform_wrapper .gfield_required {\n                display: inline-block;\n                color: var(--lumo-error-color);\n              }\n              .gform_wrapper small {\n                font-size: var(--lumo-font-size-xs);\n              }\n            </style>\n          </li>\n          <li\n            id="field_3_1"\n            class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"\n          >\n            <label class="gfield_label" for="input_3_1"\n              >Email<span class="gfield_required"\n                ><span class="gfield_required gfield_required_asterisk">*</span></span\n              ></label\n            >\n            <div class="ginput_container ginput_container_email">\n              <input\n                name="input_1"\n                id="input_3_1"\n                type="email"\n                value=""\n                class="large"\n                placeholder="Your e-mail here"\n                aria-required="true"\n                aria-invalid="false"\n              />\n            </div>\n          </li>\n          <li\n            id="field_3_2"\n            class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"\n          >\n            <label class="gfield_label gfield_label_before_complex"\n              >Consent<span class="gfield_required"\n                ><span class="gfield_required gfield_required_asterisk">*</span></span\n              ></label\n            >\n            <div class="ginput_container ginput_container_checkbox">\n              <ul class="gfield_checkbox" id="input_3_2">\n                <li class="gchoice gchoice_3_2_1">\n                  <input\n                    class="gfield-choice-input"\n                    name="input_2.1"\n                    type="checkbox"\n                    value="Yes"\n                    id="choice_3_2_1"\n                  />\n                  <label for="choice_3_2_1" id="label_3_2_1"\n                    >I agree to weekly emails <span class="gfield_required">*</span></label\n                  >\n                </li>\n              </ul>\n            </div>\n          </li>\n          <li\n            id="field_3_4"\n            class="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"\n          >\n            <label class="gfield_label" for="input_3_4">Email</label>\n            <div class="ginput_container">\n              <input\n                name="input_4"\n                id="input_3_4"\n                type="text"\n                value=""\n                autocomplete="new-password"\n              />\n            </div>\n            <div class="gfield_description" id="gfield_description_3_4">\n              This field is for validation purposes and should be left unchanged.\n            </div>\n          </li>\n          <li\n            id="field_3_5"\n            class="gfield gform_hidden field_sublabel_below field_description_below gfield_visibility_visible"\n          >\n            <div class="ginput_container ginput_container_text">\n              <input\n                name="input_5"\n                id="input_3_5"\n                type="hidden"\n                class="gform_hidden"\n                aria-invalid="false"\n                value="anonymous_id"\n              />\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class="gform_footer top_label">\n        <vaadin-button\n          type="submit"\n          id="gform_submit_button_3"\n          class="gform_button"\n          onclick=\'if(window["gf_submitting_3"]){return false;}  if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}   jQuery("#gform_3").trigger("submit",[true]);\'\n          onkeypress=\'if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  jQuery("#gform_3").trigger("submit",[true]); }\'\n          theme="primary"\n          tabindex="0"\n          role="button"\n          >Get launch updates<vaadin-icon icon="lumo:angle-right" slot="suffix"></vaadin-icon\n        ></vaadin-button>\n        <input\n          type="hidden"\n          name="gform_ajax"\n          value="form_id=3&amp;title=1&amp;description=&amp;tabindex=0"\n        />\n        <input type="hidden" class="gform_hidden" name="is_submit_3" value="1" />\n        <input type="hidden" class="gform_hidden" name="gform_submit" value="3" />\n        <input type="hidden" class="gform_hidden" name="gform_unique_id" value="" />\n        <input\n          type="hidden"\n          class="gform_hidden"\n          name="state_3"\n          value="WyJbXSIsImIzNDFiYTkwZTdkZmI3NjU1YTNhNDFlYzYzMmM2NmVlIl0="\n        />\n        <input\n          type="hidden"\n          class="gform_hidden"\n          name="gform_target_page_number_3"\n          id="gform_target_page_number_3"\n          value="0"\n        />\n        <input\n          type="hidden"\n          class="gform_hidden"\n          name="gform_source_page_number_3"\n          id="gform_source_page_number_3"\n          value="1"\n        />\n        <input type="hidden" name="gform_field_values" value="" />\n      </div>\n    </form>\n  </div>\n']))),GravityForm=function GravityForm(args){return function Template(_ref){var isPending=_ref.isPending;return(0,lit.dy)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  ",'\n  <div class="center loading-container" ?isPending=',">\n    ",'\n    <div class="center loading-overlay">\n      <div class="loading-spinner"></div>\n    </div>\n  </div>\n'])),formStyles,isPending,formTemplate)}(args)};GravityForm.args={isPending:!1},GravityForm.parameters=Object.assign({storySource:{source:"(args) => Template(args)"}},GravityForm.parameters);var __namedExportsOrder=["GravityForm"]},"../../node_modules/core-js/modules/es.object.define-properties.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("../../node_modules/core-js/internals/export.js"),DESCRIPTORS=__webpack_require__("../../node_modules/core-js/internals/descriptors.js"),defineProperties=__webpack_require__("../../node_modules/core-js/internals/object-define-properties.js").f;$({target:"Object",stat:!0,forced:Object.defineProperties!==defineProperties,sham:!DESCRIPTORS},{defineProperties})},"../../node_modules/@vaadin/vaadin-themable-mixin/register-styles.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{hC:()=>_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__.hC,iv:()=>_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__.iv});var _vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js")}}]);