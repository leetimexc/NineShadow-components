import type { Plugin } from 'vue'
import { describe, expect, it } from 'vitest'
import { XcAlert,XcButton,XcButtonGroup,XcCollapse,XcCollapseItem,XcIcon,XcTooltip } from '..'
import { map,get } from 'lodash-es'

const comps = [
  XcAlert,
  XcButton,
  XcButtonGroup,
  XcCollapse,
  XcCollapseItem,
  XcIcon,
  XcTooltip,
] as Plugin[]

describe('components/index', () => {
 it.each(map(comps, (c) => [get(c, 'name')??'', c]))('%s should be exported',(_,component)=>{
  expect(component).toBeDefined()
  expect(component.install).toBeDefined()
 })
})