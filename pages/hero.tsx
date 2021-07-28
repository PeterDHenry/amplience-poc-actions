import Head from 'next/head'
import Hero,{ HeroProps } from '../components/Hero/Hero'

export const HeroPage = ( { hero }: HeroProps ): JSX.Element => (
  <>
    <Head>
      <title>Heros</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero  {...hero} cssClass="carousel item" />
  </>
)

export default HeroPage

export const getServerSideProps = async (context) => {
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
