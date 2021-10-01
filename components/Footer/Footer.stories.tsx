import { Meta, Story } from '@storybook/react'
import { Footer as Component } from './Footer'

const meta: Meta = {
  title: 'Layout/Checkout',
  component: Component,
  argTypes: {},
}

export default meta

export const Footer: Story = () => <Component />
