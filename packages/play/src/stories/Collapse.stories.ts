import type { Meta, StoryObj } from '@storybook/vue3'
import { XcCollapse, XcCollapseItem } from 'xc-element'
import 'xc-element/dist/theme/Collapse.css'

type Story = StoryObj<typeof XcCollapse>

const meta: Meta<typeof XcCollapse> = {
  title: 'Example/Collapse',
  component: XcCollapse,
  subcomponents: { XcCollapseItem },
  tags: ['autodocs'],
}

export const Default: Story = {
  render: (args) => ({
    components: {
      XcCollapse,
      XcCollapseItem,
    },
    setup() {
      return {
        args,
      }
    },
    template: `
    <xc-collapse v-bind="args">
      <xc-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </xc-collapse-item>
      <xc-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </xc-collapse-item>
      <xc-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </xc-collapse-item>
    </xc-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ['a'],
  },
}

export default meta
