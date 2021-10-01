import { Meta, Story } from '@storybook/react'
import { Carousel as Component } from './Carousel'
import { defaultProps, CarouselProps } from './types'

const meta: Meta = {
  title: 'CMS Content',
  component: Component,
  argTypes: {},
}

export default meta

type StoryProps = CarouselProps

export const Carousel: Story<StoryProps> = (props) => <Component {...props} />

Carousel.args = defaultProps
