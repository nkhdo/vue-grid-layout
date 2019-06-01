import { shallowMount } from '@vue/test-utils';
import GridLayout from '@/components/GridLayout.vue';

describe('GridLayout.vue', () => {
  it('is a Vue component', () => {
    const wrapper = shallowMount(GridLayout);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
