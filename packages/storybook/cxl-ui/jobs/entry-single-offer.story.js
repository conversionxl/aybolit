import { html } from 'lit-html';

export const CXLJobsSingleListing = () => html`
  <div
    class="page-template-default page page-id-117 logged-in admin-bar theme-cxl-jobs woocommerce-js layout-1c-c layout-wide gv-single-view customize-support"
  >
    <cxl-app-layout class="cxl-app-layout" id="container" layout="1c-c" scroll="document" wide="">
      <cxl-marketing-nav
        class="menu menu--primary headroom headroom--not-bottom headroom--pinned headroom--top"
        slot="header"
        style="top: 32px;"
        wide=""
      >
        <template id="cxl-marketing-nav-search-form-template">
          <vaadin-context-menu-item class="menu-item-search">
            <form
              action="http://dev-jobs.cxl.co/"
              class="search-form"
              id="search-form"
              method="get"
              role="search"
            >
              <label for="search-input">Search CXL WP Starter:</label>
              <input
                class="search-field"
                id="search-input"
                name="s"
                placeholder="Search …"
                type="search"
                value=""
              />
              <vaadin-button
                aria-label="Search"
                class="search-submit"
                onclick="document.getElementById('search-form').submit();"
                theme="icon"
                type="submit"
              >
                <iron-icon icon="lumo:angle-right"></iron-icon>
              </vaadin-button>
            </form>
          </vaadin-context-menu-item>
        </template>

        <vaadin-tabs
          aria-orientation="horizontal"
          class="menu-items"
          id="menu-global-items"
          orientation="horizontal"
          role="tablist"
          selected="-1"
          theme="cxl-marketing-nav"
          wide="true"
        >
          <vaadin-tab
            aria-selected="false"
            class="menu-item-wide menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-100 menu__item menu-item-wide"
            id="menu-item-100"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="http://dev-jobs.cxl.co/">
              <iron-icon
                icon="cxl:logo"
                style="width: var(--lumo-icon-size-l, 48px);"
              ></iron-icon> </a
          ></vaadin-tab>
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-94 menu__item "
            id="menu-item-94"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="https://cxl.com/institute/">Institute</a></vaadin-tab
          >
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-95 menu__item "
            id="menu-item-95"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="https://cxl.com/agency/"
              >Conversion optimization services</a
            ></vaadin-tab
          >
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-96 menu__item "
            id="menu-item-96"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="https://cxl.com/agency/case-studies/"
              >Agency case studies</a
            ></vaadin-tab
          >
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-97 menu__item "
            id="menu-item-97"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="https://cxl.com/blog/">Blog</a></vaadin-tab
          >
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-98 menu__item "
            id="menu-item-98"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="https://cxl.com/live/"
              >CXL Live 2020
              <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon> </a
          ></vaadin-tab>
          <vaadin-tab
            aria-selected="false"
            class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-99 menu__item menu-item-split-nav menu-item-wide menu-item-search"
            id="menu-item-99"
            orientation="horizontal"
            role="tab"
            tabindex="0"
            theme="cxl-marketing-nav"
            ><a class="menu__link">Search <iron-icon icon="lumo:search"></iron-icon> </a
          ></vaadin-tab>
        </vaadin-tabs>
        <script>
          window.CXL = window.CXL || {};
          window.CXL.contextMenuItems = window.CXL.contextMenuItems || {};
          window.CXL.contextMenuItems['global'] = [
            {
              depth: 0,
              text: '',
              component: 'a',
              href: 'http:\\/\\/dev-jobs.cxl.co\\/',
              id: 100,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Institute',
              component: 'a',
              href: 'https:\\/\\/cxl.com\\/institute\\/',
              id: 94,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Conversion optimization services',
              component: 'a',
              href: 'https:\\/\\/cxl.com\\/agency\\/',
              id: 95,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Agency case studies',
              component: 'a',
              href: 'https:\\/\\/cxl.com\\/agency\\/case-studies\\/',
              id: 96,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Blog',
              component: 'a',
              href: 'https:\\/\\/cxl.com\\/blog\\/',
              id: 97,
              parent: 0,
            },
            {
              depth: 0,
              text: 'CXL Live 2020',
              component: 'a',
              href: 'https:\\/\\/cxl.com\\/live\\/',
              id: 98,
              parent: 0,
            },
            { depth: 0, text: 'Search', id: 99, parent: 0 },
          ];
        </script>
        <vaadin-tabs
          aria-orientation="horizontal"
          class="menu-items"
          id="menu-primary-items"
          orientation="horizontal"
          role="tablist"
          selected="1"
          theme="cxl-marketing-nav"
          wide="true"
        >
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-123 menu__item "
            id="menu-item-123"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="http://dev-jobs.cxl.co/post-a-job/"
              >Post a job</a
            ></vaadin-tab
          >
          <vaadin-tab
            aria-selected="true"
            class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-117 current_page_item menu-item-121 menu__item menu__item--current "
            id="menu-item-121"
            orientation="horizontal"
            role="tab"
            selected=""
            tabindex="0"
            theme="cxl-marketing-nav"
            ><a aria-current="page" class="menu__link" href="http://dev-jobs.cxl.co/jobs/"
              >Jobs list</a
            >
          </vaadin-tab>
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-122 menu__item "
            id="menu-item-122"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="http://dev-jobs.cxl.co/employer-dashboard/"
              >Employer dashboard</a
            >
          </vaadin-tab>
          <vaadin-tab
            aria-selected="false"
            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-132 menu__item has-children "
            id="menu-item-132"
            orientation="horizontal"
            role="tab"
            tabindex="-1"
            theme="cxl-marketing-nav"
            ><a class="menu__link" href="#"
              >Foo
              <iron-icon icon="lumo:dropdown"></iron-icon>
            </a>
            <vaadin-context-menu
              class="sub-menu"
              open-on="click"
              theme="cxl-marketing-nav"
            ></vaadin-context-menu>
          </vaadin-tab>
        </vaadin-tabs>
        <script>
          window.CXL = window.CXL || {};
          window.CXL.contextMenuItems = window.CXL.contextMenuItems || {};
          window.CXL.contextMenuItems['primary'] = [
            {
              depth: 0,
              text: 'Post a job',
              component: 'a',
              href: 'http:\\/\\/dev-jobs.cxl.co\\/post-a-job\\/',
              id: 123,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Jobs list',
              component: 'a',
              href: 'http:\\/\\/dev-jobs.cxl.co\\/jobs\\/',
              id: 121,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Employer dashboard',
              component: 'a',
              href: 'http:\\/\\/dev-jobs.cxl.co\\/employer-dashboard\\/',
              id: 122,
              parent: 0,
            },
            {
              depth: 0,
              text: 'Foo',
              component: 'a',
              href: '#',
              id: 132,
              parent: 0,
              children: [
                {
                  depth: 1,
                  text: 'Homepage',
                  component: 'a',
                  href: 'http:\\/\\/dev-jobs.cxl.co\\/',
                  id: 133,
                  parent: 132,
                },
              ],
            },
          ];
        </script> </cxl-marketing-nav
      ><!-- #menu-primary -->

      <div class="app-content max-w-full overflow-hidden my-0 mx-auto pt-12">
        <main class="app-main mx-auto mb-12 text-lg leading-loose" id="main">
          <article
            class="entry entry--117 entry--type-page entry--status-publish entry--author-leho"
            id="post-117"
          >
            <header class="entry__header mb-8 text-center">
              <h1 class="entry__title md:max-w-4xl mx-8 sm:mx-auto my-0">Jobs list</h1>
            </header>

            <div class="entry__content o-content-width flow-root">
              <div class="gv-list-container gv-list-single-container gv-container gv-container-102">
                <p class="gv-back-link">
                  <a data-viewid="102" href="http://dev-jobs.cxl.co/jobs/"
                    >← Go back to offers list</a
                  >
                </p>
                <div class="gv-list-view" id="gv_list_6">
                  <div class="gv-list-view-title">
                    <h3 class="gv-field-1-5">Digital Marketing Manager</h3>
                    <div class="gv-list-view-subtitle">
                      <h4 class="gv-field-1-26" id="gv-field-1-26">
                        <img
                          alt="Company logo"
                          class="gv-image gv-field-id-26"
                          src="http://dev-jobs.cxl.co/wp-content/uploads/gravity_forms/1-c21ec7f2ab493f4aa43c2cf5874f4f38/2020/12/ci.jpg"
                        />
                      </h4>
                      <h4 class="gv-field-1-25" id="gv-field-1-25">Change Invest</h4>
                      <h4 class="gv-field-1-7" id="gv-field-1-7">Part-time remote</h4>
                      <h4 class="gv-field-1-41" id="gv-field-1-41">
                        Portland, Oregon<br />United States
                      </h4>
                      <h4
                        class="cxl-apply-for-job-container gv-field-1-custom"
                        id="gv-field-1-custom"
                      >
                        <vaadin-button
                          onclick="window.location.href='https://www.linkedin.com/jobs/view/2006414442'"
                          role="button"
                          style="cursor: pointer;"
                          tabindex="0"
                          theme="primary cxl-apply-for-job"
                          >Apply now
                        </vaadin-button>
                      </h4>
                    </div>
                  </div>
                  <div class="gv-list-view-content">
                    <div class="gv-list-view-content-description">
                      <div class="cxl-job-description gv-field-1-11" id="gv-field-1-11">
                        <p><span data-test-job-description-text="true">Who are we</span></p>
                        <p>
                          We believe the world would be a fundamentally better place if everybody
                          invested. We’re on a mission to enable everyone to take part in the
                          world’s success by making investing simple, affordable and accessible.
                        </p>
                        <p>
                          Change is quickly emerging as one of the leading investment apps in
                          Europe. Cryptocurrencies will soon be accompanied by stocks and cash
                          management putting us in a position to change the financial future of
                          millions of people around the world.
                        </p>
                        <p>
                          For the past 2 years we have been focused on building the core value for
                          our users, creating an outstanding product and killer team. Exponential
                          organic growth - we’re doubling our core KPI-s monthly - shows we have
                          succeeded and now it’s time to take out the big guns. We are looking for
                          you to aggressively scale. You will be responsible for all digital
                          marketing activities across 28 European countries.
                        </p>
                        <p>
                          We’re looking for a pioneer in mobile digital and growth marketing, a true
                          quant and analytical mastermind with a proven knack of finding scalable
                          solutions.
                        </p>
                        <p>Our Marketing Team</p>
                        <p>
                          More accurate would be Our Future Marketing Team - you will be one of the
                          people to build it. You’re the second person in the team and the best of t
                          he best in digital marketing, so you tell us what kind of a team you need
                          to build. We believe in autonomous cross-functional teams as a hint for
                          what the future will look like.
                        </p>
                        <p>
                          <strong>What Will You Do<br /> </strong>
                        </p>
                        <ul>
                          <li>
                            You will be responsible for developing and executing the digital
                            strategy across all areas including but not limited top paid advertising
                            (mainly Twitter, Google, FB), social media, content, email, affiliate,
                            referral, SEO and ASO;
                          </li>
                          <li>
                            Plan and manage full-cycle execution of campaigns. You are supported by
                            inhouse product, design, engineering, legal teams and can choose any
                            external partners you need;
                          </li>
                          <li>
                            Find scalable channels and own user acquisition through website and App
                            Store/Google Play;
                          </li>
                          <li>
                            Manage a considerable digital marketing budget. Bring industry leading
                            cost per lead and cost per depositor results while maintaining
                            exponential WoW growth;
                          </li>
                          <li>
                            Optimising for best spent meaning constant experimentation, A/B testing
                            and improvement based on learnings across creatives, channels, and
                            objectives;
                          </li>
                          <li>
                            Ensuring proper tracking, attribution, automation as well as performance
                            analysis and reporting;
                          </li>
                          <li>
                            Share CRO with the product team. Long funnel to purchase (deposit) usual
                            to FinTech creates lots of MoFu and BoFu growth opportunities;
                          </li>
                        </ul>
                        <p>
                          <span data-test-job-description-text="true"
                            >What we’re looking for:<br />
                          </span>
                        </p>
                        <ul>
                          <li>Skillset covering all digital marketing areas listed above;</li>
                          <li>
                            Success in delivering hyper growth at a B2C tech company, at least 20%
                            MoM over a one year period, with industry leading acquisition cost;
                          </li>
                          <li>
                            Experience with a mobile product is a must, FinTech highly preferred;
                          </li>
                          <li>
                            Deep knowledge of mobile digital marketing particularities, analytics,
                            tools, ASO etc;
                          </li>
                          <li>
                            Ability to execute digital campaigns end to end without performance
                            agencies. The more you can do independently the better but you do have
                            internal and external resources for tech, design, creative, copy,
                            content and more;
                          </li>
                          <li>
                            Strong analytical skills and data driven mindset to translate insights
                            into actionable plans and ruthlessly prioritise for highest impact;
                          </li>
                          <li>
                            Experience working across functions and managing diverse stakeholders.
                            You can speak anyone’s language from engineers to legal and supervisory
                            board;
                          </li>
                          <li>
                            Getting things done mindset. You can ensure that all initiatives move at
                            max speed at all times;
                          </li>
                          <li>Basic web development and design skills are nice to have.</li>
                        </ul>
                        <p>
                          <span data-test-job-description-text="true"
                            ><strong>What We Offer<br /> </strong
                          ></span>
                        </p>
                        <ul>
                          <li>
                            Stock package, competitive salary, health insurance, pension fund;
                          </li>
                          <li>Opportunity to build the whole department;</li>
                          <li>An ambitious team of 14 nationalities;</li>
                          <li>Awesome office in Tallinn financial district;</li>
                          <li>Global relocation and visa sponsorship;</li>
                          <li>Journey to a billion-dollar company.</li>
                        </ul>
                        <p>
                          <span data-test-job-description-text="true"
                            >Sounds like you? Apply now and Change the world with us.</span
                          >
                        </p>
                      </div>
                      <div
                        class="cxl-apply-for-job-container gv-field-1-custom"
                        id="gv-field-1-custom"
                      >
                        <p>
                          <vaadin-button
                            onclick="window.location.href='https://www.linkedin.com/jobs/view/2006414442'"
                            role="button"
                            style="cursor: pointer;"
                            tabindex="0"
                            theme="primary cxl-apply-for-job"
                            >Apply now
                          </vaadin-button>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="gv-grid gv-list-view-footer">
                    <div class="gv-grid-col-1-2 gv-left">
                      <div
                        class="cxl-job-edit-entry gv-field-1-edit_link"
                        id="gv-field-1-edit_link"
                      >
                        <a href="http://dev-jobs.cxl.co/jobs/entry/6/?edit=b5401dd93f&amp;gvid=102"
                          >Edit Entry</a
                        >
                      </div>
                    </div>

                    <div class="gv-grid-col-1-2 gv-right">
                      <div class="cxl-job-expiry-date gv-field-1-52" id="gv-field-1-52">
                        <span class="gv-field-label">Expires in</span>4 weeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input class="gravityview-view-id" type="hidden" value="102" />
            </div>
          </article>
        </main>
      </div>
      <footer class="app-footer overflow-y-hidden font-secondary text-base">
        <div class="app-footer__meta py-4 px-8 border-0 border-t border-solid"></div>
      </footer>
    </cxl-app-layout>
  </div>
`;
