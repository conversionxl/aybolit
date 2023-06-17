import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-credential.js';

export default {
  title: 'CXL UI/cxl-credential',
};

const Template = ({ credentialId, fullName, title, type, date, credentialUrl }) => html`
  <section style="display: flex; justify-content: center; padding: 64px">
    <cxl-credential
      credential-id=${credentialId}
      full-name=${fullName}
      title=${title}
      type=${type}
      date=${date}
      credential-url=${credentialUrl}
    ></cxl-credential>
  </section>
`;

export const CertificateShort = Template.bind({});
export const CertificateLongTitle = Template.bind({});
export const CertificateLongName = Template.bind({});

CertificateShort.argTypes = {
  credentialId: { control: 'number' },
  fullName: { control: 'text' },
  title: { control: 'text' },
  type: { control: 'select', options: ['course', 'minidegree'] },
  date: { control: 'date' },
  credentialUrl: { control: 'text' },
}

CertificateShort.args = {
  credentialId: 7858542,
  fullName: 'First Last',
  title: 'Marketing Management',
  type: 'course', // course | minidegree
  date: '2023-06-16', // YYYY-MM-DD
};

CertificateLongTitle.args = {
  ...CertificateShort.args,
  title: 'Psychology and behaviour for digital marketing',
};

CertificateLongTitle.argTypes = { ...CertificateShort.argTypes }

CertificateLongName.args = {
  ...CertificateShort.args,
  fullName: 'Francisco Guillermo Ochoa Magaña',
  title: 'Psychology and behaviour for digital marketing longer title',
};

CertificateLongName.argTypes = { ...CertificateShort.argTypes }
