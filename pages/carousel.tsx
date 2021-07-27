import Head from 'next/head'
import Carousel from '../components/Carousel/Carousel'

export const Home = ({ heroBannerList }): JSX.Element => (
  <>
    <Head>
      <title>Carousel</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Carousel heroBannerList={heroBannerList} />
  </>
)

export default Home

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/39879bad-8f1f-4967-9647-f48c722955fa'
  )
  const content = await res.json()
  const heroBannerList = content.content.heroBannerList

  return {
    props: {
      heroBannerList,
    },
  }
}
