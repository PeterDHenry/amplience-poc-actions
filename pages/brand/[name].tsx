import Head from 'next/head'
import { GetServerSidePropsContext, NextPageContext } from 'next'

import { fetchContent } from '../../utils/fetchContent'

import {
  DynamicPageComponentSelector,
  DynamicPageComponentSelectorProps,
} from '../../components/DynamicPageComponentSelector/DynamicPageComponentSelector'

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

export const getServerSideProps = async (
  propsContext: GetServerSidePropsContext,
  context: NextPageContext
) => {
  const brandSlot: string = propsContext.query['name'] as string
  const homeSlot = fetchContent(brandSlot, context)
  const slot = await homeSlot

  if (!slot) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slot,
    },
  }
}

export default Home
