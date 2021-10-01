import { Meta, Story } from '@storybook/react'
import { LazyLoadImage as Component } from './LazyLoadImage'

const meta: Meta = {
  title: 'Base Components/Images',
  component: Component,
  argTypes: {},
}

export default meta

export const LazyLoadImage: Story = () => <Component id={'homepageh1d'} />
