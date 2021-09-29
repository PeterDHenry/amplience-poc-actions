import { Meta, Story } from '@storybook/react'
import { PushPanel as Component } from './PushPanel'
import { defaultPanelProps, PushPanelProps } from '../PushPanel/types'

const meta: Meta = {
  title: 'CMS Content/PushPanel',
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
    cssClass: {
      options: ['col-lg-12', 'col-lg-6', 'col-lg-3'],
      control: { type: 'select' },
    },
  },
}

export default meta

type StoryProps = PushPanelProps

export const PushPanel: Story<StoryProps> = (props) => (
  <div className="container">
    <div className="row">
      <div className={`stack-${props.mobileStack} ${props.cssClass}`}>
        <Component {...props} />
      </div>
    </div>
  </div>
)

PushPanel.args = defaultPanelProps
