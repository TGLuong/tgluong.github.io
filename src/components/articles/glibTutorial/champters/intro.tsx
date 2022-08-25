import styles from 'styles/scss/articles/page.module.scss'
import { Code } from 'components/common'

const testcode = 
`#include <iostream>
int main() {
    std::cout << "hello world!" << std::endl;
    return 0;
}`

const Intro = () => {
  return (
    <>
      <div className={styles.root}>
        <h1 className={styles.header}>DBus Introduction</h1>
        <p>D-Bus is an Inter-Process Communication (IPC) and Remote Procedure 
           Calling (RPC) mechanism specifically designed for efficient and easy-to-use 
           communication between processes running on the same machine. It is intended 
           to replace the amalgam of competing IPC frameworks in this domain with a 
           single, unified protocol that is tailored specifically for meeting the needs 
           of secure, intra-system IPC.
        </p>
        <p>
          There are two type of dbus is:
        </p>
        <ul>
          <li>System bus</li>
          <li>Session bus</li>
        </ul>
        <Code lang='cpp'>{testcode}</Code>
      </div>
    </>
  )
}

export default Intro