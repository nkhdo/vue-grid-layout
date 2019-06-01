<template>
  <div id="app">
    <grid-layout>
      <grid-item>
        This is an item
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import GridLayout from './components/GridLayout.vue';
import GridItem from './components/GridItem.vue';

export default {
  name: 'App',
  components: {
    GridLayout,
    GridItem,
  },
};
</script>

<style lang="scss">
</style>
