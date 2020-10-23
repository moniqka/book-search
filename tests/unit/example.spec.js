import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import BooksSearchComponent from "@/components/BooksSearchComponent.vue";

describe("BooksSearchComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(BooksSearchComponent, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
