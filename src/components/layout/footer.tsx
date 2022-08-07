import styles from 'styles/scss/layout/footer.module.scss'
import { Icon } from '@chakra-ui/icons'
import { FaPhone, FaMailBulk } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  const iconSize: number = 4;

  return (
    <>
      <div id='contact' className={styles.container}>
        <div className={styles.top}>
          <h1>Contact</h1>
        </div>
        <div className={styles.middle}>
          <div className={styles.left}>
            
          </div>
          <div className={styles.right}>
            <div><Icon as={FaPhone} w={iconSize} h={iconSize}/><p>Phone: 0383628286</p></div>
            <div><Icon as={FaMailBulk} w={iconSize} h={iconSize}/><p>Email: gialuong9820@gmail.com</p></div>
            <div><Icon as={AiFillFacebook} w={iconSize} h={iconSize}/><p>Facebook: <a rel="noopener noreferrer" href='https://www.facebook.com/gialuong9820' target={'_blank'}>gialuong9820</a></p></div>
            <div><Icon as={AiFillGithub} w={iconSize} h={iconSize}/><p>Github: <a rel="noopener noreferrer" href='https://github.com/TGLuong' target={'_blank'}>TGLuong</a></p></div>
            <div><Icon as={IoLocationSharp} w={iconSize} h={iconSize}/><p>Address: Ha Noi, Viet Nam</p></div>
          </div>
        </div>
        <div className={styles.down}>
          <h4>2022 - Ha Noi, Viet Nam</h4>
        </div>
      </div>
    </>
  )
}

export default Footer