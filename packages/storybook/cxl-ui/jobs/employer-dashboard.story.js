import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

export const CXLEmployerDashboard = () => html`
  <cxl-app-layout id="container" class="cxl-app-layout" wide="" layout="1c-w" scroll="document">
    <cxl-marketing-nav
      class="menu menu--primary headroom headroom--not-top headroom--bottom headroom--unpinned"
      slot="header"
      wide=""
    >
      <template id="cxl-marketing-nav-search-form-template">
        <vaadin-context-menu-item class="menu-item-search">
          <form
            id="search-form"
            role="search"
            method="get"
            class="search-form"
            action="http://dev-jobs.cxl.co/"
          >
            <label for="search-input">Search CXL WP Starter:</label>
            <input
              id="search-input"
              type="search"
              class="search-field"
              placeholder="Search …"
              value=""
              name="s"
            />
            <vaadin-button
              type="submit"
              class="search-submit"
              aria-label="Search"
              theme="icon"
              onclick="document.getElementById('search-form').submit();"
            >
              <iron-icon icon="lumo:angle-right"></iron-icon>
            </vaadin-button>
          </form>
        </vaadin-context-menu-item>
      </template>

      <vaadin-tabs
        id="menu-global-items"
        class="menu-items"
        theme="cxl-marketing-nav"
        selected="-1"
        orientation="horizontal"
        role="tablist"
        aria-orientation="horizontal"
        wide="true"
      >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-100"
          class="menu-item-wide menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-100 menu__item menu-item-wide"
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="http://dev-jobs.cxl.co/" class="menu__link">
            <iron-icon
              icon="cxl:logo"
              style="width: var(--lumo-icon-size-l, 48px);"
            ></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-94"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-94 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/institute/" class="menu__link">Institute</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-95"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-95 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/agency/" class="menu__link"
            >Conversion optimization services</a
          ></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-96"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-96 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/agency/case-studies/" class="menu__link"
            >Agency case studies</a
          ></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-97"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-97 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/blog/" class="menu__link">Blog</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-98"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-98 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/live/" class="menu__link"
            >CXL Live 2020
            <iron-icon icon="cxl:live" style="color: var(--lumo-primary-color)"></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-99"
          class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-99 menu__item menu-item-split-nav menu-item-wide menu-item-search"
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="0"
          ><a class="menu__link"
            >Search
            <iron-icon icon="lumo:search"></iron-icon> </a
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
        id="menu-primary-items"
        class="menu-items"
        theme="cxl-marketing-nav"
        selected="2"
        orientation="horizontal"
        role="tablist"
        aria-orientation="horizontal"
        wide="true"
      >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-121"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-121 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="http://dev-jobs.cxl.co/" class="menu__link">Find a job</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-123"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-123 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="http://dev-jobs.cxl.co/post-a-job/" class="menu__link"
            >Post a job</a
          ></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-122"
          class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-114 current_page_item menu-item-122 menu__item menu__item--current "
          aria-selected="true"
          role="tab"
          orientation="horizontal"
          tabindex="0"
          selected=""
          ><a
            href="http://dev-jobs.cxl.co/employer-dashboard/"
            aria-current="page"
            class="menu__link"
            >Employer dashboard</a
          ></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-132"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-132 menu__item has-children "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="#" class="menu__link"
            >Foo
            <iron-icon icon="lumo:dropdown"></iron-icon>
          </a>
          <vaadin-context-menu
            open-on="click"
            class="sub-menu"
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
            text: 'Find a job',
            component: 'a',
            href: 'http:\\/\\/dev-jobs.cxl.co\\/',
            id: 121,
            parent: 0,
          },
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
                href: 'http:\\/\\/dev-jobs.cxl.co\\/sample-page\\/',
                id: 133,
                parent: 132,
              },
            ],
          },
        ];
      </script> </cxl-marketing-nav
    ><!-- #menu-primary -->

    <div class="app-content max-w-full overflow-hidden my-0 mx-auto pt-12">
      <main id="main" class="app-main mx-auto mb-12 text-lg leading-loose">
        <article
          class="entry entry--114 entry--type-page entry--status-publish entry--author-leho"
          id="post-114"
        >
          <header class="entry__header mb-8 text-center">
            <h1 class="entry__title md:max-w-4xl mx-8 sm:mx-auto my-0">Employer dashboard</h1>
          </header>

          <div class="entry__content o-content-width flow-root">
            <div class="gv-grid gv-widgets-header">
              <div class="gv-grid-col-1-1 gv-left"></div>
              <div class="gv-grid-col-1-2 gv-left">
                <div class="gv-widget-pagination "><p>Displaying 1 - 2 of 2</p></div>
              </div>
              <div class="gv-grid-col-1-2 gv-right"></div>
            </div>

            <div
              class="gv-list-container gv-list-view gv-list-multiple-container gv-container gv-container-104"
            >
              <cxl-vaadin-accordion theme="cxl-jobs-listing" opened="0">
                <div id="gv_list_8" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="http://dev-jobs.cxl.co/wp-content/uploads/gravity_forms/1-c21ec7f2ab493f4aa43c2cf5874f4f38/2020/12/cxl2.png"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">CXL</span>
                          <p>Digital Analytics</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Austin, Texas<br />Poland</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>2 months ago</p>
                        </div>
                        <div
                          id="gv-field-1-is_approved"
                          class="cxl-job-approval-status gv-field-1-is_approved"
                        >
                          <p><span class="gv-approval-approved">Approved</span></p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-edit gv-field-1-custom">
                          <p>
                            <vaadin-button
                              theme="primary cxl-edit-entry"
                              onclick="window.location.href='http://dev-jobs.cxl.co/view/employer-dashboard/entry/8/?edit=1e1a072abe&amp;gvid=104'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                              >Edit entry
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <h2>About us</h2>
                          <p>
                            We believe that the cutting-edge marketing can only be achieved through
                            constant learning and practice, so CXL aims to provide the know-how for
                            those willing.
                          </p>
                          <h2>What will you do?</h2>
                          <ul>
                            <li>Brainstorm and ideate with our team about marketing campaigns</li>
                            <li>Report KPI's</li>
                            <li>A/B testing</li>
                          </ul>
                          <h2>Basic requirements</h2>
                          <ul>
                            <li>Experience with Google advertising and analytics stack</li>
                            <li>Facebook ads campaign experience</li>
                            <li>CXL Digital Analytics minidegree</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div id="gv-field-1-custom" class="gv-field-1-custom">
                          <vaadin-button
                            theme="primary cxl-edit-entry"
                            onclick="window.location.href='http://dev-jobs.cxl.co/view/employer-dashboard/entry/8/?edit=1e1a072abe&amp;gvid=104'"
                            style="cursor: pointer;"
                            role="button"
                            tabindex="0"
                            >Edit entry
                          </vaadin-button>
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>4 weeks
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="http://dev-jobs.cxl.co/employer-dashboard/entry/8/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>

                <div id="gv_list_6" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="http://dev-jobs.cxl.co/wp-content/uploads/gravity_forms/1-c21ec7f2ab493f4aa43c2cf5874f4f38/2020/12/ci.jpg"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">Change Invest</span>
                          <p>Digital Marketing Manager</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Portland, Oregon<br />United States</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Part-time remote</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>2 months ago</p>
                        </div>
                        <div
                          id="gv-field-1-is_approved"
                          class="cxl-job-approval-status gv-field-1-is_approved"
                        >
                          <p><span class="gv-approval-approved">Approved</span></p>
                        </div>
                        <div id="gv-field-1-custom" class="cxl-job-edit gv-field-1-custom">
                          <p>
                            <vaadin-button
                              theme="primary cxl-edit-entry"
                              onclick="window.location.href='http://dev-jobs.cxl.co/view/employer-dashboard/entry/6/?edit=6cdfc92e77&amp;gvid=104'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                              >Edit entry
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
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
                            We’re looking for a pioneer in mobile digital and growth marketing, a
                            true quant and analytical mastermind with a proven knack of finding
                            scalable solutions.
                          </p>
                          <p>Our Marketing Team</p>
                          <p>
                            More accurate would be Our Future Marketing Team - you will be one of
                            the people to build it. You’re the second person in the team and the
                            best of t he best in digital marketing, so you tell us what kind of a
                            team you need to build. We believe in autonomous cross-functional teams
                            as a hint for what the future will look like.
                          </p>
                          <p>
                            <strong>What Will You Do<br /> </strong>
                          </p>
                          <ul>
                            <li>
                              You will be responsible for developing and executing the digital
                              strategy across all areas including but not limited top paid
                              advertising (mainly Twitter, Google, FB), social media, content,
                              email, affiliate, referral, SEO and ASO;
                            </li>
                            <li>
                              Plan and manage full-cycle execution of campaigns. You are supported
                              by inhouse product, design, engineering, legal teams and can choose
                              any external partners you need;
                            </li>
                            <li>
                              Find scalable channels and own user acquisition through website and
                              App Store/Google Play;
                            </li>
                            <li>
                              Manage a considerable digital marketing budget. Bring industry leading
                              cost per lead and cost per depositor results while maintaining
                              exponential WoW growth;
                            </li>
                            <li>
                              Optimising for best spent meaning constant experimentation, A/B
                              testing and improvement based on learnings across creatives, channels,
                              and objectives;
                            </li>
                            <li>
                              Ensuring proper tracking, attribution, automation as well as
                              performance analysis and reporting;
                            </li>
                            <li>
                              Share CRO with the product team. Long funnel to purchase (deposit)
                              usual to FinTech creates lots of MoFu and BoFu growth opportunities;
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
                              You can speak anyone’s language from engineers to legal and
                              supervisory board;
                            </li>
                            <li>
                              Getting things done mindset. You can ensure that all initiatives move
                              at max speed at all times;
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
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div id="gv-field-1-custom" class="gv-field-1-custom">
                          <vaadin-button
                            theme="primary cxl-edit-entry"
                            onclick="window.location.href='http://dev-jobs.cxl.co/view/employer-dashboard/entry/6/?edit=6cdfc92e77&amp;gvid=104'"
                            style="cursor: pointer;"
                            role="button"
                            tabindex="0"
                            >Edit entry
                          </vaadin-button>
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>4 weeks
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="http://dev-jobs.cxl.co/employer-dashboard/entry/6/">
                            <iron-icon
                              icon="lumo:arrow-right"
                              style="width: var(--lumo-icon-size-xl, 48px);"
                            ></iron-icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </vaadin-accordion-panel>
                </div>
              </cxl-vaadin-accordion>
            </div>
            <div class="gv-grid gv-widgets-footer">
              <div class="gv-grid-col-1-1 gv-left"></div>
              <div class="gv-grid-col-1-2 gv-left"></div>
              <div class="gv-grid-col-1-2 gv-right"></div>
            </div>

            <input type="hidden" class="gravityview-view-id" value="104" />
          </div>
        </article>
      </main>
    </div>
    <footer class="app-footer overflow-y-hidden font-secondary text-base">
      <div class="app-footer__meta py-4 px-8 border-0 border-t border-solid"></div>
    </footer>
  </cxl-app-layout>
`;
