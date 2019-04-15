import '@conversionxl/cxl-components/src/components/cxl-marketing-layout';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-marketing-layout', () => {
    const banner_image = text(
      'Banner image',
      'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg'
    );
    const banner_title = text('Banner title', 'Conversion Optimization Minidegree Program');
    const banner_description = text(
      'Banner description',
      'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.'
    );
    const banner_link_label = text('Banner link label', 'Curriculum & enrollment info >');
    const banner_link_url = text('Banner link url', '#');

    const options = {
      topnav: 'topnav',
      bottomnav: 'bottomnav'
    };
    const navtype = select('Navigation position', options, null);

    return html`
      <cxl-marketing-layout>
        <cxl-navbar id="${navtype}" navtype="${navtype}">
          <!-- <cxl-logo></cxl-logo>
        <cxl-trainings-button onclick="open()">Courses</cxl-trainings-button>
        <cxl-search-button onclick="open()"></cxl-search-button>
        <cxl-burger-button onclick="open()"></cxl-burger-button> -->
          <nav class="menu menu--marketing-header">
            <h3 class="menu__title screen-reader-text">cxl-2019/marketing-header</h3>
            <ul class="menu__items nav-links">
              <li id="menu-item-1029882" class="menu__item ">
                <a href="https://conversionxli.warmpress.com/for-teams/" class="menu__link"
                  >For teams</a
                >
              </li>
              <li id="menu-item-1029883" class="menu__item has-children ">
                <a href="/blog/" class="menu__link">Blog</a>
                <ul class="menu__sub-menu">
                  <li id="menu-item-1030279" class="menu__item ">
                    <a href="#" class="menu__link">Blog home</a>
                  </li>
                  <li id="menu-item-1030280" class="menu__item ">
                    <a href="#" class="menu__link">Acquisition</a>
                  </li>
                  <li id="menu-item-1030281" class="menu__item ">
                    <a href="#" class="menu__link">Activation</a>
                  </li>
                </ul>
              </li>
              <li id="menu-item-1029884" class="menu__item ">
                <a href="https://conversionxli.warmpress.com/about/" class="menu__link">About</a>
              </li>
              <li id="menu-item-1029885" class="menu__item ">
                <a href="/agency/" class="menu__link">CRO Services</a>
              </li>
            </ul>
          </nav>

          <ul class="nav-links">
            <li><a href="/login">Login</a></li>
            <li>
              <vaadin-button theme="dark main-button transparent small" tabindex="0" role="button"
                >Get free trial</vaadin-button
              >
            </li>
          </ul>
        </cxl-navbar>

        <section>
          <div class="wrap">
            <h3 class="text-center">
              Get to an advanced level in 4 disciplines with our Minidegree programs
            </h3>
            <p class="text-center sub-title">
              Learn from the top data-driven marketing practitioners to become one.
            </p>
            <cxl-scrollit horizontal>
              <vaadin-horizontal-layout theme="spacing-xl justify layout-margin wide">
                <div class="block">
                  <cxl-banner-card
                    banner_image="${banner_image}"
                    banner_title="${banner_title}"
                    banner_description="${banner_description}"
                    banner_link_label="${banner_link_label}"
                    banner_link_url="${banner_link_url}"
                  >
                  </cxl-banner-card>
                </div>
                <div class="block">
                  <cxl-banner-card
                    banner_image="${banner_image}"
                    banner_title="${banner_title}"
                    banner_description="${banner_description}"
                    banner_link_label="${banner_link_label}"
                    banner_link_url="${banner_link_url}"
                  >
                  </cxl-banner-card>
                </div>
                <div class="block">
                  <cxl-banner-card
                    banner_image="${banner_image}"
                    banner_title="${banner_title}"
                    banner_description="${banner_description}"
                    banner_link_label="${banner_link_label}"
                    banner_link_url="${banner_link_url}"
                  >
                  </cxl-banner-card>
                </div>

                <div class="block">
                  <cxl-banner-card
                    banner_image="${banner_image}"
                    banner_title="${banner_title}"
                    banner_description="${banner_description}"
                    banner_link_label="${banner_link_label}"
                    banner_link_url="${banner_link_url}"
                  >
                  </cxl-banner-card>
                </div>
              </vaadin-horizontal-layout>
            </cxl-scrollit>
          </div>
        </section>
      </cxl-marketing-layout>
    `;
  });
