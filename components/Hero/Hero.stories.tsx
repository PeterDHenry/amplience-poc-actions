import { Meta, Story } from '@storybook/react'
import { Hero as Component } from './Hero'
import { HeroProps, defaultProps } from './types'

const meta: Meta = {
  title: 'CMS Content/Banners',
  component: Component,
  argTypes: {
    color: {
      options: [
        'black',
        'white',
        'red-500',
        'green-500',
        'yellow-500',
        'blue-500',
      ],
      control: { type: 'select' },
    },
    contrastColor: {
      options: [
        'black',
        'white',
        'red-500',
        'green-500',
        'yellow-500',
        'blue-500',
      ],
      control: { type: 'select' },
    },
  },
}

export default meta

type StoryProps = HeroProps

export const Hero: Story<StoryProps> = (props) => <Component {...props} />
Hero.args = defaultProps
