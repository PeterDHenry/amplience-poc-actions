import Head from 'next/head'
import PushPanel from '../components/PushPanel/PushPanel'

export const PushPanelPage = ({ pushPanel }): JSX.Element => (
  <>
    <Head>
      <title>Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PushPanel pushPanel={pushPanel} />
  </>
)

export default PushPanelPage

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/ae2a4035-49a7-462d-9fe1-e1e51219e00a'
  )
  const pushPanel = await res.json()

  return {
    props: {
      pushPanel,
    },
  }
}
