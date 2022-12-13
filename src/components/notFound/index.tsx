import styles from 'styles/scss/notFound/notFound.module.scss'
import { Button, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'


const NotFoundPageComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <Image 
            src='/404.svg' 
            alt='notfound'
            width={'400px'} 
          />
          <h1>Page Not Found</h1>
          <p>The page you are looking for might be renamed, removed</p>
          <p>or never exitst.</p>
          <div>
            <Button 
              colorScheme={'purple'}
              onClick={() => {
                router.push('/')
              }}
            >
              Go to home page
            </Button> 
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPageComponent