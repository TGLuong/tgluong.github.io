import Link from 'next/link'
import styles from 'styles/scss/layout/header.module.scss'

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Tran Gia Luong</h1>
      <li>
        <ul><Link href={'/'}>Home</Link></ul>
        <ul><Link href={'/#articles'}>Articles</Link></ul>
        <ul><Link href={'/#contact'}>Contact</Link></ul>
      </li>
    </div>
  )
}

export default Header