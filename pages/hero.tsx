import Head from 'next/head'
import Hero from '../components/Hero/Hero'

export const HeroPage = ({ heros }): JSX.Element => (
  <>
    <Head>
      <title>Heros</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero />
  </>
)

export default HeroPage

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://sandbox-dev.cdn.content.amplience.net/content/id/246fcf09-a2ba-48fa-ae82-7228505e00f5'
  )
  const heros = await res.json()

  return {
    props: {
      heros,
    },
  }
}
