import { html } from 'lit';
import gravityFormsStyles from '@conversionxl/cxl-lumo-styles/src/styles/gravity-forms-css.js';

export default {
  title: 'CXL UI/Gravity Form',
};

const formStyles = html`
  <link
    rel="stylesheet"
    href="https://cxl.com/institute/wp-content/themes/conversionxl-institute/style.css?ver=20211013.1158"
  />
  <style>
    ${gravityFormsStyles}
  </style>
  <style>
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
`;

const formTemplate = html`
  <div
    class="gf_browser_chrome gform_wrapper gform-upcoming-courses_wrapper gform_legacy_markup_wrapper"
    id="gform_wrapper_3"
    data-gtm-vis-recent-on-screen-452950_332="2623"
    data-gtm-vis-first-on-screen-452950_332="2623"
    data-gtm-vis-total-visible-time-452950_332="100"
    data-gtm-vis-has-fired-452950_332="1"
  >
    <div id="gf_3" class="gform_anchor" tabindex="-1"></div>
    <div class="gform_heading">
      <h3 class="gform_title">Get notified of upcoming courses</h3>
    </div>
    <form
      method="post"
      enctype="multipart/form-data"
      target="gform_ajax_frame_3"
      id="gform_3"
      class="pure-form gform-upcoming-courses gform_legacy_markup"
      action="/institute/upcoming-courses/#gf_3"
      novalidate=""
    >
      <input
        type="hidden"
        class="gforms-pum"
        value='{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}'
      />
      <div class="gform_body gform-body">
        <ul
          id="gform_fields_3"
          class="gform_fields top_label form_sublabel_below description_below"
        >
          <li
            id="field_3_3"
            class="gfield gfield_html gfield_html_formatted gfield_no_follows_desc field_sublabel_below field_description_below gfield_visibility_visible"
          >
            <style>
              .gform_wrapper .gfield_required {
                display: inline-block;
                color: var(--lumo-error-color);
              }
              .gform_wrapper small {
                font-size: var(--lumo-font-size-xs);
              }
            </style>
          </li>
          <li
            id="field_3_1"
            class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"
          >
            <label class="gfield_label" for="input_3_1"
              >Email<span class="gfield_required"
                ><span class="gfield_required gfield_required_asterisk">*</span></span
              ></label
            >
            <div class="ginput_container ginput_container_email">
              <input
                name="input_1"
                id="input_3_1"
                type="email"
                value=""
                class="large"
                placeholder="Your e-mail here"
                aria-required="true"
                aria-invalid="false"
              />
            </div>
          </li>
          <li
            id="field_3_2"
            class="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible"
          >
            <label class="gfield_label gfield_label_before_complex"
              >Consent<span class="gfield_required"
                ><span class="gfield_required gfield_required_asterisk">*</span></span
              ></label
            >
            <div class="ginput_container ginput_container_checkbox">
              <ul class="gfield_checkbox" id="input_3_2">
                <li class="gchoice gchoice_3_2_1">
                  <input
                    class="gfield-choice-input"
                    name="input_2.1"
                    type="checkbox"
                    value="Yes"
                    id="choice_3_2_1"
                  />
                  <label for="choice_3_2_1" id="label_3_2_1"
                    >I agree to weekly emails <span class="gfield_required">*</span></label
                  >
                </li>
              </ul>
            </div>
          </li>
          <li
            id="field_3_4"
            class="gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible"
          >
            <label class="gfield_label" for="input_3_4">Email</label>
            <div class="ginput_container">
              <input
                name="input_4"
                id="input_3_4"
                type="text"
                value=""
                autocomplete="new-password"
              />
            </div>
            <div class="gfield_description" id="gfield_description_3_4">
              This field is for validation purposes and should be left unchanged.
            </div>
          </li>
          <li
            id="field_3_5"
            class="gfield gform_hidden field_sublabel_below field_description_below gfield_visibility_visible"
          >
            <div class="ginput_container ginput_container_text">
              <input
                name="input_5"
                id="input_3_5"
                type="hidden"
                class="gform_hidden"
                aria-invalid="false"
                value="anonymous_id"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="gform_footer top_label">
        <vaadin-button
          type="submit"
          id="gform_submit_button_3"
          class="gform_button"
          onclick='if(window["gf_submitting_3"]){return false;}  if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}   jQuery("#gform_3").trigger("submit",[true]);'
          onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} if( !jQuery("#gform_3")[0].checkValidity || jQuery("#gform_3")[0].checkValidity()){window["gf_submitting_3"]=true;}  jQuery("#gform_3").trigger("submit",[true]); }'
          theme="primary"
          tabindex="0"
          role="button"
          >Get launch updates<iron-icon icon="lumo:angle-right" slot="suffix"></iron-icon
        ></vaadin-button>
        <input
          type="hidden"
          name="gform_ajax"
          value="form_id=3&amp;title=1&amp;description=&amp;tabindex=0"
        />
        <input type="hidden" class="gform_hidden" name="is_submit_3" value="1" />
        <input type="hidden" class="gform_hidden" name="gform_submit" value="3" />
        <input type="hidden" class="gform_hidden" name="gform_unique_id" value="" />
        <input
          type="hidden"
          class="gform_hidden"
          name="state_3"
          value="WyJbXSIsImIzNDFiYTkwZTdkZmI3NjU1YTNhNDFlYzYzMmM2NmVlIl0="
        />
        <input
          type="hidden"
          class="gform_hidden"
          name="gform_target_page_number_3"
          id="gform_target_page_number_3"
          value="0"
        />
        <input
          type="hidden"
          class="gform_hidden"
          name="gform_source_page_number_3"
          id="gform_source_page_number_3"
          value="1"
        />
        <input type="hidden" name="gform_field_values" value="" />
      </div>
    </form>
  </div>
`;

const Template = ({ isPending }) => html`
  ${formStyles}
  <div class="center loading-container" ?isPending=${isPending}>
    ${formTemplate}
    <div class="center loading-overlay">
      <div class="loading-spinner"></div>
    </div>
  </div>
`;

export const GravityForm = (args) => Template(args);

GravityForm.args = {
  isPending: false,
};
