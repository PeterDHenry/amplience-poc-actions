import Head from 'next/head'
import HeroImage from '../components/Heros/Heros'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Heros</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeroImage />
  </>
)

export default Home
