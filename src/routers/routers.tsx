import moment, { Moment } from 'moment'
import GlibTutorial from 'components/articles/glibTutorial'
import CCPPPrograming from 'components/articles/CCPPPrograming'

export type Router = {
  link: string,
  header: string,
  meta: string,
  image: string,
  date: Moment,
  page: JSX.Element
}

const routers: Array<Router> = [
  {
    link: '/articles/glib-tutorial',
    header: 'GDBus and how to use glib in C embedded linux', 
    meta: 'D-Bus is an Inter-Process Communication (IPC) and Remote Procedure Calling (RPC) \
           mechanism specifically designed for efficient and easy-to-use communication between \
           processes running on the same machine. It is intended to replace the amalgam of \
           competing IPC frameworks in this domain with a single, unified protocol that is \
           tailored specifically for meeting the needs of secure, intra-system IPC.', 
    image: '',
    date: moment("8/8/2022", "DD/MM/YYYY"),
    page: <GlibTutorial/>
  },
  {
    link: '/articles/c-cpp-programing',
    header: 'C and CPP programing', 
    meta: '', 
    image: '',
    date: moment("10/8/2022", "DD/MM/YYYY"),
    page: <CCPPPrograming/>
  }
]

export default routers