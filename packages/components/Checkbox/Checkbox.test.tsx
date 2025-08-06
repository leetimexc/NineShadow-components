import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Checkbox from "./Checkbox.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import CheckboxButton from "./CheckboxButton.vue";

describe("Checkbox.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.find(".ns-checkbox")).toBeTruthy();
  });

  it("should handle click event and toggle the checked state", async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
      },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted()["update:modelValue"][0]).toEqual([true]);
    expect(wrapper.emitted()["change"][0]).toEqual([true]);

    await wrapper.setProps({ modelValue: true });
    await wrapper.trigger("click");
    expect(wrapper.emitted()["update:modelValue"][1]).toEqual([false]);
    expect(wrapper.emitted()["change"][1]).toEqual([false]);
  });

  it("should not toggle when disabled", async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        disabled: true,
      },
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("update:modelValue");
    expect(wrapper.emitted()).not.toHaveProperty("change");
  });

  it("should render label correctly", () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: "测试标签",
      },
    });
    expect(wrapper.find(".ns-checkbox__label").text()).toBe("测试标签");
  });

  it("should use slot content when provided", () => {
    const wrapper = mount(Checkbox, {
      slots: {
        default: "自定义内容",
      },
    });
    expect(wrapper.find(".ns-checkbox__label").text()).toBe("自定义内容");
  });

  it("should apply indeterminate state correctly", () => {
    const wrapper = mount(Checkbox, {
      props: {
        indeterminate: true,
      },
    });
    expect(wrapper.classes()).toContain("is-indeterminate");
  });

  it("should apply border style when border prop is true", () => {
    const wrapper = mount(Checkbox, {
      props: {
        border: true,
      },
    });
    expect(wrapper.classes()).toContain("is-bordered");
  });

  it("should apply size class when size prop is provided", () => {
    const wrapper = mount(Checkbox, {
      props: {
        size: "large",
      },
    });
    expect(wrapper.classes()).toContain("ns-checkbox--large");
  });
});

describe("CheckboxGroup.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
      },
    });
    expect(wrapper.find(".ns-checkbox-group")).toBeTruthy();
  });

  it("should handle checkbox selection in group", async () => {
    const wrapper = mount({
      components: { CheckboxGroup, Checkbox },
      template: `
        <checkbox-group v-model="checkList">
          <checkbox label="选项A"></checkbox>
          <checkbox label="选项B"></checkbox>
        </checkbox-group>
      `,
      data() {
        return {
          checkList: [],
        };
      },
    });

    const checkboxes = wrapper.findAllComponents(Checkbox);
    await checkboxes[0].trigger("click");
    expect(wrapper.vm.checkList).toEqual(["选项A"]);

    await checkboxes[1].trigger("click");
    expect(wrapper.vm.checkList).toEqual(["选项A", "选项B"]);

    await checkboxes[0].trigger("click");
    expect(wrapper.vm.checkList).toEqual(["选项B"]);
  });

  it("should respect min and max limits", async () => {
    const wrapper = mount({
      components: { CheckboxGroup, Checkbox },
      template: `
        <checkbox-group v-model="checkList" :min="1" :max="2">
          <checkbox label="A"></checkbox>
          <checkbox label="B"></checkbox>
          <checkbox label="C"></checkbox>
        </checkbox-group>
      `,
      data() {
        return {
          checkList: ["A"],
        };
      },
    });

    const checkboxes = wrapper.findAllComponents(Checkbox);

    // 尝试取消唯一选中的项（应该失败，因为min=1）
    await checkboxes[0].trigger("click");
    expect(wrapper.vm.checkList).toEqual(["A"]); // 仍然保持选中状态

    // 选中第二个选项
    await checkboxes[1].trigger("click");
    expect(wrapper.vm.checkList).toEqual(["A", "B"]);

    // 尝试选中第三个选项（应该失败，因为max=2）
    await checkboxes[2].trigger("click");
    expect(wrapper.vm.checkList).toEqual(["A", "B"]); // 仍然只有两个选中
  });
});

describe("CheckboxButton.vue", () => {
  it("should render correctly", () => {
    const wrapper = mount(CheckboxButton);
    expect(wrapper.find(".ns-checkbox-button")).toBeTruthy();
  });

  it("should handle checkbox button selection in group", async () => {
    const wrapper = mount({
      components: { CheckboxGroup, CheckboxButton },
      template: `
        <checkbox-group v-model="checkList">
          <checkbox-button label="选项A"></checkbox-button>
          <checkbox-button label="选项B"></checkbox-button>
        </checkbox-group>
      `,
      data() {
        return {
          checkList: [],
        };
      },
    });

    const buttons = wrapper.findAllComponents(CheckboxButton);
    await buttons[0].trigger("change");
    expect(wrapper.vm.checkList).toEqual(["选项A"]);

    await buttons[1].trigger("change");
    expect(wrapper.vm.checkList).toEqual(["选项A", "选项B"]);

    await buttons[0].trigger("change");
    expect(wrapper.vm.checkList).toEqual(["选项B"]);
  });

  it("should apply custom styles when checked in group", async () => {
    const wrapper = mount({
      components: { CheckboxGroup, CheckboxButton },
      template: `
        <checkbox-group v-model="checkList" fill="#ff0000" text-color="#ffffff">
          <checkbox-button label="选项A"></checkbox-button>
        </checkbox-group>
      `,
      data() {
        return {
          checkList: ["选项A"],
        };
      },
    });

    const button = wrapper.findComponent(CheckboxButton);
    expect(button.attributes("style")).toContain("background-color: #ff0000");
    expect(button.attributes("style")).toContain("color: #ffffff");
  });
});
