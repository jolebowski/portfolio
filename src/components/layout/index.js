import React from "react"
// import "../../css/main.css"
import Navbar from "../navbar"
import Sidebar from "../sidebar"
const Layout = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
    </>
  )
}

export default Layout