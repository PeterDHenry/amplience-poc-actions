export interface PushPanelProps {
  height: number
  width: number
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  mainImg: { name: string }
  color: string
  fontWeight: number
  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline: string
  }
}

export interface PushPanelListProps {
  pushPanelList: PushPanelProps[]
  stackMobileLayout?: boolean
}
