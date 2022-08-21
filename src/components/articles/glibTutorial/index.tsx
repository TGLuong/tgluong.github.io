import styles from 'styles/scss/articles/glibTutorial/glibtutorial.module.scss'
import { BookMark } from 'components/common'
import { 
  Intro,
  Champter1, 
  Champter2, 
  Champter3, 
  Champter4 
} from './champters'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const bookMark = [
  {
    id: 0,
    title: 'Introdution',
    component: <Intro/>
  },
  {
    id: 1,
    title: 'Champter1',
    component: <Champter1/>
  },
  {
    id: 2,
    title: 'Champter2',
    component: <Champter2/>
  },
  {
    id: 3,
    title: 'Champter3',
    component: <Champter3/>
  },
  {
    id: 4,
    title: 'Champter4',
    component: <Champter4/>
  }
]

const GlibTutorial = () => {
  const [component, setComponent] = useState<JSX.Element | undefined>(undefined)
  const [selected, setSelected] = useState<number>(0)
  const router = useRouter();
  const { champ } = router.query

  console.log(bookMark.at(-1))

  useEffect(() => {
    if (typeof(champ) == 'string' && champ.match(`^[0-9]*$`)) {
      const id = parseInt(champ)
      let component

      bookMark.forEach((element) => {
        if (element.id == id)
          component = element.component
      })

      if (component == undefined) {
        setSelected(0)
        return
      }

      setComponent(component)
      setSelected(id)
    } else {
      setSelected(0)
    }
  }, [champ])

  return (
    <>
      <div className={styles.root}>
        <BookMark 
          datas={bookMark} 
          selected={selected}
          onSelect={(id: any, component: JSX.Element) => { 
            console.log(id)
            setComponent(component)
            setSelected(id)
          }}
        />
        <div className={styles.contents}>
          {component? component : <Intro/>}
        </div>
      </div>
    </>
  )
}

export default GlibTutorial