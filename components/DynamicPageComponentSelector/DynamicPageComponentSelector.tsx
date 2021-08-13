import React from 'react'

import Carousel from '../Carousel/Carousel'
import ThreePushPanel from '../PushPanel/ThreePushPanel'
import TwoPushPanel from '../PushPanel/TwoPushPanel'
import LinkBanner from '../LinkBanner/LinkBanner'
import FullWidthBanner from '../FullWidthBanner/FullWidthBanner'

export interface DynamicPageComponentSelectorProps {
  slot: { slotContent: any[] }
}

export default function DynamicPageComponentSelector({
  slot,
}: DynamicPageComponentSelectorProps) {
  return (
    <>
      {slot.slotContent.map((component) => {
        switch (component._meta.name) {
          case 'Full width banner':
            return (
              <FullWidthBanner
                {...component}
                key={component._meta.deliveryId}
              />
            )
            break
          case 'Homepage hero banner carousel':
            return (
              <Carousel
                heroBannerList={component.heroBannerList}
                key={component._meta.deliveryId}
              />
            )
            break
          case 'Homepage Push Panel List':
            return (
              <ThreePushPanel
                pushPanelList={component.pushPanelList}
                key={component._meta.deliveryId}
              />
            )
            break
          case 'Two Push Panel List':
            return (
              <TwoPushPanel
                pushPanelList={component.pushPanelList}
                key={component._meta.deliveryId}
              />
            )
            break
          case 'Wiggle+ Banner':
            return (
              <LinkBanner {...component} key={component._meta.deliveryId} />
            )
            break
        }
      })}
    </>
  )
}
