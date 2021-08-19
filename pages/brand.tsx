import Head from 'next/head'
import { NextPageContext } from 'next'

import { fetchContent } from '../utils/fetchContent'

import DynamicPageComponentSelector, {
  DynamicPageComponentSelectorProps,
} from '../components/DynamicPageComponentSelector/DynamicPageComponentSelector'

export const Home = ({
  slot,
}: DynamicPageComponentSelectorProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Under Armour | Wiggle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicPageComponentSelector slot={slot} />
    </>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const brandSlot: string = context.query['b'] as string
  const homeSlot = fetchContent(brandSlot, context)
  const slot = await homeSlot

  return {
    props: {
      slot,
    },
  }
}

export default Home
