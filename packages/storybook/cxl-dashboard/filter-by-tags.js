const filterByTags = (playbooksData) => {
  /**
   * @type Array
   */
  const elements = Array.from(document.querySelectorAll('#selected-tags vaadin-button[selected]'));

  if (elements && elements.length) {
    const tags = elements.map((el) => el.getAttribute('tag-name'));

    return playbooksData.filter((data) => {
      let hasTag = false;

      tags.forEach((tag) => {
        if (data.cxl_tags && data.cxl_tags.indexOf(tag) !== -1) {
          hasTag = true;
        }
      });

      return hasTag;
    });
  }

  return playbooksData;
};

export default filterByTags;
