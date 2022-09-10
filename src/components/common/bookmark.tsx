import styles from 'styles/scss/common/bookmark.module.scss'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import classname from 'classnames'
import { Icon } from '@chakra-ui/react'

export type BookMarkProps = {
  datas: Array<{
    id: any,
    title: string,
    component: JSX.Element
  }>,
  selectedId: number,
  onSelect(id: number, title: string, component: JSX.Element): void,
}

const BookMark = ({datas, selectedId, onSelect}: BookMarkProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <h2>Contents</h2>
      {datas.map((element) => {
        return (
          <p 
            key={element.id}
            onClick={() => { 
              onSelect(element.id, element.title, element.component)
            }}
            className={classname({[styles.selected]: selectedId == element.id})}
          >
            <Icon as={BsFillBookmarkStarFill}/>{element.title}
          </p>
        )
      })}
    </div>
  )
}

export default BookMark