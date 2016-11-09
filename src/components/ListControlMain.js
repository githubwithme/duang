def((ListControlFilters, ListControlCaption) => class extends Jinkela {
  get styleSheet() {
    return `
      :scope {
        text-align: left;
        flex: 1;
      }
    `;
  }
  init() {
    let { scheme } = depot;
    let { caption, captionType } = scheme;
    if (captionType === 'control' && caption) new ListControlCaption().to(this);
    new ListControlFilters().to(this);
  }
});
