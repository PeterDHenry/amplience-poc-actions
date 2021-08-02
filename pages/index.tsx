import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel'
import TwoPushPanel from '../components/PushPanel/TwoPushPanel'
import PushPanelRow from '../components/PushPanel/PushPanelRow'


export const Home = ({ heroBannerList, pushPanelList, twoPushPanel }): JSX.Element => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel heroBannerList={heroBannerList} />
    <PushPanelRow pushPanelList={pushPanelList} />
    <TwoPushPanel pushPanelList={twoPushPanel} />

  </>
)

export default Home

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/5c433abb-4ec7-4050-a1eb-723ef166d5e8?depth=all&format=inlined'
  )

  const homeSlot = await res.json()
  const heroBannerList = homeSlot.content.slotContent[0].heroBannerList
  const pushPanelList = homeSlot.content.slotContent[1].pushPanelList
  const twoPushPanel = homeSlot.content.slotContent[3].pushPanelList
  
  return {
    props: {
      heroBannerList,
      pushPanelList,
      twoPushPanel,
    },
  }
}
