import { Meta, Story } from '@storybook/react'
import { SeoText as Component } from './SeoText'
import { defaultSeoTextProps, SeoTextProps } from './types'

const meta: Meta = {
  title: 'CMS Content/SeoText',
  component: Component,
  argTypes: {
    mainText: {
      control: { type: 'text' },
    },
  },
}

export default meta

type StoryProps = SeoTextProps

export const SeoText: Story<StoryProps> = (props) => <Component {...props} />

SeoText.args = defaultSeoTextProps
