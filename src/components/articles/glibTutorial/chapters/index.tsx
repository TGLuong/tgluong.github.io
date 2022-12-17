import Intro from "./intro";
import Installing from "./installing";
import GDBusServerExample from "./gdbusServerExample";
import ProxyClientExample from "./proxyClientExample";
import BindingInterfaceIntoObject from "./bindingInterfaceIntoObject";

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
  },
  {
    id: 3,
    title: 'Proxy Client',
    component: <ProxyClientExample/>
  },
  {
    id: 4,
    title: 'Binding Object',
    component: <BindingInterfaceIntoObject/>
  }
]


export default routerData
