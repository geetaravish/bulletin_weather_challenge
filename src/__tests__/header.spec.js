import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import siteHeader from '../components/siteHeader.vue';


describe("siteHeader.vue", () => {
     it('renders correctly', () => {
        const wrapper = shallowMount(siteHeader)
        expect(wrapper.element).toMatchSnapshot()
    })
});