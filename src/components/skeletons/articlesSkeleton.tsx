import styles from 'styles/scss/skeletons/articlesSkeleton.module.scss'

const ArticlesSkeleton = () => {
  console.log()
  return (
    <>
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.bookheader}/>
          {Array.from(Array(10).keys()).map((index) => {
            return (
              <div 
                key={index}
                className={styles.bookitem}
              />
            )
          })}
        </div>
        <div className={styles.right}>
          {Array.from(Array(5).keys()).map((index) => {
            return (
              <div 
                key={index}
                className={styles.item}
              >
                <div className={styles.long}/>
                <div className={styles.long}/>
                <div className={styles.long}/>
                <div className={styles.short}/>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ArticlesSkeleton