export interface PushPanelProps {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  mainImg: { name: string }
  calltoactiontext: string
  linkURL: string
  color: string
  fontWeight: number
  headerText: string
  subText: string
}

export interface PushPanelListProps {
  pushPanelList: PushPanelProps[]
  stackMobileLayout?: boolean
}
