import React from 'react'

import { Carousel } from '../Carousel/Carousel'
import { PushPanelRow } from '../PushPanel/PushPanelRow'
import LinkBanner from '../LinkBanner/LinkBanner'
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'
import SeoText from '../Seo-Text/SeoText'

export interface DynamicPageComponentSelectorProps {
  slot: { slotContent: any[] }
}

export default function DynamicPageComponentSelector({
  slot,
}: DynamicPageComponentSelectorProps) {
  return (
    <>
      {slot.slotContent.map((component) => {
        let ComponentType: any = null
        switch (component._meta.schema) {
          case 'https://wiggle.com/full-width-banner':
            ComponentType = FullWidthBanner
            break
          case 'https://wiggle.com/hero-banner-carousel':
            ComponentType = Carousel
            break
          case 'https://wiggle.com/push-panel-list':
            ComponentType = PushPanelRow
            break
          case 'https://wiggle.com/link-banner':
            ComponentType = LinkBanner
            break
          case 'https://wiggle.com/seo-text':
            ComponentType = SeoText
            break
        }
        if (ComponentType != null) {
          return (
            <ComponentType {...component} key={component._meta.deliveryId} />
          )
        }
      })}
    </>
  )
}
