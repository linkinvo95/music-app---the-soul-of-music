import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
<Layout>
  <main>
    <Component {...pageProps} />
  </main>
</Layout>
  )
}

export default MyApp
