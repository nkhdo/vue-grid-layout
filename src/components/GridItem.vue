<template>
  <div class="v-grid-item" :style="itemStyle">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    w: {
      type: Number,
      required: true,
    },
    h: {
      type: Number,
      required: true,
    },
  },
  computed: {
    itemStyle() {
      const { blockSize, padding } = this.$parent;
      return {
        top: `${this.y * (blockSize + padding) + padding}px`,
        left: `${this.x * (blockSize + padding) + padding}px`,
        width: `${this.w * (blockSize + padding) - padding}px`,
        height: `${this.h * (blockSize + padding) - padding}px`,
      };
    },
  },
  created() {
    this.$parent.addItem(this);
  },
  beforeDestroy() {
    this.$parent.removeItem(this);
  },
};
</script>

<style lang="scss" scoped>
.v-grid-item {
  position: absolute;
  background-color: #ffffff;
}
</style>
