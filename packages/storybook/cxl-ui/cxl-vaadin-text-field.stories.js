import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import '../../cxl-vaadin-text-field/src/index';

export default {
  title: 'CXL UI|cxl-vaadin-text-field',
  decorators: [withKnobs]
};

export const CXLVaadinIntegerField = () => {
  return html`
    <cxl-vaadin-integer-field
      id="sample-field-id"
      name="sample-field-name"
      ?has-controls=${boolean('Has controls', false)}
    >
      <input slot="input" />
    </cxl-vaadin-integer-field>
  `;
};

CXLVaadinIntegerField.story = {
  name: 'cxl-vaadin-integer-field'
};
