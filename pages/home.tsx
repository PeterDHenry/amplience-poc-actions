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

export interface IndexProps {
    homeSlot: []
}

export const Home = ({homeSlot}: IndexProps): JSX.Element => (
  <>
    <Head>
      <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
  </>
)

export const getServerSideProps = async (context: NextPageContext) => {
  const slot = fetchContent('homepage-content-slot', context)
  // const slot = fetchContentById(
  //   '5c433abb-4ec7-4050-a1eb-723ef166d5e8',
  //   context
  // )
  const homeSlot = await slot

  return {
    props: {
        homeSlot
    },
  }
}

export default Home
