import { shallowMount } from '@vue/test-utils'
import AppButton from '@/components/AppButton.vue'

describe('AppButton.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(AppButton)
    expect(wrapper.text()).toMatch('Submit')
  })
})
