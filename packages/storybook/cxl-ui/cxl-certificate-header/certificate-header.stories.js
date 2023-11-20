import { CertificateHeaderTemplate, ArgTypes } from './template';

export default {
  title: 'CXL UI/cxl-certificate-header',
};

export const CXLCertificateHeader = CertificateHeaderTemplate.bind({});

CXLCertificateHeader.argTypes = {
  ...ArgTypes,
};

CXLCertificateHeader.args = {
  title: 'Growth',
  description: '<p>Designed to help marketing professionals create and refine a strategic brand identity, this advanced certification program will give you deep marketing knowledge across key brand disciplines.</p><p><b>At the end of the Brand Marketing Category, you’ll have the processes, tools, and transferrable techniques to level up your brand — no matter your industry or role.</b></p>',
};
