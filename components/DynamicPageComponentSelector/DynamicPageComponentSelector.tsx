import React from 'react'

import Carousel from '../Carousel/Carousel'
import ThreePushPanel from '../PushPanel/ThreePushPanel'
import TwoPushPanel from '../PushPanel/TwoPushPanel'
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
            let ComponentType: any = null;
            switch (component._meta.name) {
            case 'Full width banner':
                ComponentType = FullWidthBanner
                break
            case 'Homepage hero banner carousel':
                ComponentType = Carousel
                break
            case 'Homepage Push Panel List':
                ComponentType = ThreePushPanel
                break
            case 'Two Push Panel List':
                ComponentType = TwoPushPanel
                break
            case 'Wiggle+ Banner':
                ComponentType = LinkBanner
                break
            case 'SEO Text':
                ComponentType = SeoText
                break
            }
            if (ComponentType != null){
                return <ComponentType {...component} key={component._meta.deliveryId} />
            }
        })}
        </>
    )
}
