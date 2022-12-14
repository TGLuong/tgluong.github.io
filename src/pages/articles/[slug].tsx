import type { NextPage } from "next"
import Head from "next/head";
import NotFoundPageComponent from "components/notFound";
import ArticlesSkeleton from "components/skeletons/articlesSkeleton";
import { useRouter } from "next/router"
import { getPage } from "libs/getPage";


const Articles: NextPage = ()  => {
  const router = useRouter();
  const { slug } = router.query
  const element = getPage(slug)

  return (
    <>
      <Head>
        <title>{element?.header ? element.header : "TGLuong"}</title>
        <meta>{element?.meta ? element.meta : null}</meta>
      </Head>
      <div>{element?.page ? element.page : slug? <NotFoundPageComponent/> : <ArticlesSkeleton/> }</div>
    </>
  )
}

export default Articles