import { Meta, Story } from '@storybook/react'
import { HeroImage as Component } from './HeroImage'

const meta: Meta = {
  title: 'Base Components/Images',
  component: Component,
  argTypes: {},
}

export default meta

export const HeroImage: Story = () => <Component id={'homepage-h-d'} />
