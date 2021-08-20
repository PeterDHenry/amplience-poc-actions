import Head from 'next/head'
import { NextPage } from 'next'
import SeoText from '../components/Seo-Text/SeoText'
import { SeoTextProps } from '../components/Seo-Text/types'

interface SeoTextWrapper {
  seoText: SeoTextProps
}

const SeoTextPage: NextPage<SeoTextWrapper> = ({ seoText }: SeoTextWrapper) => {
  return (
    <>
      <Head>
        <title>
          Seo Text - Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid py-5">
        <div className="row">
          <SeoText {...seoText} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/318ab450-e711-4ea6-9729-ae34a1ed1e24?depth=all&format=inlined'
  )

  const content = await res.json()
  const seoText = content.content
  return {
    props: {
      seoText,
    },
  }
}

export default SeoTextPage
