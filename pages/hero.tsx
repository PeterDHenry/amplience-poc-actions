import Head from 'next/head'
import { NextPage } from 'next'
import Hero, { HeroProps } from '../components/Hero/Hero'

interface HeroPropsWrapper {
  hero: HeroProps
}

const HeroPage: NextPage<HeroPropsWrapper> = ({ hero }: HeroPropsWrapper) => {
  return (
    <>
      <Head>
        <title>
          Heros - Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero {...hero} cssClass="carousel item" />
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/18a7eee8-6c7a-4a92-8a76-29eb936679a8?depth=all&format=inlined'
  )
  const content = await res.json()
  const hero = content.content
  return {
    props: {
      hero,
    },
  }
}

export default HeroPage
