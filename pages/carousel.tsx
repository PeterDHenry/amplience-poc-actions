import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel />
  </>
)

export default Home
