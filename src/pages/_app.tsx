import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <link rel="icon" href='/logo.ico'/>
        <title>TGLuong</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
