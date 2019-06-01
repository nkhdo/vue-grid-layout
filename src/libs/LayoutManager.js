import maxBy from 'lodash/maxBy';

export default class LayoutManager {
  constructor(vm, options) {
    this.vm = vm;
    this.columns = options.columns;
    this.padding = options.padding;
    this.items = [];
  }

  addItem({
    id, x, y, w, h,
  }) {
    // to-do: validate
    return this.items.push({
      id,
      x,
      y,
      w,
      h,
    });
  }

  removeItem({ id }) {
    const idx = this.items.findIndex(i => i.id === id);
    return this.items.splice(idx, 1);
  }

  get maxY() {
    const item = maxBy(this.items, i => i.y + i.h);
    if (item) {
      return item.y + item.h;
    }
    return 0;
  }
}
