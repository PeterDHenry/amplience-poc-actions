import Head from 'next/head'

import Carousel from '../components/Carousel/CarouselAll'

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
  const res = await fetch('https://sandbox-dev.cdn.content.amplience.net/content/id/39879bad-8f1f-4967-9647-f48c722955fa?depth=all&format=inlined')
  const homeSlot = await res.json()

  return {
    props: {
      homeSlot,
    },
  }
}