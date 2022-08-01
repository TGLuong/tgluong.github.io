import type { NextPage } from 'next'
import Head from 'next/head'

import HomePageComponent from 'components/home'

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HomePageComponent/>
    </>
  )
}

export default App 