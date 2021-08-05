import Head from 'next/head'
import { NextPage } from 'next'
import PushPanelRow from '../components/PushPanel/TwoPushPanel'
import { PushPanelListProps } from '../components/PushPanel/types'

const TwoPushPanelPage: NextPage<PushPanelListProps> = ({
  pushPanelList,
}: PushPanelListProps) => {
  return (
    <>
      <Head>
        <title>Push Panel List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PushPanelRow pushPanelList={pushPanelList} />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/6f3b9b57-7840-473e-a55b-129e2a73d760?depth=all&format=inlined'
  )
  const content = await res.json()
  const pushPanelList = content.content.pushPanelList
  console.log(content)
  return {
    props: {
      pushPanelList,
    },
  }
}

export default TwoPushPanelPage
