import styles from 'styles/scss/articles/glibTutorial/glibtutorial.module.scss'
import { BookMark } from 'components/common'

const GlibTutorial = () => {
  return (
    <>
      <div className={styles.root}>
        <BookMark/>
      </div>
    </>
  )
}

export default GlibTutorial