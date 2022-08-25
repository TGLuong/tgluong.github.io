import Intro from "./intro";
import Champter1 from "./champter1";
import Champter2 from "./champter2";
import Champter3 from "./champter3";
import Champter4 from "./champter4";

const routerData = [
  {
    id: 0,
    title: 'Introdution',
    component: <Intro/>
  },
  {
    id: 1,
    title: 'Champter1',
    component: <Champter1/>
  },
  {
    id: 2,
    title: 'Champter2',
    component: <Champter2/>
  },
  {
    id: 3,
    title: 'Champter3',
    component: <Champter3/>
  },
  {
    id: 4,
    title: 'Champter4',
    component: <Champter4/>
  }
]


export default routerData
