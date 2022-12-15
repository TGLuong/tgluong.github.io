import Intro from "./intro";
import Installing from "./installing";
import GDBusServerExample from "./gdbusServerExample";

const routerData = [
  {
    id: 0,
    title: 'Introdution',
    component: <Intro/>
  },
  {
    id: 1,
    title: 'Installing',
    component: <Installing/>
  },
  {
    id: 2,
    title: 'Server Example',
    component: <GDBusServerExample/>
  }
]


export default routerData
