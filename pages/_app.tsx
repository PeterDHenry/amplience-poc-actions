import { ThemeProvider } from 'styled-components'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import theme from '../themes/light'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
