import React from "react"
import Mynav from "./mynav"
import Footer from "./footer"
//import Navbar from "./navbar"
import Jumbotron from "./jumbotron"

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Mynav />
        <Jumbotron />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
