import Head from 'next/head'
import { NextPageContext } from 'next'

import { fetchContent } from '../utils/fetchContent'

import {
  DynamicPageComponentSelector,
  DynamicPageComponentSelectorProps,
} from '../components/DynamicPageComponentSelector/DynamicPageComponentSelector'

export const Home = ({
  slot,
}: DynamicPageComponentSelectorProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicPageComponentSelector slot={slot} />
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const homeSlot = fetchContent('homepage-content-slot', context)
  const slot = await homeSlot

  return {
    props: {
      slot,
    },
  }
}

export default Home
