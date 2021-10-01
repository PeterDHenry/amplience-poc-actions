import Head from 'next/head'
import { NextPage } from 'next'
import { Carousel } from '../components/Carousel/Carousel'
import { CarouselProps } from '../components/Carousel/types'

const CarouselPage: NextPage<CarouselProps> = ({
  heroBannerList,
}: CarouselProps) => {
  return (
    <>
      <Head>
        <title>
          Carousel - Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel heroBannerList={heroBannerList} />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/39879bad-8f1f-4967-9647-f48c722955fa?depth=all&format=inlined'
  )
  const content = await res.json()
  const heroBannerList = content.content.heroBannerList

  return {
    props: {
      heroBannerList,
    },
  }
}

export default CarouselPage
