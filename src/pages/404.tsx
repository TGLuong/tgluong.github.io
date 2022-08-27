import NotFoundPageComponent from "components/notFound"
import Head from "next/head"

const ErrorPage = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <NotFoundPageComponent/>
    </>
  )
}

export default ErrorPage