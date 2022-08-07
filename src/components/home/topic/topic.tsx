import internal from 'stream'
import styles from 'styles/scss/home/topic/topic.module.scss'

type TopicProps = {
  link: string,
  image: string,
  header: string,
  meta: string
}

const Topic = ({link, image, header, meta}: TopicProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <h1>{link}</h1>
      <h1>{image}</h1>
      <h1>{header}</h1>
      <h1>{meta}</h1>
    </div>
  )
}

export default Topic