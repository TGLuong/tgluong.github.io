import Header from "./header"
import Footer from "./footer"

const Layout: any = ({children}: any) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout