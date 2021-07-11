import { html } from 'lit-html';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';

export const CXLJobsListing = () => html`
  <cxl-app-layout id="container" class="cxl-app-layout" wide="" layout="1c-w" scroll="document">
    <cxl-marketing-nav
      class="menu menu--primary headroom headroom--not-bottom headroom--pinned headroom--top"
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
            action="https://jobs.cxl.co/"
          >
            <label for="search-input">Search CXL Jobs:</label>
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
        selected="0"
        orientation="horizontal"
        role="tablist"
        aria-orientation="horizontal"
        wide="true"
      >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-120"
          class="menu-item-wide menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-120 menu__item menu__item--current menu-item-wide"
          aria-selected="true"
          role="tab"
          orientation="horizontal"
          tabindex="0"
          selected=""
          ><a href="https://jobs.cxl.co" aria-current="page" class="menu__link">
            <iron-icon
              icon="cxl:logo"
              style="width: var(--lumo-icon-size-l, 48px);"
            ></iron-icon> </a
        ></vaadin-tab>
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-121"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-121 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/institute/" class="menu__link">Institute</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-122"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-122 menu__item "
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
          id="menu-item-123"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-123 menu__item "
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
          id="menu-item-124"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-124 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://cxl.com/blog/" class="menu__link">Blog</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-125"
          class="menu-item menu-item-type-custom menu-item-object-custom menu-item-125 menu__item "
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
          id="menu-item-126"
          class="menu-item-split-nav menu-item-wide menu-item-search menu-item menu-item-type-custom menu-item-object-custom menu-item-126 menu__item menu-item-split-nav menu-item-wide menu-item-search"
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
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
            href: 'https:\\/\\/jobs.cxl.co',
            id: 120,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Institute',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/institute\\/',
            id: 121,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Conversion optimization services',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/agency\\/',
            id: 122,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Agency case studies',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/agency\\/case-studies\\/',
            id: 123,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Blog',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/blog\\/',
            id: 124,
            parent: 0,
          },
          {
            depth: 0,
            text: 'CXL Live 2020',
            component: 'a',
            href: 'https:\\/\\/cxl.com\\/live\\/',
            id: 125,
            parent: 0,
          },
          { depth: 0, text: 'Search', id: 126, parent: 0 },
        ];
      </script>
      <vaadin-tabs
        id="menu-primary-items"
        class="menu-items"
        theme="cxl-marketing-nav"
        selected="0"
        orientation="horizontal"
        role="tablist"
        aria-orientation="horizontal"
        wide="true"
      >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-117"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-117 menu__item menu__item--current "
          aria-selected="true"
          role="tab"
          orientation="horizontal"
          tabindex="0"
          selected=""
          ><a href="https://jobs.cxl.co/" aria-current="page" class="menu__link"
            >Find a job</a
          ></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-119"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://jobs.cxl.co/post-a-job/" class="menu__link">Post a Job</a></vaadin-tab
        >
        <vaadin-tab
          theme="cxl-marketing-nav"
          id="menu-item-118"
          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-118 menu__item "
          aria-selected="false"
          role="tab"
          orientation="horizontal"
          tabindex="-1"
          ><a href="https://jobs.cxl.co/employer-dashboard/" class="menu__link"
            >Employer Dashboard</a
          >
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
            href: 'https:\\/\\/jobs.cxl.co\\/',
            id: 117,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Post a Job',
            component: 'a',
            href: 'https:\\/\\/jobs.cxl.co\\/post-a-job\\/',
            id: 119,
            parent: 0,
          },
          {
            depth: 0,
            text: 'Employer Dashboard',
            component: 'a',
            href: 'https:\\/\\/jobs.cxl.co\\/employer-dashboard\\/',
            id: 118,
            parent: 0,
          },
        ];
      </script> </cxl-marketing-nav
    ><!-- #menu-primary -->

    <div class="app-content max-w-full overflow-hidden my-0 mx-auto pt-12">
      <main id="main" class="app-main mx-auto mb-12 text-lg leading-loose">
        <article
          class="entry entry--6 entry--type-page entry--status-publish entry--author-leho-k"
          id="post-6"
        >
          <header class="entry__header mb-8 text-center">
            <h1 class="entry__title md:max-w-4xl mx-8 sm:mx-auto my-0">Find a job</h1>
          </header>

          <div class="entry__content o-content-width flow-root">
            <p class="has-text-align-center">Browse the top digital marketing jobs in the world.</p>

            <div class="gv-grid gv-widgets-header">
              <div class="gv-grid-col-1-1 gv-left">
                <form
                  class="gv-widget-search gv-search-horizontal"
                  method="get"
                  action="https://jobs.cxl.co/"
                  data-viewid="102"
                >
                  <div class="gv-search-box gv-search-field-text gv-search-field-search_all">
                    <div class="gv-search">
                      <label for="gv_search_102">Search Entries:</label>
                      <p><input type="search" name="gv_search" id="gv_search_102" value="" /></p>
                    </div>
                  </div>
                  <div class="gv-search-box gv-search-field-select">
                    <label for="search-box-filter_41_6">Country</label>
                    <p>
                      <select name="filter_41_6" id="search-box-filter_41_6">
                        <option value="" selected="selected">—</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="United States">United States</option>
                        <option value="Poland">Poland</option>
                        <option value="Spain">Spain</option>
                        <option value="Taiwan">Taiwan</option>
                      </select>
                    </p>
                  </div>
                  <div class="gv-search-box gv-search-field-select">
                    <label for="search-box-filter_7">Employment type</label>
                    <p>
                      <select name="filter_7" id="search-box-filter_7">
                        <option value="" selected="selected">—</option>
                        <option value="Full-time remote">Full-time remote</option>
                        <option value="Contractor">Contractor</option>
                        <option value="Full-time">Full-time</option>
                      </select>
                    </p>
                  </div>
                  <div class="gv-search-box gv-search-box-submit">
                    <vaadin-button
                      theme="button outlined gv-search-clear"
                      onclick="window.location.href='/'"
                      style="cursor: pointer;"
                      role="button"
                      tabindex="0"
                      >Clear filters
                    </vaadin-button>
                    <input type="hidden" name="mode" value="all" />
                    <vaadin-button
                      type="submit"
                      theme="button primary"
                      onclick="document.querySelector('form[data-viewid=&quot;102&quot;]').submit()"
                      style="cursor: pointer;"
                      tabindex="0"
                      role="button"
                    >
                      <iron-icon slot="suffix" icon="lumo:angle-right"></iron-icon>
                      Search
                    </vaadin-button>
                  </div>
                </form>
              </div>
              <div class="gv-grid-col-1-2 gv-left">
                <div class="gv-widget-pagination "><p>Displaying 1 - 3 of 6</p></div>
              </div>
              <div class="gv-grid-col-1-2 gv-right">
                <div class="gv-widget-page-links">
                  <span aria-current="page" class="page-numbers current">1</span>
                  <a class="page-numbers" href="https://jobs.cxl.co?pagenum=2">2</a>
                  <a class="next page-numbers" href="https://jobs.cxl.co?pagenum=2">Next →</a>
                </div>
              </div>
            </div>

            <div
              class="gv-list-container gv-list-view gv-list-multiple-container gv-container gv-container-102"
            >
              <cxl-vaadin-accordion theme="cxl-jobs-listing" opened="0">
                <div id="gv_list_21" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F03%2F368px-Google_2015_logo.svg.png&amp;form-id=1&amp;field-id=26&amp;hash=7eb86bba4affdfe96aaa234fe08eff636f77b176b4e2d15007ee446b7677f464"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">Test</span>
                          <p>Role</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>test, test<br />Taiwan</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>2 days ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container hidden gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>test</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/21/?edit=1dd1d2bf81&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>4 weeks
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/21/">
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

                <div id="gv_list_20" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">App Anie</span>
                          <p>Senior Backend Engineer</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Remote<br />Spain</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>5 days ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container hidden gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='https://stackoverflow.com/jobs/503910/senior-backend-engineer-data-acquisition-app-annie?utm_source=remoteok.io&amp;ref=remoteok.io'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            In this role as a Staff Backend Engineer, you will be responsible for
                            maintaining and improving the systems that help App Annie collect data
                            at scale for its Intelligence products. You will be in charge of
                            managing a wide variety of data sources, dealing with terabytes of data
                            on a daily basis, and will play a key role in exploring opportunities
                            for market data driven innovations at App Annie.
                          </p>
                          <p>What can you tell your friends?</p>
                          <p>
                            “I’m responsible for designing and maintaining large scale systems that
                            collect data. Together with my team, we provide the foundation for App
                            Annie’s mobile market insights.“
                          </p>
                          <p>How will you be doing this?</p>
                          <ul>
                            <li>
                              Understanding end-to-end product delivery, from early idea to a
                              maintainable and scalable product
                            </li>
                            <li>
                              Collaborating with a global team of backend engineers, data scientists
                              and product managers to ensure a smooth running data operation
                            </li>
                            <li>
                              Partnering with product managers and data scientists to explore new
                              ways to add value to our products
                            </li>
                            <li>
                              Designing, specifying and driving improvements to our systems by
                              always asking yourself: how can we do this simpler, faster and more
                              efficient?
                            </li>
                            <li>
                              Developing a sixth sense for technical debt, operational risk and data
                              quality
                            </li>
                            <li>
                              Estimating, planning and executing projects together with the team
                            </li>
                            <li>
                              Documenting and sharing knowledge across the team and your fellow
                              engineers around the globe
                            </li>
                          </ul>
                          <p>What do you bring to the team?</p>
                          <ul>
                            <li>
                              BS/MS in a Computer Science related field or equivalent experience
                            </li>
                            <li>5+ years of relevant work experience</li>
                            <li>A team player attitude and solid communication skills</li>
                            <li>Proficient in Python</li>
                            <li>Experience with the AWS ecosystem (ECS and Kinesis is a plus)</li>
                            <li>Experience with SQL and RDBMS</li>
                            <li>Experience with Docker</li>
                            <li>Experience in building and evolving RESTful API systems</li>
                            <li>Experience with Apache Storm and Kafka is a big plus</li>
                          </ul>
                          <p>What do we offer?</p>
                          <ul>
                            <li>Competitive salary and perks</li>
                            <li>Paid leave, so long as you promise to come back!</li>
                            <li>
                              Lots of responsibility + room for you to experiment and grow with the
                              company
                            </li>
                            <li>
                              An international team of talented and engaged people from different
                              cultural backgrounds and locations (Utrecht, Beijing, San Francisco
                              &amp; more!)
                            </li>
                            <li>
                              You can be located in Netherlands, Germany or the UK and work either
                              remotely or from the office -we offer full flexibility!
                            </li>
                            <li>
                              Wellbeing allowance for any activity that matters to your wellbeing;
                              (online) gym classes, fitness equipment, mindfulness apps or even
                              childcare support!
                            </li>
                            <li>
                              Home Internet allowance to help cover a secure, stable internet
                              connection
                            </li>
                            <li>
                              WFH Equipment Allowance to ensure you have the best set up in your
                              home office
                            </li>
                            <li>
                              Unlimited access to online learning platform Udemy to help you develop
                              your skills
                            </li>
                            <li>
                              Virtual initiatives and events to keep you connected with your
                              colleagues
                            </li>
                          </ul>
                          <p>Ok, a bit more about us</p>
                          <p>
                            App Annie is the industry’s most trusted mobile data and analytics
                            platform. The company created the mobile app data market and has been
                            fueling world-class, mobile-first businesses since 2010. App Annie’s
                            mission is to power B2C companies’ mobile transformation and enable
                            clients to deliver winning consumer experiences. More than 1,000
                            enterprise clients and 1 million registered users across the globe and
                            spanning all industries rely on App Annie as the gold standard to
                            revolutionize their mobile business. The company is headquartered in San
                            Francisco with 11 offices worldwide.
                          </p>
                          <p>
                            *PLEASE NOTE THAT WE WILL ONLY CONSIDER CANDIDATES LOCATED IN THE
                            NETHERLANDS, UK OR GERMANY. WE HAVE OFFICES IN THESE COUNTRIES AND ARE
                            ALSO OPEN FOR REMOTE WORKING
                          </p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='https://stackoverflow.com/jobs/503910/senior-backend-engineer-data-acquisition-app-annie?utm_source=remoteok.io&amp;ref=remoteok.io'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/20/?edit=60765b21b0&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>4 weeks
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/20/">
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

                <div id="gv_list_17" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2F368px-Google_2015_logo.svg3.png&amp;form-id=1&amp;field-id=26&amp;hash=c5b2f00f628a3b340fa0d2355d593fea69f6a74687b8c526ddbc54444201b166"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">warsaw</span>
                          <p>marketing and marketing and marketing</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>warsaw, capital of Poland<br />Poland</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>1 week ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container hidden gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            SUMMARY<br />
                            We are Pixellu, a software company on a mission to simplify professional
                            photographers’ lives. We are seeking a world-class Lead Product Designer
                            to head our product design. You’ll be working directly with the VP of
                            Product &amp; CEO to develop a product vision and execute on that vision
                            with the help of UX/UI, Product Owners/Managers, and Engineering.
                          </p>
                          <p>
                            This is not a “sit in the office and plan” role. This is a role where
                            you will be with the exec team one day, and in the trenches the next.
                            Expect to roll up your sleeves and be in the weeds, doing the work.<br />
                            🚀 ABOUT PIXELLU<br />
                            At Pixellu, we know professional photographers are frustrated with all
                            of the tedious work required to run a successful photography business.
                            Many get so overwhelmed, they end up quitting on their dream of having a
                            photography career. That is why we create easy-to-use, time-saving
                            software that simplify photographers’ lives, so that they can spend less
                            time in front of the computer and get back to doing what they love.
                          </p>
                          <p>
                            Pixellu was co-founded in 2010 by two wedding photographers. Faced with
                            the challenges of long hours and endless tasks, we began asking
                            ourselves, “How can we save valuable time, make more money, and get our
                            lives back?” Our answer was technology. We started Pixellu with the idea
                            that we could make money by providing an honest service that helped
                            photographers save time and live more fulfilling lives. We believed
                            that, by focusing on a great product and great service, we could build a
                            business that not only does good, but also does well.
                          </p>
                          <p>
                            Today, we are a team of 30 team members spread across 10 countries,
                            serving tens of thousands of photographers in over 100 countries.
                          </p>
                          <p>
                            Learn more about us and why you’ll love working at Pixellu here:
                            https://vimeo.com/405889874<br />
                            😎 YOUR ROLE<br />
                            Pixellu currently has three products - SmartAlbums, SmartSlides, and
                            Galleries. We are looking to not only improve existing products but also
                            introduce new products that will further simplify our customers’ lives.
                          </p>
                          <p>
                            The primary role of the VP of Product is product strategy. You, as the
                            Lead Product Designer, would be second-in-command and responsible for
                            execution. Your job will be to: Research: Conduct user research and
                            testing. Plan: Help shape the product strategy and vision. Drive product
                            roadmaps &amp; set feature priorities. Prototype: Define the user
                            experience, interactions, and user interface through user flows,
                            information architecture, sketches and wireframes, and visual design.
                            Build functional prototypes to validate and test your designs. Design:
                            Design simple, elegant, data-driven, user-centric experiences that
                            delight users. Lead: Lead our small team of UX/UI designers.<br />
                            📗 REQUIREMENTS<br />
                            Aside from the standard job description, here is what we most value in a
                            candidate: Obsession with simplicity and intuitive design Mastery and
                            application of space, iconography, illustration, and UX laws Thorough
                            knowledge of the latest trends in UX People &amp; communication skills
                            Data-driven decision making 4+ years of experience in product design<br />
                            🏖️ BENEFITS<br />
                            Work from anywhere Flex time; aside from "required online hours" of
                            8-11am Pacific Time, work hours are fully flexible Competitive salary
                            based on experience level and your local cost of living considerations
                            Quarterly profit-sharing bonuses based on seniority and role Paid
                            parental leave 20 annual days off, with the ability to make up missed
                            days on weekends<br />
                            Location<br />
                            🌏 Worldwide
                          </p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/17/?edit=79c8745008&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>3 weeks
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/17/">
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

                <div id="gv_list_12" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2F1c9a94d6cf75838cf6.png&amp;form-id=1&amp;field-id=26&amp;hash=2f8dd0df2879d708e4f959ae8804d0e57135ad07bec041d44ae1a09257d740bc"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">RemoteOK</span>
                          <p>software tester</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>klaipeda<br />Lithuania</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container hidden gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='http://www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            TLDR<br />
                            &nbsp;<br />
                            What You Should Know About Our Company: WP Media<br />
                            Founded in 2014 in the beautiful Lyon, France,&nbsp;WP Media&nbsp;is an
                            equal opportunity employer with a distributed team of +35 teammates
                            living around the world.
                          </p>
                          <p>
                            Our plugin makes sites go at the speed of light in just a few clicks. We
                            love to make our customers’ lives easier, which is why WP Rocket applies
                            key best web performance practices right upon activation.<br />
                            Do We Share the Same Values?<br />
                            It's a great opportunity if you love open source, dev tools, systems
                            programming. Join our well-funded remote-first&nbsp;DVC&nbsp;team to
                            build developer tools to see how your code is used by thousands of
                            developers every day! If you don't mind Python.
                          </p>
                          <hr />
                          <p>
                            About us<br />
                            We are the company behind very popular open-source tools for ML
                            workflow-&nbsp;DVC&nbsp;and&nbsp;CML. We're a well-funded, remote-first
                            team on a missing to solve the complexity of managing datasets, ML
                            infrastructure, ML models lifecycle management.
                          </p>
                          <p><strong>Learn more:</strong></p>
                          <ul>
                            <li>Check out our&nbsp;GitHub</li>
                            <li>Check out the&nbsp;Website&nbsp;and&nbsp;Docs</li>
                            <li>Finally, take a look at our&nbsp;Blog&nbsp;and&nbsp;YouTube</li>
                          </ul>
                          <p><strong>What we offer:</strong></p>
                          <ul>
                            <li>Team is distributed remotely worldwide.</li>
                            <li>You will be one of the first employees for the DVC core team.</li>
                            <li>Highly competitive salary, stock options, and bonuses.</li>
                            <li>
                              Open source-first company- you work will be visible and will be used
                              by thousands developers every day! This feels great! Check out our
                              Discord and GitHub.
                            </li>
                            <li>
                              Founders and team with strong engineering, data science, and open
                              source experience. We all code and understand engineering first-hand.
                            </li>
                            <li>
                              Engineering team is involved into product discussions and planning. We
                              do it openly via&nbsp;Github&nbsp;or&nbsp;Discord chat.
                            </li>
                            <li>
                              Besides building the product we participate in conferences (PyCon,
                              PyData, O'Reilly AI, etc). We encourage and support the team in giving
                              talks, writing&nbsp;blog-posts, and other activities.
                            </li>
                            <li>Well-defined process that we all participate in improving.</li>
                          </ul>
                          <p>
                            About you<br />
                            -&nbsp;<strong>Strong Python knowledge</strong>&nbsp;and excellent
                            coding culture (standards, unit test, docs, etc) are required.
                            Alternatively very strong experience with languages like Go, C + some
                            experience with Python).
                          </p>
                          <p>
                            -&nbsp;<strong>Remote work self-discipline.</strong>&nbsp;A lot of our
                            processes are built on trust- we don't like and don't have time to
                            micro-manage
                          </p>
                          <p>
                            -&nbsp;<strong>Excellent communication skills</strong>&nbsp;- clear,
                            constructive, and respectful dialog with other team members, community
                          </p>
                          <p>
                            -&nbsp;<strong>Ability to write</strong>&nbsp;technical docs, blogs.
                            Team is responsible to keep basic docs up to date
                          </p>
                          <p>
                            -&nbsp;<strong>DVC core team</strong>&nbsp;is 4 engineers, you will one
                            of the earliest employees and we expect you to&nbsp;<strong
                              >drive major parts of the product</strong
                            ><br />
                            Location<br />
                            🌏 Worldwide
                          </p>
                          <p>
                            <strong
                              >Please note that this is a joke, no such position exists and it does
                              not constitute investment advice.</strong
                            >
                          </p>
                          <p>🚀🚀🚀</p>
                          <p>
                            WE SEEK ALPHA AND MASTER BETA!!!!11 La-li-lu-le-lo. Are funds SAFU or
                            SNAFU? Is Bitcoin your safeword?
                          </p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='http://www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/12/?edit=3a404a9473&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 days
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/12/">
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

                <div id="gv_list_10" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2Flogo.png&amp;form-id=1&amp;field-id=26&amp;hash=6241cf213b72648f4d474d5c5984c553889e3cabba1a4d17b16b7a869b4bfb72"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">The World</span>
                          <p>Software engineer</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Austin, Texas<br />United States</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Contractor</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container hidden gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            We are a remote startup (headquartered in Canada) building a smart,
                            curious, and driven team that’s making software to help sales reps sell
                            better.
                          </p>
                          <p>
                            Prospect is a lead generation app that helps you find contact data right
                            inside your browser in real-time. The best sales teams from the top tech
                            companies in the world use Prospect to crush their sales targets.
                          </p>
                          <p><strong>MORE ABOUT US</strong></p>
                          <p>We are currently a team of 11 people -- you will be #12 🙂</p>
                          <p>
                            We are self-funded and profitable (no VCs or investors). We did this
                            because we want to do what’s best for our team and customers.
                          </p>
                          <p>
                            We have sane working hours (~8 hours/day), don’t work weekends, and take
                            ample time off. We don’t have any “managers” and we rarely do any
                            internal meetings.
                          </p>
                          <p><strong>ABOUT YOU</strong></p>
                          <p>
                            You enjoy writing beautiful code. You care not just about whether the
                            code works, but you think deeply about how well it performs, and how it
                            will be understood by future developers.
                          </p>
                          <p>
                            You like shipping things. You realize that building excellent products
                            is a marathon, not a sprint, and regularly make improvements in
                            iterations.
                          </p>
                          <p>
                            You are an excellent communicator. You realize that working remotely
                            requires thoughtful communication and you do so through great written
                            communication.
                          </p>
                          <p>
                            You self-manage. You enjoy taking a goal and figuring out how to ship it
                            without heavy direction and regular check-ins.
                          </p>
                          <p>
                            You are product and customer-centric. Whether it is a bug fix, perf
                            improvement, or a new feature, you realize that every line of code is an
                            opportunity to make a user’s experience better.
                          </p>
                          <p><strong>OUR ENGINEERING TEAM RIGHT NOW</strong></p>
                          <p>
                            We are currently a team of 7 engineers. Our roles are divided based on
                            the projects we work on.
                          </p>
                          <p>
                            We work in 4-week long development cycles in which we focus on adding
                            new features, fixing bugs, or making improvements. After each cycle, we
                            have a 2-week cool-off which we use to work on anything we would like to
                            as well as plan for the next cycle.
                          </p>
                          <p>Our stack is currently:</p>
                          <ul>
                            <li>Backend: Java 8 on Spring and Dropwizard</li>
                            <li>Cloud: A mix of AWS and Google Cloud</li>
                            <li>Database: PostgreSQL</li>
                            <li>Frontend: ES6, TypeScript, React, and Redux</li>
                            <li>Internal: GitLab for CI/CD and issue tracking</li>
                          </ul>
                          <p><strong>PROJECTS YOU WILL WORK ON</strong></p>
                          <p>
                            You will be working on our backend which is a REST API written using
                            modern Java practices.
                          </p>
                          <p>
                            This is a high impact role. We are looking for someone to take real
                            ownership of one or two core features within the first year. You will
                            own some extremely important parts of our application that serve
                            thousands of customers.
                          </p>
                          <p>
                            We prioritize our projects based on what customers are requesting the
                            most. Some things that you might work on include:
                          </p>
                          <ul>
                            <li>
                              Data: Scale our real-time data discovery engine to process 5x-10x more
                              volume
                            </li>
                            <li>
                              DevOps: Improve our CI pipeline by adding static analysis and
                              improving tests
                            </li>
                            <li>
                              Integrations: Add features to and revamp our Salesforce integration
                            </li>
                            <li>
                              Monitoring: Add metrics and real-time alerts for core application
                              functionality
                            </li>
                            <li>
                              Upgrades: Migrate to the latest versions of core dependencies, such as
                              PostgreSQL
                            </li>
                          </ul>
                          <p><strong>MUST HAVES</strong></p>
                          <ul>
                            <li>3-5+ years of Java programming experience</li>
                            <li>Experience with PostgreSQL and handling large amounts of data</li>
                            <li>
                              We don’t require a degree but you should have demonstrated the ability
                              to learn new things quickly (either self-learned, freelance projects,
                              or from school)
                            </li>
                          </ul>
                          <p><strong>BONUS NICE-TO-HAVES</strong></p>
                          <ul>
                            <li>Past remote work experience</li>
                            <li>Worked at a tech startup or a small company before</li>
                            <li>
                              Experience with modern infrastructure tools such as using Terraform
                            </li>
                            <li>
                              Experience with modern Java frameworks without the enterprise bloat
                            </li>
                            <li>
                              A knack for taking a metrics-driven approach using Grafana or similar
                            </li>
                          </ul>
                          <p><strong>COMPENSATION AND PERKS</strong></p>
                          <ul>
                            <li>Salary: $90,000 - $120,000 Canadian dollars / year</li>
                            <li>$1,500 annual self-continued learning budget</li>
                            <li>
                              $1,000+ annual travel spending allowance (money to spend during your
                              vacation)
                            </li>
                            <li>4 weeks paid time off</li>
                            <li>Fridays off every July and August (enjoy the summer! ☀️)</li>
                            <li>
                              Benefits (health, dental, etc) through our company HSA (for people
                              living in Canada)Test
                            </li>
                          </ul>
                          <p>
                            Salary<br />
                            $90,000 — $120,000
                          </p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/10/?edit=1376ad3253&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>2 days
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/10/">
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

                <div id="gv_list_9" class="gv-list-view">
                  <vaadin-accordion-panel theme="cxl-jobs-listing reverse" tabindex="0">
                    <div slot="summary">
                      <div class="gv-list-view-title">
                        <h3 class="cxl-job-company-logo gv-field-1-26">
                          <img
                            src="https://jobs.cxl.co/index.php?gf-download=2021%2F02%2Foperation.png&amp;form-id=1&amp;field-id=26&amp;hash=5e88f92d8998a042cd9ad02fa2cf6b62a951ec6930a2625e4a6b6752ecb9ed71"
                            width="250"
                            alt="Company logo"
                            class="gv-image gv-field-id-26"
                          />
                        </h3>
                        <div id="gv-field-1-5" class="cxl-job-role gv-field-1-5">
                          <span class="gv-field-label">Operations</span>
                          <p>Developer</p>
                        </div>
                        <div id="gv-field-1-41" class="cxl-job-location gv-field-1-41">
                          <p>Vilnius, LT<br />Lithuania</p>
                        </div>
                        <div id="gv-field-1-7" class="cxl-job-type gv-field-1-7">
                          <p>Full-time remote</p>
                        </div>
                        <div
                          id="gv-field-1-date_created"
                          class="cxl-job-date-updated hidden md_block gv-field-1-date_created"
                        >
                          <p>4 weeks ago</p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container hidden gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- slot="summary" -->
                    <div class="gv-grid gv-list-view-content">
                      <div class="gv-grid-col-2-3 gv-list-view-content-description">
                        <div id="gv-field-1-11" class="cxl-job-description gv-field-1-11">
                          <p>
                            About Us: We are an established rapidly growing SaaS company solving
                            complex issues for dealers to simplify their lives. We are looking for a
                            Junior - Mid level PHP developer who is passionate and motived to join
                            our team.
                          </p>
                          <p>
                            About You:. You bring 5+ years of experience as a software developer
                            with a proven track record of building SaaS web applications with
                            complex logic Strong knowledge of modern web frameworks and
                            technologies, for example: JavaScript/Angular PHP/Symfony/Laravel/Zend
                            Familiarity with Redis, MySQL, ElasticSearch Experience in end to end
                            development from server setup to deployment (Linux, Docker)a plus
                            Curiosity and an interest in continuously developing yourself and adding
                            new technologies to your knowledge base If you have a degree in maths,
                            physics or computer science we consider this a plus.
                          </p>
                          <p>
                            Competitive pay based on experience / Remote ok / Must be North America
                            based or willing to work North American business hours. Base plus
                            ability to make bonus | Posted by: OperateBeyond.com
                          </p>
                        </div>
                        <div
                          id="gv-field-1-custom"
                          class="cxl-apply-for-job-container gv-field-1-custom"
                        >
                          <p>
                            <vaadin-button
                              theme="primary cxl-apply-for-job"
                              onclick="window.location.href='www.google.com'"
                              style="cursor: pointer;"
                              role="button"
                              tabindex="0"
                            >
                              Apply now
                            </vaadin-button>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="gv-grid gv-list-view-footer">
                      <div class="gv-grid-col-1-2 gv-left">
                        <div
                          id="gv-field-1-edit_link"
                          class="cxl-job-edit-entry gv-field-1-edit_link"
                        >
                          <a href="https://jobs.cxl.co/entry/9/?edit=fd845d1980&amp;gvid=102"
                            >Edit Entry</a
                          >
                        </div>
                      </div>

                      <div class="gv-grid-col-1-2 gv-right">
                        <div id="gv-field-1-52" class="cxl-job-expiry-date gv-field-1-52">
                          <span class="gv-field-label">Expires in</span>24 hours
                        </div>
                        <div id="gv-field-1-entry_link" class="gv-field-1-entry_link">
                          <a href="https://jobs.cxl.co/entry/9/">
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
              <div class="gv-grid-col-1-2 gv-right">
                <div class="gv-widget-page-links">
                  <span aria-current="page" class="page-numbers current">1</span>
                  <a class="page-numbers" href="https://jobs.cxl.co?pagenum=2">2</a>
                  <a class="next page-numbers" href="https://jobs.cxl.co?pagenum=2">Next →</a>
                </div>
              </div>
            </div>

            <input type="hidden" class="gravityview-view-id" value="102" />
          </div>
        </article>
      </main>
    </div>
    <footer class="app-footer overflow-y-hidden font-secondary text-base">
      <div class="app-footer__meta py-4 px-8 border-0 border-t border-solid"></div>
    </footer>
  </cxl-app-layout>
`;
