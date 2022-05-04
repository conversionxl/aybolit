import '@conversionxl/cxl-lumo-styles';
import { html } from 'lit-html';

export default {
  title: 'CXL Lumo Styles/Icons',
};

// eslint-disable-next-line no-empty-pattern
export const ExternalLink = ({}) => html`
  This is an example of a
  <a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>
`;

Object.assign(ExternalLink, {
  storyName: 'External Link',
});
