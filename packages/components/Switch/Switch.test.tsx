import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Switch from "./Switch.vue";

describe("Switch.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(Switch);
    expect(wrapper.find(".xc-switch")).toBeTruthy();
  });
  it("should handle click event and toggle the checked state", async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual([true]);
    expect(wrapper.emitted()["change"][0]).toEqual([true]);

    await wrapper.trigger("click");
    expect(wrapper.emitted()["update:modelValue"][1]).toEqual([false]);
    expect(wrapper.emitted()["change"][1]).toEqual([false]);
  });

  it("should not toggle when disabled", async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("update:modelValue");
    expect(wrapper.emitted()).not.toHaveProperty("change");
  });
});