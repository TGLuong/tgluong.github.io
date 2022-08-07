import styles from 'styles/scss/home/topic/topic.module.scss'
import { memo } from 'react'

type TopicProps = {
  link: string,
  image: string,
  header: string,
  meta: string
}

const Topic = ({link, image, header, meta}: TopicProps): JSX.Element => {
  return (
    <>
      <div className={styles.root}>
        <h2>{header}</h2>
        <p><i>{meta}</i></p>
      </div>
      <div className={styles.line}/>
    </>
  )
}

export default memo(Topic)