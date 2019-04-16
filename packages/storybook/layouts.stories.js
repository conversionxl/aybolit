import '@conversionxl/cxl-components/src/components/cxl-marketing-layout';
import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
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

    return html`
      <cxl-marketing-layout>
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
