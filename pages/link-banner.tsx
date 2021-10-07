import Head from 'next/head'
import { NextPage } from 'next'
import { LinkBanner } from '../components/LinkBanner/LinkBanner'
import { LinkBannerProps } from '../components/LinkBanner/types'

interface LinkBannerWrapper {
  linkBanner: LinkBannerProps
}

const LinkBannerPage: NextPage<LinkBannerWrapper> = ({
  linkBanner,
}: LinkBannerWrapper) => {
  return (
    <>
      <Head>
        <title>
          Link Banner - Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid py-5">
        <div className="row">
          <LinkBanner {...linkBanner} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/e06ec4c6-74d0-447f-b588-e3ba1a88a615?depth=all&format=inlined'
  )

  const content = await res.json()
  const linkBanner = content.content
  return {
    props: {
      linkBanner,
    },
  }
}

export default LinkBannerPage
