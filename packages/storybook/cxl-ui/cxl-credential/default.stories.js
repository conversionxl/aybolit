import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-credential.js';

export default {
  title: 'CXL UI/cxl-credential',
};

const Template = (args) => html`
  <cxl-credential
    theme=${args.theme}
    credential-id=${args.credentialId}
    full-name=${args.fullName}
    title=${args.title}
    type=${args.type}
    date=${args.date}
    credential-url=${args.credentialUrl}
    max-width=${args.maxWidth}
  ></cxl-credential>
`;

export const CertificateShort = Template.bind({});
CertificateShort.args = {
  credentialId: 7858542,
  fullName: 'First Last',
  title: 'Marketing Management',
  type: 'course', // course | minidegree
  date: '2023-06-16', // YYYY-MM-DD
};

export const CertificateLongTitle = Template.bind({});
CertificateLongTitle.args = {
  ...CertificateShort.args,
  title: 'Psychology and behaviour for digital marketing',
};

export const CertificateLongName = Template.bind({});
CertificateLongName.args = {
  ...CertificateShort.args,
  fullName: 'Francisco Guillermo Ochoa Magaña',
  title: 'Psychology and behaviour for digital marketing longer title',
};
