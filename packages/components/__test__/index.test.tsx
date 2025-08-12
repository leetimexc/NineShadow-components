import type { Plugin } from "vue";
import { describe, expect, it } from "vitest";
import {
  NsAlert,
  NsButton,
  NsButtonGroup,
  NsCollapse,
  NsCollapseItem,
  NsIcon,
  NsTooltip,
} from "..";
import { map, get } from "lodash-es";

const comps = [
  NsAlert,
  NsButton,
  NsButtonGroup,
  NsCollapse,
  NsCollapseItem,
  NsIcon,
  NsTooltip,
] as Plugin[];

describe("components/index", () => {
  it.each(map(comps, (c) => [get(c, "name") ?? "", c]))(
    "%s should be exported",
    (_, component) => {
      expect(component).toBeDefined();
      expect(component.install).toBeDefined();
    }
  );
});
