import Head from 'next/head'

//import { fetchContentById } from '../utils/fetchContent'
import { fetchContent } from '../utils/fetchContent'
import { NextPageContext } from 'next'


import  { HeroProps } from '../components/Hero/Hero'
import Carousel from '../components/Carousel/Carousel'
import PushPanelAll from '../components/PushPanel/PushPanelRow'
import  { PushPanelProps } from '../components/PushPanel/PushPanel'
import { FullWidthBannerProps } from '../components/FullWidthBanner/FullWidthBanner'
import FullWidthBanner from '../components/FullWidthBanner/FullWidthBanner'

export interface IndexProps {
  heroBannerList: HeroProps[],
  pushPanelList: PushPanelProps[],
  fullWidthBanner: FullWidthBannerProps[]
}

export const Home = ({ heroBannerList, pushPanelList, fullWidthBanner }: IndexProps): JSX.Element => (
  <>
    <Head>
      <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel heroBannerList={heroBannerList} />
    <PushPanelAll pushPanelList={pushPanelList} />
    <FullWidthBanner fullWidthBanner={ fullWidthBanner } />
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

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/5c433abb-4ec7-4050-a1eb-723ef166d5e8?depth=all&format=inlined'
  )
  const homeSlot = await res.json()

  const heroBannerList = homeSlot.content.slotContent[0].heroBannerList
  const pushPanelList = homeSlot.content.slotContent[1].pushPanelList
  const fullWidthBanner = homeSlot.content.slotContent[2]
  console.log( fullWidthBanner.linkValue );
  return {
    props: {
      heroBannerList,
      pushPanelList,
      fullWidthBanner
    },
  }
}

export default Home
}
