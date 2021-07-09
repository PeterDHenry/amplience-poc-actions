import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel'

export const Home = ({ homeSlot }): JSX.Element => (
  <>
    <Head>
      <title>Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel homeSlot={ homeSlot } />
  </>
)

export default Home

export const getServerSideProps = async (context) => {
  debugger
  const res = await fetch('https://sandbox-dev.cdn.content.amplience.net/content/id/2ea7590a-5546-494f-95e9-82910f25276c')
  const homeSlot = await res.json()

  return {
    props: {
      homeSlot,
    },
  }
}