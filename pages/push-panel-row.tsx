import Head from 'next/head'
import { NextPage } from 'next'
import { PushPanelRow } from '../components/PushPanel/PushPanelRow'
import { PushPanelRowProps } from '../components/PushPanel/types'

const PushPanelRowPage: NextPage<PushPanelRowProps> = ({
  pushPanelList,
}: PushPanelRowProps) => {
  return (
    <>
      <Head>
        <title>
          Push panel row - Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike
          Shop
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PushPanelRow pushPanelList={pushPanelList} />
    </>
  )
}

export const getServerSideProps = async () => {
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

export default PushPanelRowPage
