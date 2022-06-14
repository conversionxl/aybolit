import '@conversionxl/cxl-lumo-styles';
import '@vaadin/button';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit';
import './icons-preview';

export default {
  decorators: [withKnobs],
  title: 'CXL Lumo Styles/Icons',
};

export const CXL = () => html` <cxl-icons-preview name="cxl"></cxl-icons-preview> `;

export const Lumo = () => html` <cxl-icons-preview name="lumo"></cxl-icons-preview> `;

export const Vaadin = () => html` <cxl-icons-preview name="vaadin"></cxl-icons-preview> `;
