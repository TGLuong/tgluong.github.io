import styles from 'styles/scss/common/bookmark.module.scss'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import cn from 'classnames'
import { Icon } from '@chakra-ui/react'

export type BookMarkElement = {
  datas: Array<{
    id: any,
    title: string,
    component: JSX.Element
  }>,
  onSelect: any,
  selected: number
}

const BookMark = ({datas, onSelect, selected}: BookMarkElement) => {
  console.log(`selected: ${selected}`)
  return (
    <div className={styles.root}>
      <h2>Contents</h2>
      {datas.map((element) => {
        return (
          <p 
            key={element.id}
            onClick={() => { 
              onSelect(element.id, element.component)
            }}
            className={cn({[styles['selected']]: selected == element.id})}
          >
            <Icon as={BsFillBookmarkStarFill} />{element.title}
          </p>
        )
      })}
    </div>
  )
}

export default BookMark