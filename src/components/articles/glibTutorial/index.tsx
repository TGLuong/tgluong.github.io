import styles from 'styles/scss/articles/glibTutorial/glibtutorial.module.scss'
import { BookMark } from 'components/common'
import routerData from './chapters'
import Intro from './chapters/intro'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const GlibTutorial = () => {
  const [component, setComponent] = useState<JSX.Element>(<Intro/>)
  const [selectedId, setSelectedId] = useState<number>(0)
  const router = useRouter();
  const { champ } = router.query

  useEffect(() => {
    if (typeof(champ) == 'string' && champ.match(`^[0-9]*$`)) {
      const id = parseInt(champ)
      let component

      routerData.forEach((element) => {
        if (element.id == id)
          component = element.component
      })

      if (component == undefined) {
        setSelectedId(0)
        return
      }

      setComponent(component)
      setSelectedId(id)

    } else {
      setSelectedId(0)
    }
  }, [champ])

  return (
    <>
      <div className={styles.root}>
        <BookMark 
          datas={routerData} 
          selectedId={selectedId}
          onSelect={(id: number) => { 
            router.push(`/articles/glib-tutorial?champ=${id}`)
          }}
        />
        <div className={styles.contents}>
          {component}
        </div>
      </div>
    </>
  )
}

export default GlibTutorial