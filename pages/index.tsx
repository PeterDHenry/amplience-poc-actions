import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel'
import PushPanelAll from '../components/PushPanel/PushPanelRow'
//import { fetchContentById } from '../utils/fetchContent'
import { fetchContent } from '../utils/fetchContent'

export const Home = ({ heroBannerList, pushPanelList }): JSX.Element => (
  <>
    <Head>
      <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel heroBannerList={heroBannerList} />
    <PushPanelAll pushPanelList={pushPanelList} />
  </>
)

const getServerSideProps = async (context) => {
  const slot = fetchContent('homepage-content-slot', context)
  // const slot = fetchContentById(
  //   '5c433abb-4ec7-4050-a1eb-723ef166d5e8',
  //   context
  // )
  const homeSlot = await slot

  const heroBannerList = homeSlot.slotContent[0].heroBannerList
  const pushPanelList = homeSlot.slotContent[1].pushPanelList

  return {
    props: {
      heroBannerList,
      pushPanelList,
    },
  }
}

export default Home
