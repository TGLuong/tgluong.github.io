import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { MdDone, MdOutlineContentCopy } from 'react-icons/md'
import { Icon, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import styles from 'styles/scss/common/code.module.scss'

export type CodeProp = {
  lang: string,
  children: string
}

const Code = ({lang, children}: CodeProp): JSX.Element => {
  const toast = useToast()
  const [isCopied, setIsCopied] = useState<boolean>(false)

  return (
    <div className={styles.root}>
      <SyntaxHighlighter
        language={lang}
        style={vs}
        customStyle={{
          border: 'none',
          fontSize: '18px',
          fontWeight: 500,
          borderRadius: '5px',
          padding: '20px 20px 20px 20px',
          backgroundColor: '#f6f8fa',
          minHeight: '60px',
        }}
        
      >
        {children}
      </SyntaxHighlighter>
      <Button
        w={10} h={10}
        variant='outline'
        colorScheme={isCopied? 'green' : 'blackAlpha'} 
        onClick={() => {
          if (isCopied == false) {
            toast({
              title: 'Copy Successfully',
              status: 'success',
              description: 'Now you can paste code to your IDE',
              duration: 1900,
              isClosable: true,
              position: 'bottom-right'
            })

            setIsCopied(true)

            navigator.clipboard.writeText(children)

            setTimeout(() => {
              setIsCopied(false)
            }, 2300)
          }
        }}
      >
        {isCopied? <Icon as={MdDone} w={6} h={6} /> : <Icon as={MdOutlineContentCopy} w={6} h={6}/>}
      </Button>
    </div>
  )
}

export default Code