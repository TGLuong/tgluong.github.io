import type { NextPage } from "next"
import { useRouter } from "next/router"


const Articles: NextPage = ()  => {
  const router = useRouter();
  const { slug } = router.query

  return (
    <>
      <div>{slug}</div>
    </>
  )
}

export default Articles