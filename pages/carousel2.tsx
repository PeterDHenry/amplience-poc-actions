import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel2'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
    </Head>
    <Carousel />
  </>
)

export default Home
