import Header from "./header"
import Footer from "./footer"

const Layout = ({children}: any): JSX.Element => {
  return (
    <>
      <Header/>
      <div style={{paddingTop: '90px'}}>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout