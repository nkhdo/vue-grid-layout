<template>
  <div class="v-grid-layout">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'GridLayout',
};
</script>

<style lang="scss" scoped>
.v-grid-layout {
  position: relative;
}
</style>
