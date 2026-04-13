import { html } from 'lit';
import '@conversionxl/cxl-ui/src/components/cxl-section.js';
import '@conversionxl/cxl-ui/src/components/cxl-vaadin-accordion.js';
import '@conversionxl/cxl-ui/src/components/cxl-course-card.js';
import '@conversionxl/cxl-ui/src/components/cxl-save-favorite.js';
import archiveData from './theme=cxl-archive.data.json';
import { CourseCardTemplate } from '../cxl-course-card/template';

const CourseCardStory = CourseCardTemplate.bind({});

export const CXLVaadinAccordionThemeCourses = () => {
  let lastEntryTitle1stLetter = 'Z';

  const firstLetterHeading = (el) => {
    const firstLetter = el.title.raw.charAt(0);
    let heading = html``;

    if (firstLetter !== lastEntryTitle1stLetter) {
      heading = html`<h3 id="letter-${firstLetter}">${firstLetter}</h3>`;
      lastEntryTitle1stLetter = firstLetter;
    }

    return heading;
  };

  return html`
    <style>
      body {
        background-color: var(--lumo-shade-5pct);
      }
      cxl-vaadin-accordion[theme='cxl-accordion-card'] {
        display: grid;
        grid-gap: var(--lumo-space-m);
        grid-template-columns: repeat(
          auto-fill,
          minmax(calc(var(--cxl-content-max-width-wide) / 4), 1fr)
        );
      }

      :host(.alignwide) > .wrap {
        max-width: var(--cxl-content-max-width-wide);
      }
      .wrap {
        position: relative;
        padding-right: var(--cxl-wrap-padding, none);
        padding-left: var(--cxl-wrap-padding, none);
        margin-right: auto;
        margin-left: auto;
        max-width: var(--cxl-content-max-width);
        margin-top: var(--cxl-section-wrap-margin-top, var(--lumo-space-xl));
        margin-bottom: var(--cxl-section-wrap-margin-bottom, var(--lumo-space-xl));
      }
      .plural .entry-title {
        margin: 0;
      }
      .entry-title a {
        color: inherit;
      }
      .entry-header {
        position: relative;
      }
      cxl-save-favorite {
        position: absolute;
        top: 0;
        right: 0;
      }
    </style>
    <cxl-section class="alignwide">
      <cxl-vaadin-accordion
        id="cxl-vaadin-accordion-26107"
        class="archive archive-certificate plural"
        theme="cxl-accordion-card"
      >
        ${archiveData.map(
          (el) => html`
            ${firstLetterHeading(el)}
            ${CourseCardStory({
              id: el.cxl_hybrid_attr_post['@attributes'].id,
              classes: el.cxl_hybrid_attr_post['@attributes'].class,
              name: el.title.raw,
              time: el.conversionxl_live_course_duration,
              instructor: el.conversionxl_certificate_instructor,
              avatar: el.cxl_featured_media.shop_catalog,
              ctaUrl: el.conversionxl_certificate_sales_page,
              theme: el.cxl_hybrid_attr_post['@attributes'].class.includes(
                'category-minidegree-programs'
              )
                ? 'minidegree'
                : 'course',
              description: String(el.content.cxl_get_extended_main || ''),
            })}
          `
        )}
      </cxl-vaadin-accordion>
    </cxl-section>
  `;
};
