import Head from 'next/head'
import { NextPageContext } from 'next'

//import { fetchContentById } from '../utils/fetchContent'
import { fetchContent } from '../utils/fetchContent'

import Carousel from '../components/Carousel/Carousel'
import ThreePushPanel from '../components/PushPanel/ThreePushPanel'
import TwoPushPanel from '../components/PushPanel/TwoPushPanel'
import LinkBanner from '../components/LinkBanner/LinkBanner'
import FullWidthBanner from '../components/FullWidthBanner/FullWidthBanner'
//import { PushPanelProps } from '../components/PushPanel/types'
//import  { FullWidthBannerProps } from '../components/FullWidthBanner/FullWidthBanner'
//import { HeroProps } from '../components/Hero/Hero'

export interface IndexProps {
  homeSlot: {slotContent: any[]}
}

export const Home = ({homeSlot}: IndexProps): JSX.Element => {
  let defaultSlotContent = {
    components: [
      {
          description: 'No Page Slot with content for delivery key "slots/homepage-hero"',
          component: 'EditorialBlock',
          title: 'Error loading content'
      }]
    }

  return(
    <>
      <Head>
      <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {homeSlot.slotContent.map(component => {
        switch (component._meta.name) {
          case 'Full width banner':
            return <FullWidthBanner {...component} />;
            break;
          case 'Homepage hero banner carousel':
            return  <Carousel heroBannerList={component.heroBannerList} />
            break;
          case 'Homepage Push Panel List':
            return  <ThreePushPanel pushPanelList={component.pushPanelList} />
            break;
          case 'Two Push Panel List':
            return  <TwoPushPanel pushPanelList={component.pushPanelList} />
            break;
          case 'Wiggle+ Banner':
            return  <LinkBanner {...component}/>
          break;
        }
      })
    }
    </>
  )
}

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
