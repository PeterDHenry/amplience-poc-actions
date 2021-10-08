import { Meta, Story } from '@storybook/react'
import { LinkBanner as Component } from './LinkBanner'
import { defaultLinkBannerProps, LinkBannerProps } from './types'

const meta: Meta = {
  title: 'CMS Content/LinkBanner',
  component: Component,
  argTypes: {
    backgroundColour: {
      options: ['#F7F7F7', '#DBDBDB', '#9E9E9E'],
      control: { type: 'select' },
    },
    fontColour: {
      options: ['#3C3C3B', '#595959', '#363636', '#2E2E2E'],
      control: { type: 'select' },
    },
  },
}

export default meta

type StoryProps = LinkBannerProps

export const LinkBanner: Story<StoryProps> = (props) => <Component {...props} />

LinkBanner.args = defaultLinkBannerProps
