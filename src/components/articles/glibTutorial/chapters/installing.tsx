import Head from "next/head"
import styles from 'styles/scss/articles/page.module.scss'
import { Code } from "components/common"

const buildenvCode =
`sudo apt update
sudo apt install build-essential libexpat1-dev cmake`

const downloadCode = 
`wget https://dbus.freedesktop.org/releases/dbus/dbus-1.14.0.tar.xz
tar -xvf dbus-1.14.0.tar.xz`

const createBuildCode =
`cd dbus-1.14.0
mkdir build
cd build
`

const buildCode =
`cmake ..
make
make install
`

const Installing = () => {
  return (
    <>
      <Head>
        <title>How to install gdbus in linux</title>
        <meta>How to install gdbus in linux</meta>
        <meta>How to build dbus from source</meta>
      </Head>
      <div className={styles.root}>
        <h1 className={styles.header}>Install Dbus in linux</h1>
        <h2>1. Prepare</h2>
        <p>First, you need install build enviroment</p>
        <Code lang={'bash'}>{buildenvCode}</Code>
        <h2>2. Dowload source and Install</h2>
        <p>
          You can find latest version of dbus in
          <a target={'_blank'} href={'https://dbus.freedesktop.org/releases/dbus/'}>dbus releases page</a> 
          . At writing time, i am using version 1.14.0.
        </p>
        <Code lang={'bash'}>{downloadCode}</Code>
        <p>Next, enter source folder and create build directory</p>
        <Code lang={'bash'}>{createBuildCode}</Code>
        <p>Finally, build and install</p>
        <Code lang={'bash'}>{buildCode}</Code>
      </div>
    </>
  )
}

export default Installing