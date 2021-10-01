import { Meta, Story } from '@storybook/react'
import { Header as Component } from './Header'

const meta: Meta = {
  title: 'Layout/Checkout',
  component: Component,
  argTypes: {},
}

export default meta

export const Header: Story = () => <Component />
