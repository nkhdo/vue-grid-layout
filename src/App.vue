<template>
  <div id="app">
    <grid-layout :padding="10" :columns="12">
      <grid-item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h">
        {{ item.id }}
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
  data() {
    return {
      items: [
        {
          id: 'item-1',
          x: 0,
          y: 0,
          w: 6,
          h: 4,
        },
        {
          id: 'item-2',
          x: 6,
          y: 0,
          w: 3,
          h: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>
