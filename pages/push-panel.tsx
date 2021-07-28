import Head from 'next/head'
import PushPanel, { PushPanelProps } from '../components/PushPanel/PushPanel'

export const PushPanelPage = ({ pushPanel }: PushPanelProps): JSX.Element => (
  <>
    <Head>
      <title>Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container py-5">
      <div className="row">
        <PushPanel {...pushPanel} />
      </div>
    </div>
  </>
)

export default PushPanelPage

export const getServerSideProps = async (context) => {
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
