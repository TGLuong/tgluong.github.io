import type { NextPage } from "next";
import styles from 'styles/scss/home/home.module.scss'
import { Image } from "@chakra-ui/react";
import Topic from "./topic/topic";
import moment from "moment";
import router from 'routers/routers'

const HomePageComponent: NextPage = () => {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.left}>
            <Image 
              // src="/avatar.jpg"
              boxSize='300px'
              borderRadius='full'
              // alt="image"
            />
          </div>
          <div className={styles.right}>
            <h1>Embedded Engineer</h1>
            <p style={{marginBottom: '20px'}}>C/C++ developer</p>
            <h1>Education</h1>
            <p><img src='/icon/bachelor-hat.png'/>Information Technology at Academy of Cryptography Technique</p>
          </div>
        </div>
        <div id="articles" className={styles.topics}>
          <h1>Articles</h1>
          {router.map((element, index) => {
            return (
              <Topic 
                key={index}
                link={element.link} 
                image={element.image} 
                header={element.header} 
                meta={element.meta}
                date={element.date}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomePageComponent