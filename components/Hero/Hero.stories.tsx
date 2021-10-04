import { Meta, Story } from '@storybook/react'
import { Hero as Component } from './Hero'
import { HeroProps, defaultProps } from './types'

const meta: Meta = {
  title: 'CMS Content/Banners',
  component: Component,
  argTypes: {
    textColour: {
      control: 'color',
    },
    contrastColour: {
      control: 'color',
    },
  },
}

export default meta

type StoryProps = HeroProps

export const Hero: Story<StoryProps> = (props) => <Component {...props} />
Hero.args = defaultProps

//TODO add pallete
