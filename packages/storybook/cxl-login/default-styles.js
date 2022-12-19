import {html} from 'lit';
import loginStyles from "@cxl-ui/src/styles/cxl-login-css";

export const defaultStyles = html`
    <link rel="stylesheet" id="dashicons-css"
          href="https://cxl.com/institute/wp-includes/css/dashicons.min.css?ver=6.1.1" type="text/css" media="all">
    <link rel="stylesheet" id="buttons-css" href="https://cxl.com/institute/wp-includes/css/buttons.min.css?ver=6.1.1"
          type="text/css" media="all">
    <link rel="stylesheet" id="forms-css" href="https://cxl.com/institute/wp-admin/css/forms.min.css?ver=6.1.1"
          type="text/css" media="all">
    <link rel="stylesheet" id="l10n-css" href="https://cxl.com/institute/wp-admin/css/l10n.min.css?ver=6.1.1"
          type="text/css" media="all">
    <link rel="stylesheet" id="login-css" href="https://cxl.com/institute/wp-admin/css/login.min.css?ver=6.1.1"
          type="text/css" media="all">
    <style type="text/css">
        #login {
            min-width: 350px !important;
        }

        .grecaptcha-badge {
            z-index: 1;
        }
    </style>
    <style>
        ${loginStyles}
    </style>
`;
