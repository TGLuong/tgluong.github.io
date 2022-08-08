import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'styles/globals.css'
import styles from 'styles/scss/main.module.scss'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={styles.root}>
        <Layout cla>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ChakraProvider>
  )
}

export default MyApp
