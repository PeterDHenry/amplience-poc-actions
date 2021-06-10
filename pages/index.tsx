import Head from 'next/head'
import HeroImage from '../components/Heros/Heros'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
    </Head>
    <HeroImage />
  </>
)

export default Home
