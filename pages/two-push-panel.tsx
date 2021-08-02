import Head from 'next/head'
import PushPanelRow from '../components/PushPanel/TwoPushPanel'

export const PushPanelRowPage = ({ pushPanelList }): JSX.Element => (
  <>
    <Head>
      <title>Push Panel List</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PushPanelRow pushPanelList={pushPanelList} />
  </>
)

export default PushPanelRowPage

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/6f3b9b57-7840-473e-a55b-129e2a73d760?depth=all&format=inlined'
  )
  const content = await res.json()
  const pushPanelList = content.content.pushPanelList
  console.log(content);
  return {
    props: {
      pushPanelList,
    },
  }
}
