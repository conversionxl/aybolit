import {html} from 'lit';
import {defaultStyles} from "./default-styles";

export const DefaultStory = () => html`
        ${defaultStyles}
        <div class="login js login-action-login wp-core-ui locale-en-us">
        <div id="login">
            <h1><a href="https://cxl.com/institute">Become a master at business growth and optimization</a></h1>
    
            <form name="loginform" id="loginform" action="https://cxl.com/institute/login/" method="post">
                <p>
                    <label for="user_login">Username or Email Address</label>
                    <input type="text" name="log" id="user_login" class="input" value="" size="20" autocapitalize="off"
                           autocomplete="username">
                </p>
    
                <div class="user-pass-wrap">
                    <label for="user_pass">Password</label>
                    <div class="wp-pwd">
                        <input type="password" name="pwd" id="user_pass" class="input password-input" value="" size="20"
                               autocomplete="current-password">
                        <button type="button" class="button button-secondary wp-hide-pw hide-if-no-js" data-toggle="0"
                                aria-label="Show password">
                            <span class="dashicons dashicons-visibility" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
                <div class="g-recaptcha" id="g-recaptcha-1" data-sitekey="6LdXWMYUAAAAAEPTtqpByrYLI64f7Cy-jMoo_XG0"
                     data-theme="light" style="margin:10px 0px 10px 0px">
                    <div style="width: 304px; height: 78px;">
                        <div>
                            <iframe title="reCAPTCHA"
                                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdXWMYUAAAAAEPTtqpByrYLI64f7Cy-jMoo_XG0&amp;co=aHR0cHM6Ly9jeGwuY29tOjQ0Mw..&amp;hl=en&amp;v=5qcenVbrhOy8zihcc2aHOWD4&amp;theme=light&amp;size=normal&amp;cb=vq9bbbsz36yh"
                                    width="304" height="78" role="presentation" name="a-bgzsxn8x0zax" frameborder="0"
                                    scrolling="no"
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                        </div>
                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                                  style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                    </div>
                    <iframe style="display: none;"></iframe>
                </div>
                <noscript>
                    <div>
                        <div style="width: 302px; height: 422px; position: relative;">
                            <div style="width: 302px; height: 422px; position: absolute;">
                                <iframe src="https://www.google.com/recaptcha/api/fallback?k=6LdXWMYUAAAAAEPTtqpByrYLI64f7Cy-jMoo_XG0"
                                        frameborder="0" scrolling="no"
                                        style="width: 302px; height:422px; border-style: none;"></iframe>
                            </div>
                        </div>
                        <div style="width: 300px; height: 60px; border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;">
                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                                  style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;"></textarea>
                        </div>
                    </div>
                </noscript>
                <p class="forgetmenot"><input name="rememberme" type="checkbox" id="rememberme" value="forever"> <label
                        for="rememberme">Remember Me</label></p>
                <p class="submit">
                    <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large"
                           value="Log In">
                    <input type="hidden" name="redirect_to" value="https://cxl.com/institute/dashboard/">
                    <input type="hidden" name="testcookie" value="1">
                </p>
            </form>
    
            <p id="nav">
                <a href="https://cxl.com/institute/login/?action=lostpassword">Lost your password?</a></p>
            <p id="backtoblog">
                <a href="https://cxl.com/institute/">← Go to CXL</a></p>
            <div class="privacy-policy-page-link"><a class="privacy-policy-link"
                                                     href="https://cxl.com/institute/privacy-policy/">Privacy Policy</a>
            </div>
        </div>
        <div id="peep-promo-2021-08-17" style="width: 320px;text-align: center">
            <p><b>Follow our B2B strategy podcast</b><br>'How to Win with Peep Laja'</p>
            <p><a href="https://open.spotify.com/show/1BF9TvY8OOkIDz6CidFdTe/">Spotify</a>&emsp;<a
                    href="https://podcasts.apple.com/us/podcast/how-to-win/id1575516851">Apple Podcasts</a>
            </p></div>
        </div>
    `;
