import styles from 'styles/scss/layout/footer.module.scss'
import { Icon } from '@chakra-ui/icons'
import { FaPhone, FaMailBulk } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  const iconSize: number = 4;

  return (
    <>
      <div id='contact' className={styles.root}>
        <div className={styles.container}>
          <h1>Embedded Develooper</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eligendi cupiditate laborum molestias 
            laudantium animi maiores nisi tempore repellendus. Ipsa, voluptatem?
          </p>
          <div className={styles.icons}>
            <Icon as={FaPhone} w={8} h={8}/>
            <Icon as={FaMailBulk} w={8} h={8}/>
            <Icon as={IoLocationSharp} w={8} h={8}/>
            <Icon as={AiFillFacebook} w={8} h={8}/>
            <Icon as={AiFillGithub} w={8} h={8}/>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>2022, Ha Noi - Viet Nam</p>
        </div>
      </div>
    </>
  )
}

export default Footer