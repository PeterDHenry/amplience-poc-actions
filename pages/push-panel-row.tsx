import Head from 'next/head'
import PushPanelRow, {PushPanelListProps } from '../components/PushPanel/PushPanelRow'

export const PushPanelRowPage = ({ pushPanelList }: PushPanelListProps): JSX.Element => (
  <>
    <Head>
      <title>Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PushPanelRow pushPanelList={pushPanelList} />
  </>
)

export default PushPanelRowPage

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/9407ca10-287a-4acd-bf51-471b77f87dca?depth=all&format=inlined'
  )
  const content = await res.json()
  const pushPanelList = content.content.pushPanelList

  return {
    props: {
      pushPanelList,
    },
  }
}
