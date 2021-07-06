import Head from 'next/head'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Wiggle | Cycle | Run | Swim | Tri-Sports &amp; Bike Shop</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <button
        onClick={() => {
          window.alert('With typescript and Jest')
        }}
      >
        Test Button
      </button>
  </>
)

export default Home
