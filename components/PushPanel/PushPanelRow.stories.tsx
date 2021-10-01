import { Meta, Story } from '@storybook/react'
import { PushPanelRow as Component } from './PushPanelRow'
import { defaultPanelRowProps, PushPanelRowProps } from './types'

const meta: Meta = {
  title: 'CMS Content/PushPanels',
  component: Component,
  argTypes: {
    color: {
      options: ['black', 'white', 'red', 'green', 'yellow', 'cyan'],
      control: { type: 'select' },
    },
    fontWeight: {
      options: ['light', 'normal', 'bold'],
      control: { type: 'select' },
    },
    mobileStack: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
}

export default meta

type StoryProps = PushPanelRowProps

export const PushPanelRow: Story<StoryProps> = (props) => (
  <Component {...props} />
)

PushPanelRow.args = defaultPanelRowProps
