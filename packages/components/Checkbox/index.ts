import Checkbox from "./Checkbox.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import CheckboxButton from "./CheckboxButton.vue";
import { withInstall } from "@shadow-ui/utils";

export const NsCheckbox = withInstall(Checkbox);
export const NsCheckboxGroup = withInstall(CheckboxGroup);
export const NsCheckboxButton = withInstall(CheckboxButton);

export * from "./types";
