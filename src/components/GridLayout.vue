<template>
  <div class="v-grid-layout" :style="{ height: `${gridHeight}px` }">
    <div class="v-resize-listener" ref="rl"></div>
    <slot/>
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import LayoutManager from '@/libs/LayoutManager';
import erd from '@/utils/elementResizeDetector';

export default {
  name: 'GridLayout',
  props: {
    columns: {
      type: Number,
      default: 12,
    },
    padding: {
      type: Number,
      default: 5,
    },
    showGrid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      blockSize: null,
      layoutManager: null,
    };
  },
  computed: {
    gridHeight() {
      const { maxY } = this.layoutManager;
      return (this.blockSize + this.padding) * maxY + this.padding;
    },
  },
  created() {
    this.layoutManager = new LayoutManager(this, {
      columns: this.columns,
      padding: this.padding,
    });
  },
  mounted() {
    this.calculateBlockSize();
    erd.listenTo(this.$refs.rl, debounce(this.calculateBlockSize.bind(this), 100));
  },
  beforeDestroy() {
    erd.removeAllListeners(this.$refs.rl);
  },
  methods: {
    calculateBlockSize() {
      const elWidth = this.$el.clientWidth;
      this.blockSize = (elWidth - this.padding) / this.columns - this.padding;
    },
    addItem(item) {
      return this.layoutManager.addItem(item);
    },
    removeItem(item) {
      return this.layoutManager.removeItem(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-grid-layout {
  position: relative;
  background-color: #f0f0f0;
  .v-resize-listener {
    width: 100%;
  }
}
</style>
