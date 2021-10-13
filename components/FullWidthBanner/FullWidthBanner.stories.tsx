import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FullWidthBanner } from './FullWidthBanner'
import { FullWidthBannerProps } from './types'

export default {
  title: 'CMS Content/Banners',
  component: FullWidthBanner,
} as Meta

export const fullWidthBanner: Story<FullWidthBannerProps> = (props) => (
  <FullWidthBanner {...props} />
)
