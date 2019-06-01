<template>
  <div class="v-grid-item">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'GridItem',
};
</script>

<style lang="scss" scoped>
.v-grid-item {
  position: absolute;
}
</style>
