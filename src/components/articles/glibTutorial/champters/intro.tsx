import styles from 'styles/scss/articles/page.module.scss'
import Head from 'next/head'
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'

const signatureData = [
  {
    charactor: 'y',
    type: '8-bit unsigned integer'
  },
  {
    charactor: 'b',
    type: 'boolean value'
  },
  {
    charactor: 'n',
    type: '16-bit signed integer'
  },
  {
    charactor: 'q',
    type: '16-bit unsigned integer'
  },
  {
    charactor: 'i',
    type: '32-bit signed integer'
  },
  {
    charactor: 'u',
    type: '32-bit unsigned integer'
  },
  {
    charactor: 'x',
    type: '64-bit signed integer'
  },
  {
    charactor: 't',
    type: '64-bit unsigned integer'
  },
  {
    charactor: 'd',
    type: 'double-precision floating point (IEEE 754)'
  },
  {
    charactor: 's',
    type: 'UTF-8 string (no embedded nul characters)'
  },
  {
    charactor: 'o',
    type: 'D-Bus Object Path string'
  },
  {
    charactor: 'g',
    type: 'D-Bus Signature string'
  },
  {
    charactor: 'a',
    type: 'Array'
  },
  {
    charactor: '(',
    type: 'Structure start'
  },
  {
    charactor: ')',
    type: 'Structure end'
  },
  {
    charactor: 'v',
    type: 'Variant type'
  },
  {
    charactor: '{',
    type: 'Dictionary/Map begin'
  },
  {
    charactor: '}',
    type: 'Dictionary/Map end'
  },
  {
    charactor: 'h',
    type: 'Unix file descriptor'
  }
]

const Intro = () => {
  return (
    <>
      <Head>
        <title>DBus Introduction</title>
        <meta>dbus introduction</meta>
      </Head>
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
        <h2>There are some knowledges</h2>
        <h3>Signature Strings</h3>
        <TableContainer>
          <Table 
            className={styles.table}
            variant={'simple'} 
            colorScheme='teal'
          >
            <Thead>
              <Tr>
                <Th><h4>Character</h4></Th>
                <Th><h4>Code Data Type</h4></Th>
              </Tr>
            </Thead>
            <Tbody>
              {signatureData.map((ele, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <b>{ele.charactor}</b>
                    </Td>
                    <Td>{ele.type}</Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <h3>Calling method behind the Scense</h3>
        <ul>
          <li>
            <p>
              The language binding may provide a proxy, such that invoking a method on an in-process object 
              invokes a method on a remote object in another process. If so, the application calls a method 
              on the proxy, and the proxy constructs a method call message to send to the remote process.
            </p>
          </li>
          <li>
            <p>
              For more low-level APIs, the application may construct a method call message itself, without 
              using a proxy.
            </p>
          </li>
          <li>
            <p>
              In either case, the method call message contains: a bus name belonging to the remote process; 
              the name of the method; the arguments to the method; an object path inside the remote process; 
              and optionally the name of the interface that specifies the method.
            </p>
          </li>
          <li>
            <p>
              The method call message is sent to the bus daemon.
            </p>
          </li>
          <li>
            <p>
              The bus daemon looks at the destination bus name. If a process owns that name, the bus daemon 
              forwards the method call to that process. Otherwise, the bus daemon creates an error message 
              and sends it back as the reply to the method call message.
            </p>
          </li>
          <li>
            <p>
              The receiving process unpacks the method call message. In a simple low-level API situation, 
              it may immediately run the method and send a method reply message to the bus daemon. When 
              using a high-level binding API, the binding might examine the object path, interface, 
              and method name, and convert the method call message into an invocation of a method on a 
              native object (GObject, java.lang.Object, QObject, etc.), then convert the return value 
              from the native method into a method reply message.
            </p>
          </li>
          <li>
            <p>
              The bus daemon receives the method reply message and sends it to the process that made the method call.
            </p>
          </li>
          <li>
            <p>
              The process that made the method call looks at the method reply and makes use of any 
              return values included in the reply. The reply may also indicate that an error occurred. 
              When using a binding, the method reply message may be converted into the return value of 
              of a proxy method, or into an exception.
            </p>
          </li>
        </ul>
        <h3>Emmit signal behind the Scense</h3>
        <ul>
          <li>
            <p>
              A signal message is created and sent to the bus daemon. When using the low-level 
              API this may be done manually, with certain bindings it may be done for you by the binding 
              when a native object emits a native signal or event.
            </p>
          </li>
          <li>
            <p>
              The signal message contains the name of the interface that specifies the signal; the 
              name of the signal; the bus name of the process sending the signal; and any arguments
            </p>
          </li>
          <li>
            <p>
              Any process on the message bus can register "match rules" indicating which signals it 
              is interested in. The bus has a list of registered match rules.
            </p>
          </li>
          <li>
            <p>
              The bus daemon examines the signal and determines which processes are interested in it. 
              It sends the signal message to these processes.
            </p>
          </li>
          <li>
            <p>
              Each process receiving the signal decides what to do with it; if using a binding, 
              the binding may choose to emit a native signal on a proxy object. If using the low-level API, 
              the process may just look at the signal sender and name and decide what to do based on that.
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Intro