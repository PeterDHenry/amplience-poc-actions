import Head from 'next/head'

//import { fetchContentById } from '../utils/fetchContent'
import { fetchContent } from '../utils/fetchContent'
import { NextPageContext } from 'next'

import { HeroProps } from '../components/Hero/Hero'
import Carousel from '../components/Carousel/Carousel'
import FullWidthBanner, {
  FullWidthBannerProps,
} from '../components/FullWidthBanner/FullWidthBanner'
import PushPanelRow from '../components/PushPanel/ThreePushPanel'
import TwoPushPanel from '../components/PushPanel/TwoPushPanel'
import { PushPanelProps } from '../components/PushPanel/types'

import LinkBanner from '../components/LinkBanner/LinkBanner'
import { LinkBannerProps } from '../components/LinkBanner/types'

export interface IndexProps {
  heroBannerList: HeroProps[]
  pushPanelList: PushPanelProps[]
  twoPushPanel: PushPanelProps[]
  fullWidthBanner: FullWidthBannerProps
  linkBanner: LinkBannerProps
}

export const Home = ({
  heroBannerList,
  pushPanelList,
  twoPushPanel,
  fullWidthBanner,
  linkBanner,
}: IndexProps): JSX.Element => (
  <>
    <Head>
      <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel heroBannerList={heroBannerList} />
    <FullWidthBanner {...fullWidthBanner} />
    <LinkBanner {...linkBanner}/>
    <PushPanelRow pushPanelList={pushPanelList} />
    <TwoPushPanel pushPanelList={twoPushPanel} />
  </>
)

export const getServerSideProps = async (context: NextPageContext) => {
  const slot = fetchContent('homepage-content-slot', context)
  // const slot = fetchContentById(
  //   '5c433abb-4ec7-4050-a1eb-723ef166d5e8',
  //   context
  // )
  const homeSlot = await slot

  const heroBannerList = homeSlot.slotContent[0].heroBannerList
  const pushPanelList = homeSlot.slotContent[1].pushPanelList
  const fullWidthBanner = homeSlot.slotContent[2]
  const twoPushPanel = homeSlot.slotContent[3].pushPanelList
  const linkBanner = homeSlot.slotContent[4]

  return {
    props: {
      heroBannerList,
      pushPanelList,
      fullWidthBanner,
      twoPushPanel,
      linkBanner
    },
  }
}

export default Home
