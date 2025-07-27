import type { StoryObj, Meta } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { XcTooltip } from 'xc-element'
import 'xc-element/dist/theme/Tooltip.css'

type Story = StoryObj<typeof XcTooltip>

const meta: Meta<typeof XcTooltip> = {
  title: 'Example/Tooltip',
  component: XcTooltip,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      options: ['hover', 'click', 'contextmenu'],
      control: { type: 'select' },
    },
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
  },
  args: {
    'onVisible-change': fn(),
  },
}

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    trigger: 'hover',
  },
  render: (args) => ({
    components: { XcTooltip },
    setup() {
      return { args }
    },
    template: `
    <XcTooltip v-bind="args">
      <div style="height:30px; width: 200px; background: red; padding:auto;">trigger</div>
    </XcTooltip>
    `,
  }),
}

export default meta
