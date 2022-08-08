import styles from 'styles/scss/home/topic/topic.module.scss'
import { Moment } from 'moment'
import Link from 'next/link'
import { memo } from 'react'

type TopicProps = {
  link: string,
  image: string,
  header: string,
  meta: string,
  date?: Moment
}

const Topic = ({link, image, header, meta, date}: TopicProps): JSX.Element => {
  return (
    <>
      <div className={styles.root}>
        <Link href={link}><h2 className={styles.header}>{header}</h2></Link>
        <p>{meta}</p>
        {date? (
          <div className={styles.date}>
            <b><i>Create time: {date.format('DD/MM/YYYY')}</i></b>
          </div>
        ) : (
          null
        )}
      </div>
      <div className={styles.line}/>
    </>
  )
}

export default memo(Topic)