import router, { Router } from 'routers/routers'

export const getPage = (slug: string | string[] | undefined): any => {
  const element = router.reduce((previous: any, current: any) => {
    if (previous == undefined) {
      if (current.link.endsWith(slug))
        return current
      else return undefined
    } else {
      return previous
    }
  }, undefined)

  return element
}