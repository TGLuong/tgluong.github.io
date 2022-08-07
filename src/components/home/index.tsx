import type { NextPage } from "next";
import styles from 'styles/scss/home/home.module.scss'
import { Box, Image } from "@chakra-ui/react";
import Topic from "./topic/topic";

const HomePageComponent: NextPage = () => {
  const datas = [
    {
      link: 'link',
      image: 'image',
      header: 'header',
      meta: 'meta'
    },
    {
      link: 'link',
      image: 'image',
      header: 'header',
      meta: 'meta'
    },
    {
      link: 'link',
      image: 'image',
      header: 'header',
      meta: 'meta'
    },
    {
      link: 'link',
      image: 'image',
      header: 'header',
      meta: 'meta'
    },
    {
      link: 'link',
      image: 'image',
      header: 'header',
      meta: 'meta'
    },
    {
      link: 'link',
      image: 'image',
      header: 'header',
      meta: 'meta'
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.intro}>
        <div className={styles.left}>
          <Image 
            // src="/avatar.jpg"
            boxSize='300px'
            borderRadius='full'
          />
        </div>
        <div className={styles.right}>
          <h1>Embedded Engineer</h1>
          <p>C/C++ developer</p>
          <h1>Education</h1>
          <p><img src='/icon/bachelor-hat.png'/>Information Technology at Academy of Cryptography Technique</p>
        </div>
      </div>
      <div id="articles" className={styles.topics}>
        <h1>Topics</h1>
        {datas.map((element, index) => {
          return (
            <Topic 
              key = {index}
              link={element.link} 
              image={element.image} 
              header={element.header} 
              meta={element.meta}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomePageComponent