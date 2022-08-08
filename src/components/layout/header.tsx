import Link from 'next/link'
import styles from 'styles/scss/layout/header.module.scss'

const Header = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Link href={'/'}><h1>Tran Gia Luong</h1></Link>
      <li>
        <ul><Link href={'/'}><h4>Home</h4></Link></ul>
        <ul><Link href={'/#articles'}><h4>Articles</h4></Link></ul>
        <ul><Link href={'/#contact'}><h4>Contact</h4></Link></ul>
      </li>
    </div>
  )
}

export default Header