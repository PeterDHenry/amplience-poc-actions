import Head from 'next/head'
import { NextPage } from 'next'
import PushPanel from '../components/PushPanel/PushPanel'
import { PushPanelProps } from '../components/PushPanel/types'

interface PushPanelListWrapper {
  pushPanel: PushPanelProps
}

const PushPanelPage: NextPage<PushPanelListWrapper> = ({
  pushPanel,
}: PushPanelListWrapper) => {
  return (
    <>
      <Head>
        <title>
          Push panel - Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container py-5">
        <div className="row">
          <PushPanel {...pushPanel} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/ae2a4035-49a7-462d-9fe1-e1e51219e00a?depth=all&format=inlined'
  )
  const content = await res.json()
  const pushPanel = content.content
  return {
    props: {
      pushPanel,
    },
  }
}

export default PushPanelPage
